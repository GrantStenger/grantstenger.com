import type { MetadataRoute } from 'next'
import { articles } from '../data/articles'

const baseUrl = 'https://www.grantstenger.com'

// Slugs that have their own bespoke route under /writing rather than being
// rendered by the generic [slug] page or living as an external link/PDF.
const customWritingRoutes = ['trillions-of-markets']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/writing', '/books', '/essays', '/quotes', '/tweets']

  // Internal article pages: those rendered as on-site HTML (have `content`),
  // plus the bespoke custom routes. External links and PDFs are skipped — they
  // either live off-site or are linked directly, not crawlable essay pages.
  const articleSlugs = new Set<string>(customWritingRoutes)
  for (const article of articles) {
    if (article.slug && article.content && !article.pdfUrl && !article.link) {
      articleSlugs.add(article.slug)
    }
  }

  return [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...Array.from(articleSlugs).map((slug) => ({
      url: `${baseUrl}/writing/${slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
