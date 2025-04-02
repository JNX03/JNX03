"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage, type Language } from "@/lib/i18n"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
]

export function LanguageSwitcher() {
  const { theme } = useTheme()
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
  }

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code as Language)}
            className={`flex items-center gap-2 cursor-pointer ${
              language === lang.code ? (theme === "light" ? "bg-gray-100" : "bg-gray-800") : ""
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span>{lang.name}</span>
            {language === lang.code && (
              <span className={`ml-2 h-2 w-2 rounded-full ${theme === "light" ? "bg-green-500" : "bg-green-400"}`} />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

