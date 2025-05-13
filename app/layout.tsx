import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lag Dates | Campus Dating App',
  description: 'Connect with students based on shared interests, classes, and campus activities',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#FF5A5F" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
