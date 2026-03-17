"use client";

import { menuData } from "@/data/menu";
import { LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const categories = [
  { id: "ramen", name: "ラーメン" },
  { id: "tsukemen", name: "つけ麺" },
  { id: "topping", name: "トッピング" },
  { id: "drink", name: "ドリンク" },
] as const;

export default function MenuPage() {
  const [viewMode, setViewMode] = useState<'list' | 'gallery'>('gallery');
  const [activeCategory, setActiveCategory] = useState<string>("ramen");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    categories.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-32 pb-32 px-4 bg-shop-bg min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-base md:text-xl font-serif text-center mb-4 tracking-[0.5em] text-shop-gold">メニュー</h1>
        <p className="text-center text-shop-muted text-xs font-serif tracking-widest mb-10">※価格はすべて税込です</p>

        {/* Category Nav */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`px-5 py-2 font-serif text-xs tracking-[0.3em] border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-shop-gold text-shop-bg border-shop-gold"
                  : "border-shop-gold/30 text-shop-gold hover:border-shop-gold/60"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-end mb-16">
          <div className="flex items-center gap-0 border-[0.5px] border-shop-gold/30 p-1">
            <button
              onClick={() => setViewMode('gallery')}
              className={`p-3 transition-colors ${viewMode === 'gallery' ? 'bg-shop-gold text-shop-bg' : 'text-shop-gold'}`}
              aria-label="ギャラリー表示"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 transition-colors ${viewMode === 'list' ? 'bg-shop-gold text-shop-bg' : 'text-shop-gold'}`}
              aria-label="リスト表示"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-24">
          {categories.map((category) => {
            const items = menuData
              .filter((item) => item.category === category.id)
              .sort((a, b) => a.sortOrder - b.sortOrder);
            if (items.length === 0) return null;

            return (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-serif text-center mb-16 tracking-[0.3em] text-white flex items-center justify-center gap-4">
                  <span className="w-12 h-[1px] bg-shop-gold/30"></span>
                  {category.name}
                  <span className="w-12 h-[1px] bg-shop-gold/30"></span>
                </h2>

                {viewMode === 'list' ? (
                  <div className="space-y-0 border-t-[0.5px] border-shop-gold/20">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-6 py-6 border-b-[0.5px] border-shop-gold/20 group hover:bg-shop-card transition-colors px-2">
                        <div className="relative w-20 h-20 shrink-0 overflow-hidden border border-shop-gold/10 flex items-center justify-center">
                          {item.imageUrl ? (
                            <Image src={item.imageUrl} alt={item.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                          ) : (
                            <span className="text-shop-muted/40 text-[10px] font-serif tracking-widest">NO IMAGE</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-serif text-white tracking-widest mb-1 group-hover:text-shop-gold transition-colors">{item.name}</h3>
                          <p className="text-xs text-shop-muted font-serif leading-relaxed line-clamp-2">{item.description}</p>
                        </div>
                        <p className="text-shop-gold font-serif tracking-widest shrink-0 text-sm">
                          ¥{item.price.toLocaleString()}<span className="text-[10px] text-shop-gold ml-0.5">（税込）</span>
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16">
                    {items.map((item) => (
                      <div key={item.id} className="group">
                        <div className="aspect-square bg-shop-card relative overflow-hidden mb-4">
                          {item.imageUrl ? (
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              fill
                              className="object-cover opacity-75 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center border border-shop-gold/10">
                              <span className="text-shop-muted/40 text-xs font-serif tracking-widest">NO IMAGE</span>
                            </div>
                          )}
                          {item.isRecommended && (
                            <div className="absolute top-0 right-0 bg-shop-red/90 text-white text-[10px] tracking-widest px-3 py-6 writing-vertical-rl">
                              おすすめ
                            </div>
                          )}
                        </div>
                        <div className="text-center px-2">
                          <h3 className="text-sm md:text-base font-serif text-white tracking-widest mb-2 group-hover:text-shop-gold transition-colors">{item.name}</h3>
                          <p className="text-shop-gold font-serif tracking-widest text-sm mb-3">
                            ¥{item.price.toLocaleString()}<span className="text-[10px] text-shop-gold ml-0.5">（税込）</span>
                          </p>
                          <p className="text-[11px] text-shop-muted leading-loose font-serif">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
