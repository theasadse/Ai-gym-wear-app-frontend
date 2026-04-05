import Image from "next/image";
import { Product } from "@/lib/data";
import Button from "./ui/button";

type Props = {
  title?: string;
  products: Product[];
};

export default function RecommendationCarousel({ title = "Personal picks", products }: Props) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl text-white">{title}</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">AI tuned</span>
      </div>
      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="glass min-w-[240px] flex-1 rounded-2xl p-4 shadow-lg"
          >
            <div className="relative mb-3 h-32 overflow-hidden rounded-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="font-display">{product.name}</p>
                <p className="text-xs text-white/60">{product.category}</p>
              </div>
              <p className="text-sm font-semibold">${product.price}</p>
            </div>
            <p className="mt-2 text-xs text-white/60 line-clamp-2">{product.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-white/60">⭐ {product.rating.toFixed(1)}</span>
              <Button variant="ghost" className="text-xs">
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
