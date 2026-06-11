// 'use client';

// import { motion } from 'framer-motion';

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 24 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.7, ease: 'easeOut' as const, delay },
// });

// function Arrow() {
//   return (
//     <div className="flex-shrink-0 flex items-center justify-center w-7">
//       <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
//         <line x1="0" y1="6" x2="16" y2="6" stroke="#333" strokeWidth="1.2" strokeDasharray="3 2" />
//         <path d="M14 2L22 6L14 10" stroke="#444" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </div>
//   );
// }

// function FlowDiagram() {
//   return (
//     <div className="w-full flex items-stretch gap-0">

//       {/* Card 1 — Manual Processes */}
//       <div className="flex-1 min-w-0 rounded-[14px] p-[18px_14px] flex flex-col gap-2.5 bg-[#161616] border border-white/[0.07]">
//         <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#555] font-medium">
//           Manual Processes
//         </div>
//         <div className="flex items-center justify-center py-2">
//           <div className="flex items-center justify-center bg-[#1e1e1e] border border-white/[0.06] rounded-[10px] p-3">
//             <div className="flex flex-col items-center gap-1.5">
//               <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
//                 <rect x="1" y="1" width="20" height="24" rx="2" stroke="#555" strokeWidth="1.2" />
//                 <line x1="5" y1="7" x2="17" y2="7" stroke="#555" strokeWidth="1" />
//                 <line x1="5" y1="11" x2="17" y2="11" stroke="#555" strokeWidth="1" />
//                 <line x1="5" y1="15" x2="13" y2="15" stroke="#555" strokeWidth="1" />
//               </svg>
//               <div className="w-[18px] h-[18px] rounded-full border border-red-500 flex items-center justify-center">
//                 <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
//                   <path d="M2 2L6 6M6 2L2 6" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col gap-1.5 mt-auto">
//           {['Repetitive tasks', 'Human errors', 'Disconnected tools', 'Wasted time'].map((item) => (
//             <div key={item} className="flex items-center gap-1.5 text-[9px] text-[#555]">
//               <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       <Arrow />

//       {/* Card 2 — The Lab Foundry (highlighted) */}
//       <div className="flex-1 min-w-0 rounded-[14px] p-[18px_14px] flex flex-col gap-2.5 bg-[#0d0d1a] border border-[#6D5DFC] shadow-[0_0_28px_rgba(109,93,252,0.15)]">
//         <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#8B7FFF] font-medium">
//           The Lab Foundry
//         </div>
//         <div className="flex items-center justify-center py-2">
//           <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
//             <path d="M8 2H20V12L26 25C27 27 25.5 30 23 30H5C2.5 30 1 27 2 25L8 12V2Z" stroke="#6D5DFC" strokeWidth="1.4" />
//             <circle cx="14" cy="21" r="3" fill="#6D5DFC" opacity="0.5" />
//             <circle cx="9" cy="25" r="1.5" fill="#8B7FFF" opacity="0.6" />
//             <circle cx="19" cy="24" r="1" fill="#8B7FFF" opacity="0.4" />
//             <line x1="10" y1="2" x2="18" y2="2" stroke="#6D5DFC" strokeWidth="1.2" strokeLinecap="round" />
//           </svg>
//         </div>
//         <p className="text-[10px] text-[#666] text-center leading-relaxed">
//           We design and build custom solutions that fit your business exactly.
//         </p>
//         <div className="flex flex-col gap-1.5 mt-auto">
//           {[{ icon: '⌨', label: 'Custom Software' }, { icon: '⚙', label: 'Automation Systems' }].map((item) => (
//             <div key={item.label} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#6D5DFC]/10 text-[9px] text-[#888]">
//               <span>{item.icon}</span>
//               {item.label}
//             </div>
//           ))}
//         </div>
//       </div>

//       <Arrow />

//       {/* Card 3 — Smart Systems */}
//       <div className="flex-1 min-w-0 rounded-[14px] p-[18px_14px] flex flex-col gap-2.5 bg-[#161616] border border-white/[0.07]">
//         <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#555] font-medium">
//           Smart Systems
//         </div>
//         <div className="flex items-center justify-center py-2">
//           <div className="flex items-center justify-center bg-[#1e1e1e] border border-white/[0.06] rounded-[10px] p-3">
//             <div className="w-7 h-7 rounded-full border-2 border-emerald-500 flex items-center justify-center">
//               <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
//                 <path d="M1 5L4.5 8.5L11 1.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col gap-1.5 mt-auto">
//           {['Automated workflows', 'Integrated systems', 'Real-time data', 'Scalable solutions'].map((item) => (
//             <div key={item} className="flex items-center gap-1.5 text-[9px] text-[#555]">
//               <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       <Arrow />

//       {/* Card 4 — Business Growth */}
//       <div className="flex-1 min-w-0 rounded-[14px] p-[18px_14px] flex flex-col gap-2.5 bg-[#161616] border border-white/[0.07]">
//         <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#555] font-medium">
//           Business Growth
//         </div>
//         <div className="flex items-center justify-center py-2">
//           <div className="flex items-center justify-center bg-[#1e1e1e] border border-white/[0.06] rounded-[10px] p-3">
//             <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
//               <polyline points="1,17 6,9 11,13 17,5 22,1 25,1" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//               <polyline points="22,0 25,0 25,3" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//               <line x1="1" y1="19" x2="25" y2="19" stroke="#333" strokeWidth="0.8" />
//             </svg>
//           </div>
//         </div>
//         <div className="flex flex-col gap-1.5 mt-auto">
//           {['Time saved', 'Costs reduced', 'Happy customers', 'Sustainable growth'].map((item) => (
//             <div key={item} className="flex items-center gap-1.5 text-[9px] text-[#555]">
//               <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default function Hero() {
//   const handleNav = (href: string) => {
//     const el = document.querySelector(href);
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden grid-bg"
//     >
//       {/* Background blurs */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="w-[800px] h-[800px] rounded-full bg-[#6D5DFC]/5 blur-[120px]" />
//       </div>
//       <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-[#6D5DFC]/8 blur-[80px] pointer-events-none" />
//       <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-[#8B7FFF]/5 blur-[80px] pointer-events-none" />

//       <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center">

//         {/* Badge */}
//         <motion.div {...fadeUp(0)} className="mb-8">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6D5DFC]/30 bg-[#6D5DFC]/10 text-xs text-[#8B7FFF]">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#6D5DFC] animate-pulse" />
//             Custom Software and Automation for Growing Businesses
//           </div>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1
//           {...fadeUp(0.1)}
//           className="text-center text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.07] tracking-tight mb-6 max-w-3xl"
//         >
//           Your{' '}
//           <em className="not-italic text-[#6D5DFC]">Challenges.</em>
//           <br />
//           Our Solutions.
//         </motion.h1>

//         {/* Subheadline */}
//         <motion.p
//           {...fadeUp(0.2)}
//           className="text-center text-base md:text-lg text-[#A1A1AA] max-w-xl mb-10 leading-relaxed font-light"
//         >
//           We help businesses save time, reduce manual work, and scale operations
//           with custom software and automation.
//         </motion.p>

//         {/* CTAs */}
//         <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
//           <button
//             onClick={() => handleNav('#contact')}
//             className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6D5DFC] hover:bg-[#7D6DFF] text-white text-sm font-medium transition-all duration-200 hover:shadow-xl hover:shadow-[#6D5DFC]/25 active:scale-[0.98]"
//           >
//             Book a Free Consultation
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
//               <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//           <button
//             onClick={() => handleNav('#services')}
//             className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.08] hover:border-white/[0.16] text-white/70 hover:text-white text-sm transition-all duration-200 bg-white/[0.02] hover:bg-white/[0.04]"
//           >
//             View Services
//           </button>
//         </motion.div>

//         {/* Flow Diagram */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
//           className="w-full"
//         >
//           <FlowDiagram />
//         </motion.div>

//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
});

