import { ContentPage } from '../../components/ContentPage'
import books from '../../data/books.json'

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
