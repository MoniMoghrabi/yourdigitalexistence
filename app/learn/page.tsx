import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn — Your Digital Existence",
  description:
    "Understand your digital footprint — what it is, why it matters, and how to take back control.",
};

const articles = [
  {
    icon: "search",
    tag: "Module 01",
    title: "What is a digital footprint?",
    desc: "Every search, click, and purchase leaves a trace. Learn what gets collected, by whom, and how much data you generate without realising it.",
    href: "/learn/what-is-a-digital-footprint",
    readingTime: "5 min",
  },
  {
    icon: "balance",
    tag: "Module 02",
    title: "Why it matters",
    desc: "From targeted ads to data breaches and hiring decisions — the real-world consequences of your online activity, explained clearly.",
    href: "/learn/why-it-matters",
    readingTime: "6 min",
  },
  {
    icon: "shield",
    tag: "Module 03",
    title: "How to protect yourself",
    desc: "Practical, non-technical steps you can take today to reduce your exposure — without deleting your entire online life.",
    href: "/learn/how-to-protect-yourself",
    readingTime: "7 min",
  },
];

export default function LearnPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#00353A] px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-label text-[#FBBC00] text-xs uppercase tracking-[0.3em] mb-4">
            Educational Hub
          </p>
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white leading-tight tracking-tighter mb-6">
            Learn
          </h1>
          <p className="font-body text-white/70 text-lg max-w-xl leading-relaxed">
            Three short reads that give you a clear, honest picture of your digital life — and
            what you can do about it.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="px-8 py-16 bg-[#FAFAF5]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-0 divide-y divide-[#E3E3DE] border border-[#E3E3DE]">
            {articles.map(({ icon, tag, title, desc, href, readingTime }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col md:flex-row gap-8 p-10 bg-[#FAFAF5] hover:bg-[#F4F4EF] transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-[#00353A] text-4xl shrink-0 mt-1">{icon}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="font-label text-[10px] uppercase tracking-[0.3em] text-[#70797A]">{tag}</span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-[#BFC8C9]">// {readingTime} read</span>
                  </div>
                  <h2 className="font-headline font-bold text-2xl text-[#1A1C19] mb-3 group-hover:text-[#00353A] transition-colors">
                    {title}
                  </h2>
                  <p className="font-body text-sm text-[#70797A] leading-relaxed max-w-2xl">{desc}</p>
                  <div className="mt-6 font-label text-[10px] uppercase tracking-widest text-[#00353A] group-hover:text-[#FBBC00] transition-colors">
                    Read Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-10 bg-[#F4F4EF] border-l-4 border-[#00353A]">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#FBBC00] text-3xl shrink-0">tips_and_updates</span>
              <div>
                <p className="font-headline font-bold text-[#00353A] mb-2">Ready to go further?</p>
                <p className="font-body text-sm text-[#70797A]">
                  After reading, try our{" "}
                  <Link href="/tools/footprint-calculator" className="text-[#00353A] underline hover:text-[#FBBC00] transition-colors font-medium">
                    footprint calculator
                  </Link>{" "}
                  to get a personalised picture of your online exposure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
