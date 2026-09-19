import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import ILAChatWidget from "./aboutme/components/ILAChatWidget";
import type { Metadata } from "next";
import Header from "./components/Header";
import Script from 'next/script';

// متادیتای اختصاصی
export const metadata: Metadata = {
  title: {
    default: "طراحی سایت حرفه‌ای و فروشگاهی با Next.js و React | توسعه وردپرس و Headless | سیداحمد غلامی",
    template: "%s | سید احمد — طراحی سایت و توسعه فرانت‌اند",
  },
  description: "طراحی حرفه ای و توسعه سایت‌های فروشگاهی، شرکتی و شخصی با Next.js، React و وردپرس. ۵ سال تجربه، ۴۰+ پروژه موفق. مشاوره رایگان و پشتیبانی دائمی. برای دریافت نمونه‌کار و قیمت تماس بگیرید.",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },

  // ===== کلمات کلیدی =====
  keywords: [
    "طراحی سایت",
    "توسعه فرانت‌اند",
    "Next.js",
    "React",
    "وردپرس",
    "برنامه‌نویس Next.js",
    "طراحی سایت حرفه‌ای",
    "توسعه وب ایران",
    "سئو",
    "طراحی سایت فروشگاهی",
  ],

  // ===== Open Graph (برای شبکه‌های اجتماعی) =====
  openGraph: {
    title: "طراحی سایت حرفه‌ای با Next.js و React | سید احمد غلامی",
    description:
      "توسعه وب‌سایت‌های سریع، مدرن و بهینه. ۵ سال سابقه، ۴۰ پروژه موفق. از مشاوره تا پشتیبانی با شما هستیم.",
    url: siteConfig.site_domain,
    siteName: "سید احمد غلامی — طراحی سایت",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "سید احمد غلامی — طراحی سایت و توسعه فرانت‌اند",
      },
    ],
  },

  // ===== Twitter Cards =====
  twitter: {
    card: "summary_large_image",
    title: "طراحی سایت حرفه‌ای | توسعه‌دهنده Next.js | سید احمد غلامی",
    description:
      "وب‌سایت‌های سریع، مدرن و بهینه برای سئو. ۵ سال تجربه و ۴۰+ پروژه موفق.",
    images: ["/og-image.jpg"], // می‌تواند همان تصویر og باشد
    // creator: "@your_twitter_handle", // اگر اکانت توییتر دارید
  },

  // ===== تگ‌های پیشرفته =====
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ===== سایر تنظیمات =====
  category: "technology",
  classification: "طراحی سایت، توسعه وب، برنامه‌نویسی",
  authors: [{ name: "سید احمد غلامی", url: siteConfig.site_domain }],
  creator: "سید احمد غلامی",
  publisher: "سید احمد غلامی",

  // ===== تگ‌های زبان =====
  other: {
    "geo.region": "IR",
    "geo.placename": "Tehran",
    "geo.position": "35.6892;51.3890", // مختصات تهران 
    "ICBM": "35.6892, 51.3890",
  },

  // ... سایر متادیتاها
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],

};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}
            <ILAChatWidget />
            
          </main>
           
          <Footer />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
      {/* PopUp embed */}
      <Script
        src="https://www.popthelead.com/embed/popup.v1.js"
        data-site-token="cfr2pbu8pzzkrv79"
        strategy="afterInteractive"
      />
    </html>
  );
}