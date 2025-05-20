import { tools } from "@/ai/tools";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { messages } = await request.json();

  const result = streamText({
    model: openai.chat("gpt-4o"),
    tools,
    messages,
    maxSteps: 5,
    toolChoice: "required",
    system: `Sempre responda em markdown sem aspas no início ou fim da mensagem.`,
  });

  return result.toDataStreamResponse();
}
