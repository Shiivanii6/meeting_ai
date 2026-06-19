import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function POST(req: Request) {
    const {
        meetingId,
        summary,
        action_items,
      } = await req.json();

   console.log("MEETING ID:", meetingId);
   console.log("TYPE:", typeof meetingId);
    console.log("SUMMARY:", summary);
   const test = await supabase
  .from("meetings")
  .select("*");

   console.log("ALL ROWS:", test.data);
   console.log("SELECT ERROR:", test.error);

    const { data, error } = await supabase
  .from("meetings")
  .update({
    summary,
    action_items,
  })
  .eq("id", Number(meetingId))
  .select();
  console.log("UPDATED DATA:", data);
  console.log("ERROR:", error);
    

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
  });
}