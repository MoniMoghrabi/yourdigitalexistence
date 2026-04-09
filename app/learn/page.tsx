import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn — Your Digital Existence",
  description:
    "Understand your digital footprint — what it is, why it matters, and how to take back control.",
};

const articles = [
  {
    icon: "🔍",
    title: "What is a digital footprint?",
    desc: "Every search, click, and purchase leaves a trace. Learn what gets collected, by whom, and how much data you generate without realising it.",
    href: "/learn/what-is-a-digital-footprint",
    readingTime: "5 min",
  },
  {
    icon: "⚖️",
    title: "Why it matters",
    desc: "From targeted ads to data breaches and hiring decisions — the real-world consequences of your online activity, explained clearly.",
    href: "/learn/why-it-matters",
    readingTime: "6 min",
  },
  {
    icon: "🛡️",
    title: "How to protect yourself",
    desc: "Practical, non-technical steps you can take today to reduce your exposure — without deleting your entire online life.",
    href: "/learn/how-to-protect-yourself",
    readingTime: "7 min",
  },
];

export default function LearnPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Learn</h1>
        <p className="text-lg text-slate-500">
          Three short reads that give you a clear, honest picture of your digital life — and
          what you can do about it.
        </p>
      </header>

      <div className="space-y-6">
        {articles.map(({ icon, title, desc, href, readingTime }) => (
          <Link
            key={href}
            href={href}
            className="group flex gap-6 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <span className="text-3xl shrink-0">{icon}</span>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {title}
                </h2>
                <span className="text-xs text-slate-400">{readingTime} read</span>
              </div>
              <p className="text-sm text-slate-500">{desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <p className="text-sm text-blue-700 font-medium mb-1">Ready to go further?</p>
        <p className="text-sm text-blue-600">
          After reading, try our{" "}
          <Link href="/tools/footprint-calculator" className="underline hover:no-underline">
            footprint calculator
          </Link>{" "}
          to get a personalised picture of your online exposure.
        </p>
      </div>
    </div>
  );
}
