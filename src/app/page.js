import ProductList from "./components/ProductList";

export const dynamic = "force-dynamic";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5", {
    cache: "no-store",
  });

  const rawText = await res.text();
  console.log("STATUS:", res.status);
  console.log("HEADERS:", JSON.stringify([...res.headers.entries()]));
  console.log("BODY (first 500 chars):", rawText.slice(0, 500));

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  return JSON.parse(rawText);
}

export default async function HomePage() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <ProductList products={products} />
    </div>
  );
}