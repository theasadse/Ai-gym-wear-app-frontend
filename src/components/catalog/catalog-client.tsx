"use client";

import { useMemo, useState } from "react";
import FilterBar, { FilterState } from "@/components/filter-bar";
import ProductCard from "@/components/product-card";
import Button from "@/components/ui/button";
import { Product } from "@/lib/data";

const initialState: FilterState = {
  category: "All",
  tag: null,
  size: null,
  search: "",
};

type Props = {
  products: Product[];
};

export default function CatalogClient({ products }: Props) {
  const [filters, setFilters] = useState<FilterState>(initialState);

  const visible = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = filters.category === "All" || product.category === filters.category;
      const matchTag = !filters.tag || product.tags.includes(filters.tag);
      const matchSearch =
        !filters.search ||
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.tags.some((t) => t.toLowerCase().includes(filters.search.toLowerCase()));
      return matchCategory && matchTag && matchSearch;
    });
  }, [filters, products]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <header className="space-y-3">
        <p className="pill inline-block text-xs uppercase tracking-[0.25em] text-white/60">
          Catalog
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-display text-3xl text-white">Gear built for movement.</h1>
          <Button href="/chat" variant="secondary">
            Ask the AI stylist
          </Button>
        </div>
        <p className="max-w-2xl text-white/70">
          Search by intensity, choose your layers, or let the AI stylist personalize your bag.
        </p>
      </header>

      <FilterBar value={filters} onChange={setFilters} />

      {visible.length === 0 ? (
        <div className="glass rounded-2xl p-6 text-white/70">
          No matches yet. Try removing a filter or ask the AI stylist for a fresh pull.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
