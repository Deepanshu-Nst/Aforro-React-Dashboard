import type { Metadata } from "next";
import { Trophy, TrendingUp, TrendingDown, Medal } from "lucide-react";

export const metadata: Metadata = {
  title: "Leaderboard — Aforro",
  description: "Top performing sales representatives and regions",
};

const leaders = [
  { rank: 1,  name: "Sarah Johnson",    role: "Senior Sales",    revenue: "$48,200", growth: "+18%", positive: true,  avatar: "SJ" },
  { rank: 2,  name: "Marcus Chen",      role: "Sales Executive", revenue: "$41,800", growth: "+12%", positive: true,  avatar: "MC" },
  { rank: 3,  name: "Emily Rodriguez",  role: "Account Manager", revenue: "$38,500", growth: "+9%",  positive: true,  avatar: "ER" },
  { rank: 4,  name: "James Wilson",     role: "Sales Rep",       revenue: "$32,100", growth: "-3%",  positive: false, avatar: "JW" },
  { rank: 5,  name: "Priya Sharma",     role: "Sales Executive", revenue: "$29,700", growth: "+6%",  positive: true,  avatar: "PS" },
  { rank: 6,  name: "Tom Baker",        role: "Account Manager", revenue: "$26,400", growth: "-1%",  positive: false, avatar: "TB" },
  { rank: 7,  name: "Aisha Patel",      role: "Sales Rep",       revenue: "$23,900", growth: "+4%",  positive: true,  avatar: "AP" },
  { rank: 8,  name: "David Kim",        role: "Senior Sales",    revenue: "$21,500", growth: "+2%",  positive: true,  avatar: "DK" },
];

const RANK_COLORS: Record<number, string> = { 1: "#FDCB6E", 2: "#B2BEC3", 3: "#A0785A" };

export default function LeaderboardPage() {
  return (
    <div className="p-5 lg:p-6 space-y-5 animate-fade-in">
      <div>
        <h2 className="text-base font-semibold text-[#2D3436]">Sales Leaderboard</h2>
        <p className="text-xs text-[#B2BEC3] mt-0.5">Top performing reps for this quarter</p>
      </div>

      {/* Top 3 podium */}
      <div className="grid grid-cols-3 gap-4 max-w-xl">
        {leaders.slice(0, 3).map((l, i) => (
          <div key={l.rank} className={`bg-white rounded-2xl border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-4 text-center ${i === 0 ? "ring-2 ring-[#FDCB6E]/50 scale-105" : ""}`}>
            <Medal className="w-6 h-6 mx-auto mb-2" style={{ color: RANK_COLORS[l.rank] }} />
            <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center mb-2 text-xs font-bold text-[#6C5CE7]" style={{ background: "#F0EEFF" }}>{l.avatar}</div>
            <p className="text-xs font-semibold text-[#2D3436] truncate">{l.name.split(" ")[0]}</p>
            <p className="text-sm font-bold text-[#6C5CE7] mt-0.5">{l.revenue}</p>
          </div>
        ))}
      </div>

      {/* Full table */}
      <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="px-5 py-3 border-b border-[#EEEEEE] bg-[#F8F8FD]">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#FDCB6E]" />
            <span className="text-sm font-semibold text-[#2D3436]">Rankings</span>
          </div>
        </div>
        <div className="divide-y divide-[#EEEEEE]">
          {leaders.map(l => (
            <div key={l.rank} className="flex items-center gap-4 px-5 py-3.5 hover:bg-[#F8F8FD] transition-colors">
              <span className="w-6 text-sm font-bold" style={{ color: RANK_COLORS[l.rank] ?? "#B2BEC3" }}>#{l.rank}</span>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#6C5CE7]" style={{ background: "#F0EEFF" }}>{l.avatar}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#2D3436]">{l.name}</p>
                <p className="text-xs text-[#B2BEC3]">{l.role}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#2D3436]">{l.revenue}</p>
                <span className={`text-xs font-medium ${l.positive ? "text-green-600" : "text-red-500"}`}>
                  {l.positive ? <TrendingUp className="w-3 h-3 inline mr-0.5" /> : <TrendingDown className="w-3 h-3 inline mr-0.5" />}
                  {l.growth}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
