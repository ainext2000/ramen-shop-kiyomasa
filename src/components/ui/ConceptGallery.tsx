"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 画像URLをここに追加してください
// 例: { src: "https://...", alt: "説明" }
const images: { src: string; alt: string }[] = [];

const PLACEHOLDER_COUNT = 4;
const DURATION = 800;
const PAUSE = 4000;

export default function ConceptGallery() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const total = images.length > 0 ? images.length : PLACEHOLDER_COUNT;
  const transition = sliding ? `transform ${DURATION}ms ease-in-out` : "none";

  const goTo = useCallback(
    (targetIndex: number, dir: "next" | "prev") => {
      if (sliding) return;
      setDirection(dir);
      setNext(targetIndex);
      setSliding(true);
      setTimeout(() => {
        setCurrent(targetIndex);
        setNext((targetIndex + 1) % total);
        setSliding(false);
      }, DURATION);
    },
    [sliding, total]
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % total, "next");
  }, [current, total, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + total) % total, "prev");
  }, [current, total, goTo]);

  useEffect(() => {
    const interval = setInterval(goNext, PAUSE + DURATION);
    return () => clearInterval(interval);
  }, [goNext]);

  const NoImageSlide = () => (
    <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
      <span className="text-neutral-500 text-sm font-serif tracking-[0.4em]">NO IMAGE</span>
    </div>
  );

  const currentTransform = sliding
    ? direction === "next" ? "translateX(-100%)" : "translateX(100%)"
    : "translateX(0)";

  const nextTransform = sliding
    ? "translateX(0)"
    : direction === "next" ? "translateX(100%)" : "translateX(-100%)";

  return (
    <div className="relative w-full h-48 md:h-72 lg:h-96 overflow-hidden group">
      {/* current */}
      <div
        className="absolute inset-0"
        style={{ transform: currentTransform, transition }}
      >
        {images[current] ? (
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-cover opacity-70"
          />
        ) : (
          <NoImageSlide />
        )}
      </div>

      {/* next */}
      <div
        className="absolute inset-0"
        style={{ transform: nextTransform, transition }}
      >
        {images[next] ? (
          <Image
            src={images[next].src}
            alt={images[next].alt}
            fill
            className="object-cover opacity-70"
          />
        ) : (
          <NoImageSlide />
        )}
      </div>

      {/* 左右グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-shop-bg/50 via-transparent to-shop-bg/50 pointer-events-none" />

      {/* 前へボタン */}
      <button
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-shop-gold/40 text-shop-gold bg-shop-bg/40 hover:bg-shop-gold hover:text-shop-bg transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="前へ"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* 次へボタン */}
      <button
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-shop-gold/40 text-shop-gold bg-shop-bg/40 hover:bg-shop-gold hover:text-shop-bg transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="次へ"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* ドットインジケーター */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-shop-gold w-4 md:w-5" : "bg-shop-gold/30"
            }`}
            aria-label={`${i + 1}枚目`}
          />
        ))}
      </div>
    </div>
  );
}
