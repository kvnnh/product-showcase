import FavoriteButton from "../../components/FavoriteButton";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="flex flex-wrap gap-10 bg-white rounded-2xl p-8 shadow-sm">
      <img src={product.image} alt={product.title} className="max-w-xs object-contain mx-auto" />
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