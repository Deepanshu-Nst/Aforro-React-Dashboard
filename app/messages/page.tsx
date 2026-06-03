import type { Metadata } from "next";
import { MessageSquare, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Messages — Aforro",
  description: "Team communications and notifications",
};

const THREADS = [
  { id: 1, from: "Sarah Johnson",    avatar: "SJ", time: "2m ago",    preview: "Hey, the Q2 report is ready for review. Can you take a look?",       unread: 2, color: "#6C5CE7" },
  { id: 2, from: "Marcus Chen",      avatar: "MC", time: "18m ago",   preview: "Updated the product inventory. Stock levels are looking good now.",   unread: 0, color: "#FF7675" },
  { id: 3, from: "Support Team",     avatar: "ST", time: "1hr ago",   preview: "Customer ticket #4812 has been resolved. Marking it as closed.",      unread: 1, color: "#00CEC9" },
  { id: 4, from: "Emily Rodriguez",  avatar: "ER", time: "3hr ago",   preview: "New lead came in from the Chicago trade show. High priority!",        unread: 0, color: "#FDCB6E" },
  { id: 5, from: "System",           avatar: "SY", time: "Yesterday", preview: "Scheduled maintenance window: June 5, 2:00AM - 4:00AM UTC.",          unread: 0, color: "#A29BFE" },
];

export default function MessagesPage() {
  return (
    <div className="p-5 lg:p-6 space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-[#2D3436]">Messages</h2>
          <p className="text-xs text-[#B2BEC3] mt-0.5">Team communications</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white hover:opacity-90 transition-opacity" style={{ background: "#6C5CE7" }}>
          <Send className="w-4 h-4" /> New Message
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        {/* Thread list */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#EEEEEE] bg-[#F8F8FD]">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#6C5CE7]" />
              <span className="text-sm font-semibold text-[#2D3436]">Inbox</span>
              <span className="ml-auto text-xs font-medium bg-[#6C5CE7] text-white px-1.5 py-0.5 rounded-full">3</span>
            </div>
          </div>
          <div className="divide-y divide-[#EEEEEE]">
            {THREADS.map((t, i) => (
              <div key={t.id} className={`flex items-start gap-3 px-4 py-3.5 hover:bg-[#F8F8FD] cursor-pointer transition-colors ${i === 0 ? "bg-[#F0EEFF]" : ""}`}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white" style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={`text-sm ${t.unread ? "font-semibold text-[#2D3436]" : "font-medium text-[#636E72]"}`}>{t.from}</span>
                    <span className="text-xs text-[#B2BEC3] shrink-0 ml-2">{t.time}</span>
                  </div>
                  <p className="text-xs text-[#B2BEC3] truncate">{t.preview}</p>
                </div>
                {t.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#6C5CE7] text-white text-xs flex items-center justify-center shrink-0">{t.unread}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message view placeholder */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-8 flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-16 h-16 rounded-2xl bg-[#F0EEFF] flex items-center justify-center mb-4">
            <MessageSquare className="w-8 h-8 text-[#6C5CE7]" />
          </div>
          <h3 className="text-sm font-semibold text-[#2D3436] mb-1">Select a conversation</h3>
          <p className="text-xs text-[#B2BEC3] text-center max-w-xs">
            Choose a thread from the inbox on the left to view and reply to messages.
          </p>
        </div>
      </div>
    </div>
  );
}
