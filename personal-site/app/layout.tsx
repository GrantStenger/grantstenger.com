import './globals.css'
import { Inter, Anonymous_Pro } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const anonymousPro = Anonymous_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-anonymous-pro',
})

export const metadata = {
  title: 'Grant Stenger',
  description: 'Personal website of Grant Stenger, Founder & CEO of Kinetic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${anonymousPro.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}