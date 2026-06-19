"use client";

import { useRouter } from "next/navigation";

export default function DeleteMeetingButton({
  meetingId,
}: {
  meetingId: number;
}) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm(
      "Are you sure you want to delete this meeting?"
    );

    if (!confirmed) return;

    const response = await fetch("/api/delete_meeting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        meetingId,
      }),
    });

    const data = await response.json();

    console.log(data);

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="mt-4 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500"
    >
      Delete
    </button>
  );
}