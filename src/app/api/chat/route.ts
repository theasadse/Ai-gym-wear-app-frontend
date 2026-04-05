import { NextRequest, NextResponse } from "next/server";

const FALLBACK =
  "Couldn’t reach the suggestions service. Tell me your fit issues (slide, sweat, support) and I’ll suggest a top, bottom, and layer from the catalog.";

const DEFAULT_CHAT_URL = "http://localhost:8000/chat";

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();
  const endpoint = process.env.AI_API_URL || DEFAULT_CHAT_URL;

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
      cache: "no-store",
    });

    if (!upstream.ok) {
      throw new Error(`Upstream error ${upstream.status}`);
    }

    const data = await upstream.json();
    return NextResponse.json({
      reply: data.reply ?? data.content ?? FALLBACK,
    });
  } catch {
    return NextResponse.json({ reply: FALLBACK });
  }
}
