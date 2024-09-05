import { ContentPage } from '@/components/ContentPage'
import { books } from '@/data/books'

export default function Books() {
    return (
        <ContentPage
            title="BOOKS"
            items={books}
            searchPlaceholder="Search books..."
        />
    )
}