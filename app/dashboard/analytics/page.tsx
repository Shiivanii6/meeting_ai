import Sidebar from "../../../components/Sidebar";
import { supabase } from "../../../lib/supabase";

export default async function AnalyticsPage() {
  const { data: meetings } = await supabase
    .from("meetings")
    .select("*");

  const totalMeetings = meetings?.length || 0;

  const summaries =
  meetings?.filter(
    (m: any) => m.summary !== null
   ).length || 0;

  const actionItems =
  meetings?.filter(
    (m: any) => m.action_items !== null
   ).length || 0;

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-5xl font-bold mb-10">
          Analytics
        </h1>

        <div className="grid grid-cols-3 gap-4">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3>Total Meetings</h3>
            <p className="text-4xl font-bold mt-2">
              {totalMeetings}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3>AI Summaries</h3>
            <p className="text-4xl font-bold mt-2">
              {summaries}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3>Action Items</h3>
            <p className="text-4xl font-bold mt-2">
              {actionItems}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}