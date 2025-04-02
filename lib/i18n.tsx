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
    letsConnect: "Let's Connect",
    connectDiscussion:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",

    // Hero section
    aiDeveloper: "AI Developer",
    techInnovator: "Tech Innovator",
    cybersecurityEnthusiast: "Cybersecurity Enthusiast",
    studentResearcher: "Student Researcher",
    problemSolver: "Problem Solver",
    heroDescription:
      "Passionate about leveraging AI and technology to create innovative solutions that make a positive impact on society.",

    // Projects section
    featuredProjects: "Featured Projects",
    meetYukiChan: "Meet Yuki-Chan",
    yukiChanDescription:
      "My latest AI assistant project, designed to help with programming, learning, and everyday tasks. Yuki-Chan combines natural language processing with a friendly interface.",

    // Awards section
    latestAchievement: "Latest Achievement",
    aiInnovatorAward: "AI Innovator Award 2024",
    superAIEngineer: "Super AI Engineer",
    superAILevel: "SS5 Level 2 (500712)",
    thailandICTAward: "Thailand ICT Awards 2023",
    thailandICTDescription: "Winner Award in the Senior Category for innovative technology solutions.",
    apictaAward: "APICTA 2023",
    apictaDescription: "Merit Award at the Asia Pacific ICT Alliance Awards in Hong Kong.",
    youngInnovator: "Winner of the Young Innovator category with a prize of 100,000 THB.",

    // Footer
    aboutJNX03: "About JNX03",
    aboutDescription:
      "Developer and tech enthusiast focused on AI, cybersecurity, and accessibility technology. Creating innovative solutions to make a positive impact on society.",
    quickLinks: "Quick Links",
    systemStatus: "System Status",
    statusDescription: "All systems are monitored 24/7. Check the status of all JNX03 services at",
    lastUpdated: "Last updated",
    allRightsReserved: "All rights reserved",

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
    contactInformation: "Contact Information",
    connectWithMe: "Connect with Me",
    officeHours: "Office Hours",
    availabilityDescription: "I'm generally available for meetings and calls during the following hours:",
    mondayToFriday: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    workingHoursWeekday: "9:00 AM - 6:00 PM (ICT)",
    workingHoursWeekend: "10:00 AM - 2:00 PM (ICT)",
    closed: "Closed",
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
    letsConnect: "มาเชื่อมต่อกัน",
    connectDiscussion: "ฉันเปิดรับการพูดคุยเกี่ยวกับโปรเจกต์ใหม่ ไอเดียสร้างสรรค์ หรือโอกาสที่จะเป็นส่วนหนึ่งของวิสัยทัศน์ของคุณเสมอ",

    // Hero section
    aiDeveloper: "นักพัฒนา AI",
    techInnovator: "นวัตกรเทคโนโลยี",
    cybersecurityEnthusiast: "ผู้เชี่ยวชาญด้านความปลอดภัยไซเบอร์",
    studentResearcher: "นักวิจัยนักเรียน",
    problemSolver: "นักแก้ปัญหา",
    heroDescription: "มีความหลงใหลในการใช้ AI และเทคโนโลยีเพื่อสร้างโซลูชันนวัตกรรมที่สร้างผลกระทบเชิงบวกต่อสังคม",

    // Projects section
    featuredProjects: "โปรเจกต์แนะนำ",
    meetYukiChan: "พบกับ Yuki-Chan",
    yukiChanDescription:
      "โปรเจกต์ผู้ช่วย AI ล่าสุดของฉัน ออกแบบมาเพื่อช่วยในการเขียนโปรแกรม การเรียนรู้ และงานประจำวัน Yuki-Chan ผสมผสานการประมวลผลภาษาธรรมชาติกับอินเตอร์เฟซที่เป็นมิตร",

    // Awards section
    latestAchievement: "ความสำเร็จล่าสุด",
    aiInnovatorAward: "รางวัลนวัตกร AI 2024",
    superAIEngineer: "วิศวกร AI ระดับสูง",
    superAILevel: "SS5 ระดับ 2 (500712)",
    thailandICTAward: "รางวัล ICT ประเทศไทย 2023",
    thailandICTDescription: "รางวัลชนะเลิศในประเภทอาวุโสสำหรับโซลูชันเทคโนโลยีนวัตกรรม",
    apictaAward: "APICTA 2023",
    apictaDescription: "รางวัลชมเชยในงาน Asia Pacific ICT Alliance Awards ที่ฮ่องกง",
    youngInnovator: "ผู้ชนะในประเภทนวัตกรรุ่นเยาว์ด้วยรางวัล 100,000 บาท",

    // Footer
    aboutJNX03: "เกี่ยวกับ JNX03",
    aboutDescription:
      "นักพัฒนาและผู้หลงใหลในเทคโนโลยีที่มุ่งเน้นด้าน AI ความปลอดภัยทางไซเบอร์ และเทคโนโลยีการเข้าถึง สร้างโซลูชันนวัตกรรมเพื่อสร้างผลกระทบเชิงบวกต่อสังคม",
    quickLinks: "ลิงก์ด่วน",
    systemStatus: "สถานะระบบ",
    statusDescription: "ระบบทั้งหมดได้รับการตรวจสอบตลอด 24/7 ตรวจสอบสถานะของบริการ JNX03 ทั้งหมดที่",
    lastUpdated: "อัปเดตล่าสุด",
    allRightsReserved: "สงวนลิขสิทธิ์",

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
    contactInformation: "ข้อมูลการติดต่อ",
    connectWithMe: "เชื่อมต่อกับฉัน",
    officeHours: "เวลาทำการ",
    availabilityDescription: "ฉันพร้อมให้บริการสำหรับการประชุมและการโทรในช่วงเวลาต่อไปนี้:",
    mondayToFriday: "วันจันทร์ - วันศุกร์",
    saturday: "วันเสาร์",
    sunday: "วันอาทิตย์",
    workingHoursWeekday: "9:00 น. - 18:00 น. (ICT)",
    workingHoursWeekend: "10:00 น. - 14:00 น. (ICT)",
    closed: "ปิดทำการ",
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
    letsConnect: "让我们连接",
    connectDiscussion: "我一直愿意讨论新项目、创意想法或成为您愿景的一部分的机会。",

    // Hero section
    aiDeveloper: "AI 开发者",
    techInnovator: "技术创新者",
    cybersecurityEnthusiast: "网络安全爱好者",
    studentResearcher: "学生研究员",
    problemSolver: "问题解决者",
    heroDescription: "热衷于利用 AI 和技术创造创新解决方案，对社会产生积极影响。",

    // Projects section
    featuredProjects: "精选项目",
    meetYukiChan: "认识 Yuki-Chan",
    yukiChanDescription:
      "我最新的 AI 助手项目，旨在帮助编程、学习和日常任务。Yuki-Chan 将自然语言处理与友好界面相结合。",

    // Awards section
    latestAchievement: "最新成就",
    aiInnovatorAward: "2024 年 AI 创新者奖",
    superAIEngineer: "超级 AI 工程师",
    superAILevel: "SS5 级别 2 (500712)",
    thailandICTAward: "2023 年泰国 ICT 奖",
    thailandICTDescription: "高级类别创新技术解决方案获奖者",
    apictaAward: "APICTA 2023",
    apictaDescription: "在香港亚太 ICT 联盟奖中获得荣誉奖",
    youngInnovator: "青年创新者类别获奖者，奖金 100,000 泰铢",

    // Footer
    aboutJNX03: "关于 JNX03",
    aboutDescription: "专注于 AI、网络安全和无障碍技术的开发者和技术爱好者。创造创新解决方案，对社会产生积极影响。",
    quickLinks: "快速链接",
    systemStatus: "系统状态",
    statusDescription: "所有系统全天候监控。在以下网址查看所有 JNX03 服务的状态",
    lastUpdated: "最后更新",
    allRightsReserved: "版权所有",

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
    contactInformation: "联系信息",
    connectWithMe: "与我连接",
    officeHours: "工作时间",
    availabilityDescription: "我通常在以下时间段内可以进行会议和通话：",
    mondayToFriday: "周一至周五",
    saturday: "周六",
    sunday: "周日",
    workingHoursWeekday: "9:00 - 18:00 (ICT)",
    workingHoursWeekend: "10:00 - 14:00 (ICT)",
    closed: "休息",
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
    letsConnect: "つながりましょう",
    connectDiscussion:
      "新しいプロジェクト、創造的なアイデア、またはあなたのビジョンの一部となる機会について話し合うことをいつでも歓迎します。",

    // Hero section
    aiDeveloper: "AI開発者",
    techInnovator: "技術革新者",
    cybersecurityEnthusiast: "サイバーセキュリティ愛好家",
    studentResearcher: "学生研究者",
    problemSolver: "問題解決者",
    heroDescription:
      "AIとテクノロジーを活用して、社会にポジティブな影響を与える革新的なソリューションを作ることに情熱を持っています。",

    // Projects section
    featuredProjects: "注目のプロジェクト",
    meetYukiChan: "Yuki-Chanに会う",
    yukiChanDescription:
      "プログラミング、学習、日常のタスクを支援するために設計された最新のAIアシスタントプロジェクト。Yuki-Chanは自然言語処理とフレンドリーなインターフェースを組み合わせています。",

    // Awards section
    latestAchievement: "最新の成果",
    aiInnovatorAward: "AIイノベーター賞2024",
    superAIEngineer: "スーパーAIエンジニア",
    superAILevel: "SS5レベル2（500712）",
    thailandICTAward: "タイICTアワード2023",
    thailandICTDescription: "革新的な技術ソリューションのシニアカテゴリーで受賞",
    apictaAward: "APICTA 2023",
    apictaDescription: "香港でのアジア太平洋ICTアライアンス賞でメリット賞を受賞",
    youngInnovator: "ヤングイノベーターカテゴリーで優勝し、賞金10万タイバーツを獲得",

    // Footer
    aboutJNX03: "JNX03について",
    aboutDescription:
      "AI、サイバーセキュリティ、アクセシビリティ技術に焦点を当てた開発者とテクノロジー愛好家。社会にポジティブな影響を与える革新的なソリューションを作成しています。",
    quickLinks: "クイックリンク",
    systemStatus: "システム状態",
    statusDescription:
      "すべてのシステムは24時間365日監視されています。すべてのJNX03サービスの状態を次の場所で確認してください",
    lastUpdated: "最終更新",
    allRightsReserved: "全著作権所有",

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
    contactInformation: "連絡先情報",
    connectWithMe: "つながる",
    officeHours: "営業時間",
    availabilityDescription: "一般的に、以下の時間帯に会議や通話が可能です：",
    mondayToFriday: "月曜日〜金曜日",
    saturday: "土曜日",
    sunday: "日曜日",
    workingHoursWeekday: "9:00〜18:00（ICT）",
    workingHoursWeekend: "10:00〜14:00（ICT）",
    closed: "休業",
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
    letsConnect: "연결해요",
    connectDiscussion:
      "새로운 프로젝트, 창의적인 아이디어 또는 귀하의 비전에 참여할 기회에 대해 논의하는 것을 항상 환영합니다.",

    // Hero section
    aiDeveloper: "AI 개발자",
    techInnovator: "기술 혁신가",
    cybersecurityEnthusiast: "사이버 보안 전문가",
    studentResearcher: "학생 연구원",
    problemSolver: "문제 해결사",
    heroDescription:
      "AI와 기술을 활용하여 사회에 긍정적인 영향을 미치는 혁신적인 솔루션을 만드는 데 열정을 가지고 있습니다.",

    // Projects section
    featuredProjects: "주요 프로젝트",
    meetYukiChan: "Yuki-Chan 만나기",
    yukiChanDescription:
      "프로그래밍, 학습 및 일상 작업을 돕기 위해 설계된 최신 AI 어시스턴트 프로젝트입니다. Yuki-Chan은 자연어 처리와 친근한 인터페이스를 결합합니다.",

    // Awards section
    latestAchievement: "최신 성과",
    aiInnovatorAward: "AI 혁신가 상 2024",
    superAIEngineer: "슈퍼 AI 엔지니어",
    superAILevel: "SS5 레벨 2 (500712)",
    thailandICTAward: "태국 ICT 어워드 2023",
    thailandICTDescription: "혁신적인 기술 솔루션 시니어 카테고리 수상자",
    apictaAward: "APICTA 2023",
    apictaDescription: "홍콩에서 열린 아시아 태평양 ICT 얼라이언스 어워드에서 공로상 수상",
    youngInnovator: "100,000 THB의 상금과 함께 청년 혁신가 카테고리 우승자",

    // Footer
    aboutJNX03: "JNX03 소개",
    aboutDescription:
      "AI, 사이버 보안 및 접근성 기술에 중점을 둔 개발자 및 기술 애호가. 사회에 긍정적인 영향을 미치는 혁신적인 솔루션을 만듭니다.",
    quickLinks: "빠른 링크",
    systemStatus: "시스템 상태",
    statusDescription: "모든 시스템은 24/7 모니터링됩니다. 다음에서 모든 JNX03 서비스의 상태를 확인하세요",
    lastUpdated: "마지막 업데이트",
    allRightsReserved: "모든 권리 보유",

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
    contactInformation: "연락처 정보",
    connectWithMe: "연결하기",
    officeHours: "근무 시간",
    availabilityDescription: "일반적으로 다음 시간에 회의 및 통화가 가능합니다:",
    mondayToFriday: "월요일 - 금요일",
    saturday: "토요일",
    sunday: "일요일",
    workingHoursWeekday: "9:00 - 18:00 (ICT)",
    workingHoursWeekend: "10:00 - 14:00 (ICT)",
    closed: "휴무",
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

