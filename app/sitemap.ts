import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.shibaphone.com/',
            lastModified: new Date('2026-03-02'),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]
}
