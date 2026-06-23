"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorCheck,
  ListChecks,
  Users,
  BarChart3,
  QrCode,
  Globe,
  MessageCircle,
  UtensilsCrossed,
  RefreshCw,
  Megaphone,
  Star,
  Database,
  ArrowUpRight,
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
  type LucideIcon,
} from "lucide-react";

interface Solution {
  id: string;
  icon: LucideIcon;
  tag: "Operations" | "Customer Experience" | "Growth & Retention";
  title: string;
  shortDesc: string;
  impact: string;
  problem: string;
  howItWorks: string[];
  outcomes: string[];
  forWho: string;
  images: string[];
}

const solutions: Solution[] = [
  {
    id: "order-management",
    icon: ListChecks,
    tag: "Operations",
    title: "Live Order Management System",
    shortDesc:
      "One dashboard for every order: dine-in, takeaway, delivery, and WhatsApp, merged into a single stream.",
    impact: "Eliminates double-entry across 4+ platforms",
    problem:
      "Managing orders from Foodpanda, your own website, WhatsApp, and in-house on separate screens means things fall through the cracks. Staff are constantly switching tabs and manually re-entering orders.",
    howItWorks: [
      "All incoming order channels connect to one central system.",
      "Orders are auto-tagged by source, customer, and time so nothing is ambiguous.",
      "Staff confirm, modify, or flag orders from a single interface. No platform-switching.",
      "Completed orders archive automatically for end-of-day reporting.",
    ],
    outcomes: [
      "Zero missed orders from any channel.",
      "No more manual re-entry. Orders appear exactly as the customer placed them.",
      "Faster response time. One screen means one decision, not five logins.",
      "A clear audit trail if a customer disputes an order.",
    ],
    forWho:
      "Restaurants running on multiple delivery platforms or a mix of channels who are tired of the tab-switching juggling act.",
    images: ["/ordersystem1.jpg", "/ordersystem.jpg", "/ordersystem2.jpg"],
  },
  {
    id: "staff-workflow",
    icon: Users,
    tag: "Operations",
    title: "Staff Workflow System",
    shortDesc:
      "Task assignment and kitchen coordination, so your team always knows what needs doing and who owns it.",
    impact: "30% less time spent on verbal coordination",
    problem:
      "During a rush, managers become human relay stations: telling this person to do that, reminding that person about this. It burns manager time and still gets dropped.",
    howItWorks: [
      "Recurring tasks (opening checks, station prep, cleaning) are templated and auto-assigned by shift.",
      "One-off tasks can be pushed to any staff member's screen instantly.",
      "Staff tick off tasks as done; managers see completion in real time.",
      "Shift handover notes are captured digitally. No more verbal handoffs that get forgotten.",
    ],
    outcomes: [
      "Managers spend time managing, not reminding.",
      "Nothing falls through shift changes.",
      "New staff get up to speed faster. Tasks are explicit, not assumed.",
      "You can prove compliance for health and safety checklists.",
    ],
    forWho:
      "Owner-operators who are personally plugging every gap, and managers who want to delegate without losing visibility.",
    images: ["/taskassigner.jpg", "/taskassigner2.jpg", "/taskassigner3.jpg"],
  },
  {
    id: "ops-dashboard",
    icon: BarChart3,
    tag: "Operations",
    title: "Operations Dashboard",
    shortDesc:
      "Your restaurant's daily performance, revenue, covers, top items, and waste, in one glance.",
    impact: "Decisions based on data, not gut feel",
    problem:
      "You finish a busy Saturday and have no idea whether it was actually more profitable than last week. You're running blind on what's selling, what's wasting, and where money is leaking.",
    howItWorks: [
      "Sales, orders, and covers are tracked automatically as the day runs.",
      "The dashboard surfaces top-selling items, slow movers, and peak hours without any manual work.",
      "Daily and weekly digests are sent to your phone so you review the numbers even off-site.",
      "Alerts flag anomalies (unusual voids, slow ticket times, revenue dips) before they become problems.",
    ],
    outcomes: [
      "Know your best and worst performing days, and why.",
      "Spot menu items that aren't pulling their weight.",
      "Catch theft or waste patterns early.",
      "Make menu pricing decisions with real margin data.",
    ],
    forWho:
      "Any restaurant owner who wants to stop running on instinct and start running on information.",
    images: ["/dashboard.jpg", "/dashboard2.jpg", "/dashboard3.jpg"],
  },
  {
    id: "qr-ordering",
    icon: QrCode,
    tag: "Customer Experience",
    title: "QR Table Ordering",
    shortDesc:
      "Customers scan, browse, and order from the table. No waiting for a waiter, no order mistakes from memory.",
    impact: "Average order value up 15 to 20% vs. verbal ordering",
    problem:
      "Tables sit for minutes waiting to order. Waiters mishear items or forget modifiers. Upselling depends entirely on whether your staff remembers to mention it.",
    howItWorks: [
      "Each table has a QR code: scan it and the full menu loads instantly, no app required.",
      "Customers browse photos, read descriptions, and add modifiers themselves.",
      "Orders go directly to the kitchen queue. No waiter relay, no errors.",
      'Upsell suggestions appear automatically at the right moment, like "Add a side?" before checkout.',
    ],
    outcomes: [
      "Fewer staff needed per cover without a drop in experience.",
      "Modifier accuracy goes to near 100%. Customers choose their own options.",
      "Upsells happen consistently, not randomly.",
      "Tables turn faster because ordering starts the moment customers sit.",
    ],
    forWho:
      "Cafes, casual dining, and fast-casual restaurants where waiter capacity is a constraint or accuracy is a recurring complaint.",
    images: ["/scan1.jpg", "/scan.jpg", "/scan3.jpg"],
  },
  {
    id: "website-ordering",
    icon: Globe,
    tag: "Customer Experience",
    title: "Branded Website",
    shortDesc:
      "Your own branded ordering page. Customers order directly from you, with zero commission to third parties.",
    impact: "Saves 20 to 30% per order vs. delivery platforms",
    problem:
      "Every order through Foodpanda or Careem takes 20 to 30% off the top. You're paying to reach your own regular customers, and you have zero data on who they are.",
    howItWorks: [
      "A branded ordering page sits on your own domain or subdomain.",
      "Menu, photos, and prices are managed from your dashboard; updates go live instantly.",
      "Customers pay online or choose cash-on-delivery depending on your preference.",
      "Orders flow into the same kitchen queue as all other channels.",
    ],
    outcomes: [
      "Full margin on every direct order. No platform cut.",
      "You own the customer relationship and their data.",
      "Loyalty programs and repeat-order incentives become possible.",
      "Customers trust your own site for accuracy more than aggregators.",
    ],
    forWho:
      "Any restaurant spending significant commission on delivery platforms who wants to start reclaiming that margin.",
    images: ["/website1.jpg", "/website2.jpg", "/website3.jpg"],
  },
  {
    id: "whatsapp-ordering",
    icon: MessageCircle,
    tag: "Customer Experience",
    title: "WhatsApp Ordering System",
    shortDesc:
      "Customers place orders by WhatsApp: automated, structured, and flowing straight into your kitchen.",
    impact: "Converts existing WhatsApp traffic into revenue automatically",
    problem:
      "You already get WhatsApp messages asking what's available and how much the pasta costs. Your staff answers each one manually, then re-enters the order. It's a full-time job that scales terribly.",
    howItWorks: [
      "An automated flow greets customers, shares the menu, and guides them through ordering.",
      "Customers select items, choose delivery or pickup, and confirm, all in WhatsApp.",
      "Confirmed orders arrive in your kitchen system structured and ready. No re-entry.",
      "Customers get order confirmation and updates via the same chat.",
    ],
    outcomes: [
      "WhatsApp becomes a proper sales channel, not a manual inbox.",
      "Staff stop spending hours on chat responses.",
      "Customers get instant replies at any time of day.",
      "Repeat customers can reorder with a single message.",
    ],
    forWho:
      "Restaurants with an active WhatsApp presence that are currently handling orders manually over chat.",
    images: ["/whatsapp.jpg", "/whatsapp2.jpg", "/whatsapp3.jpg"],
  },
  {
    id: "marketing-automation",
    icon: Megaphone,
    tag: "Growth & Retention",
    title: "Marketing Automation System",
    shortDesc:
      "Campaigns, promotions, and seasonal pushes that run on schedule without needing someone to manage them daily.",
    impact: "Runs consistent campaigns with zero daily effort",
    problem:
      "You know you should be doing marketing but there's never time. You run an occasional promotion when you remember, and it lands flat because it isn't targeted or timed right.",
    howItWorks: [
      "Promotions are built once and scheduled: Eid specials, Friday deals, rainy day discounts.",
      "Customer segments (new, regular, lapsed) receive different messages at the right time.",
      "WhatsApp, SMS, and email channels are managed from one place.",
      "Performance data shows which campaigns are driving actual orders, not just opens.",
    ],
    outcomes: [
      "Consistent brand presence without daily management.",
      "Promotions reach the right people at the right moment.",
      "You can measure what's actually working and double down on it.",
      "Seasonal peaks are prepared for in advance, not scrambled for.",
    ],
    forWho:
      "Restaurants with a customer base who want to market consistently but can't hire a dedicated marketing person.",
    images: ["/marketing.jpg"],
  },
  {
    id: "review-growth",
    icon: Star,
    tag: "Growth & Retention",
    title: "Review Growth System",
    shortDesc:
      "A systematic way to collect more Google reviews from happy customers, automatically, after every visit.",
    impact: "Moving from 4.1 to 4.4 stars lifts clicks by 28%",
    problem:
      "Happy customers rarely think to leave a review. Unhappy ones always do. So your rating drifts down even when most experiences are good, and you can't manually chase every customer.",
    howItWorks: [
      "After a completed order or visit, customers automatically receive a short satisfaction message.",
      "Happy customers are guided directly to your Google review page with one tap.",
      "Unhappy customers are routed to a private feedback form, so you hear the complaint before it goes public.",
      "You see your average rating trend and review volume in the dashboard over time.",
    ],
    outcomes: [
      "Review volume increases without any manual effort.",
      "Rating improves because the feedback loop is timely, while sentiment is still high.",
      "Negative feedback comes to you privately first.",
      "A higher Google rating means more organic discovery and more customers.",
    ],
    forWho:
      "Any restaurant that wants more reviews but isn't willing to awkwardly ask every customer in person.",
    images: ["/feedback.jpg", "/feedback2.jpg", "/feedback3.jpg"],
  },
  {
    id: "customer-crm",
    icon: Database,
    tag: "Growth & Retention",
    title: "Customer Retention and CRM System",
    shortDesc:
      "A full picture of every customer: what they order, how often, how much they spend, and when they're drifting away.",
    impact: "Know your top 20% of customers by name and order history",
    problem:
      "You recognize faces but have no data. You don't know who your most valuable customers actually are, what they love, or whether you're at risk of losing them.",
    howItWorks: [
      "Every order from every channel is tied to a customer profile automatically.",
      "Profiles show visit history, favorite items, lifetime spend, and last visit date.",
      "Segments are built automatically: first-timers, regulars, VIPs, at-risk.",
      "Staff can see customer notes at point of service: a VIP flag, a dietary note, a birthday.",
    ],
    outcomes: [
      "You can run targeted promotions to exactly the right segment.",
      "VIP customers get the recognition that makes them more loyal.",
      "At-risk customers are identified and acted on before they leave.",
      "You finally have data to back decisions about menu, pricing, and service.",
    ],
    forWho:
      "Restaurants serious about building a loyal customer base, not just serving whoever walks in today.",
    images: ["/CRM2.jpg", "/CRM3.jpg"],
  },
];

const tagAccent: Record<Solution["tag"], string> = {
  Operations: "#6D5DFC",
  "Customer Experience": "#6D5DFC",
  "Growth & Retention": "#6D5DFC",
};

const FILTERS: Array<Solution["tag"] | "All"> = [
  "All",
  "Operations",
  "Customer Experience",
  "Growth & Retention",
];

// ─── Image Scroller ───────────────────────────────────────────────────────────

function ImageScroller({ images }: { images: string[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (idx: number) => {
    const next = Math.max(0, Math.min(images.length - 1, idx));
    setActiveIdx(next);
    scrollRef.current?.children[next]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={(e) => {
          const el = e.currentTarget;
          const idx = Math.round(
            el.scrollLeft / (el.scrollWidth / images.length),
          );
          setActiveIdx(idx);
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full snap-center rounded-xl overflow-hidden bg-[#F0EEFF]"
            // style={{ aspectRatio: '4/3' }}
          >
            <img
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={() => scrollTo(activeIdx - 1)}
            disabled={activeIdx === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-[#1C1B19]/10 flex items-center justify-center shadow-sm disabled:opacity-30 transition-opacity"
          >
            <ChevronLeft size={16} strokeWidth={2} color="#1C1B19" />
          </button>
          <button
            onClick={() => scrollTo(activeIdx + 1)}
            disabled={activeIdx === images.length - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-[#1C1B19]/10 flex items-center justify-center shadow-sm disabled:opacity-30 transition-opacity"
          >
            <ChevronRight size={16} strokeWidth={2} color="#1C1B19" />
          </button>

          <div className="flex justify-center gap-1.5 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                style={{
                  backgroundColor:
                    i === activeIdx ? "#6D5DFC" : "rgba(28,27,25,0.2)",
                  transform: i === activeIdx ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Replace your entire DetailModal function with this:

function DetailModal({
  solution,
  onClose,
}: {
  solution: Solution;
  onClose: () => void;
}) {
  const Icon = solution.icon;
  const accent = tagAccent[solution.tag];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      key="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1C1B19]/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: "spring", stiffness: 380, damping: 34 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-7xl bg-white sm:rounded-2xl shadow-2xl flex flex-col rounded-t-2xl"
        style={{ maxHeight: "92vh", height: "92vh" }}
      >
        {/* ── Fixed Header ── */}
        <div className="flex-shrink-0 border-b border-[#1C1B19]/10 px-5 sm:px-7 pt-5 pb-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0">
              <div
                className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#6D5DFC" }}
              >
                <Icon size={18} color="white" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: accent }}
                  />
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: accent }}
                  >
                    {solution.tag}
                  </span>
                </div>
                <h2
                  className="font-bold text-[#1C1B19] leading-tight text-lg sm:text-2xl"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {solution.title}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#F7F5F1] hover:bg-[#EDEAE5] transition-colors mt-1"
            >
              <X size={15} strokeWidth={2.2} color="#1C1B19" />
            </button>
          </div>
        </div>

        {/* ── Single scrollable body ── */}
        <div className="flex-1 overflow-y-auto overscroll-contain">

          {/* ─ MOBILE layout: single column stack ─ */}
          <div className="lg:hidden flex flex-col">

            {/* 1. Image */}
            {solution.images.length > 0 && (
              <div className="px-5 pt-5">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/35 mb-3">
                  Preview
                </p>
                <ImageScroller images={solution.images} />
              </div>
            )}

            {/* 2. Impact badge */}
            <div className="px-5 pt-4">
              <div className="inline-flex items-center gap-2 border border-[#1C1B19]/12 rounded-md px-3 py-1.5 bg-[#F7F5F1]">
                <ArrowUpRight size={13} color={accent} strokeWidth={2.25} />
                <span className="text-xs font-mono uppercase tracking-wide text-[#1C1B19]/70">
                  {solution.impact}
                </span>
              </div>
            </div>

            {/* 3. How it works */}
            <div className="px-5 pt-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/35 mb-4">
                How it works
              </p>
              <ol className="flex flex-col gap-4">
                {solution.howItWorks.map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold mt-0.5"
                      style={{ backgroundColor: `${accent}18`, color: accent }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[#1C1B19]/70 text-sm leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* 4. What you get */}
            <div className="px-5 pt-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/35 mb-4">
                What you get
              </p>
              <ul className="flex flex-col gap-3">
                {solution.outcomes.map((outcome, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: `${accent}1F` }}
                    >
                      <Check size={9} color={accent} strokeWidth={3} />
                    </span>
                    <span className="text-[#1C1B19]/70 text-sm leading-relaxed">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Problem + Best for */}
            <div className="px-5 pt-6 pb-6 flex flex-col gap-4">
              <div className="bg-[#F7F5F1] rounded-xl border border-[#1C1B19]/8 p-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/35 mb-2">
                  The problem
                </p>
                <p className="text-[#1C1B19]/70 text-sm leading-relaxed">
                  {solution.problem}
                </p>
              </div>
              <div className="bg-[#F7F5F1] rounded-xl border border-[#1C1B19]/8 p-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/35 mb-1.5">
                  Best for
                </p>
                <p className="text-[#1C1B19]/70 text-sm leading-relaxed">
                  {solution.forWho}
                </p>
              </div>
            </div>
          </div>

          {/* ─ DESKTOP layout: two columns (unchanged) ─ */}
          <div className="hidden lg:grid grid-cols-[7fr_3fr] divide-x divide-[#1C1B19]/8">
            {/* Left: image */}
            <div className="px-7 py-7 flex flex-col gap-7">
              {solution.images.length > 0 && (
                <section>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/35 mb-3">
                    Preview
                  </p>
                  <ImageScroller images={solution.images} />
                </section>
              )}
            </div>

            {/* Right: how it works + outcomes */}
            <div className="px-7 py-7 flex flex-col gap-8">
              <section>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/35 mb-4">
                  How it works
                </p>
                <ol className="flex flex-col gap-4">
                  {solution.howItWorks.map((step, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold mt-0.5"
                        style={{ backgroundColor: `${accent}18`, color: accent }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-[#1C1B19]/70 text-sm leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/35 mb-4">
                  What you get
                </p>
                <ul className="flex flex-col gap-3">
                  {solution.outcomes.map((outcome, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: `${accent}1F` }}
                      >
                        <Check size={9} color={accent} strokeWidth={3} />
                      </span>
                      <span className="text-[#1C1B19]/70 text-sm leading-relaxed">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Desktop: problem + best for — below columns */}
          <div className="hidden lg:grid grid-cols-2 gap-5 px-7 pb-7">
            <div className="bg-[#F7F5F1] rounded-xl border border-[#1C1B19]/8 p-4">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/35 mb-2">
                The problem
              </p>
              <p className="text-[#1C1B19]/70 text-sm leading-relaxed">
                {solution.problem}
              </p>
            </div>
            <div className="bg-[#F7F5F1] rounded-xl border border-[#1C1B19]/8 p-4">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/35 mb-1.5">
                Best for
              </p>
              <p className="text-[#1C1B19]/70 text-sm leading-relaxed">
                {solution.forWho}
              </p>
            </div>
          </div>
        </div>

        {/* ── Fixed Footer CTA ── */}
        <div className="flex-shrink-0 border-t border-[#1C1B19]/10 px-5 sm:px-7 py-4">
          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-white text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98]"
            style={{ backgroundColor: "#6D5DFC" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#5849d4")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#6D5DFC")
            }
          >
            Book a call to learn more
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SolutionCard({
  solution,
  onClick,
}: {
  solution: Solution;
  onClick: () => void;
}) {
  const Icon = solution.icon;
  const accent = tagAccent[solution.tag];

  return (
    <motion.button
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      onClick={onClick}
      className="group text-left w-full bg-white rounded-xl border border-[#1C1B19]/10 hover:border-[#6D5DFC]/40 hover:shadow-[0_8px_24px_-8px_rgba(109,93,252,0.25)] transition-all duration-200 flex flex-col overflow-hidden"
    >
      {/* Card image — slightly shorter aspect ratio style={{ aspectRatio: '2/1' }}*/}
      {solution?.images?.length > 0 && (
        <div className="w-full overflow-hidden">
          <img
            src={solution.images[0]}
            alt={solution.title}
            className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-200"
            style={{ backgroundColor: "#6D5DFC" }}
          >
            <Icon size={20} color="white" strokeWidth={1.75} />
          </div>
          <div className="flex items-center gap-1.5 pt-1">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1C1B19]/45">
              {solution.tag}
            </span>
          </div>
        </div>

        <h3 className="font-display text-lg font-bold text-[#1C1B19] mb-2 leading-tight">
          {solution.title}
        </h3>

        <p className="text-sm text-[#1C1B19]/55 leading-relaxed flex-1">
          {solution.shortDesc}
        </p>

        <div
          className="mt-5 pt-4 flex items-center justify-between"
          style={{ borderTop: "1px dashed rgba(28,27,25,0.18)" }}
        >
          <span className="text-xs font-mono text-[#1C1B19]/70">
            {solution.impact}
          </span>
          <ArrowUpRight
            size={16}
            strokeWidth={2}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            color={accent}
          />
        </div>
      </div>
    </motion.button>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function SolutionsSection() {
  const [activeFilter, setActiveFilter] = useState<Solution["tag"] | "All">(
    "All",
  );
  const [selected, setSelected] = useState<Solution | null>(null);

  const filtered =
    activeFilter === "All"
      ? solutions
      : solutions.filter((s) => s.tag === activeFilter);

  return (
    <section
      id="solutions"
      className="bg-white py-24 px-6"
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2
            className="font-display text-4xl sm:text-5xl font-bold text-[#1C1B19] leading-[1.05] max-w-xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Everything your restaurant needs to run, grow, and retain.
          </h2>
          <p className="text-[#1C1B19]/55 mt-4 text-base max-w-lg leading-relaxed">
            Modular systems that work independently or together. Start with what
            hurts most.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#1C1B19]/10 pb-0">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`relative px-1 pb-3 mr-5 text-sm font-medium transition-colors duration-150 ${
                activeFilter === f
                  ? "text-[#1C1B19]"
                  : "text-[#1C1B19]/40 hover:text-[#1C1B19]/70"
              }`}
            >
              {f}
              {activeFilter === f && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute left-0 right-0 -bottom-px h-[2px]"
                  style={{ backgroundColor: "#6D5DFC" }}
                />
              )}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.div
                key={s.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.18 }}
              >
                <SolutionCard solution={s} onClick={() => setSelected(s)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <DetailModal solution={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
