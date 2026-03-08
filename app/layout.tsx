import './globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import 'katex/dist/katex.min.css'

const abcDiatype = localFont({
  src: [
    {
      path: '../public/fonts/abc-diatype-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/abc-diatype-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/abc-diatype-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-abc-diatype',
})

export const metadata: Metadata = {
  title: 'Grant Stenger',
  description: 'Personal website of Grant Stenger, Founder & CEO of Kinetic',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={abcDiatype.variable}>
      <body className={`${abcDiatype.className} bg-black text-white min-h-screen flex flex-col`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}