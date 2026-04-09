import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Your Digital Existence",
  description:
    "Why we built this site, our mission, and further resources for learning about digital privacy.",
};

const resources = [
  {
    title: "Have I Been Pwned",
    url: "https://haveibeenpwned.com",
    desc: "Check if your email address has appeared in a known data breach. Free, safe, run by security researcher Troy Hunt.",
  },
  {
    title: "Electronic Frontier Foundation (EFF)",
    url: "https://www.eff.org",
    desc: "Non-profit defending digital privacy, free speech, and civil liberties. Their guides on privacy tools are excellent.",
  },
  {
    title: "Privacy Guides",
    url: "https://www.privacyguides.org",
    desc: "Community-maintained, non-commercial recommendations for privacy-respecting tools — browsers, email, VPNs, and more.",
  },
  {
    title: "Bitwarden",
    url: "https://bitwarden.com",
    desc: "Free, open-source password manager. The single highest-impact change most people can make to their online security.",
  },
  {
    title: "Proton VPN",
    url: "https://protonvpn.com",
    desc: "VPN with a genuinely free tier and no data cap. Based in Switzerland, audited open-source apps.",
  },
  {
    title: "uBlock Origin",
    url: "https://ublockorigin.com",
    desc: "Free, open-source browser extension that blocks ads and trackers efficiently. Works with Firefox and Chrome.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">About</h1>

      <section className="prose prose-slate prose-headings:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline max-w-none mb-16">
        <h2>Our mission</h2>
        <p>
          The internet collects an extraordinary amount of data about ordinary people — and
          most people have no idea how much, or what it&apos;s used for. We built Your Digital
          Existence to change that.
        </p>
        <p>
          Our goal is straightforward: give everyday internet users a clear, honest, and
          actionable understanding of their digital footprint. No fearmongering, no
          paywalls, no irony of tracking you while we tell you about tracking.
        </p>

        <h2>What we believe</h2>
        <ul>
          <li>
            <strong>Privacy is a right, not a luxury.</strong> You shouldn&apos;t need to be
            a security expert to understand what data you&apos;re generating or to take
            reasonable steps to protect it.
          </li>
          <li>
            <strong>Information should be calm and empowering.</strong> Most privacy coverage
            is either alarmist or impenetrable. We aim for neither.
          </li>
          <li>
            <strong>Small steps add up.</strong> You don&apos;t need to delete every account
            and disappear from the internet. You just need to be more intentional.
          </li>
        </ul>

        <h2>What we don&apos;t do</h2>
        <p>
          This site has no advertising, no user accounts, no analytics that track individuals,
          and no backend database. Our tools run entirely in your browser — nothing you enter
          is sent anywhere.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-6">Further resources</h2>
        <div className="space-y-4">
          {resources.map(({ title, url, desc }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <p className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                {title} ↗
              </p>
              <p className="text-sm text-slate-500">{desc}</p>
            </a>
          ))}
        </div>
      </section>

      <div className="mt-16 pt-8 border-t border-slate-100 text-center">
        <p className="text-sm text-slate-400 mb-4">
          Want to start learning? Begin with the basics.
        </p>
        <Link
          href="/learn"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
        >
          Start learning →
        </Link>
      </div>
    </div>
  );
}
