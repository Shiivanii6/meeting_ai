import { supabase } from "../../lib/supabase";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import { redirect } from "next/navigation";
import DeleteMeetingButton from "../../components/DeleteMeetingButton";

export default async function DashboardPage() {
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   redirect("/login");
  // }

  const { data: meetings } = await supabase
    .from("meetings")
    .select("*")
    .order("created_at", { ascending: false });

  const totalMeetings = meetings?.length || 0;

  const totalSummaries =
    meetings?.filter((m) => m.summary !== null).length || 0;

  const totalActionItems =
    meetings?.filter((m) => m.action_items !== null).length || 0;

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <div className="min-h-screen bg-slate-950 text-white">
          <div className="max-w-5xl mx-auto p-10">

            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-5xl font-bold">
                Dashboard
              </h1>

              <Link
                href="/add-meeting"
                className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl"
              >
                + New Meeting
              </Link>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-slate-900 p-6 rounded-xl">
                <h3 className="text-slate-400">
                  Total Meetings
                </h3>

                <p className="text-4xl font-bold">
                  {totalMeetings}
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl">
                <h3 className="text-slate-400">
                  AI Summaries
                </h3>

                <p className="text-4xl font-bold">
                  {totalSummaries}
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl">
                <h3 className="text-slate-400">
                  Action Items
                </h3>

                <p className="text-4xl font-bold">
                  {totalActionItems}
                </p>
              </div>
            </div>

            {/* Meeting List */}
            <div className="space-y-5">
              {meetings?.map((meeting: any) => (
                <div
                  key={meeting.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                >
                  <Link href={`/meeting/${meeting.id}`}>
                    <h2 className="text-2xl font-semibold hover:text-indigo-400">
                      🎯 {meeting.title}
                    </h2>
                  </Link>

                  <p className="text-slate-400 mt-2">
                    {meeting.summary
                      ? "AI Summary Available"
                      : "No Summary Yet"}
                  </p>
                  <DeleteMeetingButton
                      meetingId={meeting.id}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}