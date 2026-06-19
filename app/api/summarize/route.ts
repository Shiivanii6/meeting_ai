import OpenAI from "openai";
import { NextResponse } from "next/server";
console.log("SERVER ENV:", process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  return NextResponse.json({
    summary:
      "Client wants an AI meeting assistant that automatically generates meeting summaries.",
  
    actionItems:
      "Build dashboard, Setup n8n workflow, Connect AI summarization, Test meeting automation",
  });
}