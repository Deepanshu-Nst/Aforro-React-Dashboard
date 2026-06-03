import type { Metadata } from "next";
import { ShoppingCart, Clock, CheckCircle, XCircle, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Orders — Aforro",
  description: "View and manage all customer orders",
};

const ORDERS = [
  { id: "#ORD-2451", customer: "Sarah Johnson",   product: "Home Decor Range",      amount: "$142.00", status: "delivered", date: "Jun 3, 2026" },
  { id: "#ORD-2450", customer: "Marcus Chen",     product: "Apple Smartwatches",    amount: "$389.00", status: "pending",   date: "Jun 3, 2026" },
  { id: "#ORD-2449", customer: "Emily Rodriguez", product: "Bathroom Essentials",   amount: "$67.00",  status: "delivered", date: "Jun 2, 2026" },
  { id: "#ORD-2448", customer: "James Wilson",    product: "Disney Princess Bag",   amount: "$29.00",  status: "cancelled", date: "Jun 2, 2026" },
  { id: "#ORD-2447", customer: "Priya Sharma",    product: "Home Decor Range",      amount: "$142.00", status: "processing",date: "Jun 1, 2026" },
  { id: "#ORD-2446", customer: "Tom Baker",       product: "Apple Smartwatches",    amount: "$389.00", status: "delivered", date: "Jun 1, 2026" },
  { id: "#ORD-2445", customer: "Aisha Patel",     product: "Bathroom Essentials",   amount: "$67.00",  status: "pending",   date: "May 31, 2026" },
  { id: "#ORD-2444", customer: "David Kim",       product: "Disney Princess Bag",   amount: "$29.00",  status: "delivered", date: "May 31, 2026" },
];

const STATUS = {
  delivered:  { label: "Delivered",  color: "#00C896", bg: "#E8FFF7", icon: CheckCircle },
  pending:    { label: "Pending",    color: "#F9A825", bg: "#FFFDE7", icon: Clock },
  processing: { label: "Processing", color: "#6C5CE7", bg: "#F0EEFF", icon: Package },
  cancelled:  { label: "Cancelled",  color: "#FF7675", bg: "#FFF0F0", icon: XCircle },
} as const;

export default function OrdersPage() {
  return (
    <div className="p-5 lg:p-6 space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-[#2D3436]">Orders</h2>
          <p className="text-xs text-[#B2BEC3] mt-0.5">Manage and track all customer orders</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-colors hover:opacity-90" style={{ background: "#6C5CE7" }}>
          <ShoppingCart className="w-4 h-4" /> New Order
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Total Orders",    value: "2,451",  color: "#6C5CE7", bg: "#F0EEFF" },
          { label: "Delivered",       value: "1,820",  color: "#00C896", bg: "#E8FFF7" },
          { label: "Pending",         value: "312",    color: "#F9A825", bg: "#FFFDE7" },
          { label: "Cancelled",       value: "89",     color: "#FF7675", bg: "#FFF0F0" },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#EEEEEE] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <p className="text-xs text-[#B2BEC3]">{s.label}</p>
            <p className="text-2xl font-bold mt-1" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Orders table */}
      <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#EEEEEE] bg-[#F8F8FD]">
                {["Order ID", "Customer", "Product", "Amount", "Status", "Date"].map(h => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-[#636E72] uppercase tracking-wide whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ORDERS.map(order => {
                const st = STATUS[order.status as keyof typeof STATUS];
                const Icon = st.icon;
                return (
                  <tr key={order.id} className="border-b border-[#EEEEEE] last:border-0 hover:bg-[#F8F8FD] transition-colors">
                    <td className="px-5 py-3.5 text-sm font-medium text-[#6C5CE7]">{order.id}</td>
                    <td className="px-5 py-3.5 text-sm text-[#2D3436] whitespace-nowrap">{order.customer}</td>
                    <td className="px-5 py-3.5 text-sm text-[#636E72] whitespace-nowrap">{order.product}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-[#2D3436]">{order.amount}</td>
                    <td className="px-5 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg" style={{ color: st.color, background: st.bg }}>
                        <Icon className="w-3 h-3" />{st.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-xs text-[#B2BEC3] whitespace-nowrap">{order.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
