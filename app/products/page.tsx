import type { Metadata } from "next";
import { Package, Star, TrendingUp, Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Products — Aforro",
  description: "Browse and manage your product catalog",
};

const PRODUCTS = [
  { id: 1, name: "Home Decor Range",           category: "Home",        price: "$142",  stock: 248, rating: 4.8, sales: 1240, color: "#6C5CE7" },
  { id: 2, name: "Disney Princess Pink Bag 18", category: "Accessories", price: "$29",   stock: 87,  rating: 4.6, sales: 890,  color: "#FF7675" },
  { id: 3, name: "Bathroom Essentials Set",     category: "Home",        price: "$67",   stock: 156, rating: 4.5, sales: 670,  color: "#00CEC9" },
  { id: 4, name: "Apple Smartwatches",          category: "Electronics", price: "$389",  stock: 42,  rating: 4.9, sales: 430,  color: "#FDCB6E" },
  { id: 5, name: "Wireless Headphones Pro",     category: "Electronics", price: "$199",  stock: 68,  rating: 4.7, sales: 320,  color: "#A29BFE" },
  { id: 6, name: "Yoga Mat Premium",            category: "Sports",      price: "$45",   stock: 310, rating: 4.4, sales: 280,  color: "#74B9FF" },
];

export default function ProductsPage() {
  return (
    <div className="p-5 lg:p-6 space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-[#2D3436]">Products</h2>
          <p className="text-xs text-[#B2BEC3] mt-0.5">{PRODUCTS.length} products in catalog</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white hover:opacity-90 transition-opacity" style={{ background: "#6C5CE7" }}>
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {PRODUCTS.map(p => (
          <div key={p.id} className="bg-white rounded-2xl border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-5 card-hover cursor-pointer">
            {/* Color band */}
            <div className="w-full h-2 rounded-full mb-4" style={{ background: `linear-gradient(90deg,${p.color},${p.color}44)` }} />

            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${p.color}18` }}>
                <Package className="w-6 h-6" style={{ color: p.color }} />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-lg bg-[#F8F8FD] text-[#636E72]">
                {p.category}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-[#2D3436] mb-1">{p.name}</h3>
            <p className="text-xl font-bold mb-3" style={{ color: p.color }}>{p.price}</p>

            <div className="flex items-center justify-between text-xs text-[#B2BEC3]">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#FDCB6E] text-[#FDCB6E]" />
                <span className="font-medium text-[#2D3436]">{p.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span>{p.sales} sold</span>
              </div>
              <span>{p.stock} in stock</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
