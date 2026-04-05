import Button from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import RecommendationCarousel from "@/components/recommendation-carousel";
import { products } from "@/lib/data";

const featured = products.filter((p) => p.featured);
const newArrivals = products.filter((p) => p.newArrival);

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12">
      <section className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="pill inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-[#3fe7c4]" />
            AI-tailored gymwear
          </p>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Look strong. Lift freely. Get fit that listens to your training plan.
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            PulseFit pairs bold, technical pieces with an AI stylist that sizes you, predicts your
            sweat rate, and keeps layers locked during sprints, lifts, and recovery days.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/catalog">Shop the drop</Button>
            <Button href="/chat" variant="secondary">
              Ask the AI stylist
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-white/70 sm:max-w-lg">
            <Stat label="Seamless & squat-proof" value="28 pieces" />
            <Stat label="AI-backed sizing" value="<2 min fit quiz" />
            <Stat label="Free exchanges" value="30 days" />
            <Stat label="US shipping" value="2–4 business days" />
          </div>
        </div>
        <div className="relative">
          <div className="glass relative overflow-hidden rounded-3xl p-6">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#3fe7c4]/30 blur-3xl" />
            <h3 className="font-display text-xl text-white">Drop Highlights</h3>
            <p className="text-sm text-white/60">Curated by the AI stylist based on training goals.</p>
            <div className="mt-4 grid gap-4">
              {featured.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div>
                    <p className="font-display text-white">{item.name}</p>
                    <p className="text-xs text-white/60">{item.category}</p>
                  </div>
                  <p className="text-sm font-semibold text-white">${item.price}</p>
                </div>
              ))}
            </div>
            <Button href="/profile" variant="secondary" className="mt-4 w-full">
              Get personal picks
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-white">Fresh arrivals</h2>
          <Button href="/catalog" variant="ghost">
            View all
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="glass grid gap-6 rounded-3xl p-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="pill inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/60">
            Product advice
          </p>
          <h2 className="font-display text-3xl text-white">Chat before you checkout.</h2>
          <p className="text-white/70">
            Ask about breathability, barbell-proof seams, or rain runs. We’ll size you, suggest
            layers, and save your kit to your profile.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <span className="pill">Fit confidence</span>
            <span className="pill">Outfit recs</span>
            <span className="pill">Recovery gear</span>
          </div>
          <Button href="/chat">Open chat</Button>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">How it works</p>
          <ul className="mt-3 space-y-3 text-white">
            <li>1. Tell us your training week, climate, and usual sizes.</li>
            <li>2. AI suggests pieces that match intensity, coverage, and mobility.</li>
            <li>3. Save to bag or ask for alternates—no awkward fitting rooms.</li>
          </ul>
        </div>
      </section>

      <RecommendationCarousel title="Curated for you" products={featured} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-xs text-white/50">{label}</p>
      <p className="font-display text-lg text-white">{value}</p>
    </div>
  );
}
