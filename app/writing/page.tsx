import type { Metadata } from 'next'
import { ContentPage } from '../../components/ContentPage'
import { articles } from '../../data/articles'

export const metadata: Metadata = {
    title: 'Writing — Grant Stenger',
    description: 'Articles and essays by Grant Stenger.',
}

const articleItems = articles.map(({ content, ...rest }) => rest)

export default function Writing() {
    return (
        <ContentPage
            title="MY WRITING"
            items={articleItems}
            searchPlaceholder="Search articles..."
            baseUrl="/writing"
            defaultAuthor="Grant Stenger"
        />
    )
}