'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 14V18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 7H14M6 10H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Custom Business Software',
    description: 'Tailored web applications built around your unique business processes — not the other way around.',
    tags: ['Web Apps', 'Internal Tools', 'Portals'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="5" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9L13 6M7 11L13 14" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 5V4M10 16V15" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1"/>
      </svg>
    ),
    title: 'Workflow Automation',
    description: 'Eliminate repetitive manual tasks and let your team focus on work that actually requires human thinking.',
    tags: ['Process Automation', 'Integrations', 'APIs'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5H17M3 5V15C3 16.1 3.9 17 5 17H15C16.1 17 17 16.1 17 15V5M3 5L5 3H15L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11L10 13L13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'E-Commerce Solutions',
    description: 'High-performance online stores engineered to convert visitors into customers and scale with demand.',
    tags: ['Online Stores', 'Checkout', 'Inventory'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 7H18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7V18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 11H15M10 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Admin Dashboards & CRM',
    description: 'Manage customers, track operations, and make data-driven decisions — all from one central platform.',
    tags: ['CRM', 'Dashboards', 'Analytics'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="6" y="1" width="8" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 16H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 4H12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: 'Mobile Applications',
    description: 'Cross-platform iOS and Android apps that deliver seamless experiences and keep users engaged.',
    tags: ['iOS', 'Android', 'React Native'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10C4 7.8 5.8 6 8 6H12C14.2 6 16 7.8 16 10C16 12.2 14.2 14 12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="6" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6V3M12 3L10 5M12 3L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'System Integrations',
    description: 'Connect your existing tools, automate data flow, and create a unified ecosystem that works in harmony.',
    tags: ['APIs', 'Webhooks', 'Data Sync'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group gradient-border rounded-2xl bg-[#111111] p-7 hover:bg-[#141414] transition-all duration-300 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl bg-[#6D5DFC]/10 border border-[#6D5DFC]/15 flex items-center justify-center text-[#6D5DFC] group-hover:bg-[#6D5DFC]/20 group-hover:border-[#6D5DFC]/30 transition-all duration-300">
          {service.icon}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M8 3L13 8L8 13" stroke="#6D5DFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div>
        <h3 className="text-white font-medium text-base mb-2">{service.title}</h3>
        <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">{service.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/[0.04]">
        {service.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] bg-white/[0.04] text-[#666] border border-white/[0.04]">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-28 px-6 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#6D5DFC]/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-[#A1A1AA] mb-6">
            Services
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            What We Help{' '}
            <em className="not-italic text-[#6D5DFC]">Businesses Build</em>
          </h2>
          <p className="text-[#A1A1AA] text-base max-w-xl mx-auto font-light">
            End-to-end software development focused on solving your real operational challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
