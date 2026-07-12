import type { NextConfig } from "next";

// خواندن از محیط، با مقدار پیش‌فرض خالی برای جلوگیری از خطا
const wordpressHostname = process.env.WORDPRESS_HOSTNAME || "";
const wordpressUrl = process.env.WORDPRESS_URL || "";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // فقط در صورتی که متغیر محیطی وجود داشته باشد، remotePatterns را اضافه کن
    ...(wordpressHostname && {
      remotePatterns: [
        {
          protocol: "https",
          hostname: wordpressHostname,
          port: "",
          pathname: "/wp-content/uploads/**",
        },
      ],
    }),
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    // اگر آدرس وردپرس وجود نداشت، هیچ ریدایرکتی انجام نده
    if (!wordpressUrl) return [];
    
    return [
      {
        source: "/admin",
        destination: `${wordpressUrl}/wp-admin`,
        permanent: true,
      },
    ];
  },
};
console.log("WORDPRESS_HOSTNAME =", process.env.WORDPRESS_HOSTNAME);
export default nextConfig;