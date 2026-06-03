"use client";

import { Search, X, SlidersHorizontal, Loader2, ArrowUpAZ, ArrowDownZA } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  sortOrder: "asc" | "desc" | null;
  onSortChange: (v: "asc" | "desc" | null) => void;
  cityFilter: string;
  onCityFilterChange: (v: string) => void;
  cities: string[];
  isSearching?: boolean;
}

export default function UserFilters({ search, onSearchChange, sortOrder, onSortChange, cityFilter, onCityFilterChange, cities, isSearching }: Props) {
  const hasFilters = search || sortOrder || cityFilter;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap pb-2">
      {/* ── Search Input ── */}
      <div className="relative flex-1 min-w-[260px] max-w-sm group">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none text-[#A0A8B4] group-focus-within:text-[#6C5CE7] transition-colors">
          <Search className="w-[18px] h-[18px]" strokeWidth={2} />
        </div>
        <input
          id="user-search"
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full pl-11 pr-10 py-2.5 text-[14.5px] font-medium bg-white border border-[#E8E8EE] rounded-[14px] text-[#151D48] placeholder:text-[#A0A8B4] placeholder:font-normal focus:outline-none focus:ring-4 focus:ring-[#6C5CE7]/10 focus:border-[#6C5CE7]/40 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
        />
        
        <AnimatePresence>
          {isSearching ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6C5CE7]"
            >
              <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2.5} />
            </motion.div>
          ) : search ? (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-[#A0A8B4] hover:bg-[#F3F4F6] hover:text-[#425166] transition-colors"
            >
              <X className="w-[15px] h-[15px]" strokeWidth={2.5} />
            </motion.button>
          ) : null}
        </AnimatePresence>
      </div>

      {/* ── Sort Segmented Control ── */}
      <div className="flex items-center p-1 rounded-[14px] bg-[#F7F7FB] border border-[#E8E8EE]">
        <button
          onClick={() => onSortChange(sortOrder === "asc" ? null : "asc")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold rounded-[10px] transition-all",
            sortOrder === "asc"
              ? "bg-white text-[#151D48] shadow-sm"
              : "text-[#737791] hover:text-[#151D48]"
          )}
        >
          <ArrowUpAZ className="w-4 h-4" strokeWidth={2} /> A-Z
        </button>
        <button
          onClick={() => onSortChange(sortOrder === "desc" ? null : "desc")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold rounded-[10px] transition-all",
            sortOrder === "desc"
              ? "bg-white text-[#151D48] shadow-sm"
              : "text-[#737791] hover:text-[#151D48]"
          )}
        >
          <ArrowDownZA className="w-4 h-4" strokeWidth={2} /> Z-A
        </button>
      </div>

      {/* ── City Dropdown ── */}
      <div className="relative group">
        <select
          id="city-filter"
          value={cityFilter}
          onChange={e => onCityFilterChange(e.target.value)}
          className={cn(
            "appearance-none pl-10 pr-9 py-2.5 text-[13.5px] font-semibold rounded-[14px] focus:outline-none focus:ring-4 focus:ring-[#6C5CE7]/10 transition-all cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
            cityFilter
              ? "bg-[#6C5CE7] border-transparent text-white"
              : "bg-white border border-[#E8E8EE] text-[#425166] group-hover:border-[#D1D5DB]"
          )}
        >
          <option value="">All Cities</option>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <div className={cn("absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors", cityFilter ? "text-white" : "text-[#A0A8B4]")}>
          <SlidersHorizontal className="w-[15px] h-[15px]" strokeWidth={2.5} />
        </div>
        <div className={cn("absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200", cityFilter ? "text-white" : "text-[#A0A8B4]")}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── Clear All ── */}
      <AnimatePresence>
        {hasFilters && (
          <motion.button
            initial={{ opacity: 0, width: 0, x: -10 }}
            animate={{ opacity: 1, width: "auto", x: 0 }}
            exit={{ opacity: 0, width: 0, x: -10 }}
            onClick={() => { onSearchChange(""); onSortChange(null); onCityFilterChange(""); }}
            className="flex items-center gap-1.5 text-[13px] font-bold text-[#EF4444] hover:text-[#DC2626] transition-colors ml-1 px-2 py-2 rounded-lg hover:bg-red-50"
          >
            <X className="w-3.5 h-3.5" strokeWidth={2.5} /> Reset
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
