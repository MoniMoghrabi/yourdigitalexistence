import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Your Digital Footprint Matters — Your Digital Existence",
  description:
    "From targeted ads to data breaches and hiring decisions — the real-world consequences of your online activity, explained clearly.",
};

export default function WhyItMattersPage() {
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
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Why It Matters</h1>
        <p className="text-slate-500">
          Your digital footprint isn&apos;t just an abstract privacy concept. It has real
          consequences — on your finances, your career, your safety, and your autonomy.
        </p>
      </header>

      <article className="prose prose-slate prose-headings:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline max-w-none">
        <p>
          You might think: &ldquo;I have nothing to hide.&rdquo; But having nothing to hide is
          different from having nothing to lose. Your digital footprint affects you in concrete
          ways — whether you&apos;re aware of it or not.
        </p>

        <h2>1. You&apos;re being profiled — constantly</h2>
        <p>
          Every major platform you use builds a detailed profile of you. Google knows what you
          search for at 2 am. Facebook infers your political views, relationship status, and
          emotional state from your activity. These profiles are sold to advertisers to
          influence what you buy, what you read, and how you vote.
        </p>
        <p>
          This isn&apos;t speculation — it&apos;s the business model. In 2023, Meta generated
          over $117 billion in revenue, almost entirely from advertising targeted using
          profiles built from user data.
        </p>

        <h2>2. Data breaches are more common than you think</h2>
        <p>
          In 2023 alone, billions of personal records were exposed in data breaches. When a
          company you&apos;ve signed up with is breached, your data — email, password, phone
          number, sometimes payment details — can end up for sale on the dark web within hours.
        </p>
        <p>
          The more services you&apos;re signed up for, the more chances there are for your data
          to be exposed. And once it&apos;s out, it&apos;s effectively permanent.
        </p>

        <h2>3. Your online history can affect your career</h2>
        <p>
          A 2018 survey found that 70% of employers check candidates&apos; social media before
          making hiring decisions. Old posts, photos, or comments made years ago can resurface
          and affect job applications, promotions, or professional relationships.
        </p>
        <p>
          This applies to more than employment. Landlords, lenders, and even insurers
          increasingly use online data to make decisions about you.
        </p>

        <h2>4. You may be paying more than others for the same thing</h2>
        <p>
          Dynamic pricing — where different people are shown different prices for the same
          product — is a real and growing practice. Airlines, hotels, and e-commerce sites can
          use your browsing history, device type, and even location to adjust prices. If you
          regularly browse for flights from an expensive neighbourhood, you may be shown higher
          fares.
        </p>

        <h2>5. Your data outlives your intentions</h2>
        <p>
          When you signed up for a service at age 18, you probably didn&apos;t think about what
          that data would look like at 35. But companies retain data for years, sometimes
          indefinitely. A forum post you made a decade ago, a photo tagged by a friend, a
          comment on a news article — these things persist.
        </p>
        <p>
          Laws like GDPR (in Europe) give you the right to request deletion, but enforcement is
          patchy and many data brokers operate in jurisdictions with weaker protections.
        </p>

        <h2>6. The chilling effect on behaviour</h2>
        <p>
          Research shows that when people know they are being watched, they change their
          behaviour — they self-censor, avoid certain searches, or don&apos;t engage with
          topics they&apos;re curious about. This isn&apos;t paranoia; it&apos;s a documented
          psychological response. Mass surveillance — even by corporations, not governments —
          constrains freedom in subtle ways.
        </p>

        <hr />

        <h2>Three takeaways</h2>
        <ol>
          <li>
            <strong>Your data is valuable</strong> — treat it that way. Just because giving it
            away feels free doesn&apos;t mean it is.
          </li>
          <li>
            <strong>The effects are real.</strong> Data exposure can affect your career,
            finances, and safety — not just your inbox.
          </li>
          <li>
            <strong>You have more control than you think.</strong> Most of the high-impact
            changes are free, quick, and don&apos;t require deleting everything.
          </li>
        </ol>
      </article>

      <nav className="mt-12 pt-8 border-t border-slate-100 flex justify-between text-sm">
        <Link href="/learn/what-is-a-digital-footprint" className="text-blue-600 hover:underline">
          ← What is a digital footprint?
        </Link>
        <Link href="/learn/how-to-protect-yourself" className="text-blue-600 hover:underline">
          Next: How to protect yourself →
        </Link>
      </nav>
    </div>
  );
}
