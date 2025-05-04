import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">Security Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mt-4 mb-4">Reporting Security Issues</h2>
            <p>
              The JNX03 team takes security bugs seriously. We appreciate your efforts to responsibly disclose your
              findings, and will make every effort to acknowledge your contributions.
            </p>

            <p>
              To report a security issue, please email <a href="mailto:security@jnx03.xyz">security@jnx03.xyz</a> and
              include the word "SECURITY" in the subject line.
            </p>

            <p>
              The JNX03 team will send a response indicating the next steps in handling your report. After the initial
              reply to your report, the security team will keep you informed of the progress towards a fix and full
              announcement, and may ask for additional information or guidance.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Security Response Process</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>Security report received and assigned a primary handler</li>
              <li>Problem confirmed and a list of affected versions determined</li>
              <li>Code audited to find any similar problems</li>
              <li>Fixes prepared and tested</li>
              <li>Fixes deployed to production</li>
              <li>Public disclosure (if agreed with reporter)</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Disclosure Policy</h2>
            <p>
              When the security team receives a security bug report, they will assign it to a primary handler. This
              person will coordinate the fix and release process, involving the following steps:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Confirm the problem and determine the affected versions</li>
              <li>Audit code to find any potential similar problems</li>
              <li>Prepare fixes for all releases still under maintenance</li>
              <li>Coordinate with the reporter on an embargo date if applicable</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Comments on This Policy</h2>
            <p>
              If you have suggestions on how this process could be improved, please submit a pull request or open an
              issue to discuss.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
