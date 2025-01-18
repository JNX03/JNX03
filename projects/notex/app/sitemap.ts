import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = [
    { path: '/file/ScienctM3Energy.pdf' },
    { path: '/file/ScienctM3WaveMagnetLight.pdf' },
    { path: '/file/ScienctM3Solar.pdf' },
    { path: '/file/ScienctM3Chemical.pdf' },
    { path: '/file/Chemical1.pdf' },
    { path: '/file/Chemical2.pdf' },
    { path: '/file/English.pdf' },
    { path: '/file/M4health_education.pdf' },
  ]

  return [
    {
      url: 'https://notex.jnx03.xyz',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...notes.map((note) => ({
      url: `https://notex.jnx03.xyz${note.path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  ]
}

