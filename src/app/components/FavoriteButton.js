"use client";
import { useState, useEffect } from "react";

export default function FavoriteButton({ productName }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log(
      isFavorite ? `${productName} added to favorites` : `${productName} removed from favorites`
    );
  }, [isFavorite, productName]);

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className={`mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
        isFavorite ? "bg-berry text-white" : "bg-ink/5 text-ink hover:bg-ink/10"
      }`}
    >
      <span>{isFavorite ? "♥" : "♡"}</span>
      {isFavorite ? "Favorited" : "Add to Favorite"}
    </button>
  );
}