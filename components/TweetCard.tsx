import { getTweet } from 'react-tweet/api'
import { EmbeddedTweet, enrichTweet } from 'react-tweet'
import type { Tweet } from 'react-tweet/api'
import { TweetFallback, type TweetEntry } from './TweetFallback'

export type { TweetEntry }

// The syndication API often returns a partial `entities` object (e.g. only
// `media`, or {}), but react-tweet iterates every sub-array unconditionally and
// throws otherwise. Backfill the missing ones. This applies to the tweet AND any
// quoted tweet — a quoted tweet with partial entities is the most common reason
// an otherwise-valid tweet fails to render.
function normalizeEntities(obj: unknown) {
  if (!obj || typeof obj !== 'object') return
  const target = obj as { entities?: Record<string, unknown> }
  const e = (target.entities ??= {})
  for (const key of ['hashtags', 'urls', 'user_mentions', 'symbols']) {
    if (!Array.isArray(e[key])) e[key] = []
  }
}

export async function TweetCard({ entry }: { entry: TweetEntry }) {
  let tweet: Tweet | null = null
  try {
    const fetched = await getTweet(entry.id)
    const t = fetched as unknown as { __typename?: string; quoted_tweet?: unknown } | undefined

    // Tombstones (deleted/private tweets) lack the 'Tweet' typename — skip them.
    if (t && t.__typename === 'Tweet') {
      normalizeEntities(t)
      normalizeEntities(t.quoted_tweet)

      // Validate on the server: enrichTweet runs the same transform EmbeddedTweet
      // uses internally, so if it still throws here we catch it and fall back. A
      // client error boundary can't catch a server-render throw, and an uncaught
      // throw would fail the static build — so this guard is what keeps /tweets safe.
      enrichTweet(fetched as Tweet)
      tweet = fetched as Tweet
    }
  } catch {
    tweet = null
  }

  if (tweet) {
    return <EmbeddedTweet tweet={tweet} />
  }

  return <TweetFallback entry={entry} />
}
