import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jnx03.xyz",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://jnx03.xyz/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jnx03.xyz/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://jnx03.xyz/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jnx03.xyz/awards",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jnx03.xyz/education",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jnx03.xyz/experience",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jnx03.xyz/research",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jnx03.xyz/resume",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jnx03.xyz/tools",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jnx03.xyz/game",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://jnx03.xyz/dex/terminal",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://jnx03.xyz/terminal-guide",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://jnx03.xyz/terminal-dex",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://jnx03.xyz/security-policy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Blog posts
    {
      url: "https://jnx03.xyz/blog/tia-index-camp",
      lastModified: "2025-06-27T00:00:00Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/blog/moodeng-ai-challenge",
      lastModified: "2025-06-25T00:00:00Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/blog/wwdc-ssc25-thailand-meeting",
      lastModified: "2025-06-22T00:00:00Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/blog/gistda-kibo-robot-award",
      lastModified: "2025-07-15T00:00:00Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/blog/nsc-index",
      lastModified: "2025-06-13T00:00:00Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/blog/super-ai-engineer-ss5",
      lastModified: "2025-03-30T00:00:00Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/blog/social-media-project",
      lastModified: "2025-04-01T00:00:00Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/blog/swift-student-challenge-2025",
      lastModified: "2025-03-28T00:00:00Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/blog/cancer-plus-prc-x",
      lastModified: "2025-03-22T00:00:00Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jnx03.xyz/blog/hello-world",
      lastModified: "2024-01-18T00:00:00Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
