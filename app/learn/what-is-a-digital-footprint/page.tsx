import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is a Digital Footprint? — Your Digital Existence",
  description:
    "Every time you go online, you leave traces. This article explains what a digital footprint is, what it includes, and why it matters — in plain language.",
};

export default function WhatIsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/learn"
        className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-8 inline-block"
      >
        ← Back to Learn
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4 text-xs text-slate-400">
          <span>5 min read</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          What Is a Digital Footprint?
        </h1>
        <p className="text-slate-500">
          Every time you go online, you leave traces behind. This article explains what a
          digital footprint is, what it includes, and why it matters — in plain language.
        </p>
      </header>

      <article className="prose prose-slate prose-headings:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline max-w-none">
        <p>
          Every time you go online, you leave traces behind. Some you create intentionally — a
          tweet, a product review, a LinkedIn update. Many others are created without you
          realising it.
        </p>
        <p>
          Together, these traces form your <strong>digital footprint</strong>: a persistent,
          detailed record of your online life.
        </p>

        <h2>The two types of digital footprint</h2>

        <h3>Active footprint</h3>
        <p>This is data you <em>knowingly</em> share:</p>
        <ul>
          <li>Posts, comments, and likes on social media</li>
          <li>Information you enter into forms (name, email, address)</li>
          <li>Reviews you write</li>
          <li>Photos you upload</li>
        </ul>
        <p>
          You chose to put this information out there, even if you didn&apos;t think carefully
          about who could see it or for how long.
        </p>

        <h3>Passive footprint</h3>
        <p>This is data collected about you <em>without your direct input</em>:</p>
        <ul>
          <li>Which websites you visit, and for how long</li>
          <li>Your approximate location (inferred from your IP address)</li>
          <li>The device and browser you&apos;re using</li>
          <li>What you click on, and in what order</li>
          <li>How long your mouse hovers over a particular ad</li>
        </ul>
        <p>
          Advertisers, social platforms, data brokers, and even the websites you visit all
          collect this kind of data continuously — usually buried in the privacy policy you
          agreed to without reading.
        </p>

        <h2>Who collects your data?</h2>
        <p>Broadly speaking, four groups are interested in your digital footprint:</p>
        <ol>
          <li>
            <strong>Platforms you use directly</strong> — Google, Meta, Amazon, and others
            build detailed profiles of you to target ads and personalise your experience.
          </li>
          <li>
            <strong>Data brokers</strong> — companies you&apos;ve likely never heard of that
            buy, aggregate, and sell personal data. There are thousands of them.
          </li>
          <li>
            <strong>Employers and institutions</strong> — it&apos;s common for employers to
            Google candidates, and for universities to review applicants&apos; social media.
          </li>
          <li>
            <strong>Cybercriminals</strong> — exposed personal data can be used for phishing,
            identity theft, and account takeover attacks.
          </li>
        </ol>

        <h2>Why your footprint is bigger than you think</h2>
        <p>
          Research consistently shows that people underestimate their own digital footprint. A
          few things that might surprise you:
        </p>
        <ul>
          <li>
            <strong>Deleted isn&apos;t gone.</strong> Once data is shared or scraped, it&apos;s
            often archived by third parties. Deleting a post removes it from your profile, but
            not necessarily from every server that stored it.
          </li>
          <li>
            <strong>Apps share data with each other.</strong> Many free apps contain tracking
            SDKs from advertising networks. Using one app may share your data with dozens of
            third parties.
          </li>
          <li>
            <strong>Cross-device tracking.</strong> Companies link your phone, laptop, and
            tablet together using IP addresses, login sessions, and probabilistic
            fingerprinting.
          </li>
        </ul>

        <hr />

        <h2>Three things you can do right now</h2>
        <ol>
          <li>
            <strong>Search your own name.</strong> Open an incognito/private window and search
            for your full name. What comes up? That&apos;s roughly what an employer, stranger,
            or data broker can find about you.
          </li>
          <li>
            <strong>Check for breaches.</strong> Visit{" "}
            <a
              href="https://haveibeenpwned.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              haveibeenpwned.com
            </a>{" "}
            and enter your email address to see if your data has appeared in any known
            breaches.
          </li>
          <li>
            <strong>Review one app&apos;s permissions today.</strong> On your phone, pick one
            app and check what permissions it has (location, contacts, microphone). Revoke
            anything it doesn&apos;t need.
          </li>
        </ol>
        <p>You don&apos;t need to do everything at once. Small, consistent steps make a real difference.</p>
      </article>

      <nav className="mt-12 pt-8 border-t border-slate-100 flex justify-between text-sm">
        <span />
        <Link
          href="/learn/why-it-matters"
          className="text-blue-600 hover:underline"
        >
          Next: Why it matters →
        </Link>
      </nav>
    </div>
  );
}
