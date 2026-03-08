import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />
            <main className="flex-grow flex items-center justify-center px-4">
                <div className="text-center">
                    <p className="text-gray-400 mb-8 text-lg">Page not found.</p>
                    <Link href="/" className="text-gray-400 hover:text-white underline transition-colors duration-200 text-lg">
                        Go home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    )
}
