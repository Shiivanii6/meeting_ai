import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default async function TestPage() {
  const { data } = await supabase
    .from("meetings")
    .select("*");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto p-10">

        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold">
              Meetings
            </h1>

            <p className="text-slate-400 mt-2">
              Manage and organize AI-powered meetings
            </p>
          </div>

          <Link
            href="/add-meeting"
            className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl font-medium transition"
            >
                + New Meeting
            </Link>
        </div>

        <div className="space-y-5">
          {data?.map((meeting) => (
            <div
              key={meeting.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500 transition"
            >
              <h2 className="text-2xl font-semibold">
                🎯 {meeting.title}
              </h2>

              <p className="text-slate-400 mt-2">
                AI Meeting Record
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}