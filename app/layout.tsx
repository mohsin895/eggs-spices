import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
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

const GTM_ID = 'GTM-554667ZP'
const FB_PIXEL_ID = '539934775177061'

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
        <head>
            <Script id="gtm-script" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            <Script id="fb-pixel" strategy="afterInteractive">
                {`!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_PIXEL_ID}');
                fbq('track', 'PageView');`}
            </Script>
        </head>
        <body className="font-sans antialiased">
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
        <noscript>
            <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
            />
        </noscript>
        <Providers>
            <CartProvider>
                {children}
            </CartProvider>
        </Providers>
        </body>
        </html>
    )
}