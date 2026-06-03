"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Bell, ChevronDown, X,
  ShoppingCart, UserPlus, TrendingUp, CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Types ──────────────────────────────────────────────────────── */
const PAGE_TITLES: Record<string, string> = {
  "/dashboard":    "Dashboard",
  "/users":        "Users",
  "/leaderboard":  "Leaderboard",
  "/orders":       "Orders",
  "/products":     "Products",
  "/sales-report": "Sales Report",
  "/messages":     "Messages",
  "/settings":     "Settings",
};

const INITIAL_NOTIFS = [
  { id: "1", icon: ShoppingCart, iconColor: "#6C5CE7", iconBg: "#F0EEFF", message: "New order #2451 received",           time: "2 min ago",  read: false },
  { id: "2", icon: UserPlus,    iconColor: "#00B894",  iconBg: "#DFF9F3", message: "5 new customers signed up today",    time: "1 hr ago",   read: false },
  { id: "3", icon: TrendingUp,  iconColor: "#F9A825",  iconBg: "#FFF8E1", message: "Sales target reached for May",       time: "3 hr ago",   read: true  },
  { id: "4", icon: CheckCircle, iconColor: "#0984E3",  iconBg: "#E8F4FD", message: "Product inventory updated",          time: "Yesterday",  read: true  },
];

/* ─── Flag emoji as inline SVG rect ─────────────────────────────── */
function USFlag() {
  return (
    <span
      className="inline-flex items-center justify-center w-[22px] h-[16px] rounded-[3px] overflow-hidden text-[12px] leading-none shrink-0 bg-[#F3F4F6]"
      aria-label="US Flag"
    >
      🇺🇸
    </span>
  );
}

/* ─── Notification bell with Figma-style yellow halo ────────────── */
function NotifBell({ unread, onClick }: { unread: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Notifications"
      className="relative flex items-center justify-center transition-colors group mx-2"
    >
      {/* Yellow boundary treatment from Figma */}
      <span
        className={cn(
          "flex items-center justify-center w-11 h-11 rounded-2xl transition-colors",
          unread > 0 ? "bg-[#FFF8E6]" : "bg-transparent group-hover:bg-[#F3F4F6]"
        )}
      >
        <Bell
          className="w-5 h-5"
          style={{ color: unread > 0 ? "#F9A825" : "#737791" }}
          strokeWidth={1.8}
        />
      </span>
      {/* Red dot */}
      {unread > 0 && (
        <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#EF4444] ring-[3px] ring-white" />
      )}
    </button>
  );
}

