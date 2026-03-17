import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Yuji_Syuku } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Fab from "@/components/ui/Fab";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
});

const yujiSyuku = Yuji_Syuku({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-brush",
});

export const metadata: Metadata = {
  title: "麺屋 清正 | 漢気あふれる一杯を",
  description: "大阪・小若江に本店を構える「麺屋 清正」の公式ウェブサイト。自慢のトリプルスープとしなやかでコシのある麺、こだわりのチャーシューをご堪能ください。ラーメン、つけ麺など豊富なメニューをご用意してお待ちしております。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';window.scrollTo(0,0);" }} />
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} ${yujiSyuku.variable} font-sans bg-shop-bg text-shop-text min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Fab />
      </body>
    </html>
  );
}
