import Link from "next/link";

const stats = [
  { value: "4,000+", label: "data points collected on the average internet user per day" },
  { value: "79%", label: "of people have little idea what companies know about them" },
  { value: "72%", label: "of adults feel they have lost control of their personal information" },
];

const highlights = [
  {
    icon: "🔍",
    title: "What is a digital footprint?",
    desc: "Every search, click, and purchase leaves a trace. Learn what gets collected and by whom.",
    href: "/learn/what-is-a-digital-footprint",
  },
  {
    icon: "⚖️",
    title: "Why it matters",
    desc: "From targeted ads to data breaches — the real-world impact of your online activity.",
    href: "/learn/why-it-matters",
  },
  {
    icon: "🛡️",
    title: "How to protect yourself",
    desc: "Practical, non-technical steps you can take today to reduce your exposure.",
    href: "/learn/how-to-protect-yourself",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-wide uppercase">
            Free · No sign-up · No ads
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            You leave a trail everywhere you go online.{" "}
            <span className="text-blue-600">Here&apos;s what that means for you.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Your digital footprint is the record of everything you do on the internet. It&apos;s bigger
            than you think — and understanding it is the first step to taking back control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/footprint-calculator"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Check your footprint →
            </Link>
            <Link
              href="/learn"
              className="px-6 py-3 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Start learning
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={value}>
              <p className="text-4xl font-bold text-blue-600 mb-2">{value}</p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Start where you are
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {highlights.map(({ icon, title, desc, href }) => (
              <Link
                key={href}
                href={href}
                className="group block p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <span className="text-3xl mb-4 block">{icon}</span>
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to see your digital footprint?</h2>
          <p className="text-blue-100 mb-8">
            Our free calculator gives you a personalised picture of your online exposure in under 2 minutes.
          </p>
          <Link
            href="/tools/footprint-calculator"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Take the calculator →
          </Link>
        </div>
      </section>
    </>
  );
}
