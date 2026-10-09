import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '~/utils/contact'

interface PageSeo {
  title: string
  description: string
  // Path of the page, e.g. '/pricing'. Use '/' for the homepage.
  path: string
  // Breadcrumb label for this page (omit on the homepage).
  breadcrumb?: string
  image?: string
  imageAlt?: string
  // Extra JSON-LD objects for this page (without @context).
  schema?: Record<string, any>[]
}

// Sets title, description, canonical URL, Open Graph, Twitter and JSON-LD
// (breadcrumbs + page schema) consistently on every page.
export const usePageSeo = (seo: PageSeo) => {
  const url = seo.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${seo.path}`
  // Page photo for Google's structured data.
  const image = `${SITE_URL}${seo.image || DEFAULT_OG_IMAGE}`
  // Link previews (WhatsApp, Facebook, X) always use the 1200x630 share image:
  // a fixed JPG with declared dimensions renders most reliably.
  const shareImage = `${SITE_URL}${DEFAULT_OG_IMAGE}`
  const imageAlt = seo.imageAlt || `The ${SITE_NAME} team in Juja, Kenya`

  const graph: Record<string, any>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: seo.title,
      description: seo.description,
      inLanguage: 'en-KE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#gym` },
      primaryImageOfPage: { '@type': 'ImageObject', url: image },
    },
    ...(seo.schema || []),
  ]

  if (seo.breadcrumb) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: seo.breadcrumb, item: url },
      ],
    })
  }

  useHead({
    title: seo.title,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: seo.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: shareImage },
      { property: 'og:image:secure_url', content: shareImage },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: imageAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: shareImage },
      { name: 'twitter:image:alt', content: imageAlt },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      },
    ],
  })
}
