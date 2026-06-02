import type { Metadata } from 'next'
import { ScrollProgress } from './ScrollProgress'
import { coaseanEssayHtml, coaseanEssayStyles } from './content'

const title = 'Trillions of Markets'
const description =
  'Why a collapse in the cost of making almost anything tradable produces not thousands of markets but trillions, and what that does to the people inside them.'
const canonicalUrl = 'https://www.grantstenger.com/writing/trillions-of-markets'

export const metadata: Metadata = {
  title: `${title} — Grant Stenger`,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    type: 'article',
    siteName: 'Grant Stenger',
    authors: ['Grant Stenger'],
    publishedTime: '2026-06-02',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function TrillionsOfMarketsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: coaseanEssayStyles }} />
      <article className="coaseanEssay">
        <ScrollProgress />
        <div dangerouslySetInnerHTML={{ __html: coaseanEssayHtml }} />
      </article>
    </>
  )
}
