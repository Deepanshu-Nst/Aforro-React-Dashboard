import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import TopNavbar from "@/components/layout/TopNavbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dabang Dashboard",
  description: "Sales analytics and dashboard overview",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8F8FD] text-[#2D3436]`}>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col h-screen min-w-0 overflow-hidden">
            <TopNavbar />
            <main className="flex-1 overflow-y-auto no-scrollbar">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
