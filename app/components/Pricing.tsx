import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const PHASES = [
  {
    tag: "Free — always",
    tagStyle: "bg-emerald-50 text-emerald-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z"/></svg>
    ),
    title: "Growth Audit Call",
    description:
      "A focused 45-minute conversation to map your current operation, surface the biggest friction points, and decide together whether we're the right fit. No pitch. No obligation.",
    details: ["Operations mapping", "Bottleneck diagnosis", "No commitment required"],
  },
  {
    tag: "One-time",
    tagStyle: "bg-violet-50 text-violet-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    title: "Build & Setup",
    description:
      "We scope, design, and implement exactly what your restaurant needs — automations, integrations, dashboards, workflows. Fixed quote before we start. No hourly billing, no scope creep.",
    details: ["Fixed price agreed upfront", "Milestone-based delivery", "Full handover and training"],
  },
  {
    tag: "Optional",
    tagStyle: "bg-stone-100 text-stone-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-stone-400"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
    ),
    title: "Ongoing Support",
    description:
      "A light monthly retainer to keep everything running, adjust as your operation evolves, and have someone on call when things need to move fast. Everything we build is fully yours.",
    details: ["Cancel anytime", "Priority response", "Monthly check-in included"],
  },
];

const FAQS = [
  {
    q: "Does the audit really cost nothing?",
    a: "Yes. The audit call is free with no strings attached. It gives us both a clear picture of what's needed before any commitment. If we're not the right fit, we'll say so honestly.",
  },
  {
    q: "How is the build cost determined?",
    a: "After the audit we send a detailed scope with a fixed price. No hourly billing, no surprise invoices. You approve everything before we start a single line of work.",
  },
  {
    q: "Do I have to take the maintenance plan?",
    a: "No. Everything is fully handed over with documentation and training. The support plan is optional — useful if you want ongoing adjustments or someone on call.",
  },
  {
    q: "What if my restaurant has unusual needs?",
    a: "Every engagement is scoped individually after the audit. We've worked across single-location independents and multi-site groups. If it's a restaurant operations problem, we've likely seen it.",
  },
  {
    q: "How long does a typical project take?",
    a: "Smaller scopes typically wrap in two weeks. Larger operational overhauls take three to four weeks. Multi-site rollouts have their own agreed timeline.",
  },
  {
    q: "What kinds of systems do you actually build?",
    a: "Order management automations, kitchen display workflows, staff communications, customer follow-up sequences, operations dashboards, POS integrations, and more.",
  },
];

