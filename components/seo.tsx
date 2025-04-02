"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogType?: "website" | "article"
  ogImage?: string
  twitterCard?: "summary" | "summary_large_image"
}

export function SEO({
  title = "JNX03 - Developer Portfolio | AI, Cybersecurity & Accessibility",
  description = "Jean (JNX03)'s personal portfolio showcasing projects and skills in AI, cybersecurity, and accessibility technology. Award-winning developer from Thailand.",
  canonicalUrl,
  ogType = "website",
  ogImage = "https://jnx03.xyz/og-image.jpg",
  twitterCard = "summary_large_image",
}: SEOProps) {
  const router = useRouter()
  const fullUrl = canonicalUrl || `https://jnx03.xyz${router.asPath}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Canonical Link */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Feeds */}
      <link rel="alternate" type="application/rss+xml" title="RSS Feed for JNX03" href="https://jnx03.xyz/rss.xml" />
      <link rel="alternate" type="application/atom+xml" title="Atom Feed for JNX03" href="https://jnx03.xyz/atom.xml" />
    </Head>
  )
}

