'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '◈',
    title: 'Custom solutions, not templates',
    description: 'Every project is built from scratch to fit your exact business logic — no cookie-cutter approaches.',
  },
  {
    icon: '⬡',
    title: 'Scalable architecture',
    description: 'Code that grows with you. We design systems that handle 10x traffic without a rebuild.',
  },
  {
    icon: '◎',
    title: 'Fast & transparent communication',
    description: 'Weekly updates, shared project boards, and a direct line to the team building your product.',
  },
  {
    icon: '◉',
    title: 'Business-first approach',
    description: 'We ask "will this solve the business problem?" before every technical decision.',
  },
  {
    icon: '⬢',
    title: 'Modern technology stack',
    description: 'Next.js, TypeScript, NestJS, PostgreSQL — battle-tested technologies that power fast software.',
  },
  {
    icon: '◑',
    title: 'Long-term partnership',
    description: 'We don\'t disappear after launch. We become a reliable technical partner invested in your growth.',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28 px-6 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Accent blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#6D5DFC]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-[#A1A1AA] mb-6">
              Why Nexora
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Focused On{' '}
              <em className="not-italic text-[#6D5DFC]">Business Outcomes</em>
            </h2>
            <p className="text-[#A1A1AA] text-base leading-relaxed mb-10 font-light max-w-md">
              We measure success not by lines of code written, but by the measurable impact on your business — time saved, revenue unlocked, operations streamlined.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '50+', label: 'Projects delivered' },
                { value: '98%', label: 'Client satisfaction' },
                { value: '4x', label: 'Avg. ROI reported' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
                  <div className="text-[11px] text-[#555]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => {
              const fRef = useRef(null);
              const fInView = useInView(fRef, { once: true, margin: '-40px' });

              return (
                <motion.div
                  key={f.title}
                  ref={fRef}
                  initial={{ opacity: 0, y: 16 }}
                  animate={fInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group gradient-border rounded-xl bg-[#111111] p-5 hover:bg-[#141414] transition-all duration-300"
                >
                  <div className="text-[#6D5DFC] text-xl mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
                    {f.icon}
                  </div>
                  <h4 className="text-white text-sm font-medium mb-1.5">{f.title}</h4>
                  <p className="text-[#666] text-xs leading-relaxed">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
