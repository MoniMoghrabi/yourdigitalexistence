import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Protect Yourself Online — Your Digital Existence",
  description:
    "Practical, non-technical steps you can take today to reduce your digital footprint — without deleting your entire online life.",
};

const steps = [
  {
    number: "01",
    title: "Use a password manager",
    effort: "30 min setup",
    impact: "Very high",
    body: "Reusing passwords is the single biggest preventable risk to your online security. A password manager (Bitwarden is free and open-source; 1Password is excellent if you want to pay) generates and stores unique, strong passwords for every site. You only need to remember one master password.",
  },
  {
    number: "02",
    title: "Enable two-factor authentication (2FA)",
    effort: "5 min per account",
    impact: "Very high",
    body: "2FA means even if someone steals your password, they still can&rsquo;t get in without a second factor (usually a code from your phone). Enable it on your email account first — that&rsquo;s the key to resetting everything else. Then your banking, social media, and any other important accounts.",
  },
  {
    number: "03",
    title: "Review your app permissions",
    effort: "15 min",
    impact: "High",
    body: "On iPhone: Settings → Privacy & Security. On Android: Settings → Privacy → Permission Manager. Look at which apps have access to your location, microphone, camera, and contacts. Revoke anything that doesn&rsquo;t need it. Location is the most sensitive — set most apps to &lsquo;While Using&rsquo; rather than &lsquo;Always&rsquo;.",
  },
  {
    number: "04",
    title: "Use a browser that respects your privacy",
    effort: "10 min",
    impact: "Medium",
    body: "Firefox with the uBlock Origin extension is a strong, free choice. It blocks most trackers and ads by default, without requiring any configuration. Brave is another option if you want something closer to Chrome&rsquo;s interface. Both are free.",
  },
  {
    number: "05",
    title: "Check if your data has been breached",
    effort: "2 min",
    impact: "Informational",
    body: "Visit haveibeenpwned.com and enter your email address. It&rsquo;s free, safe, and run by a respected security researcher. If your email appears in a breach, change the password for that service immediately — and any other site where you used the same password.",
  },
  {
    number: "06",
    title: "Tighten your social media privacy settings",
    effort: "20 min",
    impact: "Medium",
    body: "Most social platforms default to sharing more than you realise. On Facebook: Settings → Privacy → check who can see your posts, search for you, and send you friend requests. On Instagram: switch to a private account if you don&rsquo;t need a public presence. On LinkedIn: Settings → Visibility → review what recruiters and the public can see.",
  },
  {
    number: "07",
    title: "Be cautious with &ldquo;Sign in with Google/Facebook&rdquo;",
    effort: "Ongoing",
    impact: "Medium",
    body: "Using social login is convenient, but it links your activity on third-party sites back to your main account. If you do use social login, periodically review which apps have access: Google: myaccount.google.com/permissions — Facebook: Settings → Apps and Websites. Remove anything you no longer use.",
  },
  {
    number: "08",
    title: "Use a VPN on public Wi-Fi",
    effort: "5 min setup",
    impact: "Situational",
    body: "Public Wi-Fi (cafes, airports, hotels) can expose your browsing to others on the same network. A VPN encrypts your connection. Proton VPN has a genuinely free tier with no data cap. Only use a VPN you trust — a bad VPN is worse than no VPN.",
  },
];

export default function HowToProtectPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/learn"
        className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-8 inline-block"
      >
        ← Back to Learn
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4 text-xs text-slate-400">
          <span>7 min read</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">How to Protect Yourself</h1>
        <p className="text-slate-500">
          You don&apos;t need to be a tech expert to meaningfully reduce your digital
          footprint. These eight steps are practical, free or cheap, and ordered by impact.
          Start at the top.
        </p>
      </header>

      <div className="space-y-8">
        {steps.map(({ number, title, effort, impact, body }) => (
          <div key={number} className="border border-slate-100 rounded-xl p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-blue-400 font-semibold">{number}</span>
                <h2 className="font-semibold text-slate-900">{title}</h2>
              </div>
              <div className="flex gap-2 shrink-0">
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                  {effort}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                  {impact}
                </span>
              </div>
            </div>
            <p
              className="text-sm text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-green-50 border border-green-100 rounded-xl">
        <h3 className="font-semibold text-green-900 mb-2">The most important thing</h3>
        <p className="text-sm text-green-800">
          Don&apos;t try to do everything at once. Pick the top two items on this list and do
          them this week. Small, consistent steps compound over time. You don&apos;t need to
          disappear from the internet — you just need to be intentional about it.
        </p>
      </div>

      <nav className="mt-12 pt-8 border-t border-slate-100 flex justify-between text-sm">
        <Link href="/learn/why-it-matters" className="text-blue-600 hover:underline">
          ← Why it matters
        </Link>
        <Link href="/tools/footprint-calculator" className="text-blue-600 hover:underline">
          Check your footprint →
        </Link>
      </nav>
    </div>
  );
}
