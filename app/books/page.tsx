import type { Metadata } from 'next'
import { ContentPage } from '../../components/ContentPage'
import books from '../../data/books.json'

export const metadata: Metadata = {
    title: 'Favorite Books — Grant Stenger',
    description: 'Book recommendations by Grant Stenger.',
}

export default function Books() {
    return (
        <ContentPage
            title="FAVORITE BOOKS"
            items={books}
            searchPlaceholder="Search books..."
            baseUrl="/books"
        />
    )
}
