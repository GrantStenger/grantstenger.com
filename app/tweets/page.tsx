import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { TweetCard } from '../../components/TweetCard'
import { TweetBoundary } from '../../components/TweetBoundary'
import tweets from '../../data/tweets.json'

export const metadata: Metadata = {
    title: 'Best Tweets — Grant Stenger',
    description: 'A collection of tweets curated by Grant Stenger.',
}

export default function Tweets() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header className="fixed top-0 left-0 right-0 z-10" />

            <main className="flex-grow pt-24 md:pt-28 px-4 pb-16">
                <h1 className="text-5xl lg:text-6xl font-bold mb-10 text-center">BEST TWEETS</h1>

                <div data-theme="dark" className="mx-auto flex max-w-[550px] flex-col items-center gap-4">
                    {tweets.map((entry) => (
                        <div key={entry.id} className="w-full [&_.react-tweet-theme]:my-0">
                            <TweetBoundary entry={entry}>
                                <TweetCard entry={entry} />
                            </TweetBoundary>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}
