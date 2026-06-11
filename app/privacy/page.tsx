import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-32 px-6 pb-24">
      <div className="max-w-3xl w-full">
        <Link href="/" className="text-saffron-orange hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-white/50 mb-8">Effective Date: June, 2026</p>
        
        <div className="prose prose-invert max-w-none text-white/80 space-y-6">
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
          <p>PORUS Browser(&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Porus Browser mobile application (the &quot;Service&quot;). We built Porus on a strict privacy-first, zero-bloat philosophy. This Privacy Policy outlines how we handle information when you use our Service.</p>
          <p>By downloading and using Porus Browser, you agree to the terms outlined in this policy.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Data Collection and Local Storage</h2>
          <p>Porus is designed to keep your data in your hands.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>No Telemetry or Tracking:</strong> We do not collect, harvest, or transmit background analytics, crash logs, or user behavior metrics to our servers.</li>
            <li><strong>Local Storage Only:</strong> All data generated during your use of the browser—including browsing history, bookmarks, saved tabs, and app preferences—is encrypted and stored exclusively on your local device.</li>
            <li><strong>No Cloud Accounts:</strong> We do not offer cloud syncing, meaning your data is never uploaded to an external database owned by Inksara.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Permissions Requested</h2>
          <p>To provide core web browsing functionalities, Porus may request the following native Android device permissions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Microphone:</strong> Requested only if you utilize the Voice Search feature. Audio is processed by your device&apos;s native speech-to-text engine and is never recorded or accessed by us.</li>
            <li><strong>Storage/Media:</strong> Requested only when you explicitly choose to download files from a webpage to your device.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Third-Party Web Services</h2>
          <p>While Porus protects your data internally, browsing the open internet involves interactions with third parties:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Search Engines:</strong> Queries entered into the Porus search bar are routed to your chosen default search engine (e.g., DuckDuckGo, Google). Your search data is subject to the privacy policies of those respective search providers.</li>
            <li><strong>Websites and Cookies:</strong> The websites you visit may use cookies and trackers. Porus utilizes your device&apos;s native Android WebView engine to render pages. You have full control to clear your cookies, cache, and site data locally at any time via the Porus Settings menu.</li>
            <li><strong>Ad-Blocking:</strong> Porus utilizes a locally hosted blocklist to prevent your device from loading known third-party ads and trackers. This filtering happens entirely on your device; we do not track which ads or domains are blocked.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Children&apos;s Privacy</h2>
          <p>Our Service does not target or address anyone under the age of 13. We do not knowingly collect personal information from children. Because our application does not transmit user data to our servers, no data from children is collected by Inksara.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy periodically. We will notify users of any material changes by updating the &quot;Effective Date&quot; at the top of this page. Continued use of the Service after changes constitutes your acceptance of the revised policy.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Contact Us</h2>
          <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
          <p>Email: <a href="mailto:porusbrowser@outlook.com" className="text-saffron-orange hover:underline">porusbrowser@outlook.com</a></p>
        </div>
      </div>
    </main>
  );
}
