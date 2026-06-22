import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

const transcript: string = body.transcript || "";

const sentences = transcript
  .split(".")
  .filter((s: string) => s.trim().length > 0);

    const summary = sentences
      .slice(0, 2)
      .join(". ")
      .trim() + ".";

      const actionItems = sentences
      .slice(2)
      .map((item: string) => item.trim())
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