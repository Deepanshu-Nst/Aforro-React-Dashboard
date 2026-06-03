import type { Metadata } from "next";
import UsersTable from "@/components/users/UsersTable";

export const metadata: Metadata = {
  title: "Users — Aforro",
  description: "Browse, search, sort and filter all registered users",
};

export default function UsersPage() {
  return (
    <div className="p-5 lg:p-6 space-y-5 animate-fade-in">
      <div>
        <h2 className="text-base font-semibold text-[#2D3436]">User Management</h2>
        <p className="text-xs text-[#B2BEC3] mt-0.5">
          Browse, search, sort and filter all registered users. Data sourced from{" "}
          <a href="https://jsonplaceholder.typicode.com/users" target="_blank" rel="noopener noreferrer" className="text-[#6C5CE7] hover:underline">
            JSONPlaceholder API
          </a>.
        </p>
      </div>
      <UsersTable />
    </div>
  );
}
