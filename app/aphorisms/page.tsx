import { ContentPage } from '../../components/ContentPage'
import { aphorisms } from '../../data/aphorisms'

export default function Aphorisms() {
    return (
        <ContentPage
            title="FAVORITE APHORISMS"
            items={aphorisms}
            searchPlaceholder="Search aphorisms..."
            baseUrl="/aphorisms"
            shuffle={false}
        />
    )
}