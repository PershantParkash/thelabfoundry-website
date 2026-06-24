// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Image from "next/image";

// export default function Footer() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const el = document.querySelector(href);
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <footer className="border-t border-white/[0.06] bg-[#0A0A0A] px-6 py-12">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 16 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="grid md:grid-cols-3 gap-10 mb-10"
//         >
//           {/* Brand */}
//           <div>
//                   <Image
//                      src="/logo.png"
//                      alt="TwinkleOfficial"
//                      width={140}
//                      height={70}
//                      style={{ width: "120px", height: "auto" }}
//                      loading="eager"
//                      priority
//                    />
//             <p className="text-[#555] text-sm leading-relaxed max-w-xs mt-4">
//               Helping businesses build better systems through software and automation.
//             </p>
//           </div>

//           {/* Links */}
//           <div>
//             <div className="text-xs text-[#444] uppercase tracking-wider mb-4">Navigation</div>
//             <div className="flex flex-col gap-2.5">
//               {[
//                 { label: 'Home', href: '#hero' },
//                 { label: 'Services', href: '#services' },
//                 { label: 'Process', href: '#process' },
//                 { label: 'Contact', href: '#contact' },
//               ].map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   onClick={(e) => handleNav(e, link.href)}
//                   className="text-sm text-[#666] hover:text-[#999] transition-colors"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <div className="text-xs text-[#444] uppercase tracking-wider mb-4">Get in touch</div>
//             <div className="flex flex-col gap-3">
//               <a href="mailto:hello@nexora.io" className="text-sm text-[#666] hover:text-[#999] transition-colors flex items-center gap-2">
//                 <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
//                   <path d="M1 3L6.5 7.5L12 3M1 3H12V10H1V3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 hello@nexora.io
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#666] hover:text-[#999] transition-colors flex items-center gap-2">
//                 <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
//                   <rect x="1" y="1" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.2"/>
//                   <path d="M4 5.5V9M4 4V4.01M6.5 9V7C6.5 6.2 7 5.5 7.5 5.5C8 5.5 8.5 6 8.5 7V9M6.5 5.5V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
//                 </svg>
//                 LinkedIn
//               </a>
//               <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#666] hover:text-[#999] transition-colors flex items-center gap-2">
//                 <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
//                   <path d="M6.5 1C3.46 1 1 3.46 1 6.5C1 8.91 2.57 10.96 4.76 11.68C5.01 11.73 5.1 11.57 5.1 11.43V10.47C3.66 10.77 3.37 9.77 3.37 9.77C3.14 9.15 2.8 8.99 2.8 8.99C2.32 8.67 2.84 8.67 2.84 8.67C3.37 8.71 3.65 9.22 3.65 9.22C4.12 10.03 4.88 9.79 5.12 9.65C5.17 9.32 5.3 9.08 5.44 8.95C4.32 8.82 3.14 8.39 3.14 6.46C3.14 5.87 3.34 5.39 3.66 5.02C3.6 4.88 3.4 4.35 3.71 3.64C3.71 3.64 4.16 3.5 5.1 4.16C5.5 4.05 5.96 3.99 6.5 3.99C7.04 3.99 7.5 4.05 7.9 4.16C8.84 3.5 9.29 3.64 9.29 3.64C9.6 4.35 9.4 4.88 9.34 5.02C9.66 5.39 9.86 5.87 9.86 6.46C9.86 8.39 8.68 8.82 7.55 8.95C7.73 9.11 7.9 9.44 7.9 9.94V11.43C7.9 11.57 7.99 11.73 8.24 11.68C10.43 10.96 12 8.91 12 6.5C12 3.46 9.54 1 6.5 1Z" fill="currentColor"/>
//                 </svg>
//                 GitHub
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-[#444] text-xs">© {new Date().getFullYear()} The Lab Foundry. All rights reserved.</p>
//           <p className="text-[#333] text-xs">Built with Next.js · Tailwind CSS · TypeScript</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
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
          className="grid md:grid-cols-3 gap-10 mb-10"
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

         {/* Links */}
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
        </motion.div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs">© {new Date().getFullYear()} The Lab Foundry. All rights reserved.</p>
          <p className="text-[#333] text-xs">Built with Next.js · Tailwind CSS · TypeScript</p>
        </div>
      </div>
    </footer>
  );
}