import CatalogClient from "@/components/catalog/catalog-client";
import { fetchProducts } from "@/lib/api";

export default async function CatalogPage() {
  const products = await fetchProducts();
  return <CatalogClient products={products} />;
}
