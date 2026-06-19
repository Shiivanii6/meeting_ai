"use client";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  async function handleLogout() {
     await supabase.auth.signOut();
     router.push("/login");
  }
  return (
    <div className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-2xl font-bold text-white mb-10">
        MeetFlow AI
      </h1>

      <div className="space-y-4">
        <Link
          href="/dashboard"
          className="block text-slate-300 hover:text-white"
        >
          Dashboard
        </Link>

        <Link
          href="/add-meeting"
          className="block text-slate-300 hover:text-white"
        >
          New Meeting
        </Link>

        <Link
           href="/dashboard/analytics"
          className="block text-slate-300 hover:text-white"
        >
          Analytics
        </Link>

        <Link
          href="#"
          className="block text-slate-300 hover:text-white"
        >
          Automations
        </Link>
        <button
          onClick={handleLogout}
          className="mt-10 text-red-400 hover:text-red-300 text-left"
        >
             Logout
        </button>
      </div>
    </div>
  );
}