import { NextRequest, NextResponse } from "next/server";

const FALLBACK =
  "Couldn’t reach the AI backend. Tell me your training block and fit issues (slide, sweat, or support) and I’ll map a top, bottom, and layer from the catalog.";

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();
  const endpoint = process.env.AI_API_URL;

  if (!endpoint) {
    return NextResponse.json({ reply: FALLBACK });
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
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
