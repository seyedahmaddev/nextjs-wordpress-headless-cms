import type { NextConfig } from "next";

const wordpressHostname = process.env.WORDPRESS_HOSTNAME;
const wordpressUrl = process.env.WORDPRESS_URL;

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // تنظیمات دامنه‌های مجاز برای تصاویر
    remotePatterns: [
      {
        protocol: "https",
        hostname: wordpressHostname,
        port: "",
        pathname: "/wp-content/uploads/**", // ← این رو دقیقتر کن
      },
      {
        protocol: "https",
        hostname: "seyedahmaddev.ir", // ← دامنه اصلی
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      // اگه از subdomain استفاده میکنی
      {
        protocol: "https",
        hostname: `wp.${wordpressHostname}`,
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
    // تنظیمات بهینه‌سازی تصاویر
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // برای تصاویر SVG (اگه نیاز داری)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // کاهش خطاهای preload
    minimumCacheTTL: 60,
  },
  async redirects() {
    if (!wordpressUrl) {
      return [];
    }
    return [
      {
        source: "/admin",
        destination: `${wordpressUrl}/wp-admin`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;