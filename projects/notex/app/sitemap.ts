import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://notex.jnx03.xyz"
  const currentDate = new Date()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Notes pages
  const notes = [
    { path: "/file/ScienctM3Energy.pdf" },
    { path: "/file/ScienctM3WaveMagnetLight.pdf" },
    { path: "/file/ScienctM3Solar.pdf" },
    { path: "/file/ScienctM3Chemical.pdf" },
    { path: "/file/Chemical1.pdf" },
    { path: "/file/Chemical2.pdf" },
    { path: "/file/English.pdf" },
    { path: "/file/M4health_education.pdf" },
  ]

  const notePages = notes.map((note) => ({
    url: `${baseUrl}${note.path}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...mainPages, ...notePages]
}
