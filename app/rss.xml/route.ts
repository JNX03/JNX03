import RSS from "rss"

export async function GET() {
  const feed = new RSS({
    title: "JNX03's Blog",
    description: "Latest updates and insights from Chawabhon Netisingha on AI, cybersecurity, and development.",
    feed_url: "https://jnx03.xyz/rss.xml",
    site_url: "https://jnx03.xyz",
    image_url: "https://jnx03.xyz/favicon.ico",
    managingEditor: "Chawabhon Netisingha",
    webMaster: "Chawabhon Netisingha",
    copyright: "2025 Chawabhon Netisingha",
    language: "en",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  })

  // Add blog posts here, ordered by most recent
  feed.item({
    title: "Thailand Innovation Awards (TIA): Selected for INDEX and Camp! 🎉",
    description:
      "I'm excited to announce my selection for the Thailand Innovation Awards (TIA) program, including the INDEX and Camp initiatives! This is a fantastic opportunity to develop innovative solutions and collaborate with other talented individuals.",
    url: "https://jnx03.xyz/blog/tia-index-camp",
    date: "2025-06-27T00:00:00Z",
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "Moodeng AI Challenge Winners: AI for Augmenting Zoo Keepers 🏆",
    description:
      "I'm thrilled to announce that I've been recognized as a winner in the Moodeng AI Challenge for Track 3: AI for Augmenting Zoo Keepers! My project, MooDong, utilizes multi-task LSTM and vision models to extract pose, mood, hunger, and future-movement predictions for animals, all without requiring manual labels.",
    url: "https://jnx03.xyz/blog/moodeng-ai-challenge",
    date: "2025-06-25T00:00:00Z",
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "WWDC SSC25 (Thailand Meeting) 🍎",
    description:
      "I had the privilege of attending the WWDC Swift Student Challenge 2025 Thailand meeting! It was an inspiring event, connecting with fellow developers and learning about the latest advancements from Apple.",
    url: "https://jnx03.xyz/blog/wwdc-ssc25-thailand-meeting",
    date: "2025-06-22T00:00:00Z",
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "Best Presentation Award จำนวน 5,000 บาท จาก GISTDA - Kibo robot - rpc 🏆",
    description:
      "I am honored to have received the Best Presentation Award (5,000 Baht) from GISTDA at the Kibo Robot Programming Challenge. This recognition highlights my team's efforts in developing innovative solutions for space robotics and our ability to effectively communicate complex technical concepts.",
    url: "https://jnx03.xyz/blog/gistda-kibo-robot-award",
    date: "2025-07-15T00:00:00Z", // Note: Date is July 15, 2025, placed here for chronological order
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "National Software Contest (NSC): Selected for INDEX! 💻",
    description:
      "I'm excited to announce that I've been selected to participate in the National Software Contest (NSC) program, specifically for the INDEX initiative! This is a great opportunity to showcase my software development skills and contribute to innovative projects.",
    url: "https://jnx03.xyz/blog/nsc-index",
    date: "2025-06-13T00:00:00Z",
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "Accepted into Super AI Engineer SS5 Level 2! 🎉",
    description:
      "I'm thrilled to announce that I've been accepted into the Super AI Engineer SS5 Level 2 program in Thailand (500712)! This is a significant milestone in my AI journey, and I'm incredibly excited about the opportunities and challenges that lie ahead.",
    url: "https://jnx03.xyz/blog/super-ai-engineer-ss5",
    date: "2025-03-30T00:00:00Z",
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "Launching My Social Media Project 🎬",
    description:
      "I'm excited to announce that I've officially launched my social media project! After months of planning and preparation, I've started posting videos on my YouTube channel and TikTok account.",
    url: "https://jnx03.xyz/blog/social-media-project",
    date: "2025-04-01T00:00:00Z",
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "Swift Student Challenge 2025 Winner! 🏆",
    description:
      "I'm incredibly excited to announce that I've been selected as a Swift Student Challenge 2025 winner! This is a tremendous honor, and I'm grateful to Apple for this recognition of my project, Syntaxia.",
    url: "https://jnx03.xyz/blog/swift-student-challenge-2025",
    date: "2025-03-28T00:00:00Z",
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "Cancer Plus Prc X: Advanced Encryption Library",
    description:
      "I'm excited to announce the release of my new encryption/decryption library: Cancer Plus Prc X. This library provides military-grade encryption for your sensitive data with a unique multi-layered approach that makes it extremely resistant to brute force attacks.",
    url: "https://jnx03.xyz/blog/cancer-plus-prc-x",
    date: "2025-03-22T00:00:00Z",
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "Hello World 👋",
    description:
      "Hey there! I'm Jean (JNX03), a developer and tech enthusiast with a passion for making the world a better place through technology. I'm excited to start sharing my journey and projects with you through this blog.",
    url: "https://jnx03.xyz/blog/hello-world",
    date: "2024-01-18T00:00:00Z",
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "EibrailleNext Launch",
    description: "Launched EibrailleNext - A Blind Learning Platform",
    url: "https://eibraillenext.jnx03.xyz/",
    date: new Date().toISOString(),
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "Notex Platform",
    description: "High school study notes platform",
    url: "https://notex.jnx03.xyz/",
    date: new Date().toISOString(),
    author: "Chawabhon Netisingha",
  })

  feed.item({
    title: "Nova Development",
    description: "AI-powered penetration testing platform in development",
    url: "https://nova.jnx03.xyz/",
    date: new Date().toISOString(),
    author: "Chawabhon Netisingha",
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
