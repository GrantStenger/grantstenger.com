import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

interface EssayCardProps {
    title: string;
    author: string;
    year: number;
    link: string;
}

export function EssayCard({ title, author, year, link }: EssayCardProps) {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full transition-all duration-300 ease-in-out"
        >
            <Card className="bg-gray-800 border border-gray-700 hover:border-blue-400 hover:shadow-lg h-full transition-all duration-300 ease-in-out">
                <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-2 text-blue-300">{title}</h3>
                    <p className="text-gray-400 mb-1">{author}</p>
                    <p className="text-gray-500 mb-4">{year}</p>
                    <div className="mt-auto text-blue-400 text-sm">
                        Read Essay →
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}