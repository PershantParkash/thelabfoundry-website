'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#6D5DFC]/8 blur-[100px]" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* CTA Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6D5DFC]/30 bg-[#6D5DFC]/10 text-xs text-[#8B7FFF] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D5DFC] animate-pulse" />
            Let's work together
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-6">
            Ready To Improve Your{' '}
            <em className="not-italic text-[#6D5DFC] accent-glow-text">Business Operations?</em>
          </h2>
          <p className="text-[#A1A1AA] text-base max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Let's discuss your challenges and identify the best opportunities to automate, optimize, and grow.
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="gradient-border rounded-2xl bg-[#111111] p-8 md:p-12"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-[#6D5DFC]/20 border border-[#6D5DFC]/30 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14L11 20L23 8" stroke="#6D5DFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-medium mb-2">Message received!</h3>
              <p className="text-[#A1A1AA] text-sm">We'll be in touch within 24 hours to schedule your free consultation.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-[#666] mb-2 uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/[0.06] text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#6D5DFC]/50 focus:bg-[#0D0D0D] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#666] mb-2 uppercase tracking-wider">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/[0.06] text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#6D5DFC]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#666] mb-2 uppercase tracking-wider">Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Acme Inc."
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/[0.06] text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#6D5DFC]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#666] mb-2 uppercase tracking-wider">What do you need?</label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/[0.06] text-[#888] text-sm focus:outline-none focus:border-[#6D5DFC]/50 transition-colors appearance-none"
                >
                  <option>Custom Software</option>
                  <option>Workflow Automation</option>
                  <option>Mobile App</option>
                  <option>E-Commerce</option>
                  <option>CRM / Dashboard</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-[#666] mb-2 uppercase tracking-wider">Tell us about your challenge</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  placeholder="Describe your business challenge, current processes, and what you're hoping to achieve..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/[0.06] text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#6D5DFC]/50 transition-colors resize-none"
                />
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[#555] text-xs">We respond within 24 hours. No spam, no sales pitches.</p>
                <button
                  onClick={handleSubmit}
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6D5DFC] hover:bg-[#7D6DFF] text-white text-sm font-medium transition-all duration-200 hover:shadow-xl hover:shadow-[#6D5DFC]/25 active:scale-[0.98]"
                >
                  Schedule A Consultation
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
