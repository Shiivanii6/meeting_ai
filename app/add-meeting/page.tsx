"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function AddMeetingPage() {
  const [title, setTitle] = useState("");
  const [transcript, setTranscript] = useState("");

  const router = useRouter();

  async function saveMeeting() {
    if (!title.trim()) {
      alert("Please enter a meeting title");
      return;
    }

    if (!transcript.trim()) {
      alert("Please enter a transcript");
      return;
    }

    const { error } = await supabase
      .from("meetings")
      .insert([
        {
          title,
          transcript,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Meeting saved successfully!");

    setTitle("");
    setTranscript("");

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Add Meeting
        </h1>

        <input
          type="text"
          placeholder="Meeting Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <textarea
          placeholder="Paste meeting transcript here..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          rows={12}
          className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700"
        />

        <button
          onClick={saveMeeting}
          className="mt-4 bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl"
        >
          Save Meeting
        </button>
      </div>
    </div>
  );
}