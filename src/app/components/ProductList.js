"use client";
import { useState } from "react";
import Link from "next/link";

export default function ProductList({ products }) {
  const [search, setSearch] = useState("");
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 px-4 py-3 rounded-full border border-ink/10 bg-white focus:outline-none focus:ring-2 focus:ring-berry text-sm"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow"
          >
            <img src={product.image} alt={product.title} className="h-32 object-contain mb-3" />
            <h3 className="text-sm font-medium h-10 overflow-hidden">{product.title}</h3>
            <p className="text-berry font-[family-name:var(--font-mono)] font-semibold mt-1">
              ${product.price}
            </p>
            <Link href={`/products/${product.id}`} className="mt-4 w-full">
              <button className="w-full px-4 py-2 rounded-full bg-ink text-ivory text-sm font-medium hover:bg-berry transition-colors">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}