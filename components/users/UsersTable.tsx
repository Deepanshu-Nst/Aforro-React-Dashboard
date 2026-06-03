"use client";

import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
} from "@tanstack/react-table";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpDown, ArrowUp, ArrowDown, AlertCircle, RefreshCw, Users, Mail, Building2, MapPin, SearchX } from "lucide-react";
import type { UserRow } from "@/types/user";
import { useUsers } from "@/hooks/useUsers";
import { useDebounce } from "@/hooks/useDebounce";
import UserFilters from "./UserFilters";
import { normalizeSearch } from "@/lib/utils";

const col = createColumnHelper<UserRow>();

function SkeletonRow() {
  return (
    <tr className="border-b border-[#F3F4F6]">
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-[#F3F4F6] animate-pulse" />
          <div className="w-32 h-4 rounded bg-[#F3F4F6] animate-pulse" />
        </div>
      </td>
      <td className="px-6 py-4"><div className="w-40 h-4 rounded bg-[#F3F4F6] animate-pulse" /></td>
      <td className="px-6 py-4"><div className="w-24 h-4 rounded bg-[#F3F4F6] animate-pulse" /></td>
      <td className="px-6 py-4"><div className="w-20 h-6 rounded-lg bg-[#F3F4F6] animate-pulse" /></td>
    </tr>
  );
}

function EmptyState() {
  return (
    <tr>
      <td colSpan={4} className="py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-[20px] bg-[#F8F9FA] flex items-center justify-center border border-[#EDEDF0] shadow-sm">
            <SearchX className="w-8 h-8 text-[#A0A8B4]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[15px] font-bold text-[#151D48]">No users found</p>
            <p className="text-[13px] text-[#737791] mt-1 max-w-[220px] mx-auto leading-relaxed">
              We couldn&apos;t find any users matching your current search or filters.
            </p>
          </div>
        </motion.div>
      </td>
    </tr>
  );
}

function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <tr>
      <td colSpan={4} className="py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-[20px] bg-[#FEF2F2] flex items-center justify-center border border-[#FECACA] shadow-sm">
            <AlertCircle className="w-8 h-8 text-[#EF4444]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[15px] font-bold text-[#151D48]">Failed to load users</p>
            <p className="text-[13px] text-[#737791] mt-1 max-w-[260px] mx-auto leading-relaxed">{message}</p>
          </div>
          <button
            onClick={onRetry}
            className="flex items-center gap-2 px-5 py-2.5 mt-2 rounded-xl bg-[#6C5CE7] text-white text-[13px] font-bold hover:bg-[#5A4BD1] active:scale-95 transition-all shadow-sm"
          >
            <RefreshCw className="w-4 h-4" strokeWidth={2.5} /> Try Again
          </button>
        </motion.div>
      </td>
    </tr>
  );
}

export default function UsersTable() {
  const { users, cities, isLoading, error, refetch } = useUsers();
  const [search, setSearch]           = useState("");
  const [sortOrder, setSortOrder]     = useState<"asc" | "desc" | null>(null);
  const [cityFilter, setCityFilter]   = useState("");
  const [tableSorting, setTableSorting] = useState<SortingState>([]);
  
  const debouncedSearch = useDebounce(search, 350);
  const isSearching = search !== debouncedSearch;

  const filtered = useMemo(() => {
    let rows = [...users];
    if (debouncedSearch) {
      const q = normalizeSearch(debouncedSearch);
      rows = rows.filter(u => normalizeSearch(u.name).includes(q) || normalizeSearch(u.email).includes(q));
    }
    if (cityFilter) rows = rows.filter(u => u.city === cityFilter);
    if (sortOrder)  rows.sort((a, b) => sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    return rows;
  }, [users, debouncedSearch, cityFilter, sortOrder]);

  const columns = useMemo(() => [
    col.accessor("name", {
      header: ({ column }) => (
        <button
          className="flex items-center gap-2 text-[12px] font-bold text-[#737791] uppercase tracking-wider hover:text-[#6C5CE7] transition-colors group outline-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <Users className="w-4 h-4 text-[#A0A8B4] group-hover:text-[#6C5CE7] transition-colors" strokeWidth={2} /> 
          Name
          {column.getIsSorted() === "asc" ? <ArrowUp className="w-3.5 h-3.5 text-[#6C5CE7]" strokeWidth={2.5} />
            : column.getIsSorted() === "desc" ? <ArrowDown className="w-3.5 h-3.5 text-[#6C5CE7]" strokeWidth={2.5} />
            : <ArrowUpDown className="w-3.5 h-3.5 text-[#D1D5DB] group-hover:text-[#6C5CE7]" strokeWidth={2} />}
        </button>
      ),
      cell: info => (
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: "linear-gradient(135deg,#7B6CF6,#6C5CE7)" }}>
            <span className="text-[13px] font-bold text-white">{info.getValue().charAt(0)}</span>
          </div>
          <span className="text-[14.5px] font-bold text-[#151D48]">{info.getValue()}</span>
        </div>
      ),
    }),
    col.accessor("email", {
      header: () => (
        <div className="flex items-center gap-2 text-[12px] font-bold text-[#737791] uppercase tracking-wider">
          <Mail className="w-4 h-4 text-[#A0A8B4]" strokeWidth={2} /> Email
        </div>
      ),
      cell: info => (
        <a href={`mailto:${info.getValue()}`} className="text-[14px] font-medium text-[#737791] hover:text-[#6C5CE7] hover:underline underline-offset-4 transition-colors">
          {info.getValue()}
        </a>
      ),
    }),
    col.accessor("companyName", {
      header: () => (
        <div className="flex items-center gap-2 text-[12px] font-bold text-[#737791] uppercase tracking-wider">
          <Building2 className="w-4 h-4 text-[#A0A8B4]" strokeWidth={2} /> Company
        </div>
      ),
      cell: info => <span className="text-[14px] font-medium text-[#425166]">{info.getValue()}</span>,
    }),
    col.accessor("city", {
      header: () => (
        <div className="flex items-center gap-2 text-[12px] font-bold text-[#737791] uppercase tracking-wider">
          <MapPin className="w-4 h-4 text-[#A0A8B4]" strokeWidth={2} /> City
        </div>
      ),
      cell: info => (
        <span className="inline-flex items-center gap-1.5 text-[12px] font-bold px-3 py-1.5 rounded-xl border" style={{ color: "#6C5CE7", background: "#F4F3FF", borderColor: "rgba(108,92,231,0.1)" }}>
          <MapPin className="w-3 h-3" strokeWidth={2.5} />{info.getValue()}
        </span>
      ),
    }),
  ], []);

  const table = useReactTable({
    data: filtered,
    columns,
    state: { sorting: tableSorting },
    onSortingChange: setTableSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="space-y-5">
      <UserFilters
        search={search} onSearchChange={setSearch}
        sortOrder={sortOrder} onSortChange={setSortOrder}
        cityFilter={cityFilter} onCityFilterChange={setCityFilter}
        cities={cities}
        isSearching={isSearching}
      />

      <div className="bg-white rounded-[20px] border border-[#EDEDF0] shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden">
        {/* Stats bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F3F4F6] bg-white">
          <p className="text-[13px] font-medium text-[#737791]">
            {isLoading ? "Loading users..." : error ? "Error loading users" : (
              <>Showing <span className="font-bold text-[#151D48] mx-1">{filtered.length}</span> of <span className="font-bold text-[#151D48] mx-1">{users.length}</span> users</>
            )}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              {table.getHeaderGroups().map(hg => (
                <tr key={hg.id} className="border-b border-[#F3F4F6] bg-[#F8F9FA]">
                  {hg.headers.map(h => (
                    <th key={h.id} className="px-6 py-4 whitespace-nowrap align-middle">
                      {flexRender(h.column.columnDef.header, h.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {isLoading
                ? Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
                : error
                  ? <ErrorState message={error} onRetry={refetch} />
                  : filtered.length === 0
                    ? <EmptyState />
                    : (
                      <AnimatePresence mode="popLayout">
                        {table.getRowModel().rows.map((row) => (
                          <motion.tr
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            key={row.id}
                            className="border-b border-[#F3F4F6] last:border-0 hover:bg-[#F8F9FA] transition-colors group cursor-default"
                          >
                            {row.getVisibleCells().map(cell => (
                              <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </td>
                            ))}
                          </motion.tr>
                        ))}
                      </AnimatePresence>
                    )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
