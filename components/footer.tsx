import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-16 pb-8">
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
            <h3 className="font-semibold mb-2">About JNX03</h3>
            <p className="text-muted-foreground">
              Developer and tech enthusiast focused on AI, cybersecurity, and accessibility technology. Creating
              innovative solutions to make a positive impact on society.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/awards" className="text-muted-foreground hover:text-foreground">
                  Awards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://status.jnx03.xyz"
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                >
                  Status Page
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">System Status</h3>
            <p className="text-muted-foreground mb-2">
              All systems are monitored 24/7. Check the status of all JNX03 services at
              <Link href="https://status.jnx03.xyz" className="text-blue-500 hover:underline ml-1" target="_blank">
                status.jnx03.xyz
              </Link>
            </p>
            <p className="text-xs text-muted-foreground">Last updated: {new Date().toLocaleString()}</p>
          </div>
        </div>

        <div className="border-t border-border pt-4 text-center">
          <p className="text-sm text-muted-foreground">© 2024-2025 JNX03. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

