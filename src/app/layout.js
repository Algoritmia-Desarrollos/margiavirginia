import { Lato, Playfair_Display } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['300', '400', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.virginia-bienestar.site'),
  title: 'Virginia González Scherer - Ayurveda & Bienestar',
  description: 'Guía personalizada para que cada comida sea un acto de sanación. Recetas, artículos y asesorías de alimentación consciente.',
  keywords: ['Ayurveda', 'Bienestar', 'Recetas Saludables', 'Alimentación Consciente', 'Virginia González Scherer', 'Nutrición'],
  authors: [{ name: 'Virginia González Scherer' }],
  icons: {
    icon: '/favicon.jpeg',
    shortcut: '/favicon.jpeg',
    apple: '/favicon.jpeg',
  },
  openGraph: {
    title: 'Virginia González Scherer - Ayurveda & Bienestar',
    description: 'Guía personalizada para que cada comida sea un acto de sanación.',
    url: 'https://www.virginia-bienestar.site',
    siteName: 'Blog de Virginia',
    images: [
      {
        url: '/hero.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${lato.variable} ${playfair.variable}`} suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  )
}
