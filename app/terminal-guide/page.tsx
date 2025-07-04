import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function TerminalGuidePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-4 pt-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">JNX03 Terminal Secrets Guide</CardTitle>
            <CardDescription>Uncover the hidden quantum mysteries in the JNX03 portfolio</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to the JNX03 Terminal Secrets Guide. This comprehensive walkthrough will help you uncover the
              hidden quantum mysteries embedded within the JNX03 portfolio website. By following these steps, you'll
              dive deep into the world of Project 1x12 and discover the Yuki AI Chan project.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Accessing the Terminal</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>
                Visit the JNX03 portfolio website at{" "}
                <a href="https://jnx03.xyz" className="text-blue-500 hover:underline">
                  https://jnx03.xyz
                </a>
              </li>
              <li>
                Press{" "}
                <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  ⌘K
                </kbd>{" "}
                (Mac) or{" "}
                <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  Ctrl+K
                </kbd>{" "}
                (Windows/Linux) to open the command menu
              </li>
              <li>Type "terminal" and select "Open Terminal" from the options</li>
              <li>
                Alternatively, navigate directly to{" "}
                <a href="https://jnx03.xyz/dex/terminal" className="text-blue-500 hover:underline">
                  https://jnx03.xyz/dex/terminal
                </a>
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Basic Terminal Commands</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <code>ls -a</code>: List all files, including hidden ones
              </li>
              <li>
                <code>cd [directory]</code>: Change directory
              </li>
              <li>
                <code>cat [filename]</code>: Display file contents
              </li>
              <li>
                <code>pwd</code>: Print working directory
              </li>
              <li>
                <code>help</code>: Display available commands
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Uncovering Project 1x12</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>
                Use <code>ls -a</code> to find hidden files and directories
              </li>
              <li>
                Navigate to the <code>.secret</code> directory using <code>cd .secret</code>
              </li>
              <li>
                Look for a file named <code>.quantum_state</code>
              </li>
              <li>
                Use the <code>decode</code> command with the key "schrodinger" to decrypt the quantum state file
              </li>
              <li>Follow the instructions in the decrypted message to connect to the quantum database on port 1337</li>
              <li>Gain root access (hint: check the user 'jnx' and their password)</li>
              <li>
                Execute the <code>1x12.bat</code> file with root privileges
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Discovering Yuki AI Chan</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>
                In the <code>.secret</code> directory, find a file named <code>encrypted.txt</code>
              </li>
              <li>
                Use the <code>decode</code> command with the key "yuki" to decrypt the file's contents
              </li>
              <li>The decrypted message will reveal information about the Yuki AI Chan project</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Tips</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Use <code>sudo</code> to execute commands with root privileges
              </li>
              <li>
                Check the <code>.bash_history</code> file for clues about previous activities
              </li>
              <li>
                Explore the <code>/var/log/auth.log</code> file for authentication attempts
              </li>
              <li>
                Use the <code>hint</code> command if you get stuck
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Root Access</h2>
            <p>To gain root access, you'll need to use the following credentials:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Username: jnx</li>
              <li>Password: 1x12_master_key</li>
            </ul>
            <p>
              Use these credentials with the <code>su jnx</code> command or when prompted for sudo password.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p>
              By following this guide, you'll uncover the secrets of Project 1x12 and discover the Yuki AI Chan project.
              Remember, some files are hidden, some are encrypted, and some truths are quantum. Happy exploring!
            </p>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #JNX03 #TerminalSecrets #Project1x12 #YukiAIChan #QuantumComputing #EasterEgg
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
