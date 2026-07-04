import ProductList from "./components/ProductList";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  return res.json();
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