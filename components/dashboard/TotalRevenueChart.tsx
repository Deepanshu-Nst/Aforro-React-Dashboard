"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import ChartCard from "@/components/ui/ChartCard";
import { revenueData } from "@/lib/mock-data";

const fmt = (v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v);

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string; color: string }[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#EDEDF0] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-4 py-3 text-[13px]">
      <p className="font-bold text-[#151D48] mb-2">{label}</p>
      {payload.map(p => (
        <div key={p.name} className="flex items-center gap-3 mb-1.5 last:mb-0">
          <span className="w-2.5 h-2.5 rounded-sm" style={{ background: p.color }} />
          <span className="text-[#737791] font-medium">{p.name}:</span>
          <span className="font-bold text-[#151D48] ml-auto">${fmt(p.value)}</span>
        </div>
      ))}
    </div>
  );
};

export default function TotalRevenueChart() {
  return (
    <ChartCard title="Total Revenue" index={1}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={revenueData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }} barSize={16} barGap={6}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#8A92A6", fontWeight: 500 }} axisLine={false} tickLine={false} dy={12} />
          <YAxis tick={{ fontSize: 12, fill: "#8A92A6", fontWeight: 500 }} axisLine={false} tickLine={false} tickFormatter={fmt} dx={-10} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F8F9FA", radius: 6 }} />
          <Bar dataKey="online"  name="Online Sales"  fill="#0095FF" radius={[4, 4, 0, 0]} />
          <Bar dataKey="offline" name="Offline Sales" fill="#00E096" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-6">
        {[{ color: "#0095FF", label: "Online Sales" }, { color: "#00E096", label: "Offline Sales" }].map(l => (
          <div key={l.label} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: l.color }} />
            <span className="text-[13px] font-medium text-[#737791]">{l.label}</span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
