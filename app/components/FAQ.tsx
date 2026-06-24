'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    q: 'Do I need to replace my existing POS or software?',
    a: 'No. We build around what you already have. Our systems integrate with most POS platforms and existing tools. We fill the gaps in your operations without forcing a full overhaul.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most restaurants notice measurable improvements within the first 2–4 weeks. Fewer missed orders, faster table turns, and cleaner kitchen coordination. Retention and review growth typically compound over 60–90 days.',
  },
  {
    q: 'Is this only for large restaurant groups?',
    a: "Not at all. We work with single-location restaurants, growing chains, and everything in between. The systems scale up or down. You're not paying for infrastructure you don't need.",
  },
  {
    q: 'What does the onboarding process look like?',
    a: 'It starts with a free audit call where we map your current operations and identify the highest-impact gaps. From there, we build and configure your systems, train your team, and stay hands-on through the launch period.',
  },
  {
    q: 'Do you offer ongoing support after setup?',
    a: 'Yes. Every engagement includes ongoing support. As your restaurant evolves. New channels, menu changes, staff turnover. We adjust your systems to keep pace.',
  },
  {
    q: "What if my team isn't tech-savvy?",
    a: "That's exactly who we design for. Everything we build is simple enough for front-of-house staff to use on day one. We also handle the training so you're not left figuring it out on your own.",
  },
  {
    q: 'How is this different from just hiring a consultant?',
    a: "Traditional consultants hand you a report. We hand you a working system. Everything we recommend gets built, integrated, and run. You're not left implementing advice on your own.",
  },
  {
    q: 'What does it cost?',
    a: 'Pricing depends on which systems you need and your current setup. The audit call is free and gives us both a clear picture of scope before any commitment.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-24 px-6 md:px-20"   style={{ fontFamily: "var(--font-nunito)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent mb-3">
              FAQ
            </p>
    
             <h2
            style={{ fontFamily: "var(--font-jakarta)" }}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-[#15171A] sm:text-5xl lg:text-[3.4rem]"
          >
             Questions we get{" "}
            <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent">
              asked
            </span>
          </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-8 mt-4">
              If something isn't covered here, bring it to the audit call. We'll walk through it together.
            </p>
            <a
              href="#audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.5)] hover:from-[#6D28D9] hover:to-[#9333EA] transition-all duration-200"
            >
              Book a Free Audit
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 6H10M6 2L10 6L6 10" />
              </svg>
            </a>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-gray-100">
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
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
  );
}