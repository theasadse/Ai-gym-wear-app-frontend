import ChatWindow from "@/components/chat/chat-window";
import Button from "@/components/ui/button";

export default function ChatPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="pill inline-block text-xs uppercase tracking-[0.25em] text-white/60">
            AI stylist
          </p>
          <h1 className="mt-2 font-display text-3xl text-white">Chat with PulseFit Stylist</h1>
          <p className="max-w-2xl text-white/70">
            Get size-safe picks, outfit pairings, or rainy-day adjustments. We keep your fit data in
            your profile so each run, lift, and rest day feels dialed.
          </p>
        </div>
        <Button href="/catalog" variant="secondary">
          Browse catalog
        </Button>
      </div>
      <ChatWindow />
    </div>
  );
}
