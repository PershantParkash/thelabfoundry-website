import Image from "next/image";

const FAMILIAR_PROBLEMS = [
  {
    index: "01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Orders missed during peak hours",
    description:
      "Manual handoffs break under volume, tickets get lost between front-of-house and kitchen, leading to missed orders and frustrated guests.",
    impact: "Up to 20% of peak-hour orders",
  },
  {
    index: "02",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    title: "Paper workflows slow you down",
    description:
      "Handwritten notes and printed checklists add delays at every step, from taking orders to prepping and serving the right dish.",
    impact: "3–5 extra min per table turn",
  },
  {
    index: "03",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Too much verbal communication",
    description:
      "Shouting orders across a busy kitchen is error-prone. Critical details get misheard, repeated, or forgotten under pressure.",
    impact: "30% of errors from verbal handoffs",
  },
  {
    index: "04",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Customers complain about delays",
    description:
      "Long waits frustrate diners and damage your reputation. Negative reviews pile up when guests feel ignored or food arrives late.",
    impact: "1-star reviews double after 15 min",
  },
  {
    index: "05",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13" cy="4" r="1" />
        <path d="M7 21l3-6 2 2 4-8" />
        <path d="M21 17c0 2.76-4.03 5-9 5s-9-2.24-9-5" />
      </svg>
    ),
    title: "Staff overwhelmed during rush",
    description:
      "Without task visibility, your team scrambles during service. Burnout rises, mistakes multiply, and experienced staff start looking elsewhere.",
    impact: "Avg. $5,800 turnover cost per hire",
  },
  {
    index: "06",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    title: "Kitchen loses track of priorities",
    description:
      "When multiple orders land at once, sequencing breaks down. Wrong dishes go first, courses arrive out of order, and tables sit waiting.",
    impact: "Avg. 12-min delay on multi-course",
  },
];

export default function RootCause() {
  return (
    <>
      <div className="bg-white py-24 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-20 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100">
            <Image
              src="/busyhotel.jpg"
              alt="Restaurant kitchen in action"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent mb-3">
              Root Cause
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-5">
              Growth Creates{" "}
                <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent">
              Complexity
            </span>
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-5"   style={{ fontFamily: "var(--font-nunito)" }}>
              Restaurant owners are experts in hospitality, food, and service.
              But growth introduces a different challenge entirely.
            </p>
            <p className="text-base leading-relaxed text-gray-500"   style={{ fontFamily: "var(--font-nunito)" }}>
              More orders. More channels. More staff. More coordination
              required. Many restaurants continue using processes that worked
              when they were smaller! until those systems break.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC] mb-3"   style={{ fontFamily: "var(--font-nunito)" }}>
              Does this sound familiar?
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-1"   style={{ fontFamily: "var(--font-nunito)" }}>
              Signs your operations have outgrown your processes
            </h3>
            <p className="text-base leading-relaxed text-gray-500 mb-5"   style={{ fontFamily: "var(--font-nunito)" }}>
              Six patterns we hear from restaurant owners every week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {FAMILIAR_PROBLEMS.map(
              ({ index, icon, title, description, impact }) => (
                <div
                  key={title}
                  className="flex flex-col justify-between gap-4 bg-white rounded-2xl p-5 border border-[#EDE8DF] hover:border-[#D5CFCA] transition-colors duration-200"
                >
                  <div className="flex gap-4">
                    <p className="text-2xl font-bold text-gray-900 leading-relaxed">
                      <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent"   style={{ fontFamily: "var(--font-nunito)" }}>
                        {index}
                      </span>
                    </p>
                    <div>
                      <p className="text-base font-bold text-gray-900 leading-relaxed mb-1"   style={{ fontFamily: "var(--font-nunito)" }}>
                        {title}
                      </p>
                      <p className="text-sm leading-relaxed text-gray-500 flex-1"   style={{ fontFamily: "var(--font-nunito)" }}>
                        {description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#F0EBE3] flex justify-end">
                    <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                        <polyline points="17 18 23 18 23 12" />
                      </svg>
                      {impact}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
