import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="text-center">
          <Image
            src="/headshot-melrose.jpeg"
            alt="Grant Stenger"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8 shadow-lg"
          />
          <h1 className="text-6xl mb-4 text-white font-['ABC_Diatype'] font-[400] tracking-wide leading-tight">
            GRANT STENGER
          </h1>
          <h2 className="text-2xl mb-6 text-white">
            <span className="opacity-80">Founder & CEO of </span>
            <Link
              href="https://www.kinetic.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors duration-200"
            >
              Kinetic
            </Link>
          </h2>
        </div>
      </main>
      <Footer />
    </>
  )
}