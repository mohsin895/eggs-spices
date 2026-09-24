import type { MetadataRoute } from 'next'
import products from '@/lib/data/products.json'
import categories from '@/lib/data/categories.json'
import brands from '@/lib/data/brands.json'

const SITE_URL = 'https://eggsspices.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/shop`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...[
      'contact',
      'terms-conditions',
      'order-procedure',
      'return-policy',
      'warranty',
      'faq',
      'company',
      'delivery-rules',
      'about-us',
      'privacy-policy',
    ].map((slug) => ({
      url: `${SITE_URL}/page/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]

  const categoryPages: MetadataRoute.Sitemap = (categories as any[]).map(
    (c) => ({
      url: `${SITE_URL}/category/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  )

  const brandPages: MetadataRoute.Sitemap = (brands as any[]).map((b) => ({
    url: `${SITE_URL}/brand/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const productPages: MetadataRoute.Sitemap = (products as any[]).map(
    (p) => ({
      url: `${SITE_URL}/product/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  )

  return [...staticPages, ...categoryPages, ...brandPages, ...productPages]
}
