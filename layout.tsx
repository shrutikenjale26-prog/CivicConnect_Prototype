import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CivicConnect AI - Smart Civic Problem Reporting Platform',
  description: 'Report local civic issues like potholes, garbage, water leakage, and street light problems. Get AI-powered assistance and real-time updates on your complaints.',
  keywords: ['civic', 'issue reporting', 'smart city', 'AI', 'citizen engagement', 'municipal services'],
  authors: [{ name: 'CivicConnect AI' }],
  openGraph: {
    title: 'CivicConnect AI - Smart Civic Problem Reporting',
    description: 'Report and track civic issues with AI-powered assistance',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#3b82f6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
