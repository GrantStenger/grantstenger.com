import Link from 'next/link'

export function Header() {
    return (
        <header className="py-6 px-4 bg-gray-800">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-400">GS</Link>
                <div className="space-x-4">
                    {['Home', 'About', 'Bookshelf', 'Essays'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}