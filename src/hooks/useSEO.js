import { useEffect } from 'react'

const SITE_NAME = 'Agisoft Technologies'
const SITE_URL = 'https://www.agisofttechnologies.com'
const DEFAULT_IMAGE = `${SITE_URL}/icons/icon-512.png`

function upsertMeta(attr, key, content) {
  if (!content) return
  let tag = document.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let tag = document.getElementById(id)
  if (!data) {
    if (tag) tag.remove()
    return
  }
  if (!tag) {
    tag = document.createElement('script')
    tag.id = id
    tag.type = 'application/ld+json'
    document.head.appendChild(tag)
  }
  tag.textContent = JSON.stringify(data)
}

/**
 * @param {Object} opts
 * @param {string} opts.title - page title (site name is appended automatically)
 * @param {string} opts.description - meta/OG/Twitter description
 * @param {string} [opts.path] - canonical path, e.g. '/services/cybersecurity'; defaults to the current pathname
 * @param {string} [opts.image] - absolute or root-relative OG/Twitter image; defaults to the site logo
 * @param {string} [opts.type] - OG type, defaults to 'website'
 * @param {object|object[]} [opts.jsonLd] - structured data to inject (in addition to the sitewide Organization schema)
 */
export default function useSEO({ title, description, path, image, type = 'website', jsonLd } = {}) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Innovative Software Solutions`

    upsertMeta('name', 'description', description)

    const canonicalPath = path ?? window.location.pathname
    const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`
    upsertCanonical(canonicalUrl)

    const ogTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const ogImage = image
      ? image.startsWith('http')
        ? image
        : `${SITE_URL}${image}`
      : DEFAULT_IMAGE

    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:title', ogTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:image', ogImage)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', ogTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)

    upsertJsonLd('page-jsonld', jsonLd)

    return () => upsertJsonLd('page-jsonld', null)
  }, [title, description, path, image, type, jsonLd])
}

export { SITE_NAME, SITE_URL }
