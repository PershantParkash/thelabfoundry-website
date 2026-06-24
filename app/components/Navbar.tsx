
'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

const solutions = {
  columns: [
    {
      title: 'Operations System',
      subtitle: 'Run your restaurant smoothly',
      items: [
        { name: 'Live Order Queue', desc: 'Real-time kitchen order management', href: '/solutions' },
        { name: 'Order Management System', desc: 'Centralized incoming orders from all channels',href: '/solutions' },
        { name: 'Staff Workflow System', desc: 'Task assignment + kitchen coordination', href: '/solutions' },
        { name: 'Operations Dashboard', desc: 'Daily performance + insights', href: '/solutions' },
      ],
    },
    {
      title: 'Customer Experience System',
      subtitle: 'Make ordering effortless',
      items: [
        { name: 'QR Table Ordering', desc: 'Scan & order from table', href: '/solutions' },
        { name: 'Website Ordering System', desc: 'Branded online ordering website', href: '/solutions' },
        { name: 'Mobile App Ordering', desc: 'Customer app for repeat ordering', href: '/solutions' },
        { name: 'WhatsApp Ordering System', desc: 'Order directly via WhatsApp automation', href: '/solutions' },
        { name: 'Digital Menu System', desc: 'Live updated menu for customers', href: '/solutions' },
      ],
    },
    {
      title: 'Growth & Retention System',
      subtitle: 'Increase revenue & repeat customers',
      items: [
        { name: 'Customer Retention Engine', desc: 'Bring customers back automatically',href: '/solutions'},
        { name: 'Marketing Automation System', desc: 'Campaigns + promotions automation', href: '/solutions' },
        { name: 'Review Growth System', desc: 'Increase Google reviews & ratings', href: '/solutions'},
        { name: 'Customer CRM System', desc: 'Track customers + order history', href: '/solutions' },
      ],
    },
  ],
};

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setSolutionsOpen(false);

    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/?scrollTo=' + href.slice(1));
      }
    } else {
      router.push(href);
    }
  };

  const openSolutions = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };

  const closeSolutions = () => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 100);
  };

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <div style={{ fontFamily: 'var(--font-nunito)' }}>
      {/* Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#7C3AED] to-[#A855F7] py-2 px-4 text-center">
        <a
          href="#audit"
          onClick={(e) => handleNav(e, '#audit')}
          className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <span className="hidden sm:inline-block bg-white/20 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
            Free
          </span>
          Book a 45-min call to audit your restaurant operations! no cost, no commitment
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 6H10M6 2L10 6L6 10" />
          </svg>
        </a>
      </div>

      {/* Main Nav */}
      <nav className="fixed top-[36px] left-0 right-0 z-50 bg-white border-b border-gray-200 h-16">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <a href="/" onClick={(e) => handleNav(e, '/')}>
            <Image
              src="/logo2.png"
              alt="OpsFlow"
              width={140}
              height={70}
              style={{ width: '80px', height: 'auto' }}
              loading="eager"
              priority
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">

            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-150"
            >
              Home
            </a>
<a
              href="#process"
              onClick={(e) => handleNav(e, '#process')}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-150"
            >
              Process
            </a>

            {/* Solutions mega menu */}
            <div
              ref={solutionsRef}
              className="relative"
              onMouseEnter={openSolutions}
              onMouseLeave={closeSolutions}
            >
              <button
                onClick={() => router.push('/solutions')}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-150"
              >
                Our Solutions
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>

              {/* Mega Menu */}
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    onMouseEnter={openSolutions}
                    onMouseLeave={closeSolutions}
                    className="fixed left-0 right-0 top-[100px] bg-white border-t border-b border-gray-200 shadow-lg z-40"
                  >
                    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-3">
                      {solutions.columns.map((col, i) => (
                        <div
                          key={col.title}
                          className={`px-8 ${i !== 0 ? 'border-l border-gray-100' : 'pl-0'} ${i === solutions.columns.length - 1 ? 'pr-0' : ''}`}
                        >
                          <div className="text-xs font-bold text-[#6D5DFC] uppercase tracking-widest mb-1">
                            {col.title}
                          </div>
                          <div className="text-xs text-gray-400 mb-5">{col.subtitle}</div>
                          <div className="flex flex-col gap-0.5">
                            {col.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex flex-col px-2.5 py-2 rounded-lg hover:bg-indigo-50 transition-colors duration-100 group"
                              >
                                <span className="text-sm font-medium text-gray-800 group-hover:text-[#6D5DFC] transition-colors">
                                  {item.name}
                                </span>
                                <span className="text-xs text-gray-400 mt-0.5">{item.desc}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="/pricing"
              onClick={(e) => handleNav(e, '/pricing')}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-150"
            >
              Pricing
            </a>
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#audit"
              onClick={(e) => handleNav(e, '#audit')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.5)] hover:from-[#6D28D9] hover:to-[#9333EA] transition-all duration-200"
            >
              Book a free audit
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 6H10M6 2L10 6L6 10" />
              </svg>
            </a>

            <button
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-5 h-px bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-px bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[100px] z-40 bg-white border-b border-gray-200 shadow-lg md:hidden overflow-y-auto max-h-[80vh]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              <a
                href="/"
                onClick={(e) => handleNav(e, '/')}
                className="py-3 text-sm font-medium text-gray-700 border-b border-gray-100"
              >
                Home
              </a>

              <a
                href="#process"
                onClick={(e) => handleNav(e, '#process')}
                className="py-3 text-sm font-medium text-gray-700 border-b border-gray-100"
              >
                Process
              </a>

              <div className="py-3 border-b border-gray-100">
                <div className="text-sm font-semibold text-gray-900 mb-3">Our Solutions</div>
                {solutions.columns.map((col) => (
                  <div key={col.title} className="mb-5">
                    <div className="text-xs font-bold text-[#6D5DFC] uppercase tracking-widest mb-2">
                      {col.title}
                    </div>
                    {col.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-2 pl-2 text-sm text-gray-600 hover:text-[#6D5DFC] transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>

              <a
                href="/pricing"
                onClick={(e) => handleNav(e, '/pricing')}
                className="py-3 text-sm font-medium text-gray-700 border-b border-gray-100"
              >
                Pricing
              </a>

              <a
                href="#audit"
                onClick={(e) => handleNav(e, '#audit')}
                className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.5)] hover:from-[#6D28D9] hover:to-[#9333EA] transition-all duration-200"
              >
                Book a free audit
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 6H10M6 2L10 6L6 10" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}