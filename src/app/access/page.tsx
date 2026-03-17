import { shopData } from "@/data/shop";
import { Phone, MapPin, Clock, Train } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "アクセス | 麺屋 清正",
};

export default function AccessPage() {
  return (
    <div className="pt-32 pb-32 px-4 bg-shop-bg min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-base md:text-xl font-serif text-center mb-16 tracking-[0.5em] text-shop-gold">アクセス</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Map */}
          <div className="h-[400px] relative border-[0.5px] border-shop-gold/20 p-2">
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
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            <div className="border-l-[0.5px] border-shop-gold/30 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-4 h-4 text-shop-gold shrink-0" />
                <span className="text-xs text-shop-muted font-serif tracking-widest">住所</span>
              </div>
              <p className="text-white font-serif text-sm leading-loose">{shopData.address}</p>
            </div>

            <div className="border-l-[0.5px] border-shop-gold/30 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Train className="w-4 h-4 text-shop-gold shrink-0" />
                <span className="text-xs text-shop-muted font-serif tracking-widest">最寄駅</span>
              </div>
              <p className="text-white font-serif text-sm leading-loose">{shopData.nearestStation}</p>
            </div>

            <div className="border-l-[0.5px] border-shop-gold/30 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-4 h-4 text-shop-gold shrink-0" />
                <span className="text-xs text-shop-muted font-serif tracking-widest">営業時間</span>
              </div>
              <p className="text-white font-serif text-sm leading-loose whitespace-pre-line">{shopData.businessHours}</p>
              <p className="text-shop-red font-serif text-sm mt-3 font-bold">定休日：{shopData.closedDay}</p>
            </div>

            <div className="border-l-[0.5px] border-shop-gold/30 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-4 h-4 text-shop-gold shrink-0" />
                <span className="text-xs text-shop-muted font-serif tracking-widest">電話番号</span>
              </div>
              <a href={`tel:${shopData.phone}`} className="text-white font-serif text-sm hover:text-shop-gold transition-colors">{shopData.phone}</a>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <a
                href={`tel:${shopData.phone}`}
                className="flex justify-center items-center gap-4 bg-emerald-600 text-white px-8 py-5 font-serif text-sm tracking-[0.3em] hover:bg-emerald-700 transition-all duration-500"
              >
                <Phone className="w-5 h-5" />
                電話する
              </a>
              <a
                href={shopData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-4 border-[0.5px] border-shop-gold/50 text-shop-gold px-8 py-5 font-serif text-sm tracking-[0.3em] hover:bg-shop-gold hover:text-shop-bg transition-all duration-500"
              >
                <MapPin className="w-5 h-5" />
                Google Mapsで開く
              </a>
            </div>
          </div>
        </div>

        {/* Parking Info */}
        <div className="mt-16 border-[0.5px] border-shop-gold/20 p-8">
          <h2 className="text-sm font-serif text-shop-gold tracking-[0.4em] mb-6">駐車場について</h2>
          <p className="text-shop-muted font-serif text-sm leading-loose">
            店舗前に専用駐車場はございません。お車でお越しの際は、近隣のコインパーキングをご利用ください。<br />
            電車でお越しの場合は、近鉄大阪線「長瀬駅」より徒歩約7分です。
          </p>
        </div>
      </div>
    </div>
  );
}
