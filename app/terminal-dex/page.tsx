import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function TerminalGuidePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-4 pt-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">JNX03 Terminal Secrets: Complete Walkthrough</CardTitle>
            <CardDescription>Uncover all hidden quantum mysteries in the JNX03 portfolio</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to the comprehensive guide for uncovering all secrets within the JNX03 Terminal. 
              This walkthrough will lead you step-by-step through the process of discovering Project 1x12 
              and the Yuki AI Chan project. Follow these instructions carefully to reveal all hidden content.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Accessing the Terminal</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>Visit <a href="https://jnx03.xyz" className="text-blue-500 hover:underline">https://jnx03.xyz</a></li>
              <li>Press <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">⌘K</kbd> (Mac) or <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Ctrl+K</kbd> (Windows/Linux)</li>
              <li>Type "terminal" and select "Open Terminal"</li>
              <li>Alternatively, go to <a href="https://jnx03.xyz/dex/terminal" className="text-blue-500 hover:underline">https://jnx03.xyz/dex/terminal</a></li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Step-by-Step Secret Discovery</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">1. Explore the File System</h3>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <code>
{`ls -a
cd /home/visitor
ls -a
cd .secret
ls -a`}
              </code>
            </pre>
            <p>This will reveal hidden files and directories, including the .secret directory.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">2. Decrypt the Quantum State File</h3>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <code>
{`cat .quantum_state
decode schrodinger WVVoU01HTklUVFpNZVRsNVdWaGpkVm95YkRCaFNGWnBaRmhPYkdOdFRuWmlibEYx`}
              </code>
            </pre>
            <p>This will reveal information about Project 1x12's quantum state.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">3. Access the Secret Database</h3>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <code>
{`cat .db_config
psql -h 192.168.1.12 -p 1337 -d 1x12_db -U secret`}
              </code>
            </pre>
            <p>This will attempt to connect to the secret database, but it will fail due to lack of permissions.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">4. Gain Root Access</h3>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <code>
{`su jnx
Password: 1x12_master_key`}
              </code>
            </pre>
            <p>This will switch to the 'jnx' user with root privileges.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">5. Execute the 1x12 Protocol</h3>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <code>
{`cd /usr/bin
./1x12.bat`}
              </code>
            </pre>
            <p>This will reveal more information about Project 1x12.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">6. Discover Yuki AI Chan</h3>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <code>
{`cd /home/visitor/.secret
cat encrypted.txt
decode yuki WVVoU01HTklUVFpNZVRsNVdWaGpkVm95YkRCaFNGWnBaRmhPYkdOdFRuWmlibEYx`}
              </code>
            </pre>
            <p>This will reveal information about the Yuki AI Chan project.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Additional Exploration</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Check <code>/var/log/auth.log</code> for authentication attempts</li>
              <li>Explore <code>/root/.ssh/id_rsa</code> for the root SSH key</li>
              <li>Investigate <code>/home/visitor/.bash_history</code> for clues about previous activities</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p>
              By following this detailed guide, you've uncovered all the secrets within the JNX03 Terminal. 
              You've discovered Project 1x12, a quantum computing initiative, and learned about the upcoming 
              Yuki AI Chan project. Remember, in the world of JNX03, some truths are quantum, and reality 
              might be more fluid than it seems!
            </p>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #JNX03 #TerminalSecrets #Project1x12 #YukiAIChan #QuantumComputing #EasterEgg #HiddenContent
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
