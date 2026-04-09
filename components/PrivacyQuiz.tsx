"use client";

import { useState } from "react";

interface Question {
  id: string;
  text: string;
  options: { label: string; correct: boolean; explanation: string }[];
}

const questions: Question[] = [
  {
    id: "cookies",
    text: "What do third-party cookies primarily do?",
    options: [
      {
        label: "Save your login session on a website",
        correct: false,
        explanation:
          "That's first-party cookies. Third-party cookies are placed by domains other than the one you're visiting — mainly used to track you across multiple sites for advertising.",
      },
      {
        label: "Track your browsing across multiple websites",
        correct: true,
        explanation:
          "Third-party cookies allow ad networks and data brokers to follow you from site to site, building a profile of your interests and behaviour.",
      },
      {
        label: "Speed up page loading by caching content",
        correct: false,
        explanation:
          "Caching is handled by browser cache and service workers — not cookies.",
      },
    ],
  },
  {
    id: "vpn",
    text: "What does a VPN hide from your Internet Service Provider (ISP)?",
    options: [
      {
        label: "Your identity — they can't tell it's you at all",
        correct: false,
        explanation:
          "Your ISP still knows who you are — the connection comes from your account. A VPN hides the content and destination of your traffic, not your identity.",
      },
      {
        label: "The specific websites you visit and the content of your traffic",
        correct: true,
        explanation:
          "A VPN encrypts your traffic and routes it through a server, so your ISP sees encrypted data going to the VPN — not what you're browsing.",
      },
      {
        label: "Everything — VPNs make you completely anonymous",
        correct: false,
        explanation:
          "VPNs improve privacy but don't make you anonymous. The VPN provider itself can see your traffic, and you can still be tracked by browser fingerprinting, cookies, and logged-in accounts.",
      },
    ],
  },
  {
    id: "broker",
    text: "What is a data broker?",
    options: [
      {
        label: "A company that brokers deals between app stores and developers",
        correct: false,
        explanation:
          "That's not a real category. Data brokers are in the business of collecting and selling personal information.",
      },
      {
        label: "A company that collects and sells your personal information",
        correct: true,
        explanation:
          "Data brokers aggregate personal data from public records, social media, purchase history, and other sources — then sell profiles to advertisers, employers, and others.",
      },
      {
        label: "A secure cloud storage service",
        correct: false,
        explanation:
          "Data brokers have nothing to do with storage — they collect and sell personal data as a business.",
      },
    ],
  },
  {
    id: "incognito",
    text: "What does incognito/private browsing actually protect you from?",
    options: [
      {
        label: "Your browsing history being saved locally on your device",
        correct: true,
        explanation:
          "Incognito mode prevents your browser from saving history, cookies, and form data on your device. That's it — your ISP, employer network, and the websites you visit can still see your activity.",
      },
      {
        label: "Websites tracking you with cookies",
        correct: false,
        explanation:
          "Websites can still use cookies and other tracking methods during an incognito session — they just won't be saved after you close the window.",
      },
      {
        label: "Your ISP seeing which sites you visit",
        correct: false,
        explanation:
          "Incognito mode only affects your local device. Your ISP sees your DNS queries and connections regardless of your browser mode.",
      },
    ],
  },
  {
    id: "fingerprint",
    text: "What is 'browser fingerprinting'?",
    options: [
      {
        label: "A biometric login method using your actual fingerprint",
        correct: false,
        explanation:
          "That's touchID/fingerprint authentication — a different thing entirely.",
      },
      {
        label: "Scanning your device for malware through the browser",
        correct: false,
        explanation:
          "Browser fingerprinting doesn't involve malware scanning.",
      },
      {
        label: "Identifying you by combining your browser and device settings",
        correct: true,
        explanation:
          "Your browser leaks dozens of signals — screen resolution, fonts, timezone, plugins, etc. Combined, these form a near-unique 'fingerprint' that can track you even without cookies.",
      },
    ],
  },
  {
    id: "phishing",
    text: "How do most phishing attacks work?",
    options: [
      {
        label: "They hack your device directly over Wi-Fi",
        correct: false,
        explanation:
          "That's a different type of attack. Phishing is social engineering — it tricks you, not your device.",
      },
      {
        label: "They trick you into giving up credentials or clicking malicious links",
        correct: true,
        explanation:
          "Phishing relies on deception — fake emails, login pages, or messages that look legitimate. The goal is to get you to hand over passwords, payment details, or click a link that installs malware.",
      },
      {
        label: "They guess your password by brute force",
        correct: false,
        explanation:
          "Brute force is a separate attack. Phishing is about social engineering, not computation.",
      },
    ],
  },
  {
    id: "twofactor",
    text: "Which of these is the most secure form of two-factor authentication?",
    options: [
      {
        label: "SMS text message codes",
        correct: false,
        explanation:
          "SMS is the weakest 2FA. SIM-swapping attacks can redirect your texts to an attacker's phone. It's still better than nothing, but use an authenticator app if possible.",
      },
      {
        label: "An authenticator app (like Authy or Google Authenticator)",
        correct: false,
        explanation:
          "Authenticator apps are much better than SMS, but hardware keys are the gold standard for security.",
      },
      {
        label: "A hardware security key (like a YubiKey)",
        correct: true,
        explanation:
          "Hardware keys are phishing-resistant — even if you're tricked into visiting a fake site, the key won't authenticate. They're the most secure 2FA method available to consumers.",
      },
    ],
  },
  {
    id: "permissions",
    text: "An app asks for microphone access, but it's a to-do list app. What should you do?",
    options: [
      {
        label: "Grant it — apps often need permissions for features you haven't discovered",
        correct: false,
        explanation:
          "A to-do list has no legitimate need for microphone access. Unnecessary permissions are a red flag and should be denied.",
      },
      {
        label: "Deny it — a to-do list has no legitimate need for your microphone",
        correct: true,
        explanation:
          "Always ask why an app needs a permission. If you can't think of a good reason, deny it. You can always grant it later if a feature requires it.",
      },
      {
        label: "Grant it but turn off your microphone after using the app",
        correct: false,
        explanation:
          "You shouldn't need to physically manage your microphone around an app. Deny unnecessary permissions in the app settings.",
      },
    ],
  },
];

