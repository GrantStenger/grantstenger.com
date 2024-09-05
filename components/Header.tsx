'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface HeaderProps {
    className?: string;
}

export function Header({ className = '' }: HeaderProps) {
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    return (
        <header className={`py-6 bg-black text-white ${className}`}>
            <nav className="flex justify-between items-center px-6 lg:px-12">
                {!isHomePage && (
                    <Link href="/" className="text-white font-semibold">
                        GRANT STENGER
                    </Link>
                )}
                {isHomePage && <div></div>}
                <div className="flex items-center">
                    <div className="space-x-6 mr-12">
                        <Link href="/books" className="text-gray-400 hover:text-white transition-colors duration-200 underline">BOOKS</Link>
                        <Link href="/essays" className="text-gray-400 hover:text-white transition-colors duration-200 underline">ESSAYS</Link>
                    </div>
                    <div className="flex space-x-4">
                        <SocialLink href="https://twitter.com/GrantStenger" icon="/icons/twitter.svg" label="Twitter" />
                        <SocialLink href="https://github.com/GrantStenger" icon="/icons/github.svg" label="GitHub" />
                        <SocialLink href="https://www.instagram.com/grant.stenger/" icon="/icons/instagram.svg" label="Instagram" />
                        <SocialLink href="https://www.linkedin.com/in/grant-stenger/" icon="/icons/linkedin.svg" label="LinkedIn" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

interface SocialLinkProps {
    href: string;
    icon: string;
    label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Image src={icon} alt={label} width={24} height={24} />
            <span className="sr-only">{label}</span>
        </Link>
    )
}