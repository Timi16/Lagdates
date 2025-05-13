import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Separate viewport export as per Next.js recommendation
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Lag Dates | Campus Dating App',
  description: 'Connect with students based on shared interests, classes, and campus activities',
  generator: 'Lag Dates',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Lag Dates',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FF5A5F" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
