'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderProps {
    className?: string;
}

export function Header({ className = '' }: HeaderProps) {
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    const renderHeaderText = () => {
        if (isHomePage) {
            return <span className="invisible">GRANT STENGER</span>
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
                        <Link href="/quotes" className="text-gray-400 hover:text-white transition-colors duration-200 underline text-sm md:text-base">QUOTES</Link>
                        <Link href="/writing" className="text-gray-400 hover:text-white transition-colors duration-200 underline text-sm md:text-base">MY WRITING</Link>
                    </div>
                    <div className="flex space-x-2 md:space-x-4">
                        <SocialLink href="https://twitter.com/GrantStenger" icon={<TwitterIcon />} label="Twitter" />
                        <SocialLink href="https://github.com/GrantStenger" icon={<GitHubIcon />} label="GitHub" />
                        <SocialLink href="https://www.instagram.com/grant.stenger/" icon={<InstagramIcon />} label="Instagram" />
                        <SocialLink href="https://www.linkedin.com/in/grant-stenger/" icon={<LinkedInIcon />} label="LinkedIn" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
        >
            {icon}
            <span className="sr-only">{label}</span>
        </Link>
    )
}

function TwitterIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2499 8.15627V7.3124H12V6.4688H12.7499V5.62493H13.5V4.78134H14.2501V3.93747H14.9999V3.09387H15.75V2.25H13.5V3.09387H12.7499V3.93747H12V4.78134H11.2499V5.62493H10.5001V6.4688H8.99988V5.62493H8.25003V4.78134H7.49993V3.93747H6.75008V3.09387H5.99999V2.25H2.25V3.93747H3.0001V4.78134H3.74995V5.62493H4.50004V6.4688H5.24989V7.3124H5.99999V8.15627H6.75008V9.00014H7.49993V9.84373H6.75008V10.6876H5.99999V11.5312H5.24989V12.3751H4.50004V13.2187H3.74995V14.0625H3.0001V14.9061H2.25V15.75H4.50004V14.9061H5.24989V14.0625H5.99999V13.2187H6.75008V12.3751H7.49993V11.5312H8.99988V12.3751H9.74997V13.2187H10.5001V14.0625H11.2499V14.9061H12V15.75H15.75V14.0625H14.9999V13.2187H14.2501V12.3751H13.5V11.5312H12.7499V10.6876H12V9.84373H11.2499V9.00014H10.5001V8.15627H11.2499ZM9.74997 9.00014V9.84373H10.5001V10.6876H11.2499V11.5312H12V12.3751H12.7499V13.2187H13.5V14.0625H14.2501V14.9061H12.7499V14.0625H12V13.2187H11.2499V12.3751H10.5001V11.5312H9.74997V10.6876H8.99988V9.84373H8.25003V8.15627H7.49993V7.3124H6.75008V6.4688H5.99999V5.62493H5.24989V4.78134H4.50004V3.93747H3.74995V3.09387H5.24989V3.93747H5.99999V4.78134H6.75008V5.62493H7.49993V6.4688H8.25003V7.3124H8.99988V8.15627H9.74997V9.00014Z" />
        </svg>
    )
}

function GitHubIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
    )
}

function InstagramIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8696 4.01088V3.13043H13.9891V2.25H4.01088V3.13043H3.13043V4.01085H2.25V13.9891H3.13043V14.8695H4.01085V15.75H13.9891V14.8696H14.8695V13.9891H15.75V4.01088H14.8696ZM12.5217 10.7609H11.6413V11.6413H10.7609V12.5217H7.23912V11.6413H6.35869V10.7609H5.47827V7.23912H6.35869V6.35869H7.23912V5.47827H10.7609V6.35869H11.6413V7.23912H12.5217V10.7609H12.5217ZM13.4022 5.77173H12.2283V4.59784H13.4022V5.77173Z" />
            <path d="M10.7608 7.23913V6.3587H7.23907V7.23913H6.35864V10.7609H7.23907V11.6413H10.7608V10.7609H11.6413V7.23913H10.7608Z" />
        </svg>
    )
}

function LinkedInIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.47823 6.65219H2.54346V15.75H5.47823V6.65219Z" />
            <path d="M4.89131 3.13043V2.25H3.13043V3.13043H2.25V4.89131H3.13043V5.77173H4.89131V4.89131H5.77173V3.13043H4.89131Z" />
            <path d="M14.8695 8.41304V7.53262H13.9891V6.65219H9.88038V7.53262H8.99995V6.65219H6.35864V15.75H9.29342V10.1739H10.1739V9.29347H11.9347V10.1739H12.8152V15.75H15.7499V8.41304H14.8695Z" />
        </svg>
    )
}