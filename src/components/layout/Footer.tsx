import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-shop-bg border-t-[0.5px] border-shop-gold/20 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-brush text-white tracking-[0.3em]">麺屋 清正</span>
            <span className="text-xs text-shop-gold font-serif tracking-[0.5em]">MENYA KIYOMASA</span>
            <p className="text-shop-muted text-xs font-serif leading-loose mt-2 max-w-xs">
              厳選された素材をじっくり炊き出した極上スープと、特注麺が織りなす至高のラーメン。店主がこだわり抜いた一杯をぜひご賞味ください。
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4 text-sm font-serif">
            <p className="text-shop-muted tracking-widest text-xs mb-2">サイトマップ</p>
            {[
              { name: "トップ", href: "/" },
              { name: "メニュー", href: "/menu" },
              { name: "アクセス", href: "/access" },
              { name: "お知らせ", href: "/news" },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="text-shop-muted hover:text-shop-gold transition-colors tracking-widest">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-[0.5px] border-shop-gold/10 text-center">
          <p className="text-shop-muted text-xs font-serif tracking-widest">
            &copy; {new Date().getFullYear()} 麺屋 清正 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
