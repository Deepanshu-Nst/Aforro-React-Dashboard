"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import ChartCard from "@/components/ui/ChartCard";
import { visitorData } from "@/lib/mock-data";

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string; color: string }[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#EDEDF0] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-4 py-3 text-[13px]">
      <p className="font-bold text-[#151D48] mb-2">{label}</p>
      {payload.map(p => (
        <div key={p.name} className="flex items-center gap-3 mb-1.5 last:mb-0">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
          <span className="text-[#737791] font-medium capitalize">{p.name}:</span>
          <span className="font-bold text-[#151D48] ml-auto">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

const LEGEND = [
  { color: "#A700FF", label: "Loyal Customers" },
  { color: "#EF4444", label: "New Customers" },
  { color: "#3CD856", label: "Unique Customers" },
];

export default function VisitorInsightsChart() {
  return (
    <ChartCard title="Visitor Insights" index={0} className="w-full">
      <div className="h-full flex flex-col justify-end">
        <ResponsiveContainer width="100%" minHeight={200}>
          <AreaChart data={visitorData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="g-loyal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#A700FF" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#A700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g-new" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#EF4444" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g-unique" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#3CD856" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#3CD856" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8A92A6", fontWeight: 500 }} axisLine={false} tickLine={false} dy={12} />
            <YAxis tick={{ fontSize: 12, fill: "#8A92A6", fontWeight: 500 }} axisLine={false} tickLine={false} dx={-10} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="loyal"        name="Loyal"    stroke="#A700FF" strokeWidth={3.5} fill="url(#g-loyal)"  dot={false} activeDot={{ r: 6, fill: "#A700FF", strokeWidth: 0 }} />
            <Area type="monotone" dataKey="newCustomers" name="New"      stroke="#EF4444" strokeWidth={3.5} fill="url(#g-new)"    dot={false} activeDot={{ r: 6, fill: "#EF4444", strokeWidth: 0 }} />
            <Area type="monotone" dataKey="unique"       name="Unique"   stroke="#3CD856" strokeWidth={3.5} fill="url(#g-unique)" dot={false} activeDot={{ r: 6, fill: "#3CD856", strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-6 pt-2">
          {LEGEND.map(l => (
            <div key={l.label} className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-[3px]" style={{ background: l.color }} />
              <span className="text-[13px] font-medium text-[#737791]">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}
