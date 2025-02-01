'use client'

import { useState, useEffect, ReactNode } from 'react'
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
}

interface ContentPageProps {
    title: ReactNode;
    items: ContentItem[];
    searchPlaceholder: string;
    baseUrl: string;
    defaultAuthor?: string; // Add a default author prop
    shuffle?: boolean; // Add shuffle prop
}

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function ContentPage({ title, items, searchPlaceholder, baseUrl, defaultAuthor, shuffle = true }: ContentPageProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [randomizedItems, setRandomizedItems] = useState<ContentItem[]>([])

    useEffect(() => {
        setRandomizedItems(shuffle ? shuffleArray(items) : items);
    }, [items, shuffle]);

    const filteredItems = randomizedItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.author || defaultAuthor || '').toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header className="sticky top-0 z-10" />

            <div className="flex-grow flex flex-col lg:flex-row">
                <div className="lg:w-1/3 xl:w-1/4 px-6 lg:px-12 py-4 lg:fixed lg:top-24 lg:bottom-0 lg:left-0 lg:overflow-y-auto">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-8">{title}</h1>
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
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <main className="lg:w-2/3 xl:w-3/4 lg:ml-[33.333%] xl:ml-[25%] px-6 lg:px-12 py-4">
                    <div className="space-y-4">
                        {filteredItems.map((item, index) => {
                            // Determine if this is an internal or external link
                            const href = item.slug 
                                ? `${baseUrl}/${item.slug}`  // Internal routing
                                : item.link;                  // External URL
                            
                            return (
                                <ContentCard 
                                    key={`${item.title}-${index}`}
                                    {...item} 
                                    author={item.author || defaultAuthor}
                                    href={href}
                                    isExternal={!item.slug}
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