import Link from "next/link";

const stats = [
  { value: "4,000+", label: "data points collected on the average internet user per day" },
  { value: "79%", label: "of people have little idea what companies know about them" },
  { value: "72%", label: "of adults feel they have lost control of their personal information" },
];

const highlights = [
  {
    icon: "search",
    tag: "Foundation",
    title: "What is a digital footprint?",
    desc: "Every search, click, and purchase leaves a trace. Learn what gets collected and by whom.",
    href: "/learn/what-is-a-digital-footprint",
  },
  {
    icon: "balance",
    tag: "Impact",
    title: "Why it matters",
    desc: "From targeted ads to data breaches — the real-world impact of your online activity.",
    href: "/learn/why-it-matters",
  },
  {
    icon: "shield",
    tag: "Action",
    title: "How to protect yourself",
    desc: "Practical, non-technical steps you can take today to reduce your exposure.",
    href: "/learn/how-to-protect-yourself",
  },
];

const tools = [
  {
    icon: "analytics",
    title: "Footprint Calculator",
    desc: "Answer 8 quick questions and get a personalised score of your digital exposure.",
    href: "/tools/footprint-calculator",
    badge: "Most popular",
  },
  {
    icon: "lock",
    title: "Privacy Quiz",
    desc: "Test your knowledge of online privacy — trackers, data brokers, browser settings, and more.",
    href: "/tools/privacy-quiz",
    badge: null,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-[#00353A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004D54] via-[#00353A] to-[#001F23]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 px-8 md:px-20 max-w-6xl mx-auto py-24 w-full">
          <p className="font-label text-[#FBBC00] text-xs uppercase tracking-[0.3em] mb-6">
            Digital Footprint Education — Free &amp; No Sign-up
          </p>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tighter mb-8 max-w-4xl">
            You leave a trail<br />everywhere online.{" "}
            <span className="text-[#FBBC00] italic">Here&apos;s what that means.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-body">
            Your digital footprint is bigger than you think — and understanding it is the first step
            to taking back control. Calm, honest education. No fearmongering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tools/footprint-calculator"
              className="inline-block bg-[#FBBC00] text-[#261A00] px-10 py-4 font-label font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
            >
              Check Your Footprint
            </Link>
            <Link
              href="/learn"
              className="inline-block border-2 border-white/30 text-white px-10 py-4 font-label font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F4F4EF] border-b border-[#E3E3DE]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#BFC8C9]">
          {stats.map(({ value, label }) => (
            <div key={value} className="p-12">
              <p className="font-headline text-5xl font-black text-[#00353A] mb-3">{value}</p>
              <p className="font-body text-sm text-[#70797A] leading-relaxed">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learn articles */}
      <section className="py-24 px-8 bg-[#FAFAF5]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b-2 border-[#00353A] pb-6">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-[#70797A] mb-3">The Research</p>
              <h2 className="font-headline text-4xl font-bold uppercase tracking-tight text-[#1A1C19]">
                Start Where You Are
              </h2>
            </div>
            <Link
              href="/learn"
              className="font-label text-xs uppercase tracking-widest text-[#00353A] border-b-2 border-[#00353A] pb-0.5 hover:text-[#FBBC00] hover:border-[#FBBC00] transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E3E3DE] border border-[#E3E3DE]">
            {highlights.map(({ icon, tag, title, desc, href }) => (
              <Link
                key={href}
                href={href}
                className="group block p-10 bg-[#FAFAF5] hover:bg-[#F4F4EF] transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-[#00353A] text-4xl mb-6 block">{icon}</span>
                <p className="font-label text-[10px] uppercase tracking-[0.3em] text-[#70797A] mb-3">{tag}</p>
                <h3 className="font-headline font-bold text-xl text-[#1A1C19] mb-3 group-hover:text-[#00353A] transition-colors">
                  {title}
                </h3>
                <p className="font-body text-sm text-[#70797A] leading-relaxed">{desc}</p>
                <div className="mt-8 font-label text-[10px] uppercase tracking-widest text-[#00353A] group-hover:text-[#FBBC00] transition-colors">
                  Read Article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote strip */}
      <section className="bg-[#00353A] py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-[#FBBC00] text-5xl mb-8 block">format_quote</span>
          <blockquote className="font-headline text-3xl md:text-4xl font-medium text-white leading-tight mb-8">
            &ldquo;Data is the new oil — and most people don&apos;t know how much they&apos;re leaking.&rdquo;
          </blockquote>
          <cite className="not-italic font-label text-[#FBBC00] uppercase tracking-[0.3em] text-xs">
            — The premise behind this site
          </cite>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 px-8 bg-[#F4F4EF]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b-2 border-[#00353A] pb-6">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-[#70797A] mb-3">Interactive</p>
              <h2 className="font-headline text-4xl font-bold uppercase tracking-tight text-[#1A1C19]">
                Free Tools
              </h2>
              <p className="font-body text-sm text-[#70797A] mt-2">No sign-up, no tracking, no data sent anywhere.</p>
            </div>
            <Link
              href="/tools"
              className="font-label text-xs uppercase tracking-widest text-[#00353A] border-b-2 border-[#00353A] pb-0.5 hover:text-[#FBBC00] hover:border-[#FBBC00] transition-colors"
            >
              All Tools →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E3E3DE] border border-[#E3E3DE]">
            {tools.map(({ icon, title, desc, href, badge }) => (
              <Link
                key={href}
                href={href}
                className="group block p-10 bg-[#FAFAF5] hover:bg-[#EEEEE9] transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="material-symbols-outlined text-[#00353A] text-4xl">{icon}</span>
                  {badge && (
                    <span className="bg-[#FBBC00] text-[#261A00] px-3 py-1 font-label text-[10px] font-bold uppercase tracking-widest">
                      {badge}
                    </span>
                  )}
                </div>
                <h3 className="font-headline font-bold text-xl text-[#1A1C19] mb-3 group-hover:text-[#00353A] transition-colors">
                  {title}
                </h3>
                <p className="font-body text-sm text-[#70797A] leading-relaxed">{desc}</p>
                <div className="mt-8 font-label text-[10px] uppercase tracking-widest text-[#00353A] group-hover:text-[#FBBC00] transition-colors">
                  Launch Tool →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#00353A] py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-[#FBBC00] mb-3">Free · 2 minutes</p>
            <h2 className="font-headline text-3xl font-bold text-white uppercase tracking-tight">
              Ready to See Your Footprint?
            </h2>
            <p className="font-body text-white/60 mt-3 max-w-md">
              Our free calculator gives you a personalised picture of your online exposure in under 2 minutes.
            </p>
          </div>
          <Link
            href="/tools/footprint-calculator"
            className="shrink-0 bg-[#FBBC00] text-[#261A00] px-10 py-4 font-label font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Take the Calculator →
          </Link>
        </div>
      </section>
    </>
  );
}
