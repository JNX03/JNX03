export async function GET() {
  const baseUrl = "https://jnx03.xyz"
  const currentDate = new Date().toUTCString()

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>JNX03's Portfolio</title>
    <link>${baseUrl}</link>
    <description>Developer and tech enthusiast focused on AI, cybersecurity, and accessibility technology</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>Swift Student Challenge 2025 Winner!</title>
      <link>${baseUrl}/blog/swift-student-challenge-2025</link>
      <guid>${baseUrl}/blog/swift-student-challenge-2025</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Chawabhon Netisingha (JNX03) wins the Swift Student Challenge 2025 with Syntaxia project</description>
    </item>
    
    <item>
      <title>Cancer Plus Prc X: Advanced Encryption Library</title>
      <link>${baseUrl}/blog/cancer-plus-prc-x</link>
      <guid>${baseUrl}/blog/cancer-plus-prc-x</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Introducing Cancer Plus Prc X, a multi-layered encryption library for Python and NPM</description>
    </item>
    
    <item>
      <title>Launching My Social Media Project</title>
      <link>${baseUrl}/blog/social-media-project</link>
      <guid>${baseUrl}/blog/social-media-project</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Announcing the launch of my YouTube channels and TikTok account for tech content</description>
    </item>
    
    <item>
      <title>Accepted into Super AI Engineer SS5 Level 2!</title>
      <link>${baseUrl}/blog/super-ai-engineer-ss5</link>
      <guid>${baseUrl}/blog/super-ai-engineer-ss5</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Selected for the prestigious Super AI Engineer SS5 Level 2 program in Thailand (500712)</description>
    </item>
    
    <item>
      <title>EibrailleNext Launch</title>
      <link>https://eibraillenext.jnx03.xyz/</link>
      <guid>https://eibraillenext.jnx03.xyz/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Launched EibrailleNext - A Blind Learning Platform</description>
    </item>
    
    <item>
      <title>Notex Platform</title>
      <link>https://notex.jnx03.xyz/</link>
      <guid>https://notex.jnx03.xyz/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>High school study notes platform</description>
    </item>
    
    <item>
      <title>Nova Development</title>
      <link>https://nova.jnx03.xyz/</link>
      <guid>https://nova.jnx03.xyz/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>AI-powered penetration testing platform in development</description>
    </item>
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
