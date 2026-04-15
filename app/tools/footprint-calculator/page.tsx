import type { Metadata } from "next";
import Link from "next/link";
import FootprintCalculator from "@/components/FootprintCalculator";

export const metadata: Metadata = {
  title: "Footprint Calculator — Your Digital Existence",
  description:
    "Answer 8 quick questions and get a personalised score of your digital exposure — plus three specific actions to take this week.",
};

export default function FootprintCalculatorPage() {
  return (
    <>
      <section className="bg-[#00353A] px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-[#FAFAF5]/60 hover:text-[#FBBC00] transition-colors mb-8"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            All Tools
          </Link>
          <div className="inline-block bg-[#FBBC00] text-[#261A00] px-3 py-1 font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            8 questions · ~2 min
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight tracking-tighter mb-4">
            Footprint Calculator
          </h1>
          <p className="font-body text-white/70 text-lg leading-relaxed max-w-xl">
            Answer honestly — everything runs in your browser and nothing is sent anywhere.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FootprintCalculator />
        </div>
      </section>
    </>
  );
}
