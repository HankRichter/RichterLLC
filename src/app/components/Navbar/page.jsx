"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="relative sticky top-0 z-50 overflow-visible border-b border-white/10 bg-neutral shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 relative">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-heading text-xl font-bold text-white hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Richter's LLC
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-white hover:bg-white/10 md:hidden"
          >
            <span className="text-2xl leading-none">{isOpen ? "×" : "☰"}</span>
          </button>

          <nav className="hidden md:flex items-center gap-6 font-mono text-sm uppercase tracking-wide">
            <Link href="/projects/CarProjects" className="text-white/70 hover:text-primary transition">Car Restoration</Link>
            <Link href="/projects/Blacksmithing" className="text-white/70 hover:text-primary transition">Blacksmithing</Link>
            <Link href="/components/Contact" className="text-white/70 hover:text-primary transition">Contact</Link>
          </nav>
        </div>

        {isOpen && (
          <nav className="absolute left-4 right-4 top-full mt-2 flex flex-col gap-3 rounded-2xl border border-white/10 bg-neutral p-4 shadow-lg shadow-black/40 md:hidden font-mono text-sm uppercase tracking-wide">
            <Link
              href="/projects/CarProjects"
              className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/10 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Car Restoration
            </Link>
            <Link
              href="/projects/Blacksmithing"
              className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/10 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Blacksmithing
            </Link>
            <Link
              href="/components/Contact"
              className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/10 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
