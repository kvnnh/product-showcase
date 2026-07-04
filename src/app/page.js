import ProductList from "./components/ProductList";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <ProductList />
    </div>
  );
}