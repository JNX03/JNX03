import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Package } from "lucide-react"
import { Footer } from "@/components/footer"

export default function CancerPlusPrcXBlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl sm:text-3xl">Cancer Plus Prc X: Advanced Encryption Library</CardTitle>
                <CardDescription>Posted on March 22, 2025</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Encryption</Badge>
                <Badge>Security</Badge>
                <Badge>Python</Badge>
                <Badge>NPM</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4">
              I'm excited to announce the release of my new encryption/decryption library:{" "}
              <strong>Cancer Plus Prc X</strong>. This library provides military-grade encryption for your sensitive
              data with a unique multi-layered approach that makes it extremely resistant to brute force attacks.
            </p>

            <div className="flex flex-wrap gap-4 my-6">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="https://github.com/JNX03/jnxbetasec/" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub Repository
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-foreground border-foreground hover:bg-accent">
                <Link href="https://test.pypi.org/project/jnxbetasec/1.0.0/" target="_blank" rel="noopener noreferrer">
                  <Package className="mr-2 h-4 w-4" /> Python Package
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-foreground border-foreground hover:bg-accent">
                <Link href="https://www.npmjs.com/package/jnxbetasec" target="_blank" rel="noopener noreferrer">
                  <Package className="mr-2 h-4 w-4" /> NPM Package
                </Link>
              </Button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Installation</h2>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Python Library</h3>
            <p className="mb-4">Install the Python library from TestPyPI:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>pip install -i https://test.pypi.org/simple/ jnxbetasec==1.0.0</code>
            </pre>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">NPM Library</h3>
            <p className="mb-4">Install the NPM package:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>npm i jnxbetasec</code>
            </pre>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Security Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold">Minimum Brute Force Time:</p>
                <p>1 Hour 12 minutes 43 seconds 821 ms</p>
                <p className="text-sm text-muted-foreground">(1 Layer, Weak Password)</p>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold">Maximum Brute Force Time:</p>
                <p>Unknown (3+2 Layers, Master Password)</p>
                <p className="text-sm text-muted-foreground">Approximately 2×10¹⁴ years (theoretical)</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Encryption Architecture</h2>

            <p className="mb-4">
              The Cancer Plus Prc X library introduces a proprietary file format <code>.CPx</code> (Cancer Plus Prc X)
              that implements a multi-layered encryption approach:
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Multi-Layer Encryption</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Layer 1:</strong> AES-256-GCM
              </li>
              <li>
                <strong>Layer 2:</strong> ChaCha20-Poly1305
              </li>
              <li>
                <strong>Layer 3:</strong> RSA-4096
              </li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Key Derivation</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>PBKDF2-HMAC-SHA512</li>
              <li>Secure Random Salt (32 bytes)</li>
              <li>Separate Key Derivation</li>
              <li>RSA-4096 Key Pair</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">File Format Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>File Signature</li>
              <li>Version Information</li>
              <li>Encrypted Metadata</li>
              <li>Digital Signature (RSA-PSS with SHA-512)</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Security Measures</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Digital Signatures</li>
              <li>Message Authentication Codes (BlockChain: AES-GCM / ChaCha20-poly1305) — In development</li>
              <li>Key Segregation</li>
              <li>Cryptographic Binding</li>
              <li>Integrity Verification</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Advanced Features</h2>

            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Automatic Content Type Detection:</strong> .CPx can identify and handle different types of
                content (images, text, seed files)
              </li>
              <li>
                <strong>Original Metadata Preservation:</strong> Preserves file metadata such as date, location, etc.
              </li>
              <li>
                <strong>Image-Specific Metadata:</strong> Special handling for image files
              </li>
              <li>
                <strong>Secure Key Storage:</strong> Powered by Beta Security
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Decryption Process</h2>

            <p className="mb-4">The decryption process involves several verification steps to ensure security:</p>

            <ol className="list-decimal pl-6 mb-4">
              <li>File Signature Verification</li>
              <li>Digital Signature Verification</li>
              <li>Key Decryption (private key)</li>
              <li>Master Password Verification (Decryption via Cervical Cancer plus+ API only)</li>
              <li>Multi-Layer Decryption (ChaCha20-Poly1305 then AES-256-GCM)</li>
              <li>Metadata Restoration</li>
            </ol>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Development Status</h2>

            <p className="mb-4">
              The library is currently at approximately 60% completion. I'm actively working on implementing the
              blockchain-based Message Authentication Codes and finalizing the API integration.
            </p>

            <div className="bg-muted p-4 rounded-md mb-6">
              <p className="font-semibold">Current Status:</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">60% Complete - Powered by Beta Security</p>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Use Cases</h2>

            <ul className="list-disc pl-6 mb-4">
              <li>Securing sensitive personal documents</li>
              <li>Protecting intellectual property</li>
              <li>Secure communication channels</li>
              <li>Encrypted data storage</li>
              <li>Secure backup solutions</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Future Development</h2>

            <p className="mb-4">I'm planning to add several features in upcoming releases:</p>

            <ul className="list-disc pl-6 mb-4">
              <li>Complete blockchain-based message authentication</li>
              <li>Enhanced key management system</li>
              <li>Integration with cloud storage providers</li>
              <li>Mobile application support</li>
              <li>Hardware security module compatibility</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Conclusion</h2>

            <p className="mb-4">
              Cancer Plus Prc X represents a significant advancement in encryption technology, offering multiple layers
              of security that make it extremely difficult to breach. Whether you're a developer looking to integrate
              robust encryption into your applications or an individual concerned about data privacy, this library
              provides the tools you need to secure your sensitive information.
            </p>

            <p className="mb-4">
              I welcome contributions and feedback from the community. Feel free to check out the GitHub repository,
              report issues, or submit pull requests.
            </p>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #Encryption #Security #CancerPlusPrcX #Python #NPM #Cryptography #DataProtection
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

