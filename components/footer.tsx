"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useTranslation } from "react-i18next"
import { Github, Linkedin, Mail, Youtube, Instagram } from "lucide-react"

export function Footer() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <footer className={`py-16 px-6 border-t ${theme === "light" ? "bg-gray-50 border-gray-200" : "border-gray-800"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">JNX03</h3>
            <p className={`text-sm leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
              Developer and technology innovator focused on AI, accessibility, and digital experiences.
            </p>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/blog", label: "Blog" },
                { href: "/awards", label: "Awards" },
                { href: "/contact", label: "Contact" },
                { href: "/resume", label: "Resume" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      theme === "light"
                        ? "text-gray-600 hover:text-gray-900"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/JNX03"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800"
                }`}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/chawabhon-netisingha-4a60a034a"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="/contact"
                className={`p-2 rounded-lg transition-colors ${
                  theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800"
                }`}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@Jnx03"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800"
                }`}
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/jxxn03z/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800"
                }`}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t text-center ${theme === "light" ? "border-gray-200" : "border-gray-800"}`}>
          <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
            © {new Date().getFullYear()} Chawabhon Netisingha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
