import ArticlePage from '@/components/ArticlePage'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

export default function PokerModelPage() {
  return (
    <ArticlePage 
      title="Poker Model"
      content={
        <div className="flex flex-col items-center space-y-6">
          <p className="text-lg text-center max-w-2xl">
            This paper explores a simplified poker model with optimal betting strategies. 
            The model analyzes a one-street poker game between two players and derives 
            equilibrium strategies.
          </p>
          
          <a 
            href="/articles/von_neumann_poker.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
          >
            <span>View PDF</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          
          <div className="w-full max-w-md mt-4">
            <Progress value={100} className="h-1" />
            <p className="text-sm text-gray-400 mt-2 text-center">PDF ready for viewing</p>
          </div>
        </div>
      }
      contentType="jsx"
    />
  )
} 