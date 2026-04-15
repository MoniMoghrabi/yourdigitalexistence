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
    icon: "policy",
    desc: "Check if your email address has appeared in a known data breach. Free, safe, run by security researcher Troy Hunt.",
  },
  {
    title: "Electronic Frontier Foundation (EFF)",
    url: "https://www.eff.org",
    icon: "gavel",
    desc: "Non-profit defending digital privacy, free speech, and civil liberties. Their guides on privacy tools are excellent.",
  },
  {
    title: "Privacy Guides",
    url: "https://www.privacyguides.org",
    icon: "menu_book",
    desc: "Community-maintained, non-commercial recommendations for privacy-respecting tools — browsers, email, VPNs, and more.",
  },
  {
    title: "Bitwarden",
    url: "https://bitwarden.com",
    icon: "key",
    desc: "Free, open-source password manager. The single highest-impact change most people can make to their online security.",
  },
  {
    title: "Proton VPN",
    url: "https://protonvpn.com",
    icon: "vpn_lock",
    desc: "VPN with a genuinely free tier and no data cap. Based in Switzerland, audited open-source apps.",
  },
  {
    title: "uBlock Origin",
    url: "https://ublockorigin.com",
    icon: "block",
    desc: "Free, open-source browser extension that blocks ads and trackers efficiently. Works with Firefox and Chrome.",
  },
];

const beliefs = [
  {
    icon: "fingerprint",
    title: "Privacy is a right, not a luxury.",
    desc: "You shouldn't need to be a security expert to understand what data you're generating or to take reasonable steps to protect it.",
  },
  {
    icon: "sentiment_calm",
    title: "Information should be calm and empowering.",
    desc: "Most privacy coverage is either alarmist or impenetrable. We aim for neither.",
  },
  {
    icon: "trending_up",
    title: "Small steps add up.",
    desc: "You don't need to delete every account and disappear from the internet. You just need to be more intentional.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#00353A] px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-label text-[#FBBC00] text-xs uppercase tracking-[0.3em] mb-4">
            Mission Statement
          </p>
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white leading-tight tracking-tighter mb-6">
            About
          </h1>
          <p className="font-body text-white/70 text-lg max-w-2xl leading-relaxed">
            The internet collects an extraordinary amount of data about ordinary people — and most have no idea how much, or what it&apos;s used for. We built this to change that.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-8 py-20 bg-[#FAFAF5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-headline text-2xl font-bold text-[#00353A] uppercase tracking-tight mb-6 border-b-2 border-[#00353A] pb-4">
              Our Mission
            </h2>
            <div className="font-body text-[#40484A] leading-loose space-y-4">
              <p>
                The internet collects an extraordinary amount of data about ordinary people — and most
                people have no idea how much, or what it&apos;s used for. We built Your Digital Existence to change that.
              </p>
              <p>
                Our goal is straightforward: give everyday internet users a clear, honest, and actionable
                understanding of their digital footprint. No fearmongering, no paywalls, no irony of
                tracking you while we tell you about tracking.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-[#00353A] uppercase tracking-tight mb-6 border-b-2 border-[#00353A] pb-4">
              What We Don&apos;t Do
            </h2>
            <div className="font-body text-[#40484A] leading-loose space-y-4">
              <p>
                This site has no advertising, no user accounts, no analytics that track individuals,
                and no backend database. Our tools run entirely in your browser — nothing you enter
                is sent anywhere.
              </p>
              <p>
                We believe you should be able to learn about digital privacy without adding to your own digital trail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="px-8 py-20 bg-[#F4F4EF]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-2xl font-bold text-[#00353A] uppercase tracking-tight mb-12 border-b-2 border-[#00353A] pb-4">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E3E3DE] border border-[#E3E3DE]">
            {beliefs.map(({ icon, title, desc }) => (
              <div key={title} className="p-10 bg-[#FAFAF5]">
                <span className="material-symbols-outlined text-[#FBBC00] text-4xl mb-6 block">{icon}</span>
                <h3 className="font-headline font-bold text-lg text-[#1A1C19] mb-3">{title}</h3>
                <p className="font-body text-sm text-[#70797A] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="px-8 py-20 bg-[#FAFAF5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-2xl font-bold text-[#00353A] uppercase tracking-tight mb-12 border-b-2 border-[#00353A] pb-4">
            Further Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 border border-[#E3E3DE]">
            {resources.map(({ title, url, icon, desc }, i) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex gap-6 p-8 bg-[#FAFAF5] hover:bg-[#F4F4EF] transition-colors duration-200 ${
                  i % 2 === 0 ? "md:border-r border-[#E3E3DE]" : ""
                } ${i < resources.length - 2 ? "border-b border-[#E3E3DE]" : ""}`}
              >
                <span className="material-symbols-outlined text-[#00353A] text-3xl shrink-0">{icon}</span>
                <div>
                  <p className="font-headline font-bold text-[#1A1C19] mb-2 group-hover:text-[#00353A] transition-colors">
                    {title} <span className="text-[#70797A] font-normal">↗</span>
                  </p>
                  <p className="font-body text-sm text-[#70797A] leading-relaxed">{desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#00353A] py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-[#FBBC00] mb-4">Begin Here</p>
          <h2 className="font-headline text-3xl font-bold text-white uppercase tracking-tight mb-6">
            Want to Start Learning?
          </h2>
          <p className="font-body text-white/60 mb-10">Begin with the basics and work your way through the research.</p>
          <Link
            href="/learn"
            className="inline-block bg-[#FBBC00] text-[#261A00] px-10 py-4 font-label font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Start Learning →
          </Link>
        </div>
      </section>
    </>
  );
}
