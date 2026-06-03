"use client";

import StatCard from "@/components/ui/StatCard";
import { BarChart2, FileText, Tag, UserPlus } from "lucide-react";

const STATS = [
  { id: "sales",     icon: BarChart2, value: "$1k",  label: "Total Sales",    change: "+8%",   isPositive: true,  colorScheme: "pink"   as const },
  { id: "order",     icon: FileText,  value: "300",  label: "Total Order",    change: "+5%",   isPositive: true,  colorScheme: "orange" as const },
  { id: "products",  icon: Tag,       value: "5",    label: "Product Sold",   change: "+1,2%", isPositive: true,  colorScheme: "green"  as const },
  { id: "customers", icon: UserPlus,  value: "8",    label: "New Customers",  change: "0,5%",  isPositive: true,  colorScheme: "purple" as const },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
      {STATS.map((s, i) => (
        <StatCard key={s.id} {...s} index={i} />
      ))}
    </div>
  );
}
