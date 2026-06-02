'use client'

import React from 'react'
import { TweetFallback, type TweetEntry } from './TweetFallback'

interface Props {
  entry: TweetEntry
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

// react-tweet's EmbeddedTweet can throw at render time on tweets with partial
// or unexpected shapes (e.g. entities missing sub-arrays). This boundary keeps
// one bad tweet from taking down the whole page — it falls back to the stored
// text card instead. Works across the server/client boundary: errors thrown
// while rendering the server-rendered child are caught here.
export class TweetBoundary extends React.Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <TweetFallback entry={this.props.entry} />
    }
    return this.props.children
  }
}
