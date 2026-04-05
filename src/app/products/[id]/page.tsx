import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/ui/button";
import RecommendationCarousel from "@/components/recommendation-carousel";
import { fetchProductById, fetchRecommendations } from "@/lib/api";

type Props = {
  params: { id: string };
};

export default async function ProductPage({ params }: Props) {
  const { id } = params;
  let product;
  try {
    product = await fetchProductById(id);
  } catch {
    notFound();
  }

  const recs = await fetchRecommendations();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
        </div>
        <div className="glass rounded-3xl p-6">
          <p className="pill inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/60">
            {product.category}
          </p>
          <h1 className="mt-3 font-display text-3xl text-white">{product.name}</h1>
          <p className="mt-2 text-white/70">{product.description}</p>

          <div className="mt-4 flex items-center gap-4 text-white">
            <span className="text-2xl font-semibold">${product.price}</span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
              ⭐ {product.rating.toFixed(1)}
            </span>
            <span className="text-sm text-white/60">Stock: {product.stock}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
            {product.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>

          {product.colors.length > 0 && (
            <div className="mt-4 text-sm text-white/70">
              <span className="font-semibold text-white">Colors:</span> {product.colors.join(", ")}
            </div>
          )}

          {product.sizes && (
            <div className="mt-2 text-sm text-white/70">
              <span className="font-semibold text-white">Sizes:</span> {product.sizes}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="primary">Add to bag</Button>
            <Button href="/chat" variant="secondary">
              Ask sizing
            </Button>
          </div>
        </div>
      </div>

      <RecommendationCarousel title="You might also like" products={recs.slice(0, 6)} />
    </div>
  );
}
