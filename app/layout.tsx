import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from "@/components/providers";
import { CartProvider } from '@/lib/cart-context'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    metadataBase: new URL('https://eggsspices.com'),
    title: 'Premium Spices & Farm-Fresh Eggs',
    description: "Fresh farm eggs and premium spices, sourced with care and delivered fresh to your home.",

    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },

    // Google Search Console verification
    verification: {
        google: 'D_Y7QDWmiE1DlbQIc9io0KlIwvVS2homl_nqomJ6z10',
    },

    // Facebook / Open Graph (also used by WhatsApp, LinkedIn, Slack, etc.)
    openGraph: {
        title: 'Premium Spices & Farm-Fresh Eggs',
        description: 'Fresh farm eggs and premium spices, sourced with care and delivered fresh to your home.',
        url: 'https://eggsspices.com',
        siteName: 'Premium Spices & Farm-Fresh Eggs',
        images: [
            {
                url: '/og-image.jpg', // 1200x630 recommended
                width: 1200,
                height: 630,
                alt: 'Premium Spices & Farm-Fresh Eggs',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    // Twitter / X card
    twitter: {
        card: 'summary_large_image',
        title: 'Premium Spices & Farm-Fresh Eggs',
        description: 'Fresh farm eggs and premium spices, sourced with care and delivered fresh to your home.',
        images: ['/og-image.jpg'],
    },

    // Facebook Business Manager domain verification (separate from OG tags,
    // only needed if you're verifying the domain for Facebook Catalog/Commerce/Pixel)
    other: {
        'facebook-domain-verification': 'your-fb-domain-verification-code-here',
    },
}

export const viewport: Viewport = {
    colorScheme: 'light dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
        <body className="font-sans antialiased">
        <Providers>
            <CartProvider>
                {children}
                {process.env.NODE_ENV === 'production' && <Analytics />}
            </CartProvider>
        </Providers>
        </body>
        </html>
    )
}