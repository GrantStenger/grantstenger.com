import './globals.css'
import { Inter, Anonymous_Pro } from 'next/font/google'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const anonymousPro = Anonymous_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-anonymous-pro',
})

const abcDiatype = localFont({
  src: [
    {
      path: '../public/fonts/abc-diatype-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/abc-diatype-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/abc-diatype-italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/abc-diatype-bold-italic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/abc-diatype-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/abc-diatype-light-italic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/abc-diatype-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/abc-diatype-medium-italic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/abc-diatype-thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/abc-diatype-thin-italic.otf',
      weight: '100',
      style: 'italic',
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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${anonymousPro.variable} ${abcDiatype.variable}`}>
      <body className={`${abcDiatype.className} bg-black text-white min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}