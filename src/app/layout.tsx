import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["cyrillic", "latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example-voronezh.ru"),
  title: {
    default: "Пневмоподвеска в Воронеже | Продажа, установка и сервис",
    template: "%s | Пневмоподвеска Воронеж",
  },
  description:
    "Пневмоподвеска в Воронеже для коммерческого транспорта, легковых авто, прицепов и спецтехники. Комплекты, установка, ремонт, подбор по задаче и расчет стоимости.",
  keywords: [
    "пневмоподвеска Воронеж",
    "установка пневмоподвески Воронеж",
    "пневмоподвеска на Газель",
    "пневмоподвеска для коммерческого транспорта",
    "ремонт пневмоподвески Воронеж",
  ],
  openGraph: {
    title: "Пневмоподвеска в Воронеже",
    description:
      "Комплекты пневмоподвески, монтаж, обслуживание и доработка подвески под реальные нагрузки.",
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
