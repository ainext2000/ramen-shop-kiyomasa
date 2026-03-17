"use client";

import Link from "next/link";
import { shopData } from "@/data/shop";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "こだわり", href: "/#concept" },
  { name: "メニュー", href: "/menu" },
  { name: "店舗情報", href: "/#shop-info" },
  { name: "アクセス", href: "/access" },
  { name: "お知らせ", href: "/news" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-shop-bg/95 backdrop-blur-md border-b-[0.5px] border-shop-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex flex-col items-center" onClick={() => setIsMenuOpen(false)}>
            <span className="text-2xl md:text-3xl font-brush text-white tracking-[0.3em]">麺屋 清正</span>
            <span className="text-[10px] text-shop-gold font-serif tracking-[0.5em] mt-1">MENYA KIYOMASA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-shop-muted hover:text-shop-gold font-serif tracking-[0.2em] transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone */}
          <a
            href={`tel:${shopData.phone}`}
            className="hidden md:flex items-center gap-2 text-shop-gold font-serif text-sm tracking-widest hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            {shopData.phone}
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-shop-gold p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-shop-bg/98 border-t-[0.5px] border-shop-gold/20 px-4 pb-8">
          <nav className="flex flex-col gap-6 pt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-shop-muted hover:text-shop-gold font-serif tracking-[0.3em] transition-colors text-base text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${shopData.phone}`}
              className="flex items-center justify-center gap-2 text-shop-gold font-serif text-sm tracking-widest mt-4 border-[0.5px] border-shop-gold/30 py-4"
            >
              <Phone className="w-4 h-4" />
              {shopData.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
