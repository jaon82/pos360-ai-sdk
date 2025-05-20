import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const { text } = await generateText({
  model: openrouter.chat("openai/gpt-4o"),
  prompt: 'Traduza "Hello World" para português!',
  system:
    "Você é uma AI especializada em tradução, sempre retorne da maneira mais sucinta possível.",
});

console.log(text);
