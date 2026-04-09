import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools — Your Digital Existence",
  description:
    "Free interactive tools to help you understand and reduce your digital footprint. No account needed.",
};

const tools = [
  {
    icon: "📊",
    title: "Footprint Calculator",
    desc: "Answer 8 quick questions and get a personalised score of your digital exposure — plus three specific actions to take this week.",
    href: "/tools/footprint-calculator",
    time: "2 min",
    badge: "Most popular",
  },
  {
    icon: "🔒",
    title: "Privacy Quiz",
    desc: "Test your knowledge of online privacy — trackers, data brokers, browser settings, and more. See how your instincts stack up.",
    href: "/tools/privacy-quiz",
    time: "3 min",
    badge: null,
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Tools</h1>
        <p className="text-lg text-slate-500">
          Free, interactive tools that give you a personalised picture of your digital life.
          No sign-up, no tracking, no data sent anywhere.
        </p>
      </header>

      <div className="space-y-6">
        {tools.map(({ icon, title, desc, href, time, badge }) => (
          <Link
            key={href}
            href={href}
            className="group flex gap-6 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <span className="text-3xl shrink-0">{icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h2 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {title}
                </h2>
                {badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 font-medium">
                    {badge}
                  </span>
                )}
                <span className="text-xs text-slate-400">{time}</span>
              </div>
              <p className="text-sm text-slate-500">{desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
