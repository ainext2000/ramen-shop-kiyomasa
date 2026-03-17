"use client";

import { Phone, ChevronUp } from "lucide-react";
import { shopData } from "@/data/shop";
import { useState, useEffect } from "react";

export default function Fab() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 border border-shop-gold/50 bg-shop-bg/80 text-shop-gold flex items-center justify-center hover:bg-shop-gold hover:text-shop-bg transition-all duration-300 backdrop-blur-sm"
          aria-label="上に戻る"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
      <a
        href={`tel:${shopData.phone}`}
        className="w-16 h-16 bg-shop-red rounded-full flex items-center justify-center shadow-2xl shadow-shop-red/30 hover:scale-110 transition-transform duration-300"
        aria-label="電話する"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
