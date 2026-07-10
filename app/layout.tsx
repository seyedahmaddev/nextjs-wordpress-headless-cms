import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import Header from "./components/Header";

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
    >
      <head>
        
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
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}