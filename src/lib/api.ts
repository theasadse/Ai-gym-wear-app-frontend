import { products, Product } from "./data";

const DEFAULT_API_BASE = "http://localhost:8000";

function getApiBase() {
  return process.env.NEXT_PUBLIC_API_BASE || DEFAULT_API_BASE;
}

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const base = getApiBase();
  const res = await fetch(`${base}${path}`, {
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    // Revalidate occasionally so local dev sees fresh data
    next: { revalidate: 60 },
    ...init,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text || res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    return await apiFetch<Product[]>("/products");
  } catch {
    // fallback to local seed data for offline/dev
    return products;
  }
}

export async function fetchRecommendations(userId?: string): Promise<Product[]> {
  try {
    return await apiFetch<Product[]>(`/recommendations${userId ? `?userId=${userId}` : ""}`);
  } catch {
    const featured = products.filter((p) => p.featured);
    return featured.length ? featured : products.slice(0, 4);
  }
}

export async function postChatMessage(message: string, history: unknown) {
  return apiFetch<{ reply: string }>("/chat", {
    method: "POST",
    body: JSON.stringify({ message, history }),
  });
}
