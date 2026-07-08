import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";

// متادیتای اختصاصی
export const metadata: Metadata = {
  title: "سید احمد غلامی — طراحی سایت، توسعه‌دهنده فرانت‌اند | Next.js & React",
  description: "طراحی و توسعه سایت‌های سریع، مدرن و قابل نگهداری",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
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
      // کلاس فونت رو از اینجا حذف می‌کنیم چون در body اعمال می‌شه
    >
      <head>
        {/* 
          دیگر نیازی به لینک CDN وزیرمتن نیست.
          فونت از طریق @font-face در globals.css بارگذاری می‌شود.
        */}
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased"
          // کلاس font-vazirmatn رو حذف می‌کنیم
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}