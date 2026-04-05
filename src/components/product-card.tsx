import Image from "next/image";
import { Product } from "@/lib/data";
import Button from "./ui/button";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="glass relative flex flex-col overflow-hidden rounded-2xl p-4 transition hover:-translate-y-1 hover:border-white/20">
      {product.newArrival && (
        <span className="absolute right-3 top-3 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
          New
        </span>
      )}
      {product.featured && (
        <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-[#3fe7c4] to-[#8af6ff] px-3 py-1 text-xs font-semibold text-slate-900">
          Featured
        </span>
      )}
      <div className="relative mb-4 h-52 overflow-hidden rounded-xl bg-white/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b17] via-transparent to-transparent" />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg">{product.name}</h3>
            <p className="text-sm text-white/60">{product.category}</p>
          </div>
          <span className="text-lg font-semibold">${product.price}</span>
        </div>
        <p className="text-sm text-white/70">{product.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-white/60">
          {product.tags.map((tag) => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-white/70">⭐ {product.rating.toFixed(1)}</span>
          <span className="text-white/60">{product.colors.join(" / ")}</span>
        </div>
        <div className="mt-4 flex gap-2">
          <Button variant="primary" fullWidth>
            Add to bag
          </Button>
          <Button href={`/products/${product.id}`} variant="secondary">
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
