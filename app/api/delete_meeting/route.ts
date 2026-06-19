import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  const { meetingId } = await request.json();
  console.log("DELETE ID:", meetingId);

  const { error } = await supabase
    .from("meetings")
    .delete()
    .eq("id", meetingId);

  if (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }

  return Response.json({
    success: true,
  });
}