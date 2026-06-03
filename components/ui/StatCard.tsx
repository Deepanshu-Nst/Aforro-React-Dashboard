"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  change: string;
  isPositive: boolean;
  colorScheme: "pink" | "orange" | "green" | "purple";
  index: number;
}

const schemes = {
  pink:   { bg: "#FFE2E5", iconBg: "#FA5A7D", iconColor: "#FFFFFF" },
  orange: { bg: "#FFF4DE", iconBg: "#FF947A", iconColor: "#FFFFFF" },
  green:  { bg: "#DCFCE7", iconBg: "#3CD856", iconColor: "#FFFFFF" },
  purple: { bg: "#F3E8FF", iconBg: "#BF83FF", iconColor: "#FFFFFF" },
};

export default function StatCard({ icon: Icon, value, label, change, isPositive, colorScheme, index }: StatCardProps) {
  const s = schemes[colorScheme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className="rounded-[20px] p-5 cursor-default transition-transform duration-200 hover:-translate-y-1"
      style={{ background: s.bg }}
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: s.iconBg, color: s.iconColor }}>
        <Icon className="w-[20px] h-[20px]" strokeWidth={2.5} />
      </div>
      <p className="text-[24px] font-bold text-[#151D48] mb-1 leading-none">{value}</p>
      <p className="text-[14px] font-medium text-[#425166] mb-3 leading-none">{label}</p>
      <p className="text-[12px] font-medium text-[#4079ED] leading-none">
        {change} from yesterday
      </p>
    </motion.div>
  );
}
