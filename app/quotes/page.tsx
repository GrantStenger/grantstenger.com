import type { Metadata } from 'next'
import { ContentPage } from '../../components/ContentPage'
import quotes from '../../data/quotes.json'

export const metadata: Metadata = {
    title: 'Favorite Quotes — Grant Stenger',
    description: 'A collection of quotes curated by Grant Stenger.',
}

export default function Quotes() {
    return (
        <ContentPage
            title="FAVORITE QUOTES"
            items={quotes}
            searchPlaceholder="Search quotes..."
            baseUrl="/quotes"
        />
    )
}
