import { Card, CardContent } from "@/components/ui/card"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Bookshelf() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-['Anonymous_Pro',_sans-serif]">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold mb-12 text-center text-blue-400">My Bookshelf</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <BookCard
                        title="The Innovator's Dilemma"
                        author="Clayton M. Christensen"
                        description="A classic on disruptive innovation in business."
                    />
                    <BookCard
                        title="Zero to One"
                        author="Peter Thiel"
                        description="Notes on startups, or how to build the future."
                    />
                    <BookCard
                        title="Thinking, Fast and Slow"
                        author="Daniel Kahneman"
                        description="An exploration of the two systems that drive the way we think."
                    />
                </div>
            </main>

            <Footer />
        </div>
    )
}

function BookCard({ title, author, description }) {
    return (
        <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{title}</h3>
                <p className="text-gray-400 mb-4">by {author}</p>
                <p className="text-gray-300">{description}</p>
            </CardContent>
        </Card>
    )
}