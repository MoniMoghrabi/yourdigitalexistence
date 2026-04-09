import FootprintCalculator from "@/components/FootprintCalculator";

export const metadata = {
  title: "Footprint Calculator — Your Digital Existence",
  description:
    "Answer 8 quick questions to get a personalised picture of your digital footprint and 3 actions you can take this week.",
};

export default function FootprintCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <span className="text-xs font-medium uppercase tracking-wide text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Interactive tool
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-3">
          What&apos;s your digital footprint?
        </h1>
        <p className="text-slate-500">
          Answer 8 quick questions about your online habits. No data is stored or sent
          anywhere — everything runs in your browser.
        </p>
      </div>

      <FootprintCalculator />
    </div>
  );
}
