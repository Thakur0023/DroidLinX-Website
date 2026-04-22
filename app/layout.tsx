import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// @ts-ignore
import '../styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DroidLinX - Tech Club',
  description: 'Welcome to DroidLinX, your premier tech club for innovation and collaboration.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}