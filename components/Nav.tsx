"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/learn", label: "Learn" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#00353A] text-[#FAFAF5] h-16 flex items-center px-8 justify-between">
      <Link
        href="/"
        className="font-headline font-bold text-lg tracking-tighter text-[#FAFAF5] hover:text-[#FBBC00] transition-colors"
      >
        Your Digital Existence
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-label text-xs uppercase tracking-widest transition-colors ${
              pathname.startsWith(href)
                ? "text-[#FBBC00] border-b-2 border-[#FBBC00] pb-0.5"
                : "text-[#FAFAF5]/70 hover:text-[#FBBC00]"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link
          href="/tools/footprint-calculator"
          className="hidden sm:block bg-[#FBBC00] text-[#261A00] px-5 py-2 font-label font-black text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          Check Footprint
        </Link>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#FAFAF5] hover:text-[#FBBC00] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#00353A] border-t border-white/10 py-4 px-8 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`font-label text-xs uppercase tracking-widest py-2 transition-colors ${
                pathname.startsWith(href) ? "text-[#FBBC00]" : "text-[#FAFAF5]/70 hover:text-[#FBBC00]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/tools/footprint-calculator"
            onClick={() => setMobileOpen(false)}
            className="bg-[#FBBC00] text-[#261A00] px-5 py-2 font-label font-black text-xs uppercase tracking-widest text-center hover:bg-white transition-colors"
          >
            Check Footprint
          </Link>
        </div>
      )}
    </header>
  );
}
