"use client";

import { motion } from "framer-motion";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export default function ChartCard({ title, subtitle, action, children, className = "", index = 0 }: ChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`bg-white rounded-[20px] border border-[#EDEDF0] shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-6 flex flex-col w-full h-full ${className}`}
    >
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-[18px] font-bold text-[#151D48] leading-tight">{title}</h3>
          {subtitle && <p className="text-[13px] text-[#737791] mt-1">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className="flex-1 min-h-0 w-full flex flex-col justify-end">
        {children}
      </div>
    </motion.div>
  );
}
