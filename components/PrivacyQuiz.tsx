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
    pct >= 90 ? "Privacy Expert" :
    pct >= 70 ? "Privacy-Aware" :
    pct >= 50 ? "Getting There" :
    "Room to Grow";

  const scoreBorderColor =
    pct >= 90 ? "border-[#00353A]" :
    pct >= 70 ? "border-[#FBBC00]" :
    pct >= 50 ? "border-[#70797A]" :
    "border-[#1A1C19]";

  const scoreLabelStyle =
    pct >= 90 ? "bg-[#00353A] text-white" :
    pct >= 70 ? "bg-[#FBBC00] text-[#261A00]" :
    pct >= 50 ? "bg-[#70797A] text-white" :
    "bg-[#1A1C19] text-white";

  if (submitted) {
    return (
      <div>
        <div className={`border-l-4 ${scoreBorderColor} bg-[#F4F4EF] p-10 mb-10`}>
          <span className={`inline-block px-4 py-1 font-label text-xs font-bold uppercase tracking-widest mb-4 ${scoreLabelStyle}`}>
            {scoreLabel}
          </span>
          <div className="flex items-end gap-4 mb-2">
            <p className="font-headline text-6xl font-black text-[#00353A]">{correct}</p>
            <p className="font-headline text-2xl text-[#70797A] mb-2">/ {total}</p>
          </div>
          <p className="font-label text-xs uppercase tracking-widest text-[#70797A]">correct answers ({pct}%)</p>
        </div>

        <div className="space-y-0 divide-y divide-[#E3E3DE] border border-[#E3E3DE] mb-10">
          {questions.map((q) => {
            const ans = answers[q.id];
            const chosen = ans ? q.options[ans.selectedIndex] : null;
            return (
              <div key={q.id} className="p-8">
                <p className="font-headline font-bold text-[#1A1C19] mb-4">{q.text}</p>
                {chosen && (
                  <div
                    className={`flex gap-4 p-5 font-body text-sm mb-3 ${
                      ans.isCorrect
                        ? "bg-[#F4F4EF] border-l-4 border-[#00353A] text-[#1A1C19]"
                        : "bg-[#EEEEE9] border-l-4 border-[#70797A] text-[#1A1C19]"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base shrink-0 mt-0.5">
                      {ans.isCorrect ? "check_circle" : "cancel"}
                    </span>
                    <div>
                      <p className="font-headline font-bold mb-1">{chosen.label}</p>
                      <p className="text-xs text-[#40484A] leading-relaxed">{chosen.explanation}</p>
                    </div>
                  </div>
                )}
                {ans && !ans.isCorrect && (
                  <div className="flex gap-4 p-5 font-body text-sm bg-[#F4F4EF] border-l-4 border-[#FBBC00]">
                    <span className="material-symbols-outlined text-[#FBBC00] text-base shrink-0 mt-0.5">lightbulb</span>
                    <div>
                      <p className="font-headline font-bold text-[#1A1C19] mb-1">
                        Correct: {q.options.find((o) => o.correct)?.label}
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
          className="font-label text-xs uppercase tracking-widest text-[#70797A] border-b border-[#70797A] hover:text-[#00353A] hover:border-[#00353A] transition-colors"
        >
          Try again
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
        {questions.map((q, qi) => {
          const ans = answers[q.id];
          return (
            <div key={q.id} className="p-8 relative">
              <div className="absolute top-8 left-0 text-5xl font-headline font-black text-[#E3E3DE] select-none leading-none -translate-x-1 pointer-events-none">
                {String(qi + 1).padStart(2, "0")}
              </div>
              <p className="font-headline font-bold text-lg text-[#1A1C19] mb-5 pl-12">
                {q.text}
              </p>
              <div className="pl-12 space-y-2">
                {q.options.map((opt, oi) => {
                  const isSelected = ans?.selectedIndex === oi;
                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(q.id, oi, opt.correct)}
                      className={`w-full text-left px-6 py-4 font-body text-sm transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? "bg-[#00353A] text-white border border-[#00353A]"
                          : "bg-[#FAFAF5] text-[#40484A] border border-[#E3E3DE] hover:bg-[#F4F4EF] hover:border-[#BFC8C9]"
                      }`}
                    >
                      {opt.label}
                      {isSelected && (
                        <span className="material-symbols-outlined text-[#FBBC00] text-lg shrink-0 ml-3">check_circle</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit */}
      <div className="mt-8">
        <button
          onClick={() => setSubmitted(true)}
          disabled={answered < total}
          className="w-full py-4 bg-[#00353A] text-white font-label font-black uppercase tracking-widest text-sm hover:bg-[#FBBC00] hover:text-[#261A00] transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#00353A] disabled:hover:text-white"
        >
          {answered < total
            ? `Answer all questions to see your score (${total - answered} remaining)`
            : "See My Score →"}
        </button>
      </div>
    </div>
  );
}
