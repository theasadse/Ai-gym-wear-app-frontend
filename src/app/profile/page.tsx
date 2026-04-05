import RecommendationCarousel from "@/components/recommendation-carousel";
import Button from "@/components/ui/button";
import { fetchRecommendations } from "@/lib/api";

export default async function ProfilePage() {
  const recs = await fetchRecommendations();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="pill inline-block text-xs uppercase tracking-[0.25em] text-white/60">
            Profile
          </p>
          <h1 className="mt-2 font-display text-3xl text-white">Your training locker</h1>
          <p className="max-w-2xl text-white/70">
            Save sizes, track orders, and let the AI stylist push updated fits for your next training
            block.
          </p>
        </div>
        <Button href="/chat">Update fit</Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Card title="Current focus" body="Hybrid: powerlifting + 2x tempo runs" />
        <Card title="Preferred fit" body="Compression bottoms, relaxed top, breathable layer" />
        <Card title="Climate" body="Humid, 70–80°F. Prioritize quick-dry + anti-odor." />
      </section>

      <section className="glass grid gap-4 rounded-3xl p-6 md:grid-cols-[1fr_0.8fr]">
        <div>
          <h3 className="font-display text-xl text-white">Next kit</h3>
          <p className="text-white/70">
            Generated from your saved preferences. Swap colors or ask the stylist for alternates.
          </p>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>• NightSprint Leggings — secure waistband for heavy squats.</li>
            <li>• PulseLift Tech Tee — anti-odor knit for tempo runs.</li>
            <li>• HydraShell Windbreaker — packable layer for rain.</li>
          </ul>
          <div className="mt-4 flex gap-2">
            <Button variant="secondary">Save to bag</Button>
            <Button href="/catalog" variant="ghost">
              Swap items
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          <div className="flex items-center justify-between text-white">
            <span>Measurements</span>
            <button className="text-xs text-[#8af6ff]">Edit</button>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Info label="Height" value="5 ft 8 in / 173 cm" />
            <Info label="Weight" value="160 lb / 72kg" />
            <Info label="Tops" value="M" />
            <Info label="Bottoms" value="M" />
          </div>
          <div className="mt-4 rounded-xl border border-white/5 bg-black/30 p-3">
            <p className="text-xs uppercase tracking-[0.15em] text-white/50">Fit notes</p>
            <p>Prefers compressive waist, hates clingy sleeves, wants drop shoulder for tees.</p>
          </div>
        </div>
      </section>

      <RecommendationCarousel title="Recommended now" products={recs} />
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">{title}</p>
      <p className="mt-2 text-white">{body}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <p className="text-xs text-white/50">{label}</p>
      <p className="font-display text-white">{value}</p>
    </div>
  );
}
