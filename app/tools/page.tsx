import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools — Your Digital Existence",
  description:
    "Free interactive tools to help you understand and reduce your digital footprint. No account needed.",
};

const tools = [
  {
    icon: "analytics",
    tag: "Module 01",
    title: "Footprint Calculator",
    desc: "Answer 8 quick questions and get a personalised score of your digital exposure — plus three specific actions to take this week.",
    href: "/tools/footprint-calculator",
    time: "2 min",
    badge: "Most popular",
  },
  {
    icon: "lock",
    tag: "Module 02",
    title: "Privacy Quiz",
    desc: "Test your knowledge of online privacy — trackers, data brokers, browser settings, and more. See how your instincts stack up.",
    href: "/tools/privacy-quiz",
    time: "3 min",
    badge: null,
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#00353A] px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-label text-[#FBBC00] text-xs uppercase tracking-[0.3em] mb-4">
            Interactive
          </p>
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white leading-tight tracking-tighter mb-6">
            Tools
          </h1>
          <p className="font-body text-white/70 text-lg max-w-xl leading-relaxed">
            Free, interactive tools that give you a personalised picture of your digital life.
            No sign-up, no tracking, no data sent anywhere.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="px-8 py-16 bg-[#FAFAF5]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-0 divide-y divide-[#E3E3DE] border border-[#E3E3DE]">
            {tools.map(({ icon, tag, title, desc, href, time, badge }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col md:flex-row gap-8 p-10 bg-[#FAFAF5] hover:bg-[#F4F4EF] transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-[#00353A] text-4xl shrink-0 mt-1">{icon}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="font-label text-[10px] uppercase tracking-[0.3em] text-[#70797A]">{tag}</span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-[#BFC8C9]">// {time}</span>
                    {badge && (
                      <span className="bg-[#FBBC00] text-[#261A00] px-2 py-0.5 font-label text-[10px] font-bold uppercase tracking-widest">
                        {badge}
                      </span>
                    )}
                  </div>
                  <h2 className="font-headline font-bold text-2xl text-[#1A1C19] mb-3 group-hover:text-[#00353A] transition-colors">
                    {title}
                  </h2>
                  <p className="font-body text-sm text-[#70797A] leading-relaxed max-w-2xl">{desc}</p>
                  <div className="mt-6 font-label text-[10px] uppercase tracking-widest text-[#00353A] group-hover:text-[#FBBC00] transition-colors">
                    Launch Tool →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
