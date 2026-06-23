import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

// Swap these for your real client logos/wordmarks
const TRUSTED_BY = ["NORTHFORK", "GATHER", "EMBER & CO", "LINECHECK", "PRTL"];

export default function Hero() {
  return (
    <section
      className={`${display.variable} ${body.variable} ${mono.variable} relative overflow-hidden bg-[#F7F5F1]`}
    >
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#FF5A1F]/10 blur-3xl" />
        <div className="absolute top-1/3 left-[-15%] h-[380px] w-[380px] rounded-full bg-[#ECE8E0] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-12 lg:py-32">
        <div className="max-w-xl">
          <h1
            style={{ fontFamily: "var(--font-jakarta)" }}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-[#15171A] sm:text-5xl lg:text-[3.4rem]"
          >
            Is your restaurant growing, but operations are{" "}
            <span className="bg-gradient-to-r from-[#6D5DFC] to-[#A855F7] bg-clip-text text-transparent">
              harder to manage?
            </span>
          </h1>

          <p
             style={{ fontFamily: "var(--font-nunito)" }}
            className="mt-6 text-[1.05rem] leading-relaxed text-[#5B5F66]"
          >
            As restaurants grow, manual processes, inconsistent customer
            follow-ups, and operational bottlenecks can slow progress. We help
            restaurants streamline operations, improve customer retention, and
            implement systems that support sustainable growth.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#audit"
               style={{ fontFamily: "var(--font-nunito)" }}
              className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] px-7 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.55)] transition hover:from-[#6D28D9] hover:to-[#9333EA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
            >
              Book a Free Restaurant Growth Audit
            </a>
            <a
              href="#solutions"
               style={{ fontFamily: "var(--font-nunito)" }}
              className="rounded-full border border-[#15171A]/15 px-7 py-3.5 text-sm font-medium text-[#15171A] transition hover:border-[#15171A]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
            >
              Solutions
            </a>
          </div>

          <div className="mt-14">
            <p
              style={{ fontFamily: "var(--font-mono)" }}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#5B5F66]/70"
            >
              Trusted by leading restaurant groups
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
              {TRUSTED_BY.map((name) => (
                <span
                  key={name}
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-sm font-medium tracking-wide text-[#15171A]/35"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/capture.png"
            alt="Restaurant operations dashboard"
            width={680}
            height={680}
            quality={100}
            priority
            className="w-full max-w-[600px] drop-shadow-none"
          />
        </div>
      </div>
    </section>
  );
}

function TicketChip({
  children,
  className = "",
  delay = "0s",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute z-10 rounded-xl border-t border-dashed border-[#15171A]/15 bg-[#FAF8F4] px-4 py-3 shadow-[0_10px_30px_-12px_rgba(21,23,26,0.25)] ticket-float ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}
