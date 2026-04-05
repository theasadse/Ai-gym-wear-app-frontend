"use client";

import { ChangeEvent } from "react";
import { filters } from "@/lib/data";

export type FilterState = {
  category: string;
  tag: string | null;
  size: string | null;
  search: string;
};

type Props = {
  value: FilterState;
  onChange: (next: FilterState) => void;
};

const selectBase =
  "rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 outline-none focus:border-white/30";

export default function FilterBar({ value, onChange }: Props) {
  const handleChange = (field: keyof FilterState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange({ ...value, [field]: e.target.value });
  };

  return (
    <div className="glass mb-6 grid grid-cols-1 gap-3 rounded-2xl p-4 md:grid-cols-5 md:items-center">
      <div className="md:col-span-2">
        <label className="mb-1 block text-xs uppercase tracking-wide text-white/50">
          Search
        </label>
        <input
          className={`${selectBase} w-full`}
          placeholder="Leggings, seamless, reflective..."
          value={value.search}
          onChange={handleChange("search")}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-white/50">
          Category
        </label>
        <select
          className={selectBase}
          value={value.category}
          onChange={handleChange("category")}
        >
          {filters.categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-white/50">
          Focus
        </label>
        <select
          className={selectBase}
          value={value.tag ?? ""}
          onChange={(e) => onChange({ ...value, tag: e.target.value || null })}
        >
          <option value="">Any</option>
          {filters.tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-wide text-white/50">
          Size
        </label>
        <select
          className={selectBase}
          value={value.size ?? ""}
          onChange={(e) => onChange({ ...value, size: e.target.value || null })}
        >
          <option value="">Any</option>
          {filters.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
