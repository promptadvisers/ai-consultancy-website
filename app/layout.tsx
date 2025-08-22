import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Consultancy - Transform Your Business with AI',
  description: 'Expert AI integration, prompt optimization, and custom app development for SMBs. Unlock the power of AI for your business.',
  keywords: 'AI integration for SMBs, custom AI apps, prompt engineering services',
  openGraph: {
    title: 'AI Consultancy - Transform Your Business with AI',
    description: 'Expert AI integration and development services for SMBs',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body bg-off-white text-charcoal-gray">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}