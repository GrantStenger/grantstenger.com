'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EssayCard } from '@/components/EssayCard'
import { essays } from '@/data/essays'

export default function Essays() {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredEssays = essays.filter(essay =>
        essay.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        essay.author.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-['Anonymous_Pro',_sans-serif]">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold mb-8 text-center text-blue-400">My Favorite Essays</h1>

                <input
                    type="text"
                    placeholder="Search essays..."
                    className="w-full mb-8 p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredEssays.map((essay, index) => (
                        <EssayCard key={index} {...essay} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}