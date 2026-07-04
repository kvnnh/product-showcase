"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import FavoriteButton from "../../components/FavoriteButton";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${slug}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [slug]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-wrap gap-10 bg-white rounded-2xl p-8 shadow-sm">
      <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-xs object-contain mx-auto"
        />
      <div className="flex-1 min-w-[250px]">
        <span className="inline-block text-xs font-[family-name:var(--font-mono)] uppercase tracking-wide text-mint bg-mint/10 px-3 py-1 rounded-full mb-3">
          {product.category}
        </span>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-2xl font-[family-name:var(--font-mono)] font-semibold mt-3 text-berry">
          ${product.price}
        </p>
        <p className="mt-4 text-ink/80 leading-relaxed">{product.description}</p>
        <p className="mt-4 text-sm text-ink/60">
          ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
        </p>
        <FavoriteButton productName={product.title} />
      </div>
    </div>
  );
}