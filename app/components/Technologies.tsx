'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techs = [
  { name: 'Next.js', color: '#fff' },
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'NestJS', color: '#E0234E' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'React Native', color: '#61DAFB' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Tailwind CSS', color: '#38BDF8' },
];

export default function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 px-6 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs text-[#555] uppercase tracking-[0.2em]">Built with modern, production-grade technology</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-[#111] hover:border-white/[0.14] hover:bg-[#161616] transition-all duration-200 cursor-default"
            >
              <div
                className="w-2 h-2 rounded-full transition-all duration-300 group-hover:shadow-sm"
                style={{
                  background: tech.color,
                  boxShadow: `0 0 0 0 ${tech.color}`,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.boxShadow = `0 0 8px ${tech.color}80`;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.boxShadow = 'none';
                }}
              />
              <span className="text-sm text-[#777] group-hover:text-[#999] transition-colors duration-200">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
