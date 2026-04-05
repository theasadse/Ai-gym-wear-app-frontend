import { products, Product } from "./data";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_BASE) {
    throw new Error("API_BASE not configured");
  }

  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    ...init,
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchProducts(): Promise<Product[]> {
  if (API_BASE) {
    return apiFetch<Product[]>("/products");
  }
  return products;
}

export async function fetchRecommendations(userId?: string): Promise<Product[]> {
  if (API_BASE) {
    return apiFetch<Product[]>(`/recommendations${userId ? `?userId=${userId}` : ""}`);
  }

  const featured = products.filter((p) => p.featured);
  return featured.length ? featured : products.slice(0, 4);
}

export async function postChatMessage(message: string, history: unknown) {
  return apiFetch<{ reply: string }>("/chat", {
    method: "POST",
    body: JSON.stringify({ message, history }),
  });
}