const WHAT_YOU_GET = [
  { label: "Operations audit", sub: "Free, always" },
  { label: "Fixed-price scope", sub: "No billing surprises" },
  { label: "Full handover", sub: "You own everything" },
  { label: "Team training", sub: "Included in every build" },
  { label: "Optional support", sub: "Cancel anytime" },
  { label: "No lock-in", sub: "Exit whenever you want" },
];

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Pricing() {
  return (
    <main className={`${display.variable} bg-white text-[#18181B]`}>

     {/* Full-width background wrapper */}
<div className="bg-[#FAFAF9] w-full">
  <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] max-w-7xl mx-auto">

    {/* Left — copy */}
    <div className="flex flex-col justify-end px-8 py-16 md:px-16 md:py-20 lg:py-24">
      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-violet-600 mb-5">
        How we work
      </p>
      <h1
        style={{ fontFamily: "var(--font-display)" }}
        className="text-[2.6rem] md:text-[3.4rem] font-bold leading-[1.06] tracking-[-0.03em] text-[#18181B] mb-5"
      >
        Start free.{" "}
        <span className="text-violet-600">
          Pay only
          <br />
          when it's clear.
        </span>
      </h1>
      <p className="text-base md:text-lg leading-relaxed text-[#71717A] mb-10 max-w-[420px]">
        We don't quote until we understand your operation. The audit call
        costs nothing — it gives us both the clarity to move forward.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#audit"
          style={{ fontFamily: "var(--font-display)" }}
          className="inline-flex items-center gap-2 self-start rounded-lg bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-violet-700 transition-colors"
        >
          Book free audit call
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a
          href="#solutions"
          style={{ fontFamily: "var(--font-display)" }}
          className="inline-flex items-center rounded-lg border border-[#E4E4E7] px-7 py-3.5 text-sm font-semibold text-[#18181B] hover:bg-[#F4F4F5] transition-colors"
        >
          See what we build
        </a>
      </div>

      {/* Stats bar */}
      <div className="flex gap-10 mt-14 pt-10 border-t border-[#E4E4E7]">
        {[
          { n: "45m", l: "Audit call" },
          { n: "Fixed", l: "Price agreed upfront" },
          { n: "Yours", l: "Everything we build" },
        ].map(({ n, l }) => (
          <div key={l}>
            <div
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl font-bold text-[#18181B]"
            >
              {n}
            </div>
            <div className="text-xs text-[#A1A1AA] mt-1">{l}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Right — image */}
    <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden">
      <Image
        src="/growth.jpg"
        alt="Restaurant kitchen in operation"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF9]/30 via-transparent to-transparent pointer-events-none" />
    </div>

  </section>
</div>

      {/* ── PROCESS ── */}
      <section className="bg-white px-8 py-20 md:px-16 md:py-28 border-t border-[#F4F4F5]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-violet-600 mb-3">
            The process
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-12">
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl md:text-4xl font-bold tracking-[-0.025em] text-[#18181B]"
            >
              Three steps,
              <br className="hidden md:block" /> total transparency
            </h2>
            <p className="text-sm text-[#71717A] max-w-[240px] md:text-right leading-relaxed">
              You'll always know what you're getting before any money changes hands.
            </p>
          </div>

          {/* Stacked rows */}
          <div className="flex flex-col gap-[2px] rounded-2xl overflow-hidden border border-[#F0F0F0]">
            {PHASES.map(({ tag, tagStyle, icon, title, description, details }, i) => (
              <div
                key={title}
                className={`bg-[#FAFAF9] px-7 py-7 flex gap-5 items-start ${
                  i === 0 ? "rounded-t-2xl" : i === PHASES.length - 1 ? "rounded-b-2xl" : ""
                }`}
              >
                {/* Icon pill */}
                <div className="shrink-0 w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center mt-0.5">
                  {icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span
                      style={{ fontFamily: "var(--font-display)" }}
                      className="text-[14px] font-semibold text-[#18181B]"
                    >
                      {title}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.1em] rounded-full px-2.5 py-1 ${tagStyle}`}
                    >
                      {tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#71717A] mb-4 max-w-[540px]">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                    {details.map((d) => (
                      <span
                        key={d}
                        className="flex items-center gap-1.5 text-[13px] text-[#52525B]"
                      >
                        <CheckIcon className="text-violet-600 shrink-0" />
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE BREAK / PULL QUOTE ── */}
      <div className="relative h-[400px] md:h-[480px] overflow-hidden">
        <Image
          src="/growth.jpg"
          alt=""
          fill
          aria-hidden
          className="object-cover object-[center_40%] brightness-[0.35] saturate-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl md:text-4xl font-bold text-white leading-[1.2] tracking-[-0.02em] max-w-2xl"
          >
            "We don't bill until you've seen the scope, approved the price, and{" "}
            <span className="text-violet-400">decided it's worth it.</span>"
          </p>
        </div>
      </div>

      {/* ── WHAT YOU GET ── */}
      <section className="bg-[#FAFAF9] px-8 py-20 md:px-16 md:py-28 border-t border-[#F4F4F5]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-violet-600 mb-3">
            What's included
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl md:text-4xl font-bold tracking-[-0.025em] text-[#18181B] mb-10"
          >
            Every engagement includes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E8E8E8] border border-[#E8E8E8] rounded-2xl overflow-hidden">
            {WHAT_YOU_GET.map(({ label, sub }) => (
              <div
                key={label}
                className="bg-white px-6 py-5 flex items-start gap-3.5"
              >
                <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
                  <CheckIcon className="text-violet-600" />
                </div>
                <div>
                  <p
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-[13px] font-semibold text-[#18181B] mb-0.5"
                  >
                    {label}
                  </p>
                  <p className="text-xs text-[#A1A1AA]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-8 py-20 md:px-16 md:py-28 border-t border-[#F4F4F5]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-violet-600 mb-3">
            Common questions
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl md:text-4xl font-bold tracking-[-0.025em] text-[#18181B] mb-10"
          >
            Straight answers
          </h2>

          <div className="border border-[#F0F0F0] rounded-2xl overflow-hidden divide-y divide-[#F0F0F0]">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-white px-8 py-7">
                <p
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-[14px] font-semibold text-[#18181B] mb-2.5 leading-snug"
                >
                  {q}
                </p>
                <p className="text-sm leading-relaxed text-[#71717A]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#FAFAF9] border-t border-[#F4F4F5] px-8 py-24 md:px-16 md:py-32 text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-violet-600 mb-5">
            Ready?
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#18181B] leading-tight mb-5"
          >
            Your first call costs nothing.{" "}
            <span className="text-violet-600">Everything else is clear.</span>
          </h2>
          <p className="text-base leading-relaxed text-[#71717A] mb-10">
            Book a 45-minute audit. We'll diagnose the bottlenecks, scope a
            solution, and give you a fixed price — before you spend a penny.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#audit"
              style={{ fontFamily: "var(--font-display)" }}
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-violet-700 transition-colors"
            >
              Book free audit call
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#solutions"
              style={{ fontFamily: "var(--font-display)" }}
              className="inline-flex items-center rounded-lg border border-[#E4E4E7] px-7 py-3.5 text-sm font-semibold text-[#18181B] hover:bg-[#F4F4F5] transition-colors"
            >
              See what we build
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}