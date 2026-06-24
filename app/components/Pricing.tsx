
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const PHASES = [
  {
    step: '01',
    tag: 'Free — always',
    tagStyle: 'bg-emerald-50 text-emerald-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z"/>
      </svg>
    ),
    title: 'Growth s Call',
    description:
      'A focused 45-minute conversation to map your current operation, surface the biggest friction points, and decide together whether we\'re the right fit. No pitch. No obligation.',
    details: ['Operations mapping', 'Bottleneck diagnosis', 'No commitment required'],
  },
  {
    step: '02',
    tag: 'One-time',
    tagStyle: 'bg-violet-50 text-violet-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Build & Setup',
    description:
      'We scope, design, and implement exactly what your restaurant needs — automations, integrations, dashboards, workflows. Fixed quote before we start. No hourly billing, no scope creep.',
    details: ['Fixed price agreed upfront', 'Custom solution blueprint', 'Milestone-based delivery'],
  },
  {
    step: '03',
    tag: 'Included in build',
    tagStyle: 'bg-teal-50 text-teal-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
      title: "Deploy & Optimize",
    description:
      'A light monthly retainer to keep everything running, adjust as your operation evolves, and have someone on call when things need to move fast. Everything we build is fully yours.',
    details: ['System deployment & setup', 'Staff training & onboarding', 'Ongoing support & Q&A'],
  },
];

const FAQS = [
  {
    q: 'Does the audit really cost nothing?',
    a: "Yes. The audit call is free with no strings attached. It gives us both a clear picture of what's needed before any commitment. If we're not the right fit, we'll say so honestly.",
  },
  {
    q: 'How is the build cost determined?',
    a: 'After the audit we send a detailed scope with a fixed price. No hourly billing, no surprise invoices. You approve everything before we start a single line of work.',
  },
  {
    q: 'Do I have to take the maintenance plan?',
    a: 'No. Everything is fully handed over with documentation and training. The support plan is optional — useful if you want ongoing adjustments or someone on call.',
  },
  {
    q: 'What if my restaurant has unusual needs?',
    a: "Every engagement is scoped individually after the audit. We've worked across single-location independents and multi-site groups. If it's a restaurant operations problem, we've likely seen it.",
  },
  {
    q: 'How long does a typical project take?',
    a: 'Smaller scopes typically wrap in two weeks. Larger operational overhauls take three to four weeks. Multi-site rollouts have their own agreed timeline.',
  },
  {
    q: 'What kinds of systems do you actually build?',
    a: 'Order management automations, kitchen display workflows, staff communications, customer follow-up sequences, operations dashboards, POS integrations, and more.',
  },
];

const WHAT_YOU_GET = [
  { label: 'Operations audit', sub: 'Free, always' },
  { label: 'Fixed-price scope', sub: 'No billing surprises' },
  { label: 'Full handover', sub: 'You own everything' },
  { label: 'Team training', sub: 'Included in every build' },
  { label: 'Optional support', sub: 'Cancel anytime' },
  { label: 'No lock-in', sub: 'Exit whenever you want' },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main style={{ fontFamily: 'var(--font-nunito)' }} className="bg-white text-gray-900">

       <section
      className={'relative overflow-hidden bg-[#F7F5F1]'}
    >
   
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#FF5A1F]/10 blur-3xl" />
        <div className="absolute top-1/3 left-[-15%] h-[380px] w-[380px] rounded-full bg-[#ECE8E0] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-12 lg:py-52">
        <div className="max-w-xl mt-10">
           <p className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent mb-4">
              How we work
            </p>
          <h1
            style={{ fontFamily: "var(--font-jakarta)" }}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-[#15171A] sm:text-5xl lg:text-[3.4rem] mb-5"
          >
            Start free.{" "}
            <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent">
              Pay only when it's clear
            </span>
          </h1>

           <p className="text-base md:text-lg leading-relaxed text-gray-500 mb-10 max-w-[420px]">
              We don't quote until we understand your operation. The audit call costs nothing. It gives us both the clarity to move forward.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
               href="/?scrollTo=audit"
                style={{ fontFamily: 'var(--font-jakarta)' }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.5)] hover:from-[#6D28D9] hover:to-[#9333EA] transition-all duration-200"
              >
                Book free audit call
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a
                href="/solutions"
                style={{ fontFamily: 'var(--font-jakarta)' }}
                className="inline-flex items-center rounded-full border border-[#E4E4E7] bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                See what we build
              </a>
            </div>

         <div className="flex gap-10 mt-14 pt-10 border-t border-[#EDE8DF]">
              {[
                { n: '45m', l: 'Audit call' },
                { n: 'Fixed', l: 'Price agreed upfront' },
                { n: 'Yours', l: 'Everything we build' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                    className="text-2xl font-extrabold bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent"
                  >
                    {n}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{l}</div>
                </div>
              ))}
            </div>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/price.jpg"
            alt="Restaurant operations dashboard"
            width={780}
            height={680}
            quality={100}
            priority
            className="w-full max-w-[600px] drop-shadow-none"
          />
        </div>
      </div>
    </section>

     

      {/* ── PROCESS ── */}
      <section className="bg-white py-24 px-6 md:px-20 border-t border-[#F0EBE3]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent mb-3">
            The process
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2
              style={{ fontFamily: 'var(--font-jakarta)' }}
              className="text-[2rem] md:text-[2.6rem] font-extrabold tracking-tight text-[#15171A] leading-tight"
            >
              Three steps,{' '}
              <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent">
                total transparency
              </span>
            </h2>
            <p className="text-sm text-gray-500 max-w-[240px] md:text-right leading-relaxed">
              You'll always know what you're getting before any money changes hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {PHASES.map(({ step, tag, tagStyle, icon, title, description, details }) => (
              <div
                key={title}
                className="flex flex-col bg-white rounded-2xl p-6 border border-[#EDE8DF] hover:border-[#C4B9F8] transition-colors duration-200"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#EDE9FE] to-[#F5F3FF] flex items-center justify-center text-[#6D5DFC]">
                    {icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.1em] rounded-full px-2.5 py-1 ${tagStyle}`}>
                    {tag}
                  </span>
                </div>

                {/* Step number */}
                <p
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                  className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent mb-2"
                >
                  Step {step}
                </p>

                <h3
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                  className="text-[17px] font-extrabold text-gray-900 mb-3 leading-snug"
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 mb-5 flex-1">
                  {description}
                </p>

                {/* Details */}
                <div className="pt-4 border-t border-[#F0EBE3] flex flex-col gap-2">
                  {details.map((d) => (
                    <span key={d} className="flex items-center gap-2 text-[13px] text-gray-600">
                      <span className="w-4 h-4 rounded-full bg-violet-100 flex items-center justify-center text-[#6D5DFC] shrink-0">
                        <CheckIcon />
                      </span>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE BREAK / PULL QUOTE ── */}
      <div className="relative h-[380px] md:h-[460px] overflow-hidden">
        <Image
          src="/analytics.jpg"
          alt=""
          fill
          aria-hidden
          className="object-cover object-[center_40%] brightness-[0.3] saturate-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-20">
          <p
            style={{ fontFamily: 'var(--font-jakarta)' }}
            className="text-2xl md:text-[2.4rem] font-extrabold text-white leading-[1.2] tracking-tight max-w-2xl"
          >
            "We don't bill until you've seen the scope, approved the price, and{' '}
            <span className="bg-gradient-to-r from-[#A78BFA] to-[#C084FC] bg-clip-text text-transparent">
              decided it's worth it.
            </span>"
          </p>
        </div>
      </div>

    

      {/* ── FAQ ── */}
      <section className="bg-white py-24 px-6 md:px-20 border-t border-[#F0EBE3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

            {/* Sticky left */}
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent mb-3">
                Common questions
              </p>
              <h2
                style={{ fontFamily: 'var(--font-jakarta)' }}
                className="mt-4 text-[2rem] md:text-[2.6rem] font-extrabold tracking-tight text-[#15171A] leading-tight"
              >
                Straight{' '}
                <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent">
                  answers
                </span>
              </h2>
              <p className="text-base leading-relaxed text-gray-500 mt-4 mb-8">
                If something isn't covered here, bring it to the audit call. We'll walk through it together.
              </p>
              <a
                href="/?scrollTo=audit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.5)] hover:from-[#6D28D9] hover:to-[#9333EA] transition-all duration-200"
              >
                Book a free audit
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 6H10M6 2L10 6L6 10" />
                </svg>
              </a>
            </div>

            {/* Accordion */}
            <div className="divide-y divide-[#F0EBE3]">
              {FAQS.map(({ q, a }, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={q}>
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                    >
                      <span
                        className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${
                          isOpen ? 'text-[#6D5DFC]' : 'text-gray-900 group-hover:text-[#6D5DFC]'
                        }`}
                        style={{ fontFamily: 'var(--font-jakarta)' }}
                      >
                        {q}
                      </span>
                      <span
                        className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          isOpen
                            ? 'bg-[#6D5DFC] border-[#6D5DFC] text-white'
                            : 'border-gray-200 text-gray-400 group-hover:border-[#6D5DFC] group-hover:text-[#6D5DFC]'
                        }`}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
                          className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                        >
                          <path d="M5 1V9M1 5H9" />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 pr-10 text-sm leading-relaxed text-gray-500">
                            {a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#F7F5F1] border-t border-[#F0EBE3] py-24 md:py-32 px-6 md:px-20 text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent mb-5">
            Ready?
          </p>
          <h2
            style={{ fontFamily: 'var(--font-jakarta)' }}
            className="text-[2rem] md:text-[2.6rem] font-extrabold tracking-tight text-[#15171A] leading-tight mb-5"
          >
            Your first call costs nothing.{' '}
            <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent">
              Everything else is clear.
            </span>
          </h2>
          <p className="text-base leading-relaxed text-gray-500 mb-10">
            Book a 45-minute audit. We'll diagnose the bottlenecks, scope a solution, and give you a fixed price. Before you spend a penny.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="/?scrollTo=audit"
              style={{ fontFamily: 'var(--font-jakarta)' }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.5)] hover:from-[#6D28D9] hover:to-[#9333EA] transition-all duration-200"
            >
              Book free audit call
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="/solutions"
              style={{ fontFamily: 'var(--font-jakarta)' }}
              className="inline-flex items-center rounded-full border border-[#E4E4E7] bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              See what we build
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}