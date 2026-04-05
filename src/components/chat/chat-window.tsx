"use client";

import { useState } from "react";
import Button from "../ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starter: Message[] = [
  {
    role: "assistant",
    content:
      "Hey! I’m your PulseFit gear specialist. Tell me your training style and I’ll size you up with pieces that stay dry, stay put, and look sharp.",
  },
];

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>(starter);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history: nextMessages }),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }
      const data = await res.json();
      const reply: Message = {
        role: "assistant",
        content:
          data.reply ??
          "I’m drafting recommendations based on your fit and training cues. Try asking for a fit that won’t slip during heavy squats or a breathable top for humid runs.",
      };
      setMessages([...nextMessages, reply]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "I couldn't reach the AI backend. But I can still suggest a grip-tight legging, a breathable tee, and a waterproof layer if you share your size and focus.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass relative grid min-h-[500px] grid-rows-[1fr_auto] gap-4 overflow-hidden rounded-3xl p-6">
      <div className="space-y-4 overflow-y-auto pr-2">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-lg rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-gradient-to-r from-[#3fe7c4] to-[#8af6ff] text-slate-900"
                  : "bg-white/5 text-white"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-white/60">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3fe7c4]" />
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-[#8af6ff]"
              style={{ animationDelay: "140ms" }}
            />
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-white"
              style={{ animationDelay: "280ms" }}
            />
            <span className="text-xs">Stylist is typing…</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2">
        <input
          className="flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/50"
          placeholder="Ask for squat-proof leggings, a breathable layer, or recovery gear…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <Button onClick={sendMessage} disabled={loading}>
          {loading ? "Sending…" : "Send"}
        </Button>
      </div>
    </div>
  );
}
