import { articles } from '../../../data/articles'
import ArticlePage from '../../../components/ArticlePage'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  // Only generate params for non-PDF articles
  return articles
    .filter(article => !article.pdfUrl)
    .map((article) => ({
      slug: article.slug,
    }))
}

export default function Article({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return notFound()
  }

  // Don't try to handle PDF articles in this route at all
  if (article.pdfUrl) {
    return notFound()
  }

  return (
    <ArticlePage 
      title={article.title} 
      content={article.content} 
      contentType={article.contentType as 'markdown' | 'latex'} 
    />
  )
}