import type { Metadata } from 'next'
import { ContentPage } from '../../components/ContentPage'
import { articles } from '../../data/articles'

export const metadata: Metadata = {
    title: 'Writing — Grant Stenger',
    description: 'Articles and essays by Grant Stenger.',
}

export default function Writing() {
    return (
        <ContentPage
            title="MY WRITING"
            items={articles}
            searchPlaceholder="Search articles..."
            baseUrl="/writing"
            defaultAuthor="Grant Stenger"
        />
    )
}