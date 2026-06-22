import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { transcript } = await req.json();

    const sentences = transcript
      .split(".")
      .filter((s) => s.trim().length > 0);

    const summary = sentences
      .slice(0, 2)
      .join(". ")
      .trim() + ".";

    const actionItems = sentences
      .slice(2)
      .map((item) => item.trim())
      .filter(Boolean)
      .join(", ");

    return NextResponse.json({
      summary,
      actionItems:
        actionItems || "Review meeting notes and follow up.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate summary",
      },
      {
        status: 500,
      }
    );
  }
}