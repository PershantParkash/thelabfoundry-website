'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          {/* <a href="#hero" onClick={(e) => handleNav(e, '#hero')} className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-[#6D5DFC] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B7FFF] to-[#5B4CE8]" />
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="relative z-10">
                <path d="M2 7L6 3L10 7L6 11L2 7Z" fill="white" fillOpacity="0.9"/>
                <path d="M6 3L10 7L7 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-white font-medium text-sm tracking-wide">The Lab Foundry</span>
          </a> */}

             <Image
          src="/logo.png"
          alt="TwinkleOfficial"
          width={140}
          height={70}
          style={{ width: "80px", height: "auto" }}
          loading="eager"
          priority
        />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-4 py-2 text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#6D5DFC] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6D5DFC] hover:bg-[#7D6DFF] text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#6D5DFC]/20 active:scale-95"
            >
              Book a Call
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M6 2L10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <button
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#111111]/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="py-3 text-[#A1A1AA] hover:text-white text-sm transition-colors border-b border-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNav(e, '#contact')}
                className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#6D5DFC] text-white text-sm font-medium"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
