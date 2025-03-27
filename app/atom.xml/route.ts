export async function GET() {
  const feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>JNX03's Portfolio</title>
  <subtitle>Developer and tech enthusiast</subtitle>
  <link href="https://jnx03.xyz/atom.xml" rel="self"/>
  <link href="https://jnx03.xyz/"/>
  <updated>${new Date().toISOString()}</updated>
  <id>https://jnx03.xyz/</id>
  <author>
    <name>Jean (JNX03)</name>
  </author>
  <entry>
    <title>Swift Student Challenge 2025 Winner!</title>
    <link href="https://jnx03.xyz/blog/swift-student-challenge-2025"/>
    <id>https://jnx03.xyz/blog/swift-student-challenge-2025</id>
    <updated>${new Date().toISOString()}</updated>
    <summary>Chawabhon Netisingha (JNX03) wins the Swift Student Challenge 2025 with Syntaxia project</summary>
  </entry>
  <entry>
    <title>Cancer Plus Prc X: Advanced Encryption Library</title>
    <link href="https://jnx03.xyz/blog/cancer-plus-prc-x"/>
    <id>https://jnx03.xyz/blog/cancer-plus-prc-x</id>
    <updated>${new Date().toISOString()}</updated>
    <summary>Introducing Cancer Plus Prc X, a multi-layered encryption library for Python and NPM</summary>
  </entry>
  <entry>
    <title>EibrailleNext Launch</title>
    <link href="https://eibraillenext.jnx03.xyz/"/>
    <id>https://eibraillenext.jnx03.xyz/</id>
    <updated>${new Date().toISOString()}</updated>
    <summary>Launched EibrailleNext - A Blind Learning Platform</summary>
  </entry>
  <entry>
    <title>Notex Platform</title>
    <link href="https://notex.jnx03.xyz/"/>
    <id>https://notex.jnx03.xyz/</id>
    <updated>${new Date().toISOString()}</updated>
    <summary>High school study notes platform</summary>
  </entry>
  <entry>
    <title>Nova Development</title>
    <link href="https://nova.jnx03.xyz/"/>
    <id>https://nova.jnx03.xyz/</id>
    <updated>${new Date().toISOString()}</updated>
    <summary>AI-powered penetration testing platform in development</summary>
  </entry>
</feed>`

  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  })
}

