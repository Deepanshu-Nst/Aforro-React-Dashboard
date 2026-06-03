"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart,
  BarChart3,
  ShoppingCart,
  ShoppingBag,
  TrendingUp,
  MessageSquare,
  Settings,
  LogOut,
  X,
  Menu,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Nav definition ───────────────────────────────────────────── */
const navItems = [
  { label: "Dashboard",    href: "/dashboard",   icon: PieChart },
  { label: "Users",        href: "/users",       icon: Users },
  { label: "Leaderboard",  href: "/leaderboard", icon: BarChart3 },
  { label: "Order",        href: "/orders",      icon: ShoppingCart },
  { label: "Products",     href: "/products",    icon: ShoppingBag },
  { label: "Sales Report", href: "/sales-report",icon: TrendingUp },
  { label: "Messages",     href: "/messages",    icon: MessageSquare },
  { label: "Settings",     href: "/settings",    icon: Settings },
];

/* ─── Inner content (shared between desktop & mobile drawer) ────── */
const SidebarInner = ({ onClose }: { onClose?: () => void }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-white select-none">

      {/* ── Logo ── */}
      <div className="flex items-center gap-3 px-8 pt-8 pb-8">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "#6C5CE7" }}
        >
          {/* Replicating the Dabang double-link logo using CSS */}
          <div className="w-5 h-5 relative flex items-center justify-center">
            <div className="absolute w-3 h-3 border-2 border-white rounded-full -top-0.5 -left-0.5" />
            <div className="absolute w-3 h-3 border-2 border-white rounded-full -bottom-0.5 -right-0.5" />
          </div>
        </div>
        <span className="text-[22px] font-bold text-[#151D48] tracking-tight leading-none">
          Dabang
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto p-1 rounded-lg text-[#B2BEC3] hover:text-[#2D3436] hover:bg-[#F8F8FD] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* ── Nav ── */}
      <nav className="flex-1 px-4 py-2 space-y-2 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href + "/"));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-4 px-4 py-3.5 rounded-[16px] text-[15px] font-medium transition-all duration-200 group",
                isActive
                  ? "bg-[#6C5CE7] text-white shadow-[0_4px_16px_rgba(108,92,231,0.25)]"
                  : "text-[#737791] hover:bg-[#F8F8FD] hover:text-[#151D48]"
              )}
            >
              <Icon
                className={cn(
                  "w-[22px] h-[22px] shrink-0 transition-colors",
                  isActive ? "text-white" : "text-[#8A92A6] group-hover:text-[#6C5CE7]"
                )}
                strokeWidth={isActive ? 2 : 1.5}
              />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}

        {/* Sign Out directly in the list to match spacing rhythm */}
        <Link
          href="/signout"
          onClick={onClose}
          className="flex items-center gap-4 px-4 py-3.5 mt-8 rounded-[16px] text-[15px] font-medium text-[#737791] hover:bg-[#FFF2F2] hover:text-[#E55039] transition-all group"
        >
          <LogOut
            className="w-[22px] h-[22px] shrink-0 text-[#8A92A6] group-hover:text-[#E55039] transition-colors"
            strokeWidth={1.5}
          />
          <span>Sign Out</span>
        </Link>
      </nav>

      {/* ── Upgrade card ── */}
      <div
        className="mx-6 mb-8 mt-4 rounded-[20px] p-5 text-white overflow-hidden relative shadow-[0_8px_24px_rgba(108,92,231,0.25)]"
        style={{ background: "linear-gradient(145deg,#6C5CE7 0%,#8B7AF8 100%)" }}
      >
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4 relative z-10">
          <div className="w-4 h-4 relative flex items-center justify-center">
            <div className="absolute w-2.5 h-2.5 border-2 border-white rounded-full -top-0.5 -left-0.5" />
            <div className="absolute w-2.5 h-2.5 border-2 border-white rounded-full -bottom-0.5 -right-0.5" />
          </div>
        </div>
        <p className="text-[15px] font-bold mb-1.5 relative z-10">Dabang Pro</p>
        <p className="text-[12px] text-white/80 mb-4 leading-relaxed relative z-10">
          Get access to all features on tetumbas
        </p>
        <button className="w-full py-2.5 rounded-xl bg-white text-[#6C5CE7] text-[13px] font-bold hover:bg-white/90 active:scale-95 transition-all relative z-10">
          Get Pro
        </button>
        {/* Decorative background circle */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

/* ─── Sidebar shell ─────────────────────────────────────────────── */
export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex flex-col w-[260px] shrink-0 bg-white h-screen sticky top-0 overflow-hidden border-r border-[#F3F4F6]">
        <SidebarInner />
      </aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-xl bg-white shadow-sm border border-[#F3F4F6] text-[#737791] hover:text-[#6C5CE7] transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-40 bg-[#151D48]/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 360, damping: 32 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-[280px] bg-white shadow-2xl"
            >
              <SidebarInner onClose={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
