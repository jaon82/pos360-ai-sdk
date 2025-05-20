import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const result = await generateObject({
    model: openai.chat("gpt-4o"),
    schema: z.object({
      pt: z.string().describe("Tradução para português"),
      fr: z.string().describe("Tradução para francês"),
      es: z.string().describe("Tradução para espanhol"),
    }),
    prompt: 'Traduza "Hello World" para diferentes idiomas!',
    system:
      "Você é uma AI especializada em tradução, sempre retorne da maneira sucinta possível.",
  });

  return NextResponse.json({ message: result.object });
}