/* ─── Component ──────────────────────────────────────────────────── */
export default function TopNavbar() {
  const pathname = usePathname();
  const [search, setSearch]         = useState("");
  const [showNotifs, setShowNotifs] = useState(false);
  const [showLang, setShowLang]     = useState(false);
  const [notifs, setNotifs]         = useState(INITIAL_NOTIFS);
  const [scrolled, setScrolled]     = useState(false);

  const title  = PAGE_TITLES[pathname] ?? "Dashboard";
  const unread = notifs.filter(n => !n.read).length;

  useEffect(() => {
    const el = document.querySelector("main");
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 4);
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setShowNotifs(false);
    setShowLang(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex items-center h-[90px] pl-[72px] pr-4 lg:px-8 bg-white transition-all duration-300",
        scrolled
          ? "shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-b border-[#F3F4F6]"
          : "border-b-0" // The border feels too rigid when un-scrolled on some dashboards
      )}
    >
      {/* ── Page Title ── */}
      <h1 className="hidden lg:block text-[28px] font-bold text-[#151D48] whitespace-nowrap shrink-0 mr-8 leading-none tracking-tight">
        {title}
      </h1>

      {/* ── Search (centered, Figma-style, wider with more padding) ── */}
      <div className="flex-1 flex justify-start lg:justify-center pr-4 lg:pr-8">
        <div className="relative w-full max-w-[420px]">
          {/* Purple search icon */}
          <span
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none"
          >
            <Search className="w-4 h-4 text-[#6C5CE7]" strokeWidth={2.5} />
          </span>
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 text-[14.5px] bg-[#F8F9FA] border-0 rounded-[18px] text-[#151D48] placeholder:text-[#A0A8B4] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/30 transition-all font-medium"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A8B4] hover:text-[#737791] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* ── Right controls (Breathing room added) ── */}
      <div className="flex items-center gap-4 ml-auto">

        {/* Language selector */}
        <div className="relative">
          <button
            onClick={() => { setShowLang(p => !p); setShowNotifs(false); }}
            className="hidden md:flex items-center gap-3 px-2 py-2 rounded-xl text-[14px] font-semibold text-[#425166] hover:bg-[#F8F9FA] transition-colors"
          >
            <USFlag />
            <span className="hidden lg:inline text-[#425166]">Eng (US)</span>
            <ChevronDown
              className={cn("w-4 h-4 text-[#A0A8B4] transition-transform duration-200 ml-1", showLang && "rotate-180")}
              strokeWidth={2}
            />
          </button>

          <AnimatePresence>
            {showLang && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.14, ease: "easeOut" }}
                className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl border border-[#F3F4F6] shadow-[0_12px_40px_rgba(0,0,0,0.08)] py-2 z-50"
              >
                {[
                  { flag: "🇺🇸", label: "Eng (US)" },
                  { flag: "🇪🇸", label: "Spanish" },
                  { flag: "🇫🇷", label: "French" },
                  { flag: "🇩🇪", label: "German" },
                ].map(l => (
                  <button
                    key={l.label}
                    onClick={() => setShowLang(false)}
                    className="w-full flex items-center gap-3 px-5 py-2.5 text-[14px] font-medium text-[#737791] hover:bg-[#F8F9FA] hover:text-[#151D48] transition-colors"
                  >
                    <span className="text-[16px]">{l.flag}</span> {l.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Notification bell */}
        <div className="relative">
          <NotifBell unread={unread} onClick={() => { setShowNotifs(p => !p); setShowLang(false); }} />

          <AnimatePresence>
            {showNotifs && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.14, ease: "easeOut" }}
                className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl border border-[#F3F4F6] shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-50 overflow-hidden"
              >
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#F8F9FA]">
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-bold text-[#151D48]">Notifications</span>
                    {unread > 0 && (
                      <span className="text-[11px] font-bold bg-[#EF4444] text-white px-2 py-0.5 rounded-full leading-none">
                        {unread}
                      </span>
                    )}
                  </div>
                  {unread > 0 && (
                    <button
                      onClick={() => setNotifs(p => p.map(n => ({ ...n, read: true })))}
                      className="text-[12px] font-medium text-[#6C5CE7] hover:underline"
                    >
                      Mark all read
                    </button>
                  )}
                </div>
                <div className="divide-y divide-[#F8F9FA] max-h-[320px] overflow-y-auto">
                  {notifs.map(n => {
                    const Icon = n.icon;
                    return (
                      <div
                        key={n.id}
                        className={cn(
                          "flex items-start gap-4 px-5 py-4 hover:bg-[#F8F9FA] transition-colors cursor-pointer",
                          !n.read && "bg-[#6C5CE7]/[0.02]"
                        )}
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: n.iconBg }}
                        >
                          <Icon className="w-4 h-4" style={{ color: n.iconColor }} strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={cn("text-[14px] leading-snug", n.read ? "text-[#737791]" : "text-[#151D48] font-semibold")}>
                            {n.message}
                          </p>
                          <p className="text-[12px] font-medium text-[#A0A8B4] mt-1">{n.time}</p>
                        </div>
                        {!n.read && <div className="w-2 h-2 rounded-full bg-[#EF4444] shrink-0 mt-2" />}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile (Larger Avatar & Font) */}
        <button className="flex items-center gap-3.5 pl-2 group ml-2">
          <div className="relative">
            {/* The user avatar in Figma uses an image, but we simulate it nicely */}
            <div
              className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-sm shrink-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://i.pravatar.cc/150?u=aforro')" }}
            >
              {/* Fallback in case image fails */}
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#3CD856] border-2 border-white rounded-full" />
          </div>
          <div className="hidden md:flex flex-col text-left leading-none">
            <span className="text-[15px] font-bold text-[#151D48] leading-tight">Musfiq</span>
            <span className="text-[13px] font-medium text-[#737791] leading-tight mt-0.5">Admin</span>
          </div>
          <ChevronDown
            className="w-4 h-4 text-[#A0A8B4] hidden md:block group-hover:text-[#151D48] transition-colors ml-1"
            strokeWidth={2}
          />
        </button>
      </div>
    </header>
  );
}
