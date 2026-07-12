import { writeFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const ARTICLES_PER_CATEGORY = 3

// Real, authoritative, English-language publications — one feed per blog category.
// Swap a URL here to change where a category's real articles are sourced from.
const FEEDS = [
  {
    category: 'Artificial Intelligence',
    source: 'MIT Technology Review',
    image: '/images/blog/ai.jpg',
    url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed',
  },
  {
    category: 'Cybersecurity',
    source: 'Dark Reading',
    image: '/images/blog/cybersecurity.jpg',
    url: 'https://www.darkreading.com/rss.xml',
  },
  {
    category: 'Cloud',
    source: 'AWS Blog',
    image: '/images/blog/cloud.jpg',
    url: 'https://aws.amazon.com/blogs/aws/feed/',
  },
  {
    category: 'Software Engineering',
    source: 'Martin Fowler',
    image: '/images/blog/software.jpg',
    url: 'https://martinfowler.com/feed.atom',
  },
  {
    category: 'Mobile Apps',
    source: 'Android Developers Blog',
    image: '/images/blog/mobile.jpg',
    url: 'https://android-developers.googleblog.com/feeds/posts/default',
  },
  {
    category: 'Digital Transformation',
    source: 'McKinsey & Company',
    image: '/images/blog/digital-transformation.jpg',
    url: 'https://www.mckinsey.com/insights/rss',
  },
  {
    category: 'Innovation',
    source: 'MIT Technology Review',
    image: '/images/blog/innovation.jpg',
    url: 'https://www.technologyreview.com/feed/',
  },
]

const stripCdata = (s) => s.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '')

const decodeEntitiesOnce = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&amp;/g, '&')

// Some feeds double-escape entities (e.g. "&amp;#xF6;"), so decode twice —
// harmless no-op on already-clean text.
const decodeEntities = (s) => decodeEntitiesOnce(decodeEntitiesOnce(s))

const stripTags = (s) =>
  s
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const extractTag = (block, names) => {
  for (const name of names) {
    const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i'))
    if (m) return stripCdata(m[1].trim())
  }
  return ''
}

const extractLink = (block) => {
  const simple = block.match(/<link>([\s\S]*?)<\/link>/i)
  if (simple) {
    const href = stripCdata(simple[1].trim())
    if (/^https?:\/\//.test(href)) return href
  }

  const linkTags = [...block.matchAll(/<link\b[^>]*>/gi)]
  for (const tag of linkTags) {
    const isAlternate = /rel=["']?alternate["']?/i.test(tag[0]) || !/rel=/i.test(tag[0])
    const hrefMatch = tag[0].match(/href=["']([^"']+)["']/i)
    if (hrefMatch && isAlternate) return hrefMatch[1]
  }
  return ''
}

const extractEntries = (xml) => {
  const items = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].map((m) => m[1])
  if (items.length) return items
  return [...xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/gi)].map((m) => m[1])
}

const formatDate = (raw) => {
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

const excerptOf = (raw) => {
  const clean = stripTags(decodeEntities(raw))
  return clean.length > 170 ? `${clean.slice(0, 167).trim()}…` : clean
}

async function fetchFeedArticles(feed) {
  const res = await fetch(feed.url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
      Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
    },
    signal: AbortSignal.timeout(15000),
  })
  if (!res.ok) throw new Error(`${feed.url} responded ${res.status}`)
  const xml = await res.text()

  return extractEntries(xml)
    .map((entry) => {
      const title = stripTags(decodeEntities(extractTag(entry, ['title'])))
      const link = extractLink(entry)
      const rawDate = extractTag(entry, ['pubDate', 'published', 'updated'])
      const rawDesc = extractTag(entry, ['description', 'summary', 'content'])
      if (!title || !link) return null
      return {
        category: feed.category,
        source: feed.source,
        image: feed.image,
        title,
        excerpt: excerptOf(rawDesc),
        date: formatDate(rawDate) || '',
        sortDate: rawDate ? new Date(rawDate).getTime() : 0,
        link,
      }
    })
    .filter(Boolean)
    .sort((a, b) => b.sortDate - a.sortDate)
    .slice(0, ARTICLES_PER_CATEGORY)
}

const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/data/blogFeed.json',
)

async function main() {
  const results = await Promise.allSettled(FEEDS.map(fetchFeedArticles))

  const seen = new Set()
  const articles = []
  results.forEach((result, i) => {
    if (result.status !== 'fulfilled') {
      console.warn(`blog feed: skipping "${FEEDS[i].category}" — ${result.reason?.message || result.reason}`)
      return
    }
    for (const article of result.value) {
      if (seen.has(article.link)) continue
      seen.add(article.link)
      articles.push(article)
    }
  })

  if (articles.length === 0) {
    if (existsSync(outPath)) {
      console.warn('blog feed: all sources failed, keeping previously generated blogFeed.json')
      return
    }
    console.warn('blog feed: all sources failed and no previous file exists, writing empty list')
  }

  articles.sort((a, b) => b.sortDate - a.sortDate)
  const cleaned = articles.map((article) => {
    const { category, source, image, title, excerpt, date, link } = article
    return { category, source, image, title, excerpt, date, link }
  })

  writeFileSync(outPath, JSON.stringify(cleaned, null, 2))
  console.log(`blog feed: wrote ${cleaned.length} real articles from ${FEEDS.length} sources`)
}

main().catch((err) => {
  console.error('blog feed: unexpected failure, leaving existing blogFeed.json untouched:', err)
})
