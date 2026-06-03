"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import ChartCard from "@/components/ui/ChartCard";
import { satisfactionData } from "@/lib/mock-data";

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { value: number; name: string; color: string }[] }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#EDEDF0] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-4 py-3 text-[13px]">
      {payload.map(p => (
        <div key={p.name} className="flex items-center gap-3 mb-1.5 last:mb-0">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
          <span className="text-[#737791] font-medium">{p.name}:</span>
          <span className="font-bold text-[#151D48] ml-auto">${p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default function CustomerSatisfactionChart() {
  const last = satisfactionData[satisfactionData.length - 1];
  return (
    <ChartCard title="Customer Satisfaction" index={2}>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={satisfactionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="g-last" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#0095FF" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#0095FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="g-this" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#00E096" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#00E096" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" hide />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="lastMonth" name="Last Month" stroke="#0095FF" strokeWidth={3.5} fill="url(#g-last)" dot={false} activeDot={{ r: 6, fill: "#0095FF", strokeWidth: 0 }} />
          <Area type="monotone" dataKey="thisMonth" name="This Month" stroke="#00E096" strokeWidth={3.5} fill="url(#g-this)" dot={false} activeDot={{ r: 6, fill: "#00E096", strokeWidth: 0 }} />
        </AreaChart>
      </ResponsiveContainer>
      
      {/* Legend below chart */}
      <div className="flex items-center justify-center gap-10 mt-6 pt-5 border-t border-[#F3F4F6]">
        {[
          { color: "#0095FF", label: "Last Month",  val: last.lastMonth },
          { color: "#00E096", label: "This Month",  val: last.thisMonth },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
            <div>
              <p className="text-[13px] font-medium text-[#737791] leading-none mb-1.5">{item.label}</p>
              <p className="text-[15px] font-bold text-[#151D48] leading-none">${item.val.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
