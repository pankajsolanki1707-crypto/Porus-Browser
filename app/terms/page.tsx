import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-32 px-6 pb-24">
      <div className="max-w-3xl w-full">
        <Link href="/" className="text-saffron-orange hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-sm text-white/50 mb-8">Effective Date: June, 2026</p>
        
        <div className="prose prose-invert max-w-none text-white/80 space-y-6">
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By downloading, installing, or using the Porus Browser mobile application (&quot;the App&quot;), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the App.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. License to Use</h2>
          <p>Inksara grants you a personal, worldwide, royalty-free, non-assignable, non-exclusive, and revocable license to use the Porus Browser for your personal, non-commercial use, strictly in accordance with these Terms.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. User Conduct and Restrictions</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reverse engineer, decompile, or attempt to extract the source code of the App.</li>
            <li>Use the App in any way that violates any applicable local, national, or international law.</li>
            <li>Use the App to distribute malware, engage in phishing, or conduct any malicious cyber activities.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Third-Party Content and the Internet</h2>
          <p>Porus Browser is a tool used to access the open internet.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>No Endorsement:</strong> We do not control, endorse, or assume responsibility for any third-party websites, content, services, or search engines you access via the App.</li>
            <li><strong>Security Risk:</strong> You acknowledge that accessing the internet carries inherent risks. Inksara is not responsible for malware, phishing attempts, or data breaches that result from your interaction with third-party websites.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Ad-Blocking Disclaimer</h2>
          <p>Porus Browser includes a native ad-blocking and tracker-blocking feature. While we strive to provide a clean browsing experience, the web is constantly evolving. We do not guarantee the 100% removal of all advertisements, pop-ups, or tracking scripts, nor do we guarantee that the ad-blocker will not inadvertently break the functionality of certain websites.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Disclaimer of Warranties</h2>
          <p>The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Inksara makes no representations or warranties of any kind, express or implied, regarding the operation of the App or the information, content, or materials included in it. We do not warrant that the App will be uninterrupted, error-free, or entirely secure.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Inksara shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising from:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your access to or use of (or inability to access or use) the App.</li>
            <li>Any conduct or content of any third party accessed through the App.</li>
            <li>Any unauthorized access, use, or alteration of your local data.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Updates to the App</h2>
          <p>Inksara reserves the right to modify, suspend, or discontinue the App, or any feature within it, at any time without notice. We may also automatically download and install updates to improve performance, enhance security, or add features.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Modifications to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will indicate changes by updating the Effective Date at the top of this document. Your continued use of the App following any changes signifies your acceptance of the new Terms.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Contact Information</h2>
          <p>For any questions regarding these Terms and Conditions, please contact us at:</p>
          <p>Email: <a href="mailto:porusbrowser@outlook.com" className="text-saffron-orange hover:underline">porusbrowser@outlook.com</a></p>
        </div>
      </div>
    </main>
  );
}