function Arrow() {
  return (
    <div className="hidden md:flex flex-shrink-0 items-center justify-center w-7">
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
        <line x1="0" y1="6" x2="16" y2="6" stroke="#333" strokeWidth="1.2" strokeDasharray="3 2" />
        <path d="M14 2L22 6L14 10" stroke="#444" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* Down arrow for mobile stacked layout */
function ArrowDown() {
  return (
    <div className="flex md:hidden items-center justify-center h-6">
      <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
        <line x1="6" y1="0" x2="6" y2="16" stroke="#333" strokeWidth="1.2" strokeDasharray="3 2" />
        <path d="M2 14L6 22L10 14" stroke="#444" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function FlowDiagram() {
  return (
    <>
      {/* ── Desktop: horizontal row ── */}
      <div className="hidden md:flex w-full items-stretch gap-0">

        {/* Card 1 — Manual Processes */}
        <div className="w-[180px] flex-shrink-0 rounded-[14px] p-[18px_14px] flex flex-col gap-2.5 bg-[#161616] border border-white/[0.07]">
          <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#555] font-medium">
            Manual Processes
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center justify-center bg-[#1e1e1e] border border-white/[0.06] rounded-[10px] p-3">
              <div className="flex flex-col items-center gap-1.5">
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                  <rect x="1" y="1" width="20" height="24" rx="2" stroke="#555" strokeWidth="1.2" />
                  <line x1="5" y1="7" x2="17" y2="7" stroke="#555" strokeWidth="1" />
                  <line x1="5" y1="11" x2="17" y2="11" stroke="#555" strokeWidth="1" />
                  <line x1="5" y1="15" x2="13" y2="15" stroke="#555" strokeWidth="1" />
                </svg>
                <div className="w-[18px] h-[18px] rounded-full border border-red-500 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M2 2L6 6M6 2L2 6" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-auto">
            {['Repetitive tasks', 'Human errors', 'Disconnected tools', 'Wasted time'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-[9px] text-[#555]">
                <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <Arrow />

        {/* Card 2 — The Lab Foundry (highlighted) */}
        <div className="w-[180px] flex-shrink-0 rounded-[14px] p-[18px_14px] flex flex-col gap-2.5 bg-[#0d0d1a] border border-[#6D5DFC] shadow-[0_0_28px_rgba(109,93,252,0.15)]">
          <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#8B7FFF] font-medium">
            The Lab Foundry
          </div>
          <div className="flex items-center justify-center py-2">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
              <path d="M8 2H20V12L26 25C27 27 25.5 30 23 30H5C2.5 30 1 27 2 25L8 12V2Z" stroke="#6D5DFC" strokeWidth="1.4" />
              <circle cx="14" cy="21" r="3" fill="#6D5DFC" opacity="0.5" />
              <circle cx="9" cy="25" r="1.5" fill="#8B7FFF" opacity="0.6" />
              <circle cx="19" cy="24" r="1" fill="#8B7FFF" opacity="0.4" />
              <line x1="10" y1="2" x2="18" y2="2" stroke="#6D5DFC" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[10px] text-[#666] text-center leading-relaxed">
            We design and build custom solutions that fit your business exactly.
          </p>
          <div className="flex flex-col gap-1.5 mt-auto">
            {[{ icon: '⌨', label: 'Custom Software' }, { icon: '⚙', label: 'Automation Systems' }].map((item) => (
              <div key={item.label} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#6D5DFC]/10 text-[9px] text-[#888]">
                <span>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <Arrow />

        {/* Card 3 — Smart Systems */}
        <div className="w-[180px] flex-shrink-0 rounded-[14px] p-[18px_14px] flex flex-col gap-2.5 bg-[#161616] border border-white/[0.07]">
          <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#555] font-medium">
            Smart Systems
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center justify-center bg-[#1e1e1e] border border-white/[0.06] rounded-[10px] p-3">
              <div className="w-7 h-7 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5L4.5 8.5L11 1.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-auto">
            {['Automated workflows', 'Integrated systems', 'Real-time data', 'Scalable solutions'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-[9px] text-[#555]">
                <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <Arrow />

        {/* Card 4 — Business Growth */}
        <div className="w-[180px] flex-shrink-0 rounded-[14px] p-[18px_14px] flex flex-col gap-2.5 bg-[#161616] border border-white/[0.07]">
          <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#555] font-medium">
            Business Growth
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center justify-center bg-[#1e1e1e] border border-white/[0.06] rounded-[10px] p-3">
              <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
                <polyline points="1,17 6,9 11,13 17,5 22,1 25,1" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <polyline points="22,0 25,0 25,3" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x1="1" y1="19" x2="25" y2="19" stroke="#333" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-auto">
            {['Time saved', 'Costs reduced', 'Happy customers', 'Sustainable growth'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-[9px] text-[#555]">
                <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Mobile: 2×2 grid ── */}
      <div className="flex md:hidden flex-col items-center gap-0 w-full">

        {/* Row 1 */}
        <div className="flex items-stretch gap-3 w-full">
          {/* Card 1 */}
          <div className="flex-1 rounded-[14px] p-[16px_12px] flex flex-col gap-2 bg-[#161616] border border-white/[0.07]">
            <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#555] font-medium">
              Manual Processes
            </div>
            <div className="flex items-center justify-center py-1.5">
              <div className="flex items-center justify-center bg-[#1e1e1e] border border-white/[0.06] rounded-[10px] p-2.5">
                <div className="flex flex-col items-center gap-1.5">
                  <svg width="20" height="24" viewBox="0 0 22 26" fill="none">
                    <rect x="1" y="1" width="20" height="24" rx="2" stroke="#555" strokeWidth="1.2" />
                    <line x1="5" y1="7" x2="17" y2="7" stroke="#555" strokeWidth="1" />
                    <line x1="5" y1="11" x2="17" y2="11" stroke="#555" strokeWidth="1" />
                    <line x1="5" y1="15" x2="13" y2="15" stroke="#555" strokeWidth="1" />
                  </svg>
                  <div className="w-[16px] h-[16px] rounded-full border border-red-500 flex items-center justify-center">
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                      <path d="M2 2L6 6M6 2L2 6" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              {['Repetitive tasks', 'Human errors', 'Disconnected tools', 'Wasted time'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-[9px] text-[#555]">
                  <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — highlighted */}
          <div className="flex-1 rounded-[14px] p-[16px_12px] flex flex-col gap-2 bg-[#0d0d1a] border border-[#6D5DFC] shadow-[0_0_20px_rgba(109,93,252,0.15)]">
            <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#8B7FFF] font-medium">
              The Lab Foundry
            </div>
            <div className="flex items-center justify-center py-1.5">
              <svg width="24" height="28" viewBox="0 0 28 32" fill="none">
                <path d="M8 2H20V12L26 25C27 27 25.5 30 23 30H5C2.5 30 1 27 2 25L8 12V2Z" stroke="#6D5DFC" strokeWidth="1.4" />
                <circle cx="14" cy="21" r="3" fill="#6D5DFC" opacity="0.5" />
                <circle cx="9" cy="25" r="1.5" fill="#8B7FFF" opacity="0.6" />
                <circle cx="19" cy="24" r="1" fill="#8B7FFF" opacity="0.4" />
                <line x1="10" y1="2" x2="18" y2="2" stroke="#6D5DFC" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-[9px] text-[#666] text-center leading-relaxed">
              Custom solutions that fit your business exactly.
            </p>
            <div className="flex flex-col gap-1 mt-auto">
              {[{ icon: '⌨', label: 'Custom Software' }, { icon: '⚙', label: 'Automation' }].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#6D5DFC]/10 text-[9px] text-[#888]">
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <ArrowDown />

        {/* Row 2 */}
        <div className="flex items-stretch gap-3 w-full">
          {/* Card 3 */}
          <div className="flex-1 rounded-[14px] p-[16px_12px] flex flex-col gap-2 bg-[#161616] border border-white/[0.07]">
            <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#555] font-medium">
              Smart Systems
            </div>
            <div className="flex items-center justify-center py-1.5">
              <div className="flex items-center justify-center bg-[#1e1e1e] border border-white/[0.06] rounded-[10px] p-2.5">
                <div className="w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <svg width="10" height="8" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              {['Automated workflows', 'Integrated systems', 'Real-time data', 'Scalable solutions'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-[9px] text-[#555]">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex-1 rounded-[14px] p-[16px_12px] flex flex-col gap-2 bg-[#161616] border border-white/[0.07]">
            <div className="text-[9px] uppercase tracking-[0.12em] text-center text-[#555] font-medium">
              Business Growth
            </div>
            <div className="flex items-center justify-center py-1.5">
              <div className="flex items-center justify-center bg-[#1e1e1e] border border-white/[0.06] rounded-[10px] p-2.5">
                <svg width="22" height="18" viewBox="0 0 26 20" fill="none">
                  <polyline points="1,17 6,9 11,13 17,5 22,1 25,1" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <polyline points="22,0 25,0 25,3" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <line x1="1" y1="19" x2="25" y2="19" stroke="#333" strokeWidth="0.8" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              {['Time saved', 'Costs reduced', 'Happy customers', 'Sustainable growth'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-[9px] text-[#555]">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4 sm:px-6 overflow-hidden grid-bg"
    >
      {/* Background blurs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-[#6D5DFC]/5 blur-[120px]" />
      </div>
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-[#6D5DFC]/8 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-[#8B7FFF]/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6D5DFC]/30 bg-[#6D5DFC]/10 text-xs text-[#8B7FFF] text-center">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-[#6D5DFC] animate-pulse flex-shrink-0" /> */}
            CUSTOM SOFTWARE & AUTOMATION
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.07] tracking-tight mb-6 max-w-3xl"
        >
          Business Problems.{' '}
          
          <br />
         <em className="not-italic text-[#6D5DFC]">Engineered Solutions.</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-center text-sm sm:text-base md:text-lg text-[#A1A1AA] max-w-xl mb-10 leading-relaxed font-light px-2"
        >
          We help businesses save time, reduce manual work, and scale operations
          with custom software and automation.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 sm:mb-20 w-full sm:w-auto">
          <button
            onClick={() => handleNav('#contact')}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#6D5DFC] hover:bg-[#7D6DFF] text-white text-sm font-medium transition-all duration-200 hover:shadow-xl hover:shadow-[#6D5DFC]/25 active:scale-[0.98]"
          >
            Book a Free Consultation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
              <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => handleNav('#services')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.08] hover:border-white/[0.16] text-white/70 hover:text-white text-sm transition-all duration-200 bg-white/[0.02] hover:bg-white/[0.04]"
          >
            View Services
          </button>
        </motion.div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="w-full"
        >
          {/* Desktop: center the fixed-width diagram */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-stretch gap-0">
              <FlowDiagram />
            </div>
          </div>

          {/* Mobile: full-width diagram */}
          <div className="md:hidden">
            <FlowDiagram />
          </div>
        </motion.div>

      </div>
    </section>
  );
}