import type { Metadata } from "next";
import { User, Bell, Shield, Palette, Database, Save } from "lucide-react";

export const metadata: Metadata = {
  title: "Settings — Aforro",
  description: "Configure your Aforro dashboard preferences",
};

export default function SettingsPage() {
  return (
    <div className="p-5 lg:p-6 space-y-5 animate-fade-in">
      <div>
        <h2 className="text-base font-semibold text-[#2D3436]">Settings</h2>
        <p className="text-xs text-[#B2BEC3] mt-0.5">Manage your account and dashboard preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {/* Sidebar nav */}
        <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-3 space-y-0.5">
          {[
            { icon: User,    label: "Profile",       active: true  },
            { icon: Bell,    label: "Notifications", active: false },
            { icon: Shield,  label: "Security",      active: false },
            { icon: Palette, label: "Appearance",    active: false },
            { icon: Database,label: "Data & Privacy",active: false },
          ].map(item => {
            const Icon = item.icon;
            return (
              <button key={item.label} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-all ${
                item.active ? "bg-[#6C5CE7] text-white" : "text-[#636E72] hover:bg-[#F8F8FD]"
              }`}>
                <Icon className={`w-4 h-4 ${item.active ? "text-white" : "text-[#B2BEC3]"}`} />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Settings form */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#EEEEEE] flex items-center gap-2">
            <User className="w-4 h-4 text-[#6C5CE7]" />
            <h3 className="text-sm font-semibold text-[#2D3436]">Profile Settings</h3>
          </div>
          <div className="p-6 space-y-5">
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-[#6C5CE7]" style={{ background: "#F0EEFF" }}>M</div>
              <div>
                <button className="px-3 py-1.5 rounded-lg border border-[#EEEEEE] text-xs font-medium text-[#636E72] hover:bg-[#F8F8FD] transition-colors">Change Photo</button>
                <p className="text-xs text-[#B2BEC3] mt-1">JPG, PNG max 2MB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "First Name",    val: "Musfiq",              type: "text" },
                { label: "Last Name",     val: "Admin",               type: "text" },
                { label: "Email",         val: "musfiq@aforro.io",    type: "email" },
                { label: "Phone",         val: "+1 (555) 000-0000",   type: "tel" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium text-[#636E72] mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    defaultValue={f.val}
                    className="w-full px-3 py-2 text-sm bg-[#F8F8FD] border border-[#EEEEEE] rounded-xl text-[#2D3436] focus:outline-none focus:ring-2 focus:border-[#6C5CE7]/40 transition-all"
                    style={{ "--tw-ring-color": "rgba(108,92,231,0.2)" } as React.CSSProperties}
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs font-medium text-[#636E72] mb-1.5">Role</label>
              <select className="w-full px-3 py-2 text-sm bg-[#F8F8FD] border border-[#EEEEEE] rounded-xl text-[#2D3436] focus:outline-none appearance-none">
                <option>Administrator</option>
                <option>Manager</option>
                <option>Sales Rep</option>
              </select>
            </div>

            {/* Notifications toggles */}
            <div className="pt-2 border-t border-[#EEEEEE]">
              <p className="text-xs font-semibold text-[#2D3436] mb-3">Notifications</p>
              <div className="space-y-3">
                {["Email notifications", "Push notifications", "Weekly digest"].map((label, i) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-sm text-[#636E72]">{label}</span>
                    <button className={`relative w-10 h-5 rounded-full transition-colors ${i !== 1 ? "bg-[#6C5CE7]" : "bg-[#EEEEEE]"}`}>
                      <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${i !== 1 ? "left-5" : "left-0.5"}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Save button */}
            <div className="flex justify-end pt-2">
              <button className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity" style={{ background: "#6C5CE7" }}>
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
