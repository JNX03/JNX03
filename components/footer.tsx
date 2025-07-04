"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useTranslation } from "react-i18next"

export function Footer() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <footer className={`mt-16 pb-8 ${theme === "light" ? "bg-gray-50" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <iframe
            src="https://status.jnx03.xyz/status/notex"
            width="100%"
            height="200"
            style={{ border: "none", borderRadius: "8px" }}
            title="Notex Status"
          />
          <iframe
            src="https://status.jnx03.xyz/status/nova"
            width="100%"
            height="200"
            style={{ border: "none", borderRadius: "8px" }}
            title="Nova Status"
          />
          <iframe
            src="https://status.jnx03.xyz/status/jnx-portfolio"
            width="100%"
            height="200"
            style={{ border: "none", borderRadius: "8px" }}
            title="Jnx Portfolio Status"
          />
          <iframe
            src="https://status.jnx03.xyz/status/eibraillenext"
            width="100%"
            height="200"
            style={{ border: "none", borderRadius: "8px" }}
            title="EibrailleNext Status"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-8 text-sm">
          <div>
            <h3 className={`font-semibold mb-2 ${theme === "light" ? "text-gray-900" : ""}`}>About JNX03</h3>
            <p className={theme === "light" ? "text-gray-600" : "text-muted-foreground"}>
              Developer and tech enthusiast focused on AI, cybersecurity, and accessibility technology. Creating
              innovative solutions to make a positive impact on society.
            </p>
          </div>
          <div>
            <h3 className={`font-semibold mb-2 ${theme === "light" ? "text-gray-900" : ""}`}>Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/projects"
                  className={
                    theme === "light"
                      ? "text-gray-600 hover:text-indigo-600"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={
                    theme === "light"
                      ? "text-gray-600 hover:text-indigo-600"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/awards"
                  className={
                    theme === "light"
                      ? "text-gray-600 hover:text-indigo-600"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    theme === "light"
                      ? "text-gray-600 hover:text-indigo-600"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://status.jnx03.xyz"
                  className={
                    theme === "light"
                      ? "text-gray-600 hover:text-indigo-600"
                      : "text-muted-foreground hover:text-foreground"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Status Page
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`font-semibold mb-2 ${theme === "light" ? "text-gray-900" : ""}`}>System Status</h3>
            <p className={`${theme === "light" ? "text-gray-600" : "text-muted-foreground"} mb-2`}>
              All systems are monitored 24/7. Check the status of all JNX03 services at
              <Link
                href="https://status.jnx03.xyz"
                className={`${theme === "light" ? "text-indigo-600" : "text-blue-500"} hover:underline ml-1`}
                target="_blank"
              >
                status.jnx03.xyz
              </Link>
            </p>
            <p className={`text-xs ${theme === "light" ? "text-gray-500" : "text-muted-foreground"}`}>
              Last updated: {new Date().toLocaleString()}
            </p>
          </div>
        </div>

        <div className={`border-t ${theme === "light" ? "border-gray-200" : "border-border"} pt-4 text-center`}>
          <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-muted-foreground"}`}>
            © 2024-2025 JNX03. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
