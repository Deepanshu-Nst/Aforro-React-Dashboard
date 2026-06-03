"use client";

import { motion } from "framer-motion";
import ChartCard from "@/components/ui/ChartCard";
import { topProducts } from "@/lib/mock-data";

export default function TopProductsTable() {
  return (
    <ChartCard title="Top Products" index={4}>
      <div className="flex flex-col h-full justify-between">
        {/* Header row */}
        <div className="flex items-center gap-3 pb-3 mb-2 border-b border-[#EDEDF0]">
          <span className="text-[12px] font-medium text-[#737791] w-6">#</span>
          <span className="text-[12px] font-medium text-[#737791] flex-1">Name</span>
          <span className="text-[12px] font-medium text-[#737791] w-28 hidden sm:block">Popularity</span>
          <span className="text-[12px] font-medium text-[#737791] w-12 text-right">Sales</span>
        </div>

        <div className="space-y-1">
          {topProducts.map((product, i) => (
            <motion.div
              key={product.rank}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="flex items-center gap-3 py-2 border-b border-[#EDEDF0] last:border-0 hover:bg-[#F8F9FA] rounded-[10px] px-1 -mx-1 transition-colors"
            >
              <span className="text-[13px] font-medium text-[#737791] w-6 shrink-0">
                {String(product.rank).padStart(2, "0")}
              </span>

              <span className="text-[13px] font-medium text-[#151D48] flex-1 truncate">
                {product.name}
              </span>

              {/* Progress bar */}
              <div className="hidden sm:block w-28 h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden shrink-0">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${product.popularity}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: product.color }}
                />
              </div>

              {/* Sales badge */}
              <div
                className="text-[11px] font-bold px-2 py-1 rounded-md w-12 text-center shrink-0 border"
                style={{
                  color: product.color,
                  background: `${product.color}15`,
                  borderColor: `${product.color}30`
                }}
              >
                {product.sales}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}
