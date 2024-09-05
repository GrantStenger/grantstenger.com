'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

interface HeaderProps {
    className?: string;
}

export function Header({ className = '' }: HeaderProps) {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const renderHeaderText = () => {
        if (!isMounted) {
            return <span className="invisible">GRANT STENGER</span>
        }
        if (isHomePage) {
            return <div className="invisible">GRANT STENGER</div>
        }
        return (
            <Link href="/" className="text-white font-semibold">
                <span className="hidden md:inline">GRANT STENGER</span>
                <span className="inline md:hidden">GS</span>
            </Link>
        )
    }

    return (
        <header className={`py-4 md:py-6 bg-black text-white ${className}`}>
            <nav className="flex justify-between items-center px-4 md:px-6 lg:px-12">
                {renderHeaderText()}
                <div className="flex items-center">
                    <div className="flex space-x-4 md:space-x-6 mr-4 md:mr-6 lg:mr-12">
                        <Link href="/books" className="text-gray-400 hover:text-white transition-colors duration-200 underline text-sm md:text-base">BOOKS</Link>
                        <Link href="/essays" className="text-gray-400 hover:text-white transition-colors duration-200 underline text-sm md:text-base">ESSAYS</Link>
                    </div>
                    <div className="flex space-x-2 md:space-x-4">
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
            <Image src={icon} alt={label} width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" />
            <span className="sr-only">{label}</span>
        </Link>
    )
}