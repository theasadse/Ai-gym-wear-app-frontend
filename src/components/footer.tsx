export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-0">
        <p className="font-display text-white/80">PulseFit Gymwear</p>
        <p className="text-white/50">
          Designed for athletes who love data, coaching, and confident fits.
        </p>
        <div className="flex items-center gap-3 text-white/60">
          <a href="/catalog" className="hover:text-white/90">
            Catalog
          </a>
          <a href="/chat" className="hover:text-white/90">
            AI Chat
          </a>
          <a href="/profile" className="hover:text-white/90">
            Profile
          </a>
        </div>
      </div>
    </footer>
  );
}
