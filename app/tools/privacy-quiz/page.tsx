import type { Metadata } from "next";
import Link from "next/link";
import PrivacyQuiz from "@/components/PrivacyQuiz";

export const metadata: Metadata = {
  title: "Privacy Quiz — Your Digital Existence",
  description:
    "Test your knowledge of online privacy — trackers, data brokers, browser settings, and more.",
};

export default function PrivacyQuizPage() {
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
            8 questions · ~3 min
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight tracking-tighter mb-4">
            Privacy Quiz
          </h1>
          <p className="font-body text-white/70 text-lg leading-relaxed max-w-xl">
            How well do you actually understand online privacy? Test your knowledge on trackers,
            data brokers, VPNs, and everyday browser behaviour.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <PrivacyQuiz />
        </div>
      </section>
    </>
  );
}
