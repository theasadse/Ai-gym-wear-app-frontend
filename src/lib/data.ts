export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  colors: string[];
  tags: string[];
  rating: number;
  image: string;
  stock: number;
  featured?: boolean;
  newArrival?: boolean;
};

export const products: Product[] = [
  {
    id: "set-aeroflex",
    name: "AeroFlex Seamless Set",
    price: 89,
    category: "Sets",
    description: "Seamless compression with laser-cut ventilation for high-intensity lifts.",
    colors: ["Seafoam", "Charcoal"],
    tags: ["compression", "quick-dry", "seamless"],
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    stock: 18,
    featured: true,
    newArrival: true,
  },
  {
    id: "outer-hydrashell",
    name: "HydraShell Windbreaker",
    price: 129,
    category: "Outerwear",
    description: "Featherweight, water-resistant shell with heat-mapped mesh panels.",
    colors: ["Glacier", "Obsidian"],
    tags: ["packable", "water-resistant", "reflective"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80&sat=-30",
    stock: 24,
    featured: true,
  },
  {
    id: "tee-pulselift",
    name: "PulseLift Tech Tee",
    price: 54,
    category: "Tops",
    description: "Anti-odor knit with 4-way stretch and taped shoulder seams.",
    colors: ["Marine", "White Noise"],
    tags: ["anti-odor", "stretch", "buttery-soft"],
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    stock: 32,
  },
  {
    id: "leg-nightsprint",
    name: "NightSprint Leggings",
    price: 92,
    category: "Bottoms",
    description: "Deep side pockets, bonded waistband, reflective seams for late runs.",
    colors: ["Carbon", "Lumen"],
    tags: ["pockets", "reflective", "squat-proof"],
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
    stock: 12,
    newArrival: true,
  },
  {
    id: "bra-corebalance",
    name: "CoreBalance Bra",
    price: 58,
    category: "Tops",
    description: "Medium support with bonded straps and cooling mesh spine panel.",
    colors: ["Aloe", "Ink"],
    tags: ["supportive", "cooling", "soft"],
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80&sat=5",
    stock: 20,
  },
  {
    id: "shorts-velocity",
    name: "Velocity 5\" Shorts",
    price: 64,
    category: "Bottoms",
    description: "Ultralight ripstop, inner liner, and gel-grip hems for sprint days.",
    colors: ["Signal", "Shadow"],
    tags: ["lightweight", "liner", "gel-grip"],
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80&sat=-10",
    stock: 28,
  },
  {
    id: "shoe-liftlock",
    name: "LiftLock Trainer",
    price: 138,
    category: "Footwear",
    description: "Wide base, TPU sidewalls, and dual-density midsole for stable lifting.",
    colors: ["Ash", "Volt"],
    tags: ["stable", "lifting", "wide-base"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=900&q=80",
    stock: 16,
    featured: true,
  },
  {
    id: "hoodie-thermoflow",
    name: "ThermoFlow Hoodie",
    price: 110,
    category: "Outerwear",
    description: "Double-knit fleece with laser-perf vents and thumb loops.",
    colors: ["Storm", "Moss"],
    tags: ["warm", "breathable", "thumb-loops"],
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80&sat=-20",
    stock: 22,
  },
];

export const filters = {
  categories: ["All", "Tops", "Bottoms", "Sets", "Outerwear", "Footwear"],
  tags: ["compression", "pockets", "anti-odor", "lightweight", "supportive", "reflective"],
  sizes: ["XS", "S", "M", "L", "XL"],
};