interface AnswerState {
  selectedIndex: number;
  isCorrect: boolean;
}

export default function PrivacyQuiz() {
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(answers).length;
  const total = questions.length;
  const correct = Object.values(answers).filter((a) => a.isCorrect).length;
  const pct = Math.round((correct / total) * 100);

  function handleSelect(qId: string, optIndex: number, isCorrect: boolean) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: { selectedIndex: optIndex, isCorrect } }));
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  const scoreLabel =
    pct >= 90
      ? "Privacy expert"
      : pct >= 70
      ? "Privacy-aware"
      : pct >= 50
      ? "Getting there"
      : "Room to grow";

  const scoreBg =
    pct >= 90
      ? "bg-green-50 border-green-200"
      : pct >= 70
      ? "bg-blue-50 border-blue-200"
      : pct >= 50
      ? "bg-yellow-50 border-yellow-200"
      : "bg-orange-50 border-orange-200";

  const scoreText =
    pct >= 90
      ? "text-green-700"
      : pct >= 70
      ? "text-blue-700"
      : pct >= 50
      ? "text-yellow-700"
      : "text-orange-700";

  if (submitted) {
    return (
      <div>
        <div className={`rounded-2xl border p-8 mb-10 ${scoreBg}`}>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${scoreText} bg-white/60`}>
            {scoreLabel}
          </span>
          <p className={`text-5xl font-bold mb-1 ${scoreText}`}>
            {correct} / {total}
          </p>
          <p className="text-slate-500 text-sm">correct answers ({pct}%)</p>
        </div>

        <div className="space-y-6 mb-10">
          {questions.map((q) => {
            const ans = answers[q.id];
            const chosen = ans ? q.options[ans.selectedIndex] : null;
            return (
              <div key={q.id} className="border border-slate-100 rounded-xl p-5">
                <p className="font-medium text-slate-800 mb-3">{q.text}</p>
                {chosen && (
                  <div
                    className={`flex gap-3 p-3 rounded-lg text-sm ${
                      ans.isCorrect
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    <span>{ans.isCorrect ? "✓" : "✗"}</span>
                    <div>
                      <p className="font-medium mb-1">{chosen.label}</p>
                      <p className="text-xs opacity-80">{chosen.explanation}</p>
                    </div>
                  </div>
                )}
                {!ans.isCorrect && (
                  <div className="mt-2 flex gap-3 p-3 rounded-lg text-sm bg-green-50 text-green-800">
                    <span>✓</span>
                    <div>
                      <p className="font-medium mb-1">
                        Correct answer: {q.options.find((o) => o.correct)?.label}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={handleReset}
          className="text-sm text-slate-500 underline hover:text-slate-700"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
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

      <div className="space-y-8">
        {questions.map((q, qi) => {
          const ans = answers[q.id];
          return (
            <div key={q.id}>
              <p className="font-medium text-slate-800 mb-3">
                <span className="text-blue-500 mr-2">{qi + 1}.</span>
                {q.text}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  const isSelected = ans?.selectedIndex === oi;
                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(q.id, oi, opt.correct)}
                      className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                        isSelected
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
          );
        })}
      </div>

      <div className="mt-10">
        <button
          onClick={() => setSubmitted(true)}
          disabled={answered < total}
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {answered < total
            ? `Answer all questions to see your score (${total - answered} remaining)`
            : "See my score →"}
        </button>
      </div>
    </div>
  );
}
