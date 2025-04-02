export async function GET() {
  const baseUrl = "https://jnx03.xyz"
  const currentDate = new Date().toISOString()

  const feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>JNX03's Portfolio</title>
  <subtitle>Developer and tech enthusiast focused on AI, cybersecurity, and accessibility technology</subtitle>
  <link href="${baseUrl}/atom.xml" rel="self"/>
  <link href="${baseUrl}/"/>
  <updated>${currentDate}</updated>
  <id>${baseUrl}/</id>
  <author>
    <name>Jean (JNX03)</name>
    <email>contact@jnx03.xyz</email>
    <uri>${baseUrl}</uri>
  </author>
  
  <entry>
    <title>Swift Student Challenge 2025 Winner!</title>
    <link href="${baseUrl}/blog/swift-student-challenge-2025"/>
    <id>${baseUrl}/blog/swift-student-challenge-2025</id>
    <updated>${currentDate}</updated>
    <summary>Chawabhon Netisingha (JNX03) wins the Swift Student Challenge 2025 with Syntaxia project</summary>
    <content type="html">
      <![CDATA[
        <p>I'm incredibly excited and honored to share that I've been selected as a winner of the Swift Student Challenge 2025! This recognition from Apple is a tremendous milestone in my journey as a developer.</p>
        <p><a href="${baseUrl}/blog/swift-student-challenge-2025">Read more</a></p>
      ]]>
    </content>
    <category term="Swift"/>
    <category term="SwiftUI"/>
    <category term="Apple"/>
    <category term="Achievement"/>
  </entry>
  
  <entry>
    <title>Cancer Plus Prc X: Advanced Encryption Library</title>
    <link href="${baseUrl}/blog/cancer-plus-prc-x"/>
    <id>${baseUrl}/blog/cancer-plus-prc-x</id>
    <updated>${currentDate}</updated>
    <summary>Introducing Cancer Plus Prc X, a multi-layered encryption library for Python and NPM</summary>
    <content type="html">
      <![CDATA[
        <p>I'm excited to announce the release of my new encryption/decryption library: Cancer Plus Prc X. This library provides military-grade encryption for your sensitive data with a unique multi-layered approach.</p>
        <p><a href="${baseUrl}/blog/cancer-plus-prc-x">Read more</a></p>
      ]]>
    </content>
    <category term="Encryption"/>
    <category term="Security"/>
    <category term="Python"/>
    <category term="NPM"/>
  </entry>
  
  <entry>
    <title>Launching My Social Media Project</title>
    <link href="${baseUrl}/blog/social-media-project"/>
    <id>${baseUrl}/blog/social-media-project</id>
    <updated>${currentDate}</updated>
    <summary>Announcing the launch of my YouTube channels and TikTok account for tech content</summary>
    <content type="html">
      <![CDATA[
        <p>I'm excited to announce that I've officially launched my social media project! After months of planning and preparation, I've started posting videos on my YouTube channel and TikTok account.</p>
        <p><a href="${baseUrl}/blog/social-media-project">Read more</a></p>
      ]]>
    </content>
    <category term="YouTube"/>
    <category term="TikTok"/>
    <category term="Content Creation"/>
  </entry>
  
  <entry>
    <title>Accepted into Super AI Engineer SS5 Level 2!</title>
    <link href="${baseUrl}/blog/super-ai-engineer-ss5"/>
    <id>${baseUrl}/blog/super-ai-engineer-ss5</id>
    <updated>${currentDate}</updated>
    <summary>Selected for the prestigious Super AI Engineer SS5 Level 2 program in Thailand (500712)</summary>
    <content type="html">
      <![CDATA[
        <p>I'm thrilled to announce that I've been accepted into the Super AI Engineer SS5 Level 2 program in Thailand (500712)! This is a significant milestone in my AI journey.</p>
        <p><a href="${baseUrl}/blog/super-ai-engineer-ss5">Read more</a></p>
      ]]>
    </content>
    <category term="AI"/>
    <category term="Achievement"/>
    <category term="Thailand"/>
    <category term="500712"/>
  </entry>
  
  <entry>
    <title>EibrailleNext Launch</title>
    <link href="https://eibraillenext.jnx03.xyz/"/>
    <id>https://eibraillenext.jnx03.xyz/</id>
    <updated>${currentDate}</updated>
    <summary>Launched EibrailleNext - A Blind Learning Platform</summary>
    <content type="html">
      <![CDATA[
        <p>EibrailleNext is a web application designed to assist blind and low-vision users in learning Braille. It emphasizes accessibility by adhering to W3C standards.</p>
        <p><a href="https://eibraillenext.jnx03.xyz/">Visit EibrailleNext</a></p>
      ]]>
    </content>
    <category term="Accessibility"/>
    <category term="Education"/>
    <category term="Web Development"/>
  </entry>
  
  <entry>
    <title>Notex Platform</title>
    <link href="https://notex.jnx03.xyz/"/>
    <id>https://notex.jnx03.xyz/</id>
    <updated>${currentDate}</updated>
    <summary>High school study notes platform</summary>
    <content type="html">
      <![CDATA[
        <p>Notex serves as a centralized platform for students to access well-organized notes that can aid in their studies. The notes are categorized by subject and educational level.</p>
        <p><a href="https://notex.jnx03.xyz/">Visit Notex</a></p>
      ]]>
    </content>
    <category term="Education"/>
    <category term="Study Notes"/>
    <category term="Web Development"/>
  </entry>
  
  <entry>
    <title>Nova Development</title>
    <link href="https://nova.jnx03.xyz/"/>
    <id>https://nova.jnx03.xyz/</id>
    <updated>${currentDate}</updated>
    <summary>AI-powered penetration testing platform in development</summary>
    <content type="html">
      <![CDATA[
        <p>Nova (Beta Secrety) harnesses the power of superBetas to detect vulnerabilities in your website's defenses. Illuminate security flaws before they explode into major issues.</p>
        <p><a href="https://nova.jnx03.xyz/">Visit Nova</a></p>
      ]]>
    </content>
    <category term="Cybersecurity"/>
    <category term="AI"/>
    <category term="Web Development"/>
  </entry>
</feed>`

  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  })
}

