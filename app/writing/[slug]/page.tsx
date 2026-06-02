import type { Metadata } from 'next'
import { articles } from '../../../data/articles'
import ArticlePage from '../../../components/ArticlePage'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} — Grant Stenger`,
    description: article.description,
  }
}

export async function generateStaticParams() {
  // Only generate params for articles rendered by this Markdown/LaTeX route.
  return articles
    .filter(article => !article.pdfUrl && !article.link && article.content)
    .map((article) => ({
      slug: article.slug,
    }))
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return notFound()
  }

  // Don't try to handle PDFs, external links, or special static routes here.
  if (article.pdfUrl || article.link || !article.content) {
    return notFound()
  }

  return (
    <ArticlePage
      title={article.title}
      content={article.content}
      contentType={article.contentType === 'latex' ? 'latex' : 'markdown'}
    />
  )
}
