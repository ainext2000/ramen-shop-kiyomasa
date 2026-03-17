import { newsData } from "@/data/news";

export const metadata = {
  title: "お知らせ | 麺屋 清正",
};

export default function NewsPage() {
  return (
    <div className="pt-32 pb-32 px-4 bg-shop-bg min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-base md:text-xl font-serif text-center mb-16 tracking-[0.5em] text-shop-gold">お知らせ</h1>

        <div className="flex flex-col divide-y divide-shop-gold/10">
          {newsData.map((item) => (
            <article key={item.id} className="py-10 group">
              <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-6 mb-5">
                <time className="text-xs text-shop-muted font-serif tracking-widest">{item.date}</time>
                <span className="text-[10px] border border-shop-gold/40 text-shop-gold px-3 py-1 font-serif tracking-widest w-fit">{item.category}</span>
              </div>
              <h2 className="text-lg font-serif text-white tracking-widest mb-4 group-hover:text-shop-gold transition-colors">{item.title}</h2>
              <p className="text-shop-muted font-serif text-sm leading-loose">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
