
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from '@/components/providers'
import { CartProvider } from '@/lib/cart-context'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const SITE_URL = 'https://eggsspices.com'
const SITE_NAME = 'Eggs & Spices'
const SITE_TITLE = 'Premium Spices & Farm-Fresh Eggs'
const SITE_DESCRIPTION =
    'Fresh farm eggs and premium spices, sourced with care and delivered fresh to your home.'

const GTM_ID = 'GTM-554667ZP'
const FB_PIXEL_ID = '539934775177061'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_NAME}`,
    },

    description: SITE_DESCRIPTION,

    keywords: [
        // Dhaka
        'Dhaka Foodies',
        'Dhaka Food',
        'Dhaka Online Shopping',
        'Dhaka Delivery',
        'Dhaka Groceries',
        'Online Grocery Dhaka',
        'Dhaka Life',
        'Dhaka Shopping',
        'Dhaka Lifestyle',
        'Gulshan',
        'Banani',
        'Dhanmondi',
        'Uttara',
        'Mohammadpur',
        'Dhaka City',
        'Dhaka Eats',
        'Dhaka Bazaar',
        'Inside Dhaka',
        'Cash on Delivery Dhaka',
        'Dhaka Home Chefs',
        'Dhaka Moms',
        'Dhaka Kitchen',
        'Dhaka Diaries',
        'Dhaka Food Blogger',
        'Dhaka Restaurants',
        'Dhaka Fitness',
        'Dhaka Gym',
        'Dhaka Healthy Food',
        'Dhaka Organic',
        'Dhaka Market',
        'Dhaka Trends',
        'Dhaka Ecommerce',
        'Dhaka Small Business',
        'Dhaka Entrepreneurs',
        'Dhaka Food Lovers',
        'Old Dhaka Food',
        'Puran Dhaka',
        'Dhaka Shopping Guide',
        'Dhaka Online Bazaar',
        'Dhaka Grocery Delivery',
        'Dhaka Daily',
        'Dhaka Fashion',
        'Dhaka Corporate',
        'Dhaka Zone',
        'Dhaka Hub',

        // Ghee & Oils
        'Pabnar Ghee',
        'Khati Ghee',
        'Deshi Ghee',
        'Pure Ghee',
        'Ghee Lovers Dhaka',
        'Shorishar Tel',
        'Khati Shorishar Tel',
        'Mustard Oil BD',
        'Pabnar Shorishar Tel',
        'Cold Pressed Oil Dhaka',
        'Premium Olive Oil',
        'Extra Virgin Olive Oil Dhaka',
        'Pure Coconut Oil',
        'Coconut Oil BD',
        'Natural Oil',
        'Premium Ghee',
        'Wood Pressed Oil BD',
        'Healthy Cooking Oil',
        'Ghee BD',
        'Mustard Oil',
        'Coconut Oil',
        'Olive Oil BD',
        'Cooking With Ghee',

        // Rice & Grocery
        'Organic Rice Dhaka',
        'Basmati Rice BD',
        'Shada Basmati',
        'Brown Rice Dhaka',
        'Deshi Chal',
        'Haate Shidhho Chal',
        'Pure Food Dhaka',
        'Safe Food Dhaka',
        'Chemical Free Food',
        'Khati Jinish Dhaka',
        'Aromatic Rice BD',
        'Traditional Rice BD',
        'Daily Grocery Dhaka',
        'Bazaar BD',
        'Grocery Shopping Dhaka',
        'Kitchen Ingredients',
        'Pure Organic Dhaka',
        'Healthy Rice Dhaka',
        'Premium Rice',
        'Deshi Khabar Dhaka',
        'Ghoroya Khabar',
        'Banglar Chal',
        'Authentic Ghee',
        'No Preservatives',
        'Organic Groceries Dhaka',
        'Farm Fresh Dhaka',
        'Food Safety Dhaka',

        // Spices
        'Premium Spices Dhaka',
        'Pure Masala',
        'Garam Masala BD',
        'Shahi Garam Masala',
        'Holud Gura',
        'Morich Gura',
        'Jira Gura',
        'Dhoniya Gura',
        'Turmeric Powder BD',
        'Chili Powder BD',
        'Cumin Powder BD',
        'Bangladeshi Spices',
        'Pure Spices',
        'Home Cooking Dhaka',
        'Dhaka Chefs',
        'Premium Masala',
        'Cardamom BD',
        'Cinnamon BD',
        'Black Pepper BD',
        'Ceylon Cinnamon Dhaka',
        'Shahi Jira',
        'Posto Dana',
        'Alubokhara',
        'Mouri',
        'Star Moshla',
        'Lobongo',
        'Darchini',
        'Tejpata',
        'Pach Foron',
        'Joyfol',
        'Joytri',
        'Sobuj Elach',
        'Kalo Elach',
        'White Pepper',
        'Asto Jira',
        'Mustard Seeds',
        'Sesame Seeds',
        'Asto Holud Shorisha',
        'Kalijira',
        'Black Seed BD',
        'Kitchen Essentials Dhaka',
        'Aromatic Spices',
        'Spicy Food Dhaka',
        'Flavor of Dhaka',
        'Daily Masala',
        'Pure Ingredients',
        'Dhaka Catering',
        'Cooking Ingredients',
        'Home Chefs Dhaka',
        'Spices of Bangladesh',

        // Eggs, Nuts & Seeds
        'Chia Seeds Dhaka',
        'Chia Seed BD',
        'Organic Eggs Dhaka',
        'Deshi Dim',
        'Premium Nuts Dhaka',
        'Mixed Nuts BD',
        'Healthy Seeds BD',
        'Kathbadam',
        'Almonds BD',
        'Kaju Badam',
        'Cashews Dhaka',
        'Akhrot',
        'Walnuts BD',
        'Pesta',
        'Pistachios Dhaka',
        'Peanuts BD',
        'Chine Badam',
        'Lal Kismis',
        'Kalo Kismis',
        'Raisins BD',
        'Chia Pudding Dhaka',
        'Tokma',
        'Isubgul',
        'Psyllium Husk BD',
        'Sagudana',
        'Rajma BD',
        'Kidney Beans',
        'Kabuli Chhola',

        // Health & Lifestyle
        'Superfood Dhaka',
        'Diet Food Dhaka',
        'Keto Diet Dhaka',
        'Weight Loss Dhaka',
        'Fitness Food Dhaka',
        'Healthy Snacks Dhaka',
        'Protein Rich Dhaka',
        'Healthy Lifestyle Dhaka',
        'Dhaka Fitness Community',
        'Dhaka Diet',
        'Nutrition Dhaka',
        'Energy Food',
        'Brain Food',
        'Healthy Heart',
        'Immunity Booster Dhaka',
        'Seed Mix',
        'Raw Nuts Dhaka',
        'Daily Nuts Dhaka',
        'Breakfast Seeds',
        'Organic Eggs',
        'Vitamins BD',
        'Eggs and Spices Dhaka',
        'Eggs',
    ],

    authors: [
        {
            name: SITE_NAME,
        },
    ],

    creator: SITE_NAME,
    publisher: SITE_NAME,

    alternates: {
        canonical: SITE_URL,
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },

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

    // Open Graph - Facebook, WhatsApp, LinkedIn, etc.
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: SITE_URL,
        siteName: SITE_NAME,

        title: SITE_TITLE,

        description: SITE_DESCRIPTION,

        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: SITE_TITLE,
            },
        ],
    },

    // Twitter / X
    twitter: {
        card: 'summary_large_image',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: ['/og-image.jpg'],
    },

    // Facebook domain verification
    other: {
        'facebook-domain-verification':
            'your-fb-domain-verification-code-here',
    },
}

export const viewport: Viewport = {
    colorScheme: 'light dark',

    themeColor: [
        {
            media: '(prefers-color-scheme: light)',
            color: 'white',
        },
        {
            media: '(prefers-color-scheme: dark)',
            color: 'black',
        },
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} bg-background`}
        >
            <head>
                {/* Google Tag Manager */}
                <Script id="gtm-script" strategy="afterInteractive">
                    {`
(function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event:'gtm.js'
    });

    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';

    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

    f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`}
                </Script>

                {/* Facebook Pixel */}
                <Script id="fb-pixel" strategy="afterInteractive">
                    {`
!function(f,b,e,v,n,t,s)
{
    if(f.fbq)return;

    n=f.fbq=function(){
        n.callMethod ?
            n.callMethod.apply(n,arguments) :
            n.queue.push(arguments)
    };

    if(!f._fbq)f._fbq=n;

    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];

    t=b.createElement(e);
    t.async=!0;
    t.src=v;

    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
}
(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
);

fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');
`}
                </Script>
            </head>

            <body className="font-sans antialiased">
                {/* Google Tag Manager - noscript */}
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
    height="0"
width="0"
style={{
    display: 'none',
        visibility: 'hidden',
}}
/>
</noscript>

{/* Facebook Pixel - noscript */}
<noscript>
    <img
        height="1"
        width="1"
        style={{
            display: 'none',
        }}
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
