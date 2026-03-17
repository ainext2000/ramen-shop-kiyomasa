import Image from "next/image";
import Link from "next/link";
import { shopData } from "@/data/shop";
import { menuData } from "@/data/menu";
import { newsData } from "@/data/news";
import { MapPin, Phone } from "lucide-react";
import HeroSlider from "@/components/ui/HeroSlider";
import ConceptGallery from "@/components/ui/ConceptGallery";

export default function Home() {
  const recommendedMenu = menuData.filter((m) => m.isRecommended).slice(0, 3);
  const recentNews = newsData.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="relative h-[90vh] flex items-center justify-center bg-shop-bg overflow-hidden">
        <HeroSlider />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center mt-12 md:mt-0">
          <h1 className="text-5xl md:text-[6.5rem] font-brush text-white tracking-[0.1em] leading-tight drop-shadow-2xl mb-8">
            <span className="text-shop-red text-6xl md:text-[8rem] mr-2">魂</span>の一杯、<br className="md:hidden" />ここにあり。
          </h1>
          <p className="text-xl md:text-4xl text-shop-text font-serif tracking-[0.2em] leading-relaxed opacity-90 mb-16 drop-shadow-lg">
            自慢のトリプルスープが生み出す、<br className="md:hidden" />唯一無二の旨味
          </p>
          <Link
            href="/menu"
            className="inline-block border-[0.5px] border-shop-gold/50 text-shop-gold px-12 py-5 font-serif text-base md:text-lg tracking-[0.3em] hover:bg-shop-gold hover:text-shop-bg transition-all duration-500 shadow-lg hover:shadow-shop-gold/20"
          >
            メニューを見る
          </Link>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-32 px-4 bg-shop-bg border-t-[0.5px] border-shop-gold/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm md:text-base font-serif text-center mb-16 md:mb-24 tracking-[0.5em] text-shop-gold">
            清正のこだわり
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto mb-20">
            {[
              { num: "1", title: "トリプルスープ", text: "豚骨、鶏ガラ、魚介を絶妙なバランスで配合。長時間炊き出したスープは、濃厚でありながら後味すっきり。" },
              { num: "2", title: "特注の麺", text: "スープとの絡みを計算し尽くした特注の太麺。もっちりとした食感と小麦の香りが特徴です。" },
              { num: "3", title: "自家製焼豚", text: "厳選した豚バラ肉を秘伝のタレでじっくりと煮込んだ、口の中でとろける極上のチャーシュー。" },
            ].map((item) => (
              <div key={item.num} className="text-left border-l-[0.5px] border-shop-gold/30 pl-6 md:pl-8">
                <h3 className="text-xl md:text-2xl font-serif text-white mb-6 tracking-widest flex items-center">
                  <span className="text-shop-gold/60 text-base italic mr-4 font-serif">{item.num}</span>
                  {item.title}
                </h3>
                <p className="text-shop-muted leading-loose text-sm md:text-base font-serif">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 一定間隔ステップスライド */}
        <ConceptGallery />

      </section>

      {/* Recommended Menu */}
      <section className="py-32 px-4 bg-shop-bg border-t-[0.5px] border-shop-gold/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm md:text-base font-serif text-center mb-24 tracking-[0.5em] text-shop-gold">
            おすすめの品
          </h2>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {recommendedMenu.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-shop-card relative overflow-hidden mb-6">
                  <div className="absolute top-0 right-0 z-10 bg-shop-red/90 text-white text-[10px] tracking-widest px-4 py-8 writing-vertical-rl">
                    店主おすすめ
                  </div>
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center border border-shop-gold/10">
                      <span className="text-shop-muted/40 text-xs font-serif tracking-widest">NO IMAGE</span>
                    </div>
                  )}
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-serif text-white tracking-widest mb-4 group-hover:text-shop-gold transition-colors">{item.name}</h3>
                  <div className="w-8 h-[1px] bg-shop-red mx-auto mb-4 transition-all group-hover:w-16"></div>
                  <p className="text-shop-gold font-serif tracking-widest mb-6">¥{item.price.toLocaleString()}<span className="text-[10px] ml-1">(税込)</span></p>
                  <p className="text-xs text-shop-muted leading-loose font-serif">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-24">
            <Link href="/menu" className="inline-block border-[0.5px] border-shop-gold/50 text-shop-gold px-12 py-5 font-serif text-sm tracking-[0.3em] hover:bg-shop-gold hover:text-shop-bg transition-all duration-500">
              メニューをすべて見る
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 px-4 bg-shop-bg border-t-[0.5px] border-shop-gold/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm md:text-base font-serif text-center mb-16 tracking-[0.5em] text-shop-gold">
            お知らせ
          </h2>
          <div className="flex flex-col divide-y divide-shop-gold/10">
            {recentNews.map((item) => (
              <div key={item.id} className="py-8 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 group hover:pl-2 transition-all duration-300">
                <time className="text-xs text-shop-muted font-serif tracking-widest shrink-0">{item.date}</time>
                <span className="text-[10px] border border-shop-gold/40 text-shop-gold px-3 py-1 font-serif tracking-widest shrink-0">{item.category}</span>
                <p className="text-shop-text font-serif text-sm leading-relaxed group-hover:text-white transition-colors">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/news" className="text-shop-gold font-serif text-xs tracking-[0.4em] hover:text-white transition-colors">
              お知らせ一覧 →
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Info & Access */}
      <section id="shop-info" className="py-32 px-4 bg-shop-bg border-t-[0.5px] border-shop-gold/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-sm md:text-base font-serif mb-12 tracking-[0.5em] text-shop-gold flex items-center gap-4">
              <span className="w-8 h-[1px] bg-shop-gold/30"></span>
              店舗情報
            </h2>
            <dl className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-6 text-sm md:text-base font-serif text-white">
              <dt className="text-shop-muted tracking-widest">店名</dt>
              <dd>{shopData.shopName}</dd>
              <dt className="text-shop-muted tracking-widest pt-6 border-t-[0.5px] border-shop-gold/20">住所</dt>
              <dd className="pt-6 border-t-[0.5px] border-shop-gold/20">{shopData.address}</dd>
              <dt className="text-shop-muted tracking-widest pt-6 border-t-[0.5px] border-shop-gold/20">最寄駅</dt>
              <dd className="pt-6 border-t-[0.5px] border-shop-gold/20">{shopData.nearestStation}</dd>
              <dt className="text-shop-muted tracking-widest pt-6 border-t-[0.5px] border-shop-gold/20">営業時間</dt>
              <dd className="pt-6 border-t-[0.5px] border-shop-gold/20 whitespace-pre-line">{shopData.businessHours}</dd>
              <dt className="text-shop-muted tracking-widest pt-6 border-t-[0.5px] border-shop-gold/20">定休日</dt>
              <dd className="pt-6 border-t-[0.5px] border-shop-gold/20 font-bold text-shop-red">{shopData.closedDay}</dd>
            </dl>
            <div className="mt-16 flex flex-col sm:flex-row gap-6">
              <a href={`tel:${shopData.phone}`} className="flex flex-1 justify-center items-center gap-4 bg-emerald-600 text-white px-8 py-5 font-serif text-sm tracking-[0.3em] hover:bg-emerald-700 transition-all duration-500 shadow-lg shadow-emerald-900/20">
                <Phone className="w-5 h-5" />
                電話する
              </a>
              <a href={shopData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-1 justify-center items-center gap-4 bg-shop-gold text-shop-bg px-8 py-5 font-serif text-sm tracking-[0.3em] hover:bg-amber-600 transition-all duration-500 shadow-lg shadow-shop-gold/20">
                <MapPin className="w-5 h-5" />
                詳細アクセス
              </a>
            </div>
          </div>
          <div className="h-[400px] md:h-full min-h-[500px] relative border-[0.5px] border-shop-gold/20 p-2">
            <iframe
              src="https://maps.google.com/maps?q=34.655963,135.584784&hl=ja&z=18&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(120%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="店舗地図"
            ></iframe>
            {/* iframeの「マップで開く」リンク上に透明オーバーレイ */}
            <a
              href={shopData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 left-3 z-10"
              style={{ width: 130, height: 36 }}
              aria-label="マップで開く"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
