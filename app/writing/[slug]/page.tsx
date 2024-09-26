import { articles } from '../../../data/articles'
import ArticlePage from '../../../components/ArticlePage'

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

  return <ArticlePage title={article.title} content={article.content} />
}