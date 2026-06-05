import type { Metadata } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import { ScrollProgress } from './ScrollProgress'
import { AudioPlayer } from './AudioPlayer'
import { coaseanEssayHtml, coaseanEssayStyles } from './content'

// Show the audio player only once a narration file is dropped into
// public/writing/. Until then the player renders nothing, so this is safe to
// ship ahead of the audio. Replace the filename when you add the MP3.
const AUDIO_FILE = 'trillions-of-markets.mp3'
const audioExists = fs.existsSync(
  path.join(process.cwd(), 'public', 'writing', AUDIO_FILE),
)
const audioSrc = `/writing/${AUDIO_FILE}`

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
      {audioExists && <AudioPlayer src={audioSrc} />}
    </>
  )
}
