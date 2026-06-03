import type { Metadata } from "next";
import { BarChart2, TrendingUp, DollarSign, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales Report — Aforro",
  description: "Detailed sales performance reports and analytics",
};

const MONTHLY = [
  { month: "Jan", revenue: 32400, target: 38000, orders: 218 },
  { month: "Feb", revenue: 28900, target: 35000, orders: 194 },
  { month: "Mar", revenue: 41200, target: 40000, orders: 276 },
  { month: "Apr", revenue: 38700, target: 42000, orders: 259 },
  { month: "May", revenue: 45100, target: 44000, orders: 302 },
  { month: "Jun", revenue: 39800, target: 45000, orders: 267 },
];

const fmt = (n: number) => `$${(n / 1000).toFixed(1)}k`;

export default function SalesReportPage() {
  return (
    <div className="p-5 lg:p-6 space-y-5 animate-fade-in">
      <div>
        <h2 className="text-base font-semibold text-[#2D3436]">Sales Report</h2>
        <p className="text-xs text-[#B2BEC3] mt-0.5">Performance metrics for 2026</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { icon: DollarSign, label: "Total Revenue",  value: "$226,100", change: "+14.2%", color: "#6C5CE7", bg: "#F0EEFF" },
          { icon: TrendingUp, label: "Avg Growth",     value: "+11.8%",   change: "vs last yr", color: "#00C896", bg: "#E8FFF7" },
          { icon: Target,     label: "Target Hit",     value: "3 / 6",    change: "months",  color: "#FDCB6E", bg: "#FFFDE7" },
          { icon: BarChart2,  label: "Total Orders",   value: "1,516",    change: "+8.4%",   color: "#FF7675", bg: "#FFF0F0" },
        ].map(k => {
          const Icon = k.icon;
          return (
            <div key={k.label} className="bg-white rounded-2xl border border-[#EEEEEE] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: k.bg }}>
                <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" style={{ color: k.color }} />
              </div>
              <p className="text-xs text-[#B2BEC3]">{k.label}</p>
              <p className="text-xl font-bold text-[#2D3436] mt-0.5">{k.value}</p>
              <p className="text-xs mt-0.5" style={{ color: k.color }}>{k.change}</p>
            </div>
          );
        })}
      </div>

      {/* Monthly breakdown table */}
      <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="px-5 py-3.5 border-b border-[#EEEEEE] bg-[#F8F8FD]">
          <h3 className="text-sm font-semibold text-[#2D3436]">Monthly Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#EEEEEE]">
                {["Month", "Revenue", "Target", "Vs Target", "Orders", "Attainment"].map(h => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-[#636E72] uppercase tracking-wide whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MONTHLY.map(row => {
                const diff = row.revenue - row.target;
                const pct  = Math.round((row.revenue / row.target) * 100);
                const hit  = row.revenue >= row.target;
                return (
                  <tr key={row.month} className="border-b border-[#EEEEEE] last:border-0 hover:bg-[#F8F8FD] transition-colors">
                    <td className="px-5 py-3.5 text-sm font-semibold text-[#2D3436]">{row.month}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-[#6C5CE7]">{fmt(row.revenue)}</td>
                    <td className="px-5 py-3.5 text-sm text-[#636E72]">{fmt(row.target)}</td>
                    <td className="px-5 py-3.5 text-sm font-medium" style={{ color: hit ? "#00C896" : "#FF7675" }}>
                      {hit ? "+" : ""}{fmt(diff)}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-[#636E72]">{row.orders}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-[#F0EFF8] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${Math.min(pct, 100)}%`, background: hit ? "#00C896" : "#6C5CE7" }} />
                        </div>
                        <span className="text-xs font-medium" style={{ color: hit ? "#00C896" : "#6C5CE7" }}>{pct}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
