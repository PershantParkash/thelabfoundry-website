"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function BookACall() {
  useEffect(() => {
    if (document.querySelector('script[src*="calendly.com"]')) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="audit"
      className="bg-[#F7F5F1] py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full bg-[#6D5DFC]/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-6%] h-[300px] w-[300px] rounded-full bg-[#A855F7]/8 blur-3xl" />
      </div>

      {/* Section header */}
      <div className="relative max-w-7xl mx-auto text-center mb-12">
        <span className="inline-block border border-gray-200 bg-white rounded-full text-xs font-semibold uppercase tracking-widest text-gray-500 px-5 py-2 mb-5">
          Free Discovery Call
        </span>
        <h2
          style={{ fontFamily: "var(--font-jakarta)" }}
          className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-[#15171A] sm:text-5xl lg:text-[3.4rem]"
        >
          Let's talk about your{" "}
          <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent">
            Restaurant
          </span>
        </h2>
        <p className="text-base leading-relaxed text-gray-500 max-w-lg mx-auto mt-4"   style={{ fontFamily: "var(--font-nunito)" }}>
          Pick a time that works for you. We'll dig into your operations and map
          a clear path forward! no pitch, no pressure.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_24px_80px_-20px_rgba(109,93,252,0.15)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

        <div className="lg:w-[300px] shrink-0 bg-[#F7F5F1] border-b lg:border-b-0 lg:border-r border-gray-100 p-8 flex flex-col gap-8">
     
          <div>
            <Image
              src="/logo2.png"
              alt="TwinkleOfficial"
              width={140}
              height={70}
              style={{ width: "80px", height: "auto" }}
              loading="eager"
              priority
            />
            <h2 
             style={{ fontFamily: "var(--font-nunito)" }}
          className="mt-6 font-extrabold leading-[1.08] tracking-tight text-[#15171A] "
            >
              Free Discovery Call
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-500"   style={{ fontFamily: "var(--font-nunito)" }}>
              Book a free strategy call to discuss your restaurant's operational
              challenges, customer retention, automation opportunities, and
              growth systems.
            </p>
          </div>

          {/* Host */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6D5DFC] to-[#A855F7] flex items-center justify-center text-white font-bold text-lg shrink-0">
              P
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900"   style={{ fontFamily: "var(--font-nunito)" }}>
                Pershant Parkash
              </p>
              <p className="text-xs text-gray-500"   style={{ fontFamily: "var(--font-nunito)" }}>
                Founder & Operations Strategist
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-sm text-gray-600"   style={{ fontFamily: "var(--font-nunito)" }}>
              <span className="shrink-0 text-[#6D5DFC]" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              60 Minutes
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-600"   style={{ fontFamily: "var(--font-nunito)" }}>
              <span className="shrink-0 text-[#6D5DFC]" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12 19.79 19.79 0 0 1 1.56 3.44 2 2 0 0 1 3.53 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              Phone Call
            </div>
          </div>

          <div className="border-t border-gray-200" />

          {/* Trust bullets */}
          <ul className="flex flex-col gap-2.5"   style={{ fontFamily: "var(--font-nunito)" }}>
            {[
              "No credit card required",
              "No sales pitch, we listen first",
              "Walk away with a clear action plan",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-500 leading-relaxed"
              >
                <span className="shrink-0 mt-0.5 text-[#6D5DFC]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right — Calendly widget ── */}
        <div className="flex-1 min-h-[680px]">
          <div
            className="calendly-inline-widget w-full h-full"
            data-url="https://calendly.com/pershantparkash/30-minute-meeting?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=7C3AED"
            style={{ minWidth: "320px", height: "680px" }}
          />
        </div>
      </div>
    </section>
  );
}
