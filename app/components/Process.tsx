'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your business — understanding goals, pain points, workflows, and growth opportunities before writing a single line of code.',
    detail: 'Strategy calls · Process mapping · Requirements docs',
    color: '#6D5DFC',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We architect the most effective technical solution, balancing speed, scalability, and cost. You see exactly what we\'ll build before we build it.',
    detail: 'Architecture design · Timeline · Tech stack selection',
    color: '#7B6BFD',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We develop in focused sprints with weekly check-ins. You\'re never in the dark — see real progress as it happens with working software.',
    detail: 'Agile sprints · Weekly demos · Continuous testing',
    color: '#8B7BFE',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy with zero drama, handle onboarding, and stay close post-launch to ensure everything runs smoothly in production.',
    detail: 'Deployment · Training · Ongoing support',
    color: '#9B8BFF',
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-[#A1A1AA] mb-6">
            How it works
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Simple Process.{' '}
            <em className="not-italic text-[#6D5DFC]">Real Results.</em>
          </h2>
          <p className="text-[#A1A1AA] text-base max-w-xl mx-auto font-light">
            A proven four-step approach that gets you from idea to production-ready software — without surprises.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-10 left-0 right-0 h-px hidden lg:block">
            <div className="relative h-full mx-24">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6D5DFC]/30 to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, i) => {
              const stepRef = useRef(null);
              const stepInView = useInView(stepRef, { once: true, margin: '-60px' });

              return (
                <motion.div
                  key={step.number}
                  ref={stepRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={stepInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  {/* Step number circle */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="relative mb-8">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center font-display text-3xl transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}20, ${step.color}08)`,
                          border: `1px solid ${step.color}30`,
                          color: step.color,
                        }}
                      >
                        {step.number}
                      </div>
                      {/* Dot on line (desktop) */}
                      <div
                        className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full hidden lg:block"
                        style={{ background: step.color, boxShadow: `0 0 8px ${step.color}` }}
                      />
                    </div>

                    <div className="text-center lg:text-left">
                      <h3 className="text-white font-medium text-lg mb-3">{step.title}</h3>
                      <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4 font-light">{step.description}</p>
                      <div className="text-[11px] text-[#555] border-t border-white/[0.04] pt-3">
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
