import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jnx03.xyz",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://jnx03.xyz/dex/terminal",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jnx03.xyz/ads.txt",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: "https://jnx03.xyz/atom.xml",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
    {
      url: "https://jnx03.xyz/sitemap.xml",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.4,
    },
    {
      url: "https://jnx03.xyz/sitemap-index.xml",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.4,
    },
    {
      url: "https://jnx03.xyz/blog/swift-student-challenge-2025",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/blog/cancer-plus-prc-x",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}

