'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 1L9 9M9 9L5 5M9 9L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 13H16M2 13V15C2 15.6 2.4 16 3 16H15C15.6 16 16 15.6 16 15V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Manual Processes',
    description: 'Your team drowns in repetitive tasks that software could handle in seconds — eating hours every week.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 5V9L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Leads Slipping Through',
    description: 'Opportunities fall through the cracks because follow-ups are manual and your CRM isn\'t working for you.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="1" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 4H11M7 14H11M4 7V11M14 7V11" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1"/>
      </svg>
    ),
    title: 'Disconnected Tools',
    description: 'Multiple platforms that don\'t talk to each other, forcing manual data entry and creating errors.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9H7L9 4L11 14L13 9H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Operational Bottlenecks',
    description: 'Growth is limited by internal systems that can\'t scale — the same headaches at every stage.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 16C3 13.2 5.7 11 9 11C12.3 11 15 13.2 15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Poor Customer Experience',
    description: 'Slow responses, inconsistent service, and outdated portals that frustrate customers and damage trust.',
  },
];

function ProblemCard({ problem, index }: { problem: typeof problems[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group gradient-border rounded-2xl bg-[#111111] p-6 hover:bg-[#151515] transition-all duration-300 shimmer cursor-default"
    >
      <div className="w-10 h-10 rounded-xl bg-[#6D5DFC]/10 border border-[#6D5DFC]/20 flex items-center justify-center text-[#6D5DFC] mb-4 group-hover:bg-[#6D5DFC]/20 transition-colors duration-300">
        {problem.icon}
      </div>
      <h3 className="text-white font-medium text-sm mb-2">{problem.title}</h3>
      <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">{problem.description}</p>
    </motion.div>
  );
}

export default function Problems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-[#A1A1AA] mb-6">
            The problem
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
            Most Businesses Don't Need More Tools.{' '}
            <em className="not-italic text-[#6D5DFC]">They Need Better Systems.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <ProblemCard key={p.title} problem={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
