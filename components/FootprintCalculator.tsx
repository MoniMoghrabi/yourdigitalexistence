"use client";

import { useState } from "react";

interface Question {
  id: string;
  text: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: "social",
    text: "How many social media platforms do you actively use?",
    options: [
      { label: "None or 1", score: 0 },
      { label: "2–3", score: 1 },
      { label: "4 or more", score: 2 },
    ],
  },
  {
    id: "google",
    text: "How many Google services do you use? (Gmail, Maps, YouTube, Drive, etc.)",
    options: [
      { label: "None", score: 0 },
      { label: "1–2", score: 1 },
      { label: "3 or more", score: 2 },
    ],
  },
  {
    id: "shopping",
    text: "How often do you shop online?",
    options: [
      { label: "Rarely or never", score: 0 },
      { label: "A few times a month", score: 1 },
      { label: "Weekly or more", score: 2 },
    ],
  },
  {
    id: "location",
    text: "Is location tracking enabled on your phone for apps?",
    options: [
      { label: "Off or very restricted", score: 0 },
      { label: "Only for specific apps", score: 1 },
      { label: "Always on for most apps", score: 2 },
    ],
  },
  {
    id: "wifi",
    text: "How often do you use public Wi-Fi (cafes, airports, hotels)?",
    options: [
      { label: "Never", score: 0 },
      { label: "Occasionally", score: 1 },
      { label: "Often, without a VPN", score: 2 },
    ],
  },
  {
    id: "passwords",
    text: "Do you reuse the same or similar passwords across sites?",
    options: [
      { label: "No — I use a password manager", score: 0 },
      { label: "Sometimes, for less important sites", score: 1 },
      { label: "Yes, mostly the same password", score: 2 },
    ],
  },
  {
    id: "privacy",
    text: "Do you read or skim privacy policies before signing up?",
    options: [
      { label: "Yes, usually", score: 0 },
      { label: "Occasionally", score: 1 },
      { label: "Never — I just click accept", score: 2 },
    ],
  },
  {
    id: "accounts",
    text: "How many online accounts do you think you have in total?",
    options: [
      { label: "Fewer than 10", score: 0 },
      { label: "10–30", score: 1 },
      { label: "More than 30 (or not sure)", score: 2 },
    ],
  },
];

interface Result {
  label: string;
  icon: string;
  summary: string;
  actions: string[];
}

function getResult(score: number): Result {
  if (score <= 4) {
    return {
      label: "Small Footprint",
      icon: "verified",
      summary:
        "You're already pretty mindful about your online presence. Your habits limit how much data is collected about you — keep it up.",
      actions: [
        "Review app permissions once every 6 months to catch any you've forgotten.",
        "Consider enabling two-factor authentication on any accounts that don't have it yet.",
        "Check if any of your email addresses appear in known data breaches at haveibeenpwned.com.",
      ],
    };
  }
  if (score <= 8) {
    return {
      label: "Moderate Footprint",
      icon: "info",
      summary:
        "You have a typical digital footprint — not huge, but there are a few areas where small changes would meaningfully reduce your exposure.",
      actions: [
        "Audit your location permissions: go to Settings → Privacy → Location and set most apps to 'While Using'.",
        "Get a free password manager (Bitwarden is open-source and free) to stop reusing passwords.",
        "Review which social media accounts you still actually use, and deactivate any you don't.",
      ],
    };
  }
  if (score <= 12) {
    return {
      label: "Large Footprint",
      icon: "warning",
      summary:
        "A fair amount of your online behaviour creates data that companies can collect, profile, and sell. The good news: a few focused changes make a real difference.",
      actions: [
        "Start with passwords: a password manager like Bitwarden or 1Password is the single highest-impact change you can make.",
        "Disable location tracking for any app that doesn't genuinely need it.",
        "Before your next public Wi-Fi session, consider a free VPN like Proton VPN.",
      ],
    };
  }
  return {
    label: "Very Large Footprint",
    icon: "emergency",
    summary:
      "You leave a significant digital trail. That's common — and fixable. You don't need to change everything at once. Start with the highest-impact habits below.",
    actions: [
      "Switch to a password manager immediately — reused passwords are the #1 cause of account takeovers.",
      "Turn off location tracking for all non-essential apps this week.",
      "Consider switching your default browser to Firefox and installing the uBlock Origin extension to reduce ad tracking.",
    ],
  };
}

const resultStyles: Record<string, { border: string; bg: string; label: string }> = {
  "Small Footprint":     { border: "border-[#00353A]", bg: "bg-[#F4F4EF]", label: "bg-[#00353A] text-white" },
  "Moderate Footprint":  { border: "border-[#FBBC00]", bg: "bg-[#FAFAF5]", label: "bg-[#FBBC00] text-[#261A00]" },
  "Large Footprint":     { border: "border-[#70797A]", bg: "bg-[#FAFAF5]", label: "bg-[#70797A] text-white" },
  "Very Large Footprint":{ border: "border-[#1A1C19]", bg: "bg-[#EEEEE9]", label: "bg-[#1A1C19] text-white" },
};

export default function FootprintCalculator() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(answers).length;
  const total = questions.length;
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = getResult(score);
  const styles = resultStyles[result.label] ?? resultStyles["Moderate Footprint"];

  function handleSelect(id: string, s: number) {
    setAnswers((prev) => ({ ...prev, [id]: s }));
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className={`border-l-4 ${styles.border} ${styles.bg} p-10`}>
        <div className="mb-8">
          <span className={`inline-block px-4 py-1 font-label text-xs font-bold uppercase tracking-widest mb-4 ${styles.label}`}>
            {result.label}
          </span>
          <div className="flex items-end gap-4 mb-2">
            <p className="font-headline text-6xl font-black text-[#00353A]">{score}</p>
            <p className="font-headline text-2xl text-[#70797A] mb-2">/ 16</p>
          </div>
          <p className="font-label text-xs uppercase tracking-widest text-[#70797A]">Your digital footprint score</p>
        </div>

        <p className="font-body text-base text-[#1A1C19] leading-relaxed mb-8 max-w-xl">{result.summary}</p>

        <div className="bg-white border border-[#E3E3DE] p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-[#FBBC00] text-2xl">task_alt</span>
            <h3 className="font-headline font-bold text-[#1A1C19] uppercase tracking-tight">Your 3 Actions for This Week</h3>
          </div>
          <ol className="space-y-4">
            {result.actions.map((action, i) => (
              <li key={i} className="flex gap-4 font-body text-sm text-[#40484A] leading-relaxed">
                <span className="font-headline font-black text-[#FBBC00] shrink-0 text-lg leading-none mt-0.5">{i + 1}.</span>
                {action}
              </li>
            ))}
          </ol>
        </div>

        <button
          onClick={handleReset}
          className="font-label text-xs uppercase tracking-widest text-[#70797A] border-b border-[#70797A] hover:text-[#00353A] hover:border-[#00353A] transition-colors"
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-10 p-6 bg-[#F4F4EF] border border-[#E3E3DE]">
        <div className="flex justify-between font-label text-xs uppercase tracking-widest text-[#70797A] mb-3">
          <span>{answered} of {total} answered</span>
          <span>{Math.round((answered / total) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-[#E3E3DE] overflow-hidden">
          <div
            className="h-full bg-[#00353A] transition-all duration-300"
            style={{ width: `${(answered / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-0 divide-y divide-[#E3E3DE] border border-[#E3E3DE]">
        {questions.map((q, qi) => (
          <div key={q.id} className="p-8 relative group">
            <div className="absolute -left-0 top-8 text-5xl font-headline font-black text-[#E3E3DE] select-none leading-none">
              {String(qi + 1).padStart(2, "0")}
            </div>
            <p className="font-headline font-bold text-lg text-[#1A1C19] mb-5 pl-12">
              {q.text}
            </p>
            <div className="pl-12 space-y-2">
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt.score;
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleSelect(q.id, opt.score)}
                    className={`w-full text-left px-6 py-4 font-body text-sm transition-all duration-200 flex items-center justify-between ${
                      selected
                        ? "bg-[#00353A] text-white border border-[#00353A]"
                        : "bg-[#FAFAF5] text-[#40484A] border border-[#E3E3DE] hover:bg-[#F4F4EF] hover:border-[#BFC8C9]"
                    }`}
                  >
                    {opt.label}
                    {selected && (
                      <span className="material-symbols-outlined text-[#FBBC00] text-lg">check_circle</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="mt-8">
        <button
          onClick={() => setSubmitted(true)}
          disabled={answered < total}
          className="w-full py-4 bg-[#00353A] text-white font-label font-black uppercase tracking-widest text-sm hover:bg-[#FBBC00] hover:text-[#261A00] transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#00353A] disabled:hover:text-white"
        >
          {answered < total
            ? `Answer all questions to see your result (${total - answered} remaining)`
            : "See My Footprint →"}
        </button>
      </div>
    </div>
  );
}
