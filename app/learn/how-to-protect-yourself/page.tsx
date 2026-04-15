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
    icon: "key",
    title: "Use a password manager",
    effort: "30 min setup",
    impact: "Very high",
    body: "Reusing passwords is the single biggest preventable risk to your online security. A password manager (Bitwarden is free and open-source; 1Password is excellent if you want to pay) generates and stores unique, strong passwords for every site. You only need to remember one master password.",
  },
  {
    number: "02",
    icon: "phonelink_lock",
    title: "Enable two-factor authentication (2FA)",
    effort: "5 min per account",
    impact: "Very high",
    body: "2FA means even if someone steals your password, they still can&rsquo;t get in without a second factor (usually a code from your phone). Enable it on your email account first — that&rsquo;s the key to resetting everything else. Then your banking, social media, and any other important accounts.",
  },
  {
    number: "03",
    icon: "tune",
    title: "Review your app permissions",
    effort: "15 min",
    impact: "High",
    body: "On iPhone: Settings → Privacy & Security. On Android: Settings → Privacy → Permission Manager. Look at which apps have access to your location, microphone, camera, and contacts. Revoke anything that doesn&rsquo;t need it. Location is the most sensitive — set most apps to &lsquo;While Using&rsquo; rather than &lsquo;Always&rsquo;.",
  },
  {
    number: "04",
    icon: "public",
    title: "Use a browser that respects your privacy",
    effort: "10 min",
    impact: "Medium",
    body: "Firefox with the uBlock Origin extension is a strong, free choice. It blocks most trackers and ads by default, without requiring any configuration. Brave is another option if you want something closer to Chrome&rsquo;s interface. Both are free.",
  },
  {
    number: "05",
    icon: "policy",
    title: "Check if your data has been breached",
    effort: "2 min",
    impact: "Informational",
    body: "Visit haveibeenpwned.com and enter your email address. It&rsquo;s free, safe, and run by a respected security researcher. If your email appears in a breach, change the password for that service immediately — and any other site where you used the same password.",
  },
  {
    number: "06",
    icon: "lock_person",
    title: "Tighten your social media privacy settings",
    effort: "20 min",
    impact: "Medium",
    body: "Most social platforms default to sharing more than you realise. On Facebook: Settings → Privacy → check who can see your posts, search for you, and send you friend requests. On Instagram: switch to a private account if you don&rsquo;t need a public presence. On LinkedIn: Settings → Visibility → review what recruiters and the public can see.",
  },
  {
    number: "07",
    icon: "link_off",
    title: "Be cautious with &ldquo;Sign in with Google/Facebook&rdquo;",
    effort: "Ongoing",
    impact: "Medium",
    body: "Using social login is convenient, but it links your activity on third-party sites back to your main account. If you do use social login, periodically review which apps have access: Google: myaccount.google.com/permissions — Facebook: Settings → Apps and Websites. Remove anything you no longer use.",
  },
  {
    number: "08",
    icon: "vpn_lock",
    title: "Use a VPN on public Wi-Fi",
    effort: "5 min setup",
    impact: "Situational",
    body: "Public Wi-Fi (cafes, airports, hotels) can expose your browsing to others on the same network. A VPN encrypts your connection. Proton VPN has a genuinely free tier with no data cap. Only use a VPN you trust — a bad VPN is worse than no VPN.",
  },
];

const impactColor: Record<string, string> = {
  "Very high": "bg-[#00353A] text-white",
  "High": "bg-[#004D54] text-[#81bdc4]",
  "Medium": "bg-[#EEEEE9] text-[#40484A]",
  "Informational": "bg-[#F4F4EF] text-[#70797A]",
  "Situational": "bg-[#F4F4EF] text-[#70797A]",
};

export default function HowToProtectPage() {
  return (
    <>
      {/* Article header */}
      <section className="bg-[#00353A] px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-[#FAFAF5]/60 hover:text-[#FBBC00] transition-colors mb-8"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Learn
          </Link>
          <div className="inline-block bg-[#FBBC00] text-[#261A00] px-3 py-1 font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Module 03 · 7 min read
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight tracking-tighter mb-4">
            How to Protect Yourself
          </h1>
          <p className="font-body text-white/70 text-lg leading-relaxed max-w-xl">
            You don&apos;t need to be a tech expert to meaningfully reduce your digital footprint.
            These eight steps are practical, free or cheap, and ordered by impact. Start at the top.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-8 py-16 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0 divide-y divide-[#E3E3DE] border border-[#E3E3DE]">
            {steps.map(({ number, icon, title, effort, impact, body }) => (
              <div key={number} className="p-8 relative bg-[#FAFAF5] hover:bg-[#F4F4EF] transition-colors">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#FBBC00] text-2xl shrink-0">{icon}</span>
                    <h2 className="font-headline font-bold text-lg text-[#1A1C19]">{title}</h2>
                  </div>
                  <div className="flex gap-2 shrink-0 flex-wrap justify-end">
                    <span className="font-label text-[10px] px-3 py-1 uppercase tracking-widest bg-[#EEEEE9] text-[#70797A]">
                      {effort}
                    </span>
                    <span className={`font-label text-[10px] px-3 py-1 uppercase tracking-widest ${impactColor[impact] ?? "bg-[#EEEEE9] text-[#40484A]"}`}>
                      {impact}
                    </span>
                  </div>
                </div>
                <p
                  className="font-body text-sm text-[#40484A] leading-relaxed pl-10"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            ))}
          </div>

          {/* Key callout */}
          <div className="mt-12 p-10 bg-[#F4F4EF] border-l-4 border-[#FBBC00]">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#FBBC00] text-3xl shrink-0">tips_and_updates</span>
              <div>
                <h3 className="font-headline font-bold text-[#1A1C19] mb-2 uppercase tracking-tight">
                  The most important thing
                </h3>
                <p className="font-body text-sm text-[#70797A] leading-relaxed">
                  Don&apos;t try to do everything at once. Pick the top two items on this list and do
                  them this week. Small, consistent steps compound over time. You don&apos;t need to
                  disappear from the internet — you just need to be intentional about it.
                </p>
              </div>
            </div>
          </div>

          {/* Article nav */}
          <nav className="mt-16 pt-8 border-t-2 border-[#E3E3DE] flex justify-between items-center">
            <Link
              href="/learn/why-it-matters"
              className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-[#00353A] border-b-2 border-[#00353A] pb-0.5 hover:text-[#FBBC00] hover:border-[#FBBC00] transition-colors"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Why it matters
            </Link>
            <Link
              href="/tools/footprint-calculator"
              className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-[#00353A] border-b-2 border-[#00353A] pb-0.5 hover:text-[#FBBC00] hover:border-[#FBBC00] transition-colors"
            >
              Check your footprint
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
