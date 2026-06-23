import Link from "next/link";

const STEPS = [
  {
    number: "01",
    heading: "Book a Free Discovery Call",
    body: "We dive deep into your business, understanding your goals, operational challenges, workflows, bottlenecks, and growth opportunities. We identify where systems can create the biggest impact.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="9" cy="15" r="1" fill="currentColor" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
        <circle cx="15" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    heading: "Plan & Build the System",
    body: "We design a customized solution based on your restaurant's needs. From operations and customer experience to growth and retention systems, we build workflows that fit your business.",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "03",
    heading: "Deploy & Optimize",
    body: "We implement the system, train your team, monitor performance, and continuously refine processes to ensure smooth adoption and measurable results.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-24 px-6 md:px-20 overflow-hidden">

      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block border border-gray-200 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-500 px-5 py-2 mb-6"   style={{ fontFamily: "var(--font-nunito)" }}>
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
        <p className="text-base leading-relaxed text-gray-500 mt-4"   style={{ fontFamily: "var(--font-nunito)" }}>
          From discovery to deployment, we help restaurants build systems that
          reduce operational chaos, improve customer experience, and create
          sustainable growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        {STEPS.map(({ number, heading, body, iconBg, iconColor, icon }) => (
          <div
            key={number}
            className="relative flex flex-col bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-[0_16px_48px_-16px_rgba(109,93,252,0.10)] transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-[5rem] font-extrabold leading-none text-gray-200 select-none">
                {number}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-[1.05rem] font-bold text-gray-900 leading-snug"   style={{ fontFamily: "var(--font-nunito)" }}>
                {heading}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-500"   style={{ fontFamily: "var(--font-nunito)" }}>{body}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-gray-50 border border-gray-100 px-8 py-7">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1"   style={{ fontFamily: "var(--font-nunito)" }}>
              What kind of system does your restaurant need?
            </h3>
            <p className="text-sm text-gray-500"   style={{ fontFamily: "var(--font-nunito)" }}>
              Explore our solutions designed to streamline operations, improve
              guest experiences, and drive repeat revenue.
            </p>
          </div>
            <a
              href="#audit"
               style={{ fontFamily: "var(--font-nunito)" }}
              className="rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] px-7 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.55)] transition hover:from-[#6D28D9] hover:to-[#9333EA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
            >
             Explore Solutions <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            </a>
          {/* <Link
            href="/solutions"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white hover:bg-gray-700 transition-all"
          >
            Explore Solutions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link> */}
        </div>
      </div>
    </section>
  );
}