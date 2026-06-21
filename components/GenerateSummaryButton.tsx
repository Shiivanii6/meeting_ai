"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GenerateSummaryButton({
  meetingId,
  transcript,
}: {
  meetingId: number;
  transcript: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function generateSummary() {
    try {
      setLoading(true);
  
      console.log("Generate button clicked");
  
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meetingId,
          transcript,
        }),
      });
  
      const data = await response.json();
  
      console.log("N8N RESPONSE:", data);
      console.log("Action Items:", data.actionItems);
      const saveResponse = await fetch("/api/save-summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meetingId,
          summary: data.summary || "",
          action_items: data.actionItems || "",
        }),
      });
  
      const saveData = await saveResponse.json();
  
      console.log("SAVE RESPONSE:", saveData);
  
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to generate summary");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={generateSummary}
      disabled={loading}
      className="mb-6 bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl disabled:opacity-50"
    >
      {loading
        ? "Generating..."
        : "✨ Generate AI Summary"}
    </button>
  );
}