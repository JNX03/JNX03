"use client"

// Define available languages
export type Language = "en" | "th" | "zh" | "ja" | "ko"

// Define translations for each language
export const translations = {
  en: {
    // Navigation
    home: "Home",
    research: "Research",
    projects: "Projects",
    education: "Education",
    experience: "Experience",
    awards: "Awards",
    blog: "Blog",
    resume: "Resume",
    links: "Links",
    contact: "Contact",

    // Common
    getInTouch: "Get in touch",
    viewProjects: "View Projects",
    learnMore: "Learn more",

    // Hero section
    aiDeveloper: "AI Developer",
    techInnovator: "Tech Innovator",
    cybersecurityEnthusiast: "Cybersecurity Enthusiast",
    studentResearcher: "Student Researcher",
    problemSolver: "Problem Solver",
    heroDescription:
      "Passionate about leveraging AI and technology to create innovative solutions that make a positive impact on society. Currently focused on AI research, cybersecurity, and accessibility technology.",

    // Skills
    machineLearning: "Machine Learning",
    computerVision: "Computer Vision",
    naturalLanguageProcessing: "NLP",
    fullStackDevelopment: "Full Stack",
    cybersecurity: "Cybersecurity",

    // Projects section
    featuredProjects: "Featured Projects",
    eibrailleNext: "EibrailleNext",
    eibrailleNextDesc:
      "A comprehensive blind learning platform designed to make education accessible for visually impaired students.",
    novaSecurity: "Nova Security",
    novaSecurityDesc: "AI-powered automated penetration testing and bug bounty platform for businesses.",
    noteX: "NoteX",
    noteXDesc: "A comprehensive note-taking platform for high school subjects with progress tracking.",

    // Yuki-Chan section
    meetYukiChan: "Meet Yuki-Chan",
    yukiChanDesc:
      "My latest AI assistant project, designed to help with programming, learning, and everyday tasks. Yuki-Chan combines natural language processing with a friendly interface.",

    // Awards section
    awardsAndRecognition: "Awards & Recognition",
    aiInnovatorAward: "AI Innovator Award 2024",
    aiInnovatorDesc: "Winner of the Young Innovator category with a prize of 100,000 THB.",
    thailandICTAwards: "Thailand ICT Awards 2023",
    thailandICTDesc: "Winner Award in the Senior Category for innovative technology solutions.",
    apicta2023: "APICTA 2023",
    apictaDesc: "Merit Award at the Asia Pacific ICT Alliance Awards in Hong Kong.",

    // Call to Action
    letsConnect: "Let's Connect",
    letsConnectDesc:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",

    // Footer
    allRightsReserved: "All rights reserved",
    latestAchievement: "Latest Achievement",

    // Contact form
    name: "Name",
    email: "Email",
    subject: "Subject (Optional)",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message Sent",
    thankYou: "Thank you for your message. I'll get back to you soon!",
    error: "Error",
    failedToSend: "Failed to send message. Please try again later.",
  },

  th: {
    // Navigation
    home: "หน้าแรก",
    research: "งานวิจัย",
    projects: "โปรเจกต์",
    education: "การศึกษา",
    experience: "ประสบการณ์",
    awards: "รางวัล",
    blog: "บล็อก",
    resume: "ประวัติย่อ",
    links: "ลิงก์",
    contact: "ติดต่อ",

    // Common
    getInTouch: "ติดต่อเรา",
    viewProjects: "ดูโปรเจกต์",
    learnMore: "เรียนรู้เพิ่มเติม",

    // Hero section
    aiDeveloper: "นักพัฒนา AI",
    techInnovator: "นวัตกรเทคโนโลยี",
    cybersecurityEnthusiast: "ผู้เชี่ยวชาญด้านความปลอดภัยไซเบอร์",
    studentResearcher: "นักวิจัยนักเรียน",
    problemSolver: "นักแก้ปัญหา",
    heroDescription:
      "มีความหลงใหลในการใช้ AI และเทคโนโลยีเพื่อสร้างโซลูชันนวัตกรรมที่สร้างผลกระทบเชิงบวกต่อสังคม ปัจจุบันมุ่งเน้นการวิจัย AI ความปลอดภัยทางไซเบอร์ และเทคโนโลยีการเข้าถึง",

    // Skills
    machineLearning: "การเรียนรู้ของเครื่อง",
    computerVision: "คอมพิวเตอร์วิชั่น",
    naturalLanguageProcessing: "การประมวลผลภาษาธรรมชาติ",
    fullStackDevelopment: "การพัฒนาแบบ Full Stack",
    cybersecurity: "ความปลอดภัยทางไซเบอร์",

    // Projects section
    featuredProjects: "โปรเจกต์แนะนำ",
    eibrailleNext: "EibrailleNext",
    eibrailleNextDesc:
      "แพลตฟอร์มการเรียนรู้สำหรับผู้พิการทางสายตาที่ออกแบบมาเพื่อให้การศึกษาเข้าถึงได้สำหรับนักเรียนที่มีความบกพร่องทางการมองเห็น",
    novaSecurity: "Nova Security",
    novaSecurityDesc: "แพลตฟอร์มทดสอบการเจาะระบบและค้นหาช่องโหว่อัตโนมัติด้วย AI สำหรับธุรกิจ",
    noteX: "NoteX",
    noteXDesc: "แพลตฟอร์มจดบันทึกสำหรับวิชาในระดับมัธยมศึกษาพร้อมการติดตามความก้าวหน้า",

    // Yuki-Chan section
    meetYukiChan: "พบกับ Yuki-Chan",
    yukiChanDesc:
      "โปรเจกต์ผู้ช่วย AI ล่าสุดของฉัน ออกแบบมาเพื่อช่วยในการเขียนโปรแกรม การเรียนรู้ และงานประจำวัน Yuki-Chan ผสมผสานการประมวลผลภาษาธรรมชาติกับอินเตอร์เฟซที่เป็นมิตร",

    // Awards section
    awardsAndRecognition: "รางวัลและการยอมรับ",
    aiInnovatorAward: "รางวัลนวัตกร AI ปี 2024",
    aiInnovatorDesc: "ผู้ชนะในหมวดนวัตกรรุ่นเยาว์ด้วยรางวัลมูลค่า 100,000 บาท",
    thailandICTAwards: "รางวัล Thailand ICT Awards 2023",
    thailandICTDesc: "รางวัลชนะเลิศในหมวดอาวุโสสำหรับโซลูชันเทคโนโลยีนวัตกรรม",
    apicta2023: "APICTA 2023",
    apictaDesc: "รางวัล Merit Award ในงาน Asia Pacific ICT Alliance Awards ที่ฮ่องกง",

    // Call to Action
    letsConnect: "มาเชื่อมต่อกัน",
    letsConnectDesc: "ฉันเปิดรับการพูดคุยเกี่ยวกับโปรเจกต์ใหม่ ไอเดียสร้างสรรค์ หรือโอกาสที่จะเป็นส่วนหนึ่งของวิสัยทัศน์ของคุณเสมอ",

    // Footer
    allRightsReserved: "สงวนลิขสิทธิ์",
    latestAchievement: "ความสำเร็จล่าสุด",

    // Contact form
    name: "ชื่อ",
    email: "อีเมล",
    subject: "หัวข้อ (ไม่บังคับ)",
    message: "ข้อความ",
    sendMessage: "ส่งข้อความ",
    sending: "กำลังส่ง...",
    messageSent: "ส่งข้อความแล้ว",
    thankYou: "ขอบคุณสำหรับข้อความของคุณ ฉันจะติดต่อกลับโดยเร็วที่สุด!",
    error: "ข้อผิดพลาด",
    failedToSend: "ไม่สามารถส่งข้อความได้ กรุณาลองอีกครั้งในภายหลัง",
  },

  zh: {
    // Navigation
    home: "首页",
    research: "研究",
    projects: "项目",
    education: "教育",
    experience: "经验",
    awards: "奖项",
    blog: "博客",
    resume: "简历",
    links: "链接",
    contact: "联系",

    // Common
    getInTouch: "联系我们",
    viewProjects: "查看项目",
    learnMore: "了解更多",

    // Hero section
    aiDeveloper: "AI 开发者",
    techInnovator: "技术创新者",
    cybersecurityEnthusiast: "网络安全爱好者",
    studentResearcher: "学生研究员",
    problemSolver: "问题解决者",
    heroDescription:
      "热衷于利用 AI 和技术创造创新解决方案，对社会产生积极影响。目前专注于 AI 研究、网络安全和无障碍技术。",

    // Skills
    machineLearning: "机器学习",
    computerVision: "计算机视觉",
    naturalLanguageProcessing: "自然语言处理",
    fullStackDevelopment: "全栈开发",
    cybersecurity: "网络安全",

    // Projects section
    featuredProjects: "精选项目",
    eibrailleNext: "EibrailleNext",
    eibrailleNextDesc: "一个综合性的盲人学习平台，旨在使视障学生能够获得教育。",
    novaSecurity: "Nova Security",
    novaSecurityDesc: "AI 驱动的自动渗透测试和漏洞赏金平台，适用于企业。",
    noteX: "NoteX",
    noteXDesc: "一个针对高中科目的综合笔记平台，具有进度跟踪功能。",

    // Yuki-Chan section
    meetYukiChan: "认识 Yuki-Chan",
    yukiChanDesc: "我最新的 AI 助手项目，旨在帮助编程、学习和日常任务。Yuki-Chan 将自然语言处理与友好的界面相结合。",

    // Awards section
    awardsAndRecognition: "奖项与认可",
    aiInnovatorAward: "2024 年 AI 创新者奖",
    aiInnovatorDesc: "青年创新者类别的获奖者，奖金 100,000 泰铢。",
    thailandICTAwards: "2023 年泰国 ICT 奖",
    thailandICTDesc: "高级类别创新技术解决方案的获奖者。",
    apicta2023: "APICTA 2023",
    apictaDesc: "在香港举行的亚太 ICT 联盟奖中获得荣誉奖。",

    // Call to Action
    letsConnect: "让我们联系",
    letsConnectDesc: "我始终愿意讨论新项目、创意想法或成为您愿景的一部分的机会。",

    // Footer
    allRightsReserved: "版权所有",
    latestAchievement: "最新成就",

    // Contact form
    name: "姓名",
    email: "电子邮件",
    subject: "主题（可选）",
    message: "消息",
    sendMessage: "发送消息",
    sending: "发送中...",
    messageSent: "消息已发送",
    thankYou: "感谢您的留言。我会尽快回复您！",
    error: "错误",
    failedToSend: "发送消息失败。请稍后再试。",
  },

  ja: {
    // Navigation
    home: "ホーム",
    research: "研究",
    projects: "プロジェクト",
    education: "教育",
    experience: "経験",
    awards: "賞",
    blog: "ブログ",
    resume: "履歴書",
    links: "リンク",
    contact: "連絡先",

    // Common
    getInTouch: "お問い合わせ",
    viewProjects: "プロジェクトを見る",
    learnMore: "詳細を見る",

    // Hero section
    aiDeveloper: "AI開発者",
    techInnovator: "技術革新者",
    cybersecurityEnthusiast: "サイバーセキュリティ愛好家",
    studentResearcher: "学生研究者",
    problemSolver: "問題解決者",
    heroDescription:
      "AIとテクノロジーを活用して、社会にポジティブな影響を与える革新的なソリューションを作ることに情熱を持っています。現在はAI研究、サイバーセキュリティ、アクセシビリティ技術に焦点を当てています。",

    // Skills
    machineLearning: "機械学習",
    computerVision: "コンピュータビジョン",
    naturalLanguageProcessing: "自然言語処理",
    fullStackDevelopment: "フルスタック開発",
    cybersecurity: "サイバーセキュリティ",

    // Projects section
    featuredProjects: "注目のプロジェクト",
    eibrailleNext: "EibrailleNext",
    eibrailleNextDesc: "視覚障害のある学生が教育にアクセスできるように設計された包括的な盲人学習プラットフォーム。",
    novaSecurity: "Nova Security",
    novaSecurityDesc: "企業向けのAI駆動の自動ペネトレーションテストとバグバウンティプラットフォーム。",
    noteX: "NoteX",
    noteXDesc: "進捗状況の追跡機能を備えた高校科目向けの包括的なノートプラットフォーム。",

    // Yuki-Chan section
    meetYukiChan: "Yuki-Chanに会う",
    yukiChanDesc:
      "プログラミング、学習、日常のタスクを支援するために設計された最新のAIアシスタントプロジェクト。Yuki-Chanは自然言語処理とフレンドリーなインターフェースを組み合わせています。",

    // Awards section
    awardsAndRecognition: "賞と認識",
    aiInnovatorAward: "2024年AIイノベーター賞",
    aiInnovatorDesc: "若手イノベーターカテゴリーの受賞者で、賞金10万タイバーツ。",
    thailandICTAwards: "2023年タイICT賞",
    thailandICTDesc: "革新的な技術ソリューションのシニアカテゴリーでの受賞者。",
    apicta2023: "APICTA 2023",
    apictaDesc: "香港で開催されたアジア太平洋ICTアライアンス賞でのメリット賞。",

    // Call to Action
    letsConnect: "つながりましょう",
    letsConnectDesc:
      "新しいプロジェクト、創造的なアイデア、またはあなたのビジョンの一部になる機会について話し合うことをいつでも歓迎します。",

    // Footer
    allRightsReserved: "全著作権所有",
    latestAchievement: "最新の成果",

    // Contact form
    name: "名前",
    email: "メール",
    subject: "件名（任意）",
    message: "メッセージ",
    sendMessage: "メッセージを送信",
    sending: "送信中...",
    messageSent: "メッセージが送信されました",
    thankYou: "メッセージをありがとうございます。すぐに返信いたします！",
    error: "エラー",
    failedToSend: "メッセージの送信に失敗しました。後でもう一度お試しください。",
  },

  ko: {
    // Navigation
    home: "홈",
    research: "연구",
    projects: "프로젝트",
    education: "교육",
    experience: "경험",
    awards: "수상",
    blog: "블로그",
    resume: "이력서",
    links: "링크",
    contact: "연락처",

    // Common
    getInTouch: "연락하기",
    viewProjects: "프로젝트 보기",
    learnMore: "더 알아보기",

    // Hero section
    aiDeveloper: "AI 개발자",
    techInnovator: "기술 혁신가",
    cybersecurityEnthusiast: "사이버 보안 전문가",
    studentResearcher: "학생 연구원",
    problemSolver: "문제 해결사",
    heroDescription:
      "AI와 기술을 활용하여 사회에 긍정적인 영향을 미치는 혁신적인 솔루션을 만드는 데 열정을 가지고 있습니다. 현재 AI 연구, 사이버 보안 및 접근성 기술에 중점을 두고 있습니다.",

    // Skills
    machineLearning: "머신 러닝",
    computerVision: "컴퓨터 비전",
    naturalLanguageProcessing: "자연어 처리",
    fullStackDevelopment: "풀 스택 개발",
    cybersecurity: "사이버 보안",

    // Projects section
    featuredProjects: "주요 프로젝트",
    eibrailleNext: "EibrailleNext",
    eibrailleNextDesc: "시각 장애 학생들이 교육에 접근할 수 있도록 설계된 종합적인 시각 장애인 학습 플랫폼입니다.",
    novaSecurity: "Nova Security",
    novaSecurityDesc: "기업을 위한 AI 기반 자동화된 침투 테스트 및 버그 바운티 플랫폼입니다.",
    noteX: "NoteX",
    noteXDesc: "진행 상황 추적 기능이 있는 고등학교 과목을 위한 종합적인 노트 플랫폼입니다.",

    // Yuki-Chan section
    meetYukiChan: "Yuki-Chan 만나기",
    yukiChanDesc:
      "프로그래밍, 학습 및 일상 작업을 돕기 위해 설계된 최신 AI 어시스턴트 프로젝트입니다. Yuki-Chan은 자연어 처리와 친근한 인터페이스를 결합합니다.",

    // Awards section
    awardsAndRecognition: "수상 및 인정",
    aiInnovatorAward: "2024년 AI 혁신가 상",
    aiInnovatorDesc: "10만 태국 바트의 상금으로 청년 혁신가 카테고리 수상자입니다.",
    thailandICTAwards: "2023년 태국 ICT 상",
    thailandICTDesc: "혁신적인 기술 솔루션으로 시니어 카테고리에서 수상했습니다.",
    apicta2023: "APICTA 2023",
    apictaDesc: "홍콩에서 열린 아시아 태평양 ICT 얼라이언스 어워드에서 메리트 상을 받았습니다.",

    // Call to Action
    letsConnect: "연결해요",
    letsConnectDesc:
      "새로운 프로젝트, 창의적인 아이디어 또는 귀하의 비전의 일부가 될 기회에 대해 논의하는 것을 항상 환영합니다.",

    // Footer
    allRightsReserved: "모든 권리 보유",
    latestAchievement: "최신 성과",

    // Contact form
    name: "이름",
    email: "이메일",
    subject: "제목 (선택사항)",
    message: "메시지",
    sendMessage: "메시지 보내기",
    sending: "전송 중...",
    messageSent: "메시지 전송됨",
    thankYou: "메시지를 보내주셔서 감사합니다. 곧 답변 드리겠습니다!",
    error: "오류",
    failedToSend: "메시지 전송에 실패했습니다. 나중에 다시 시도해주세요.",
  },
}

// Create a context to manage the language state
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.en) => string
}

const defaultLanguageContext: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: (key) => key as string,
}

export const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext)

export const useLanguage = () => useContext(LanguageContext)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en")

  // Initialize language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0] as Language
      if (Object.keys(translations).includes(browserLang)) {
        setLanguageState(browserLang)
      }
    }
  }, [])

  // Function to set language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    // Update HTML lang attribute
    document.documentElement.lang = lang
  }

  // Translation function
  const t = (key: keyof typeof translations.en): string => {
    const currentTranslations = translations[language] as Record<string, string>
    return currentTranslations[key] || translations.en[key] || (key as string)
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

