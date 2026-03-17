"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides: { src: string; alt: string }[] = [
  {
    src: "https://loremflickr.com/1920/1080/ramen?lock=1",
    alt: "清正ラーメン",
  },
  {
    src: "https://loremflickr.com/1920/1080/ramen,noodle?lock=42",
    alt: "特製スープ",
  },
  {
    src: "https://loremflickr.com/1920/1080/ramen,soup?lock=77",
    alt: "自家製焼豚ラーメン",
  },
];

// 画像が未登録の場合に使うプレースホルダー枚数
const PLACEHOLDER_COUNT = 3;

const DURATION = 800;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [sliding, setSliding] = useState(false);

  const total = slides.length > 0 ? slides.length : PLACEHOLDER_COUNT;

  useEffect(() => {
    const interval = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % total);
        setNext((prev) => (prev + 1) % total);
        setSliding(false);
      }, DURATION);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const transition = sliding ? `transform ${DURATION}ms ease-in-out` : "none";

  const NoImageSlide = () => (
    <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
      <span className="text-neutral-500 text-sm font-serif tracking-[0.4em]">NO IMAGE</span>
    </div>
  );

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: sliding ? "translateX(-100%)" : "translateX(0)",
          transition,
        }}
      >
        {slides[current] ? (
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover opacity-55 mix-blend-luminosity"
            priority
          />
        ) : (
          <NoImageSlide />
        )}
      </div>

      <div
        className="absolute inset-0"
        style={{
          transform: sliding ? "translateX(0)" : "translateX(100%)",
          transition,
        }}
      >
        {slides[next] ? (
          <Image
            src={slides[next].src}
            alt={slides[next].alt}
            fill
            className="object-cover opacity-55 mix-blend-luminosity"
          />
        ) : (
          <NoImageSlide />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-shop-bg via-shop-bg/60 to-shop-bg/80" />
    </div>
  );
}
