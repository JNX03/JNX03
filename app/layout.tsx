import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "JNX03 - Developer Portfolio",
  description:
    "Jean (JNX03)'s personal portfolio showcasing projects and skills in AI, cybersecurity, and accessibility technology.",
  metadataBase: new URL("https://jnx03.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JNX03 - Developer Portfolio",
    description:
      "Jean (JNX03)'s personal portfolio showcasing projects and skills in AI, cybersecurity, and accessibility technology.",
    url: "https://jnx03.xyz",
    siteName: "JNX03 Portfolio",
    images: [
      {
        url: "https://jnx03.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JNX03 Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JNX03 - Developer Portfolio",
    description:
      "Jean (JNX03)'s personal portfolio showcasing projects and skills in AI, cybersecurity, and accessibility technology.",
    images: ["https://jnx03.xyz/og-image.jpg"],
  },
  icons: {
    icon: "https://avatars.githubusercontent.com/u/112270477?v=4",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-6423546523017297" />
        <link rel="canonical" href="https://jnx03.xyz" />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jean (JNX03)",
              "url": "https://jnx03.xyz",
              "sameAs": [
                "https://github.com/JNX03",
                "https://www.instagram.com/jxxn03z/",
                "https://www.youtube.com/@Jnx03",
                "https://www.tiktok.com/@jxxn03z"
              ],
              "jobTitle": "Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-employed"
              },
              "description": "Developer and tech enthusiast with a passion for AI, cybersecurity, and accessibility technology."
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6423546523017297"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}



import './globals.css'