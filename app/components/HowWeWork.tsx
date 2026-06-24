import Image from "next/image";
import Link from "next/link";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const STEPS = [
  {
    number: "01",
    heading: "Book a Free Discovery Call",
    body: "We dive deep into your business, understanding your goals, operational challenges, workflows, bottlenecks, and growth opportunities. We identify where systems can create the biggest impact.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="9" cy="15" r="1" fill="currentColor" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
        <circle cx="15" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    tag: "Free — always",
    tagStyle: "bg-emerald-50 text-emerald-700",
    details: ["Operations mapping", "Bottleneck diagnosis", "No commitment required"],
  },
  {
    number: "02",
    heading: "Plan & Build the System",
    body: "We design a customized solution based on your restaurant's needs. From operations and customer experience to growth and retention systems, we build workflows that fit your business.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    tag: "One-time",
    tagStyle: "bg-violet-50 text-violet-700",
    details: ["Fixed price agreed upfront", "Custom solution blueprint", "Milestone-based delivery"],
  },
  {
    number: "03",
    heading: "Deploy & Optimize",
    body: "We implement the system, train your team, monitor performance, and continuously refine processes to ensure smooth adoption and measurable results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    tag: "Included in build",
    tagStyle: "bg-teal-50 text-teal-700",
    details: [
      "System deployment & setup",
      "Staff training & onboarding",
      "Ongoing support & Q&A",
    ],
  },
];

export default function HowWeWork() {
  return (
    <>
       <div className="relative h-[380px] md:h-[460px] overflow-hidden">
            <Image
              src="/analytics.jpg"
              alt=""
              fill
              aria-hidden
              className="object-cover object-[center_40%] brightness-[0.3] saturate-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-20">
              <p
                style={{ fontFamily: 'var(--font-jakarta)' }}
                className="text-2xl md:text-[2.4rem] font-extrabold text-white leading-[1.2] tracking-tight max-w-2xl"
              >
               "Before we build anything, we map the processes{' '}
                <span className="bg-gradient-to-r from-[#A78BFA] to-[#C084FC] bg-clip-text text-transparent">
                  behind your growth.
                </span>"
              </p>
            </div>
          </div>
    <section id="process"  className="bg-white py-24 px-6 md:px-20 overflow-hidden" style={{ fontFamily: "var(--font-nunito)" }}>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block border border-gray-200 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-500 px-5 py-2 mb-6">
          How We Work
        </span>
        <h2
          style={{ fontFamily: "var(--font-jakarta)" }}
          className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-[#15171A] sm:text-5xl lg:text-[3.4rem]"
        >
          A Simple{" "}
          <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent">
            3-Step Process
          </span>
        </h2>
        <p className="text-base leading-relaxed text-gray-500 mt-4">
          From discovery to deployment, we help restaurants build systems that
          reduce operational chaos, improve customer experience, and create
          sustainable growth.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 mb-8">
        {STEPS.map(({ number, heading, body, icon, tag, tagStyle, details }) => (
          <div
            key={number}
            className="flex flex-col bg-white rounded-2xl p-6 border border-[#EDE8DF] hover:border-[#C4B9F8] hover:shadow-[0_16px_48px_-16px_rgba(109,93,252,0.10)] transition-all duration-200"
          >
            {/* Icon + tag */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#EDE9FE] to-[#F5F3FF] flex items-center justify-center text-[#6D5DFC]">
                {icon}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-[0.1em] rounded-full px-2.5 py-1 ${tagStyle}`}>
                {tag}
              </span>
            </div>

            {/* Step label */}
            <p
              style={{ fontFamily: "var(--font-jakarta)" }}
              className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent mb-2"
            >
              Step {number}
            </p>

            {/* Heading */}
            <h3
              style={{ fontFamily: "var(--font-jakarta)" }}
              className="text-[17px] font-extrabold text-gray-900 mb-3 leading-snug"
            >
              {heading}
            </h3>

            {/* Body */}
            <p className="text-sm leading-relaxed text-gray-500 mb-5 flex-1">
              {body}
            </p>

            {/* Details */}
            <div className="pt-4 border-t border-[#F0EBE3] flex flex-col gap-2">
              {details.map((d) => (
                <span key={d} className="flex items-center gap-2 text-[13px] text-gray-600">
                  <span className="w-4 h-4 rounded-full bg-violet-100 flex items-center justify-center text-[#6D5DFC] shrink-0">
                    <CheckIcon />
                  </span>
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-[#F7F5F1] border border-[#EDE8DF] px-8 py-7">
          <div>
            <h3
              style={{ fontFamily: "var(--font-jakarta)" }}
              className="text-lg font-bold text-gray-900 mb-1"
            >
              What kind of system does your restaurant need?
            </h3>
            <p className="text-sm text-gray-500">
              Explore our solutions designed to streamline operations, improve
              guest experiences, and drive repeat revenue.
            </p>
          </div>
          <a
            href="#audit"
            className="shrink-0 rounded-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.55)] hover:from-[#6D28D9] hover:to-[#9333EA] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Explore Solutions
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

    </section>
    </>
  );
}