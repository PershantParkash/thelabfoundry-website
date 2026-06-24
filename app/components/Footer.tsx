'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0A0A] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 mb-10"
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="TwinkleOfficial"
              width={140}
              height={70}
              style={{ width: "120px", height: "auto" }}
              loading="eager"
              priority
            />
            <p className="text-[#555] text-sm leading-relaxed max-w-xs mt-4">
              Helping businesses build better systems through software and automation.
            </p>
          </div>
<div className='grid grid-cols-2 gap-10'>
<div>
  <div className="text-xs text-[#444] uppercase tracking-wider mb-4">Navigation</div>
  <div className="flex flex-col gap-2.5">
    {[
      { label: 'Home', href: '/' },
      { label: 'Process', href: '#process' },
      { label: 'Our Solutions', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' },
    ].map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="text-sm text-[#666] hover:text-[#999] transition-colors"
      >
        {link.label}
      </a>
    ))}
  </div>
</div>

          {/* Contact */}
          <div>
            <div className="text-xs text-[#444] uppercase tracking-wider mb-4">Get in touch</div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@nexora.io"
                className="text-sm text-[#666] hover:text-[#999] transition-colors flex items-center gap-2"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 3L6.5 7.5L12 3M1 3H12V10H1V3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                hello@nexora.io
              </a>
              <a
                href="tel:+1234567890"
                className="text-sm text-[#666] hover:text-[#999] transition-colors flex items-center gap-2"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 1.5C2 1.5 1 3 1 5C1 9 4 12 8 12C10 12 11.5 11 11.5 11L9.5 8.5L8 9.5C8 9.5 6 8 5 6.5C3.5 4.5 4.5 3 4.5 3L2 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +1 (234) 567-890
              </a>
            </div>
          </div>
          </div>
        </motion.div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs">© {new Date().getFullYear()} The Lab Foundry. All rights reserved.</p>
          <p className="text-[#333] text-xs">Built with Next.js · Tailwind CSS · TypeScript</p>
        </div>
      </div>
    </footer>
  );
}