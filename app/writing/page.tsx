import { ContentPage } from '../../components/ContentPage'
import { articles } from '../../data/articles'

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