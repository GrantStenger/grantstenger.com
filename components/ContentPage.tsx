'use client'

import { useState, ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ContentCard } from './ContentCard'
import Image from 'next/image'
import Link from 'next/link'

interface ContentItem {
    title: string;
    author?: string; // Make author optional
    description?: string;
    year?: number;
    link?: string;    // External URL
    slug?: string;    // Internal routing
    content?: string; // Add content as an optional property
    pdfUrl?: string;  // Add this to support PDF URLs
}

interface ContentPageProps {
    title: ReactNode;
    items: ContentItem[];
    searchPlaceholder: string;
    baseUrl: string;
    defaultAuthor?: string;
}

export function ContentPage({ title, items, searchPlaceholder, baseUrl, defaultAuthor }: ContentPageProps) {
    const [searchQuery, setSearchQuery] = useState('')

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.author || defaultAuthor || '').toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header className="fixed top-0 left-0 right-0 z-10 border-b border-gray-900 md:border-b-0" />

            <div className="flex-grow flex flex-col pt-28 md:pt-20 lg:flex-row">
                <div className="px-4 py-6 sm:px-6 lg:fixed lg:top-20 lg:bottom-0 lg:left-0 lg:w-1/3 lg:overflow-y-auto lg:px-12 lg:py-4 xl:w-1/4">
                    <h1 className="mb-8 text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
                    <div className="relative w-full max-w-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[#141414] rounded-md"></div>
                        <div className="relative p-[1px] rounded-md">
                            <div className="relative">
                                <Image
                                    src="/icons/search.svg"
                                    alt="Search"
                                    width={20}
                                    height={20}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                />
                                <input
                                    type="text"
                                    placeholder={searchPlaceholder}
                                    className="w-full py-2 pl-10 pr-4 bg-[#141414] text-white rounded-md focus:outline-none focus:ring-0 placeholder-gray-400"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <main className="px-4 py-4 sm:px-6 lg:ml-[33.333%] lg:w-2/3 lg:px-12 xl:ml-[25%] xl:w-3/4">
                    <div className="space-y-4">
                        {filteredItems.map((item, index) => {
                            // Determine the correct href for the item
                            let href;
                            
                            if (item.link) {
                                // External link takes precedence
                                href = item.link;
                            } else if (item.pdfUrl) {
                                // For PDF items, link directly to the PDF
                                href = item.pdfUrl;
                            } else if (item.slug) {
                                // For regular articles, use the slug
                                href = `${baseUrl}/${item.slug}`;
                            }
                            
                            return (
                                <ContentCard 
                                    key={`${item.title}-${index}`}
                                    title={item.title}
                                    author={item.author || defaultAuthor}
                                    year={item.year}
                                    href={href}
                                    isExternal={!!(item.link || item.pdfUrl)}
                                    description={item.description}
                                />
                            );
                        })}
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    )
}
