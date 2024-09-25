'use client'

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import 'katex/dist/katex.min.css'
import { prisonersDilemmaContent } from '../../data/prisonersDilemmaContent'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { Progress } from '../../components/ui/progress'
import { Button } from '../../components/ui/button'
import { ArrowUp } from 'lucide-react'

const TableOfContents: React.FC<{ content: string }> = React.memo(({ content }) => {
  const headings = useMemo(() => content.match(/^#{1,3} .+$/gm) || [], [content])
  return (
    <nav className="toc mb-12 p-6 bg-[#141414] rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => {
          const level = heading.match(/^#+/)?.[0].length || 1
          const text = heading.replace(/^#+\s/, '')
          return (
            <li key={index} className={`ml-${(level - 1) * 4}`}>
              <Link 
                href={`#${text.toLowerCase().replace(/\s/g, '-')}`} 
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
              >
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
})

TableOfContents.displayName = 'TableOfContents'

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
}

export default function WritingPage() {
  const [readingProgress, setReadingProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const articleRef = useRef<HTMLElement>(null)

  const handleScroll = useCallback(() => {
    if (articleRef.current) {
      const totalHeight = articleRef.current.clientHeight - window.innerHeight
      const windowScrollTop = window.scrollY || document.documentElement.scrollTop
      const scrolled = (windowScrollTop / totalHeight) * 100
      setReadingProgress(scrolled)
      setShowScrollTop(windowScrollTop > 300)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const getImageProps = (src: string, alt: string | undefined): ImageProps => ({
    src,
    alt: alt || 'Article image',
    width: 800,
    height: 600,
    className: "object-cover rounded-lg shadow-lg",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  });

  const memoizedMarkdownComponents = useMemo<Components>(() => ({
    h1: ({ children, ...props }) => <h1 id={children?.toString().toLowerCase().replace(/\s/g, '-')} className="text-2xl md:text-3xl lg:text-4xl font-bold mt-12 mb-6 text-white" {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 id={children?.toString().toLowerCase().replace(/\s/g, '-')} className="text-xl md:text-2xl lg:text-3xl font-semibold mt-10 mb-5 text-white" {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 id={children?.toString().toLowerCase().replace(/\s/g, '-')} className="text-lg md:text-xl lg:text-2xl font-medium mt-8 mb-4 text-white" {...props}>{children}</h3>,
    p: ({ children, ...props }) => {
      const childrenArray = React.Children.toArray(children);
      const textContent = childrenArray.filter(child => typeof child === 'string').join('').trim();
      if (textContent === '') {
        return <>{childrenArray.map((child, index) => {
          if (React.isValidElement(child) && child.type === 'img') {
            return <React.Fragment key={index}>{child}</React.Fragment>;
          }
          return null;
        })}</>;
      }
      return <p className="mb-6 text-base md:text-lg" {...props}>{children}</p>;
    },
    img: ({ src, alt, ...props }) => {
      if (typeof src !== 'string') {
        return null;
      }
      
      const imageProps = getImageProps(src, alt);
      
      return (
        <figure className="my-8">
          <div className="relative w-full h-[600px]">
            <Image {...imageProps} />
          </div>
          {alt && <figcaption className="text-center text-sm mt-2 text-gray-400">{alt}</figcaption>}
        </figure>
      );
    },
    a: ({ children, ...props }) => <a className="text-gray-300 hover:text-white underline transition-colors duration-200" {...props}>{children}</a>,
    code: ({ inline, className, children, ...props }: CodeProps) => {
      if (inline) {
        return <code className="bg-[#1a1a1a] px-1 py-0.5 rounded" {...props}>{children}</code>
      }
      return (
        <pre className="whitespace-pre-wrap break-words bg-[#1a1a1a] p-4 rounded-md mb-6">
          <code {...props}>{children}</code>
        </pre>
      )
    },
  }), [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <Progress 
        value={readingProgress} 
        className="fixed top-0 left-0 right-0 z-50 h-1"
      />
      <main className="flex-grow px-4 py-16">
        <div className="relative max-w-[60rem] mx-auto"> {/* Custom width between max-w-4xl and max-w-5xl */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[#141414] rounded-lg"></div>
          <div className="relative p-[1px] rounded-lg">
            <article ref={articleRef} className="p-8 bg-[#141414] rounded-lg">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                {prisonersDilemmaContent.title.split(': ').map((part, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <>
                        <span>:</span>
                        <br />
                      </>
                    )}
                    <span>{part}</span>
                  </React.Fragment>
                ))}
              </h1>
              <TableOfContents content={prisonersDilemmaContent.content} />
              <ReactMarkdown
                className="prose prose-lg md:prose-xl prose-invert text-gray-300 leading-relaxed max-w-none"
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={memoizedMarkdownComponents}
              >
                {prisonersDilemmaContent.content}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </main>
      <Footer />
      {showScrollTop && (
        <Button
          className="fixed bottom-8 right-8 p-2 bg-white hover:bg-gray-200 text-black rounded-full shadow-lg transition-all duration-300"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </Button>
      )}
    </div>
  )
}