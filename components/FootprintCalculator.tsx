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
  colour: string;
  summary: string;
  actions: string[];
}

function getResult(score: number): Result {
  if (score <= 4) {
    return {
      label: "Small footprint",
      colour: "green",
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
      label: "Moderate footprint",
      colour: "yellow",
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
      label: "Large footprint",
      colour: "orange",
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
    label: "Very large footprint",
    colour: "red",
    summary:
      "You leave a significant digital trail. That's common — and fixable. You don't need to change everything at once. Start with the highest-impact habits below.",
    actions: [
      "Switch to a password manager immediately — reused passwords are the #1 cause of account takeovers.",
      "Turn off location tracking for all non-essential apps this week.",
      "Consider switching your default browser to Firefox and installing the uBlock Origin extension to reduce ad tracking.",
    ],
  };
}

const colourMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  green:  { bg: "bg-green-50",  text: "text-green-800",  border: "border-green-200",  badge: "bg-green-100 text-green-700"  },
  yellow: { bg: "bg-yellow-50", text: "text-yellow-800", border: "border-yellow-200", badge: "bg-yellow-100 text-yellow-700" },
  orange: { bg: "bg-orange-50", text: "text-orange-800", border: "border-orange-200", badge: "bg-orange-100 text-orange-700" },
  red:    { bg: "bg-red-50",    text: "text-red-800",    border: "border-red-200",    badge: "bg-red-100 text-red-700"       },
};

export default function FootprintCalculator() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(answers).length;
  const total = questions.length;
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = getResult(score);
  const colours = colourMap[result.colour];

  function handleSelect(id: string, score: number) {
    setAnswers((prev) => ({ ...prev, [id]: score }));
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className={`rounded-2xl border p-8 ${colours.bg} ${colours.border}`}>
        <div className="mb-6">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${colours.badge}`}>
            {result.label}
          </span>
          <p className={`text-5xl font-bold mb-1 ${colours.text}`}>{score} / 16</p>
          <p className="text-slate-500 text-sm">Your digital footprint score</p>
        </div>

        <p className={`text-base mb-6 ${colours.text}`}>{result.summary}</p>

        <div className="bg-white/70 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-slate-900 mb-4">Your 3 actions for this week</h3>
          <ol className="space-y-3">
            {result.actions.map((action, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="font-bold text-blue-600 shrink-0">{i + 1}.</span>
                {action}
              </li>
            ))}
          </ol>
        </div>

        <button
          onClick={handleReset}
          className="text-sm text-slate-500 underline hover:text-slate-700"
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>{answered} of {total} answered</span>
          <span>{Math.round((answered / total) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${(answered / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {questions.map((q, qi) => (
          <div key={q.id}>
            <p className="font-medium text-slate-800 mb-3">
              <span className="text-blue-500 mr-2">{qi + 1}.</span>
              {q.text}
            </p>
            <div className="space-y-2">
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt.score;
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleSelect(q.id, opt.score)}
                    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                      selected
                        ? "border-blue-500 bg-blue-50 text-blue-800 font-medium"
                        : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="mt-10">
        <button
          onClick={() => setSubmitted(true)}
          disabled={answered < total}
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {answered < total
            ? `Answer all questions to see your result (${total - answered} remaining)`
            : "See my footprint →"}
        </button>
      </div>
    </div>
  );
}
