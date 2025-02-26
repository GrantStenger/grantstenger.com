import { articles } from '../../../data/articles'
import ArticlePage from '../../../components/ArticlePage'
import { redirect } from 'next/navigation'

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function Article({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return <div>Article not found</div>
  }

  // If the article has a pdfUrl, redirect to it
  if (article.pdfUrl) {
    // Use server-side redirect for PDFs
    return redirect(article.pdfUrl);
  }

  return (
    <ArticlePage 
      title={article.title} 
      content={article.content} 
      contentType={article.contentType as 'markdown' | 'latex'} 
    />
  )
}