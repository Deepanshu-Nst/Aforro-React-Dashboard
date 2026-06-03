"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import ChartCard from "@/components/ui/ChartCard";
import { volumeServiceData } from "@/lib/mock-data";

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

export default function VolumeServiceChart() {
  return (
    <ChartCard title="Volume vs Service Level" index={5}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={volumeServiceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={14} barGap={6}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#8A92A6", fontWeight: 500 }} axisLine={false} tickLine={false} dy={12} />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F8F9FA", radius: 6 }} />
          <Bar dataKey="volume"   name="Volume"   fill="#0095FF" radius={[6, 6, 0, 0]} />
          <Bar dataKey="services" name="Services" fill="#00E096" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-6 pt-5 border-t border-[#F3F4F6]">
        {[{ color: "#0095FF", label: "Volume", val: "1,135" }, { color: "#00E096", label: "Services", val: "635" }].map(item => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
            <div>
              <p className="text-[13px] font-medium text-[#737791] leading-none mb-1.5">{item.label}</p>
              <p className="text-[15px] font-bold text-[#151D48] leading-none">{item.val}</p>
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
