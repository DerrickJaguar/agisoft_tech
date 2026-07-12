import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import { services, slugify } from '../src/data/siteData.js'

const SITE_URL = 'https://www.agisofttechnologies.com'
const today = new Date().toISOString().slice(0, 10)

// Fixed site pages. Add a new page here once; it will stay in the sitemap on every build.
const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/solutions', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries', changefreq: 'monthly', priority: '0.6' },
  { path: '/portfolio', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.6' },
  { path: '/careers', changefreq: 'monthly', priority: '0.5' },
  { path: '/contact', changefreq: 'yearly', priority: '0.9' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.2' },
  { path: '/terms', changefreq: 'yearly', priority: '0.2' },
]

// One entry per service in src/data/siteData.js — add/remove a service there
// and its sitemap entry (and detail page) follows automatically.
const serviceRoutes = services.map((service) => ({
  path: `/services/${slugify(service.title)}`,
  changefreq: 'monthly',
  priority: '0.7',
}))

const routes = [...staticRoutes, ...serviceRoutes]

const urlEntries = routes
  .map(
    ({ path: routePath, changefreq, priority }) =>
      `  <url><loc>${SITE_URL}${routePath}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`

const outPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../public/sitemap.xml')
writeFileSync(outPath, xml)

console.log(`sitemap.xml generated with ${routes.length} URLs`)
