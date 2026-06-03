"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import ChartCard from "@/components/ui/ChartCard";
import { targetVsRealityData } from "@/lib/mock-data";

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string; color: string }[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#EDEDF0] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-4 py-3 text-[13px]">
      <p className="font-bold text-[#151D48] mb-2">{label}</p>
      {payload.map(p => (
        <div key={p.name} className="flex items-center gap-3 mb-1.5 last:mb-0">
          <span className="w-2.5 h-2.5 rounded-sm" style={{ background: p.color }} />
          <span className="text-[#737791] font-medium">{p.name}:</span>
          <span className="font-bold text-[#151D48] ml-auto">{p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default function TargetVsRealityChart() {
  return (
    <ChartCard title="Target vs Reality" index={3}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={targetVsRealityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={14} barGap={6}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8A92A6", fontWeight: 500 }} axisLine={false} tickLine={false} dy={12} />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F8F9FA", radius: 6 }} />
          <Bar dataKey="reality" name="Reality Sales" fill="#4AB58E" radius={[6, 6, 0, 0]} />
          <Bar dataKey="target"  name="Target Sales"  fill="#FFCF00" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="flex flex-col gap-3 mt-6 pt-1">
        {[
          { color: "#4AB58E", label: "Reality Sales", sub: "Global", val: "8.823" },
          { color: "#FFCF00", label: "Target Sales",  sub: "Commercial", val: "12.122" },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0" style={{ background: `${item.color}15` }}>
              <div className="w-4 h-4 rounded-md" style={{ background: item.color }} />
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-bold text-[#151D48] leading-tight mb-0.5">{item.label}</p>
              <p className="text-[12px] font-medium text-[#737791] leading-tight">{item.sub}</p>
            </div>
            <p className="text-[16px] font-bold text-[#151D48]">{item.val}</p>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
