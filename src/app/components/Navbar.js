import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-ivory/90 backdrop-blur border-b border-ink/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-display)] font-bold text-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-berry inline-block" />
          MyShop
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-berry transition-colors">Home</Link>
          <Link href="/contact" className="hover:text-berry transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
}