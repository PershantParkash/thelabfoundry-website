
import Image from "next/image";



const TRUSTED_BY = [
  "45-Min Free Audit Call",
  "2-Week Average Delivery Time",
  "Fixed Pricing, Always",
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden ">

      <Image
        src="/hero3.jpg"
        alt=""
        fill
        priority
        quality={90}
        aria-hidden
        className="object-cover object-center opacity-[0.3] bg-white"
      />

      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 md:px-20 py-32">

        <span
          style={{ fontFamily: "var(--font-nunito)" }}
          className="inline-flex items-center gap-2 rounded-full border border-[#fff]/80 bg-[#6D5DFC]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#fff] mb-2"
        >
          {/* <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> */}
          Restaurant Operations & Growth
        </span>
     
          <h1
             style={{ fontFamily: "var(--font-jakarta)" }}
             className="text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-[#ffffff] sm:text-5xl lg:text-[4rem] max-w-4xl"
           >
             Is your restaurant growing, but operations are{" "}
             <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent">
               harder to manage?
             </span>
           </h1>

        <p
          style={{ fontFamily: "var(--font-nunito)" }}
          className="text-base md:text-lg leading-relaxed text-white-500 max-w-5xl my-4"
        >
          As restaurants grow, manual processes, inconsistent customer
            follow-ups, and operational bottlenecks can slow progress. We help
            restaurants streamline operations, improve customer retention, and
             implement systems that support sustainable growth.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href="#audit"
            style={{ fontFamily: "var(--font-jakarta)" }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.55)] hover:from-[#6D28D9] hover:to-[#9333EA] transition-all duration-200"
          >
            Book a free audit call
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#solutions"
            style={{ fontFamily: "var(--font-jakarta)" }}
            className="inline-flex items-center rounded-full border border-[#15171A]/15 bg-white backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-[#15171A] hover:bg-white/80 transition-all duration-200"
          >
            See what we build
          </a>
        </div>

     </div>
      <div className="relative border-t border-[#EDE8DF] bg-white/30 backdrop-blur-sm px-6 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 ">
          <div className="flex gap-6 md:gap-12">
            {TRUSTED_BY.map((name) => (
              <span
                key={name}
                style={{ fontFamily: "var(--font-jakarta)" }}
                className="text-xs font-semibold tracking-wide text-gray-300 "
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}