"use client";

import ChartCard from "@/components/ui/ChartCard";

export default function SalesMappingCard() {
  return (
    <ChartCard title="Sales Mapping by Country" index={5}>
      <div className="relative w-full h-full min-h-[160px] flex items-center justify-center pt-2">
        {/* Placeholder world map for pure CSS representation to match Figma styling */}
        <div className="relative w-full max-w-[280px] aspect-[2/1] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-center bg-no-repeat opacity-40">
          
          {/* US Node - Orange */}
          <div className="absolute top-[35%] left-[18%]">
            <div className="w-2 h-2 rounded-full bg-[#FF947A] ring-4 ring-[#FF947A]/20" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white px-2 py-0.5 rounded shadow text-[9px] font-bold text-[#151D48]">
              24K
            </div>
          </div>
          
          {/* Brazil Node - Red */}
          <div className="absolute top-[70%] left-[28%]">
            <div className="w-2 h-2 rounded-full bg-[#FA5A7D] ring-4 ring-[#FA5A7D]/20" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white px-2 py-0.5 rounded shadow text-[9px] font-bold text-[#151D48]">
              12K
            </div>
          </div>
          
          {/* Europe Node - Purple */}
          <div className="absolute top-[30%] left-[50%]">
            <div className="w-2 h-2 rounded-full bg-[#BF83FF] ring-4 ring-[#BF83FF]/20" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white px-2 py-0.5 rounded shadow text-[9px] font-bold text-[#151D48]">
              18K
            </div>
          </div>
          
          {/* Australia Node - Green */}
          <div className="absolute top-[75%] left-[80%]">
            <div className="w-2 h-2 rounded-full bg-[#3CD856] ring-4 ring-[#3CD856]/20" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white px-2 py-0.5 rounded shadow text-[9px] font-bold text-[#151D48]">
              8K
            </div>
          </div>
        </div>
      </div>
    </ChartCard>
  );
}
