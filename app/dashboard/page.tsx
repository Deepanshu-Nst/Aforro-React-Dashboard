import type { Metadata } from "next";
import { Download } from "lucide-react";
import StatsCards                   from "@/components/dashboard/StatsCards";
import VisitorInsightsChart         from "@/components/dashboard/VisitorInsightsChart";
import TotalRevenueChart            from "@/components/dashboard/TotalRevenueChart";
import CustomerSatisfactionChart    from "@/components/dashboard/CustomerSatisfactionChart";
import TargetVsRealityChart         from "@/components/dashboard/TargetVsRealityChart";
import TopProductsTable             from "@/components/dashboard/TopProductsTable";
import SalesMappingCard             from "@/components/dashboard/SalesMappingCard";
import VolumeServiceChart           from "@/components/dashboard/VolumeServiceChart";

export const metadata: Metadata = {
  title: "Dashboard — Dabang",
  description: "Real-time sales analytics and KPI overview",
};

export default function DashboardPage() {
  return (
    <div className="p-5 lg:p-8 space-y-6 animate-fade-in max-w-[1600px] mx-auto">

      {/* ── Row 1: Today's Sales (8) + Visitor Insights (4) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Today's Sales Container */}
        <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-[20px] border border-[#EDEDF0] shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[18px] font-bold text-[#151D48]">Today&apos;s Sales</h2>
              <p className="text-[13px] text-[#737791] mt-1">Sales Summary</p>
            </div>
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#C3D3E2] bg-white text-[13px] font-medium text-[#737791] hover:bg-[#F8F9FA] hover:text-[#151D48] transition-all">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
          <StatsCards />
        </div>

        {/* Visitor Insights */}
        <div className="lg:col-span-5 xl:col-span-4 flex">
          <VisitorInsightsChart />
        </div>

      </div>

      {/* ── Row 2: Revenue (6) + Satisfaction (3) + Target (3) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-12 xl:col-span-6 flex">
          <TotalRevenueChart />
        </div>
        <div className="lg:col-span-6 xl:col-span-3 flex">
          <CustomerSatisfactionChart />
        </div>
        <div className="lg:col-span-6 xl:col-span-3 flex">
          <TargetVsRealityChart />
        </div>
      </div>

      {/* ── Row 3: Top Products (6) + Mapping (3) + Volume (3) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-12 xl:col-span-6 flex">
          <TopProductsTable />
        </div>
        <div className="lg:col-span-6 xl:col-span-3 flex">
          <SalesMappingCard />
        </div>
        <div className="lg:col-span-6 xl:col-span-3 flex">
          <VolumeServiceChart />
        </div>
      </div>
    </div>
  );
}
