export interface TweetEntry {
  id: string
  text?: string
  date?: string
}

// Presentational card shown when a tweet can't be embedded (deleted, private,
// or a render error). Kept free of server-only imports so it can be used from
// both the server TweetCard and the client TweetBoundary.
export function TweetFallback({ entry }: { entry: TweetEntry }) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[#141414] rounded-2xl" />
      <div className="relative p-[1px] rounded-2xl">
        <div className="bg-[#141414] rounded-2xl p-5">
          <p className="text-gray-200 text-base md:text-lg whitespace-pre-wrap leading-relaxed">
            {entry.text || 'Tweet unavailable.'}
          </p>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>{entry.date || ''}</span>
            <a
              href={`https://x.com/i/status/${entry.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors duration-200"
            >
              View on X →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
