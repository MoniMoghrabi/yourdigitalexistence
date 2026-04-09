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
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/tools"
        className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-8 inline-block"
      >
        ← All tools
      </Link>

      <header className="mb-10">
        <span className="inline-block mb-3 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
          8 questions · ~3 min
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Privacy Quiz</h1>
        <p className="text-slate-500">
          How well do you actually understand online privacy? Test your knowledge on
          trackers, data brokers, VPNs, and everyday browser behaviour.
        </p>
      </header>

      <PrivacyQuiz />
    </div>
  );
}
