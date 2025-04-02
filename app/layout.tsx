import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { CookieConsent } from "@/components/cookie-consent"
import { LanguageProvider } from "@/lib/i18n"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

export const metadata: Metadata = {
  title: "JNX03 - Developer Portfolio | AI, Cybersecurity & Accessibility",
  description:
    "Jean (JNX03)'s personal portfolio showcasing projects and skills in AI, cybersecurity, and accessibility technology. Award-winning developer from Thailand.",
  metadataBase: new URL("https://jnx03.xyz"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "https://jnx03.xyz/rss.xml",
      "application/atom+xml": "https://jnx03.xyz/atom.xml",
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "JNX03 - Developer Portfolio | AI, Cybersecurity & Accessibility",
    description:
      "Jean (JNX03)'s personal portfolio showcasing projects and skills in AI, cybersecurity, and accessibility technology. Award-winning developer from Thailand.",
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
    title: "JNX03 - Developer Portfolio | AI, Cybersecurity & Accessibility",
    description:
      "Jean (JNX03)'s personal portfolio showcasing projects and skills in AI, cybersecurity, and accessibility technology. Award-winning developer from Thailand.",
    images: ["https://jnx03.xyz/og-image.jpg"],
    creator: "@jxxn03z",
  },
  icons: {
    icon: "https://avatars.githubusercontent.com/u/112270477?v=4",
    shortcut: "https://avatars.githubusercontent.com/u/112270477?v=4",
    apple: "https://avatars.githubusercontent.com/u/112270477?v=4",
  },
  keywords: [
    "JNX03",
    "Chawabhon Netisingha",
    "developer",
    "AI",
    "artificial intelligence",
    "cybersecurity",
    "accessibility",
    "Thailand",
    "portfolio",
    "Swift Student Challenge",
    "EibrailleNext",
    "Notex",
    "Nova",
  ],
  authors: [{ name: "Chawabhon Netisingha", url: "https://jnx03.xyz" }],
  category: "Technology",
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE", // Replace with your actual verification code
  },
  appleWebApp: {
    capable: true,
    title: "JNX03 Portfolio",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
    generator: 'v0.dev'
}

// Move themeColor to viewport export
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-6423546523017297" />
        <link rel="canonical" href="https://jnx03.xyz" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="JNX03's Portfolio RSS Feed"
          href="https://jnx03.xyz/rss.xml"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="JNX03's Portfolio Atom Feed"
          href="https://jnx03.xyz/atom.xml"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="https://media.licdn.com/dms/image/v2/D4D03AQGGUriUQXl-Kw/profile-displayphoto-shrink_800_800/B4DZTcKo4yHIAc-/0/1738860565159?e=1745452800&v=beta&t=JHFPZzyh-K3hQ00A7vm5bys3PYec16oD2ETUEyntA30"
          as="image"
        />

        {/* High contrast mode styles */}
        <style>
          {`
            .high-contrast {
              filter: contrast(1.5);
            }
            .high-contrast body {
              background-color: #000 !important;
              color: #fff !important;
            }
            .high-contrast a {
              color: #ffff00 !important;
            }
            .high-contrast button {
              border: 2px solid #fff !important;
            }
          `}
        </style>
      </head>
      <body className={`${inter.className} pt-14`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
            <CookieConsent />
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </LanguageProvider>

        {/* Load non-critical scripts with lower priority */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6423546523017297"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script id="register-service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(
                  function(registration) {
                    console.log('Service Worker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('Service Worker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>

        {/* Structured data */}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jean (JNX03)",
              "alternateName": "Chawabhon Netisingha",
              "url": "https://jnx03.xyz",
              "image": "https://avatars.githubusercontent.com/u/112270477?v=4",
              "sameAs": [
                "https://github.com/JNX03",
                "https://www.instagram.com/jxxn03z/",
                "https://www.youtube.com/@Jnx03",
                "https://www.youtube.com/@Jnx03Studio",
                "https://www.tiktok.com/@jxxn03z",
                "https://www.linkedin.com/in/chawabhon-netisingha-4a60a034a"
              ],
              "jobTitle": "Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-employed"
              },
              "description": "Developer and tech enthusiast with a passion for AI, cybersecurity, and accessibility technology.",
              "knowsAbout": ["Artificial Intelligence", "Cybersecurity", "Accessibility Technology", "Web Development", "Swift", "Python"],
              "award": [
                "Swift Student Challenge 2025 Winner",
                "AI Innovator Award 2024",
                "Thailand ICT Awards 2023 Winner",
                "Asia Pacific ICT Alliance Award 2023 Merit Award"
              ]
            }
          `}
        </Script>
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://jnx03.xyz",
              "name": "JNX03 Portfolio",
              "description": "Developer and tech enthusiast focused on AI, cybersecurity, and accessibility technology",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://jnx03.xyz/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'