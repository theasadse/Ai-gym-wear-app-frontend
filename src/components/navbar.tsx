"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
  { href: "/chat", label: "AI Chat" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050b17cc]/80 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-0">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#3fe7c4] to-[#8af6ff] text-slate-900 font-black shadow-[0_10px_30px_rgba(49,224,186,0.4)]">
            PF
          </span>
          <div className="leading-tight">
            <p className="font-display text-xl">PulseFit</p>
            <p className="text-xs text-white/60">Gymwear + smart picks</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 transition ${
                  isActive
                    ? "bg-white/15 text-white shadow-[0_10px_30px_rgba(49,224,186,0.3)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/chat" variant="secondary">
            Ask for picks
          </Button>
          <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white/80 sm:inline-flex">
            🏋️‍♀️
          </div>
        </div>
      </div>
    </header>
  );
}
