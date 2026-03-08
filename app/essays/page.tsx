import type { Metadata } from 'next'
import { ContentPage } from '../../components/ContentPage'
import essays from '../../data/essays.json'

export const metadata: Metadata = {
    title: 'Favorite Essays — Grant Stenger',
    description: 'Essay recommendations by Grant Stenger.',
}

export default function Essays() {
    return (
        <ContentPage
            title={<>FAVORITE<br />ESSAYS</>}
            items={essays}
            searchPlaceholder="Search essays..."
            baseUrl="/essays"
        />
    )
}
