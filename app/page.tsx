import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Github, Instagram, Linkedin } from "lucide-react"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-['Anonymous_Pro',_sans-serif]">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="text-center">
          <Image
            src="/headshot-melrose.jpeg"
            alt="Grant Stenger"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8 border-4 border-blue-400 shadow-lg"
          />
          <h1 className="text-5xl font-bold mb-4 text-blue-400">Grant Stenger</h1>
          <h2 className="text-2xl mb-6">
            <Link
              href="https://www.kinetic.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Founder & CEO of Kinetic
            </Link>
          </h2>
          <div className="flex justify-center space-x-6">
            <SocialLink href="https://twitter.com/GrantStenger" icon={<Twitter className="w-6 h-6" />} label="Twitter" hoverColor="hover:text-[#1DA1F2]" />
            <SocialLink href="https://github.com/GrantStenger" icon={<Github className="w-6 h-6" />} label="GitHub" hoverColor="hover:text-[#181717]" />
            <SocialLink href="https://www.instagram.com/grant.stenger/" icon={<Instagram className="w-6 h-6" />} label="Instagram" hoverColor="hover:text-[#E4405F]" />
            <SocialLink href="https://www.linkedin.com/in/grant-stenger/" icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" hoverColor="hover:text-[#0A66C2]" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  hoverColor: string;
}

function SocialLink({ href, icon, label, hoverColor }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-300 ${hoverColor} transition-colors duration-200`}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  )
}