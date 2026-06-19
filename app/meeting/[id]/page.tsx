import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import GenerateSummaryButton from "../../../components/GenerateSummaryButton";
import ExportPdfButton from "../../../components/ExportPdfButton";


export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data, error } = await supabase
  .from("meetings")
  .select("*")
  .eq("id", id)
  .single();

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-3xl font-bold">
          Meeting Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
        <Link
            href="/dashboard"
            className="inline-block mb-6 text-slate-400 hover:text-white transition"
        >
             ← Back to Dashboard
        </Link>
      <h1 className="text-5xl font-bold mb-6">
        {data?.title}
      </h1>
      <p className="text-slate-400 text-lg mt-2">
           AI Meeting Record
      </p>

    <div className="bg-slate-900 p-8 rounded-2xl space-y-8">
                <GenerateSummaryButton
                   meetingId={data.id}
                   transcript={data.transcript}
                />
                <ExportPdfButton
                 title={data.title}
                  transcript={data.transcript}
                   summary={data.summary}
                  actionItems={data.action_items}
                />
        <div className="flex gap-3 mb-8">
            <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
                Completed
            </span>

            <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm">
               AI Summary Ready
            </span>
        </div>
        <div>
            
            <h2 className="text-2xl font-bold mb-3 text-indigo-400">
                Summary
            </h2>

            <p className="text-slate-300">
                {data?.summary}
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-3 text-indigo-400">
                Action Items
            </h2>

            <p className="text-slate-300">
                {data?.action_items}
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-3 text-indigo-400">
                Transcript
            </h2>

            <p className="text-slate-300">
                {data?.transcript}
            </p>
        </div>

    </div>
    </div>
  );
}