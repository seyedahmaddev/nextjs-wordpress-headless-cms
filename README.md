# Next.js + WordPress Hybrid Starter

> 🇬🇧 English documentation is available below.

# 🇮🇷 Persian

## معرفی پروژه

این پروژه یک **Headless WordPress Starter** است که با **Next.js 16**، **React 19** و **TypeScript** توسعه داده شده است.

هدف این پروژه تنها ساخت یک وب‌سایت سریع نبود؛ بلکه طراحی یک معماری قابل اعتماد برای شرایط واقعی کسب‌وکارها، به‌ویژه در ایران بود.

---

## چرا این پروژه را ساختم؟

من سال‌هاست که با وردپرس، المنتور و ووکامرس وب‌سایت طراحی می‌کنم.

بعد از مهاجرت به React و Next.js تصمیم داشتم تمام پروژه‌های جدیدم را با معماری Headless و Strapi توسعه دهم.

اما در عمل به یک چالش مهم رسیدم.

در ایران همیشه احتمال اختلال یا قطع اینترنت بین‌الملل وجود دارد. اگر Frontend روی سرویس‌هایی مانند Vercel یا سایر زیرساخت‌های خارجی قرار داشته باشد، ممکن است کاربران داخل کشور در برخی شرایط نتوانند به سایت دسترسی داشته باشند؛ در حالی که خود وردپرس همچنان روی سرور داخلی در دسترس است.

به همین دلیل این معماری را طراحی کردم.

---

## ایده اصلی

در این پروژه:

- وردپرس همچنان CMS اصلی است.
- تمام محتوا داخل وردپرس مدیریت می‌شود.
- فرانت‌اند با Next.js نمایش داده می‌شود.
- ارتباط از طریق REST API برقرار است.

در حالت عادی:

```
کاربر
   │
   ▼
Next.js
   │
REST API
   │
WordPress
```

اما اگر به هر دلیلی اینترنت بین‌الملل دچار اختلال شود، تنها با تغییر Reverse Proxy، DNS یا تنظیمات وب‌سرور می‌توان سایت را روی قالب اصلی وردپرس نمایش داد.

```
کاربر
   │
   ▼
WordPress Theme
```

در این حالت:

- هیچ محتوایی از بین نمی‌رود.
- هیچ لینکی تغییر نمی‌کند.
- تمام URLها ثابت باقی می‌مانند.
- سئو حفظ می‌شود.
- کاربران همچنان به سایت دسترسی خواهند داشت.

---

## مزایای این معماری

✔ حفظ کامل پنل مدیریت وردپرس

✔ حفظ تمامی افزونه‌های وردپرس

✔ حفظ URLهای فعلی

✔ عدم آسیب به سئو

✔ سرعت بسیار بیشتر نسبت به قالب‌های معمول وردپرس

✔ امکان استفاده از React 19

✔ استفاده از Next.js 16 App Router

✔ Server Components

✔ Dynamic Metadata

✔ Dynamic Sitemap

✔ Open Graph

✔ Image Optimization

✔ Incremental Static Regeneration

✔ Cache Revalidation

---

## مناسب چه کسانی است؟

این معماری برای موارد زیر بسیار مناسب است:

- وب‌سایت‌های شرکتی
- فروشگاه‌های ووکامرس
- وبلاگ‌های بزرگ
- سایت‌های خبری
- سایت‌های آموزشی
- سازمان‌ها و شرکت‌هایی که سال‌ها روی وردپرس فعالیت کرده‌اند.

اگر نمی‌خواهید تمام سایت وردپرسی خود را از ابتدا بازنویسی کنید اما به یک رابط کاربری مدرن، سریع و سئو محور نیاز دارید، این پروژه دقیقاً برای شماست.

---

## خدماتی که ارائه می‌دهم

در صورت نیاز می‌توانم پروژه‌های زیر را به صورت ریموت انجام دهم:

- تبدیل وردپرس به Headless
- توسعه Frontend با Next.js
- مهاجرت از قالب وردپرس به React
- طراحی فروشگاه Headless WooCommerce
- افزایش سرعت سایت
- بهینه‌سازی Core Web Vitals
- سئوی فنی (Technical SEO)
- توسعه اختصاصی React و Next.js

---

## ارتباط با من

اگر سؤال، پیشنهاد یا پروژه‌ای دارید خوشحال می‌شوم با من در ارتباط باشید.

### LinkedIn

https://www.linkedin.com/in/seyedahmaddev

### WhatsApp

https://wa.me/989034260454

### پیام‌رسان بله 

https://ble.ir/SeyedAhmadDev

---

## حمایت از پروژه

اگر این پروژه برای شما مفید بود لطفاً به آن ⭐ Star بدهید.

همچنین Pull Request، Issue و پیشنهادهای شما با کمال میل پذیرفته می‌شود.

---

# 🇬🇧 English Documentation

Next.js + WordPress Hybrid Starter

«Modern Headless WordPress Starter built with Next.js 16, React 19 and TypeScript — designed for high performance, SEO, and reliability.»

<p align="center">"Next.js" (https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
"React" (https://img.shields.io/badge/React-19-61DAFB?logo=react)
"TypeScript" (https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
"WordPress" (https://img.shields.io/badge/WordPress-7-21759B?logo=wordpress)
"TailwindCSS" (https://img.shields.io/badge/TailwindCSS-v4-38BDF8?logo=tailwindcss)
"MIT License" (https://img.shields.io/badge/License-MIT-green)

</p>---

«🇬🇧 English documentation is available first for the GitHub community and search engines.

🇮🇷 مستندات کامل فارسی در ادامه همین فایل قرار گرفته است.»

---

🚀 Overview

This project is a modern Headless WordPress Starter built with Next.js 16, React 19, and TypeScript.

Unlike many Headless WordPress projects, this repository focuses on real-world production environments, where reliability is just as important as performance.

Instead of replacing WordPress completely, this architecture keeps WordPress as the primary CMS while using Next.js as the frontend whenever it is available.

If the frontend becomes unavailable for any reason, the website can quickly switch back to the native WordPress theme without changing URLs or losing SEO.

This approach is especially useful for businesses that need modern web technologies while maintaining maximum uptime.

---

⭐ Why This Project Exists

Many companies have spent years building their content inside WordPress.

Migrating thousands of pages to another CMS is often expensive, risky, and unnecessary.

At the same time, traditional WordPress themes usually cannot provide the performance, developer experience, and flexibility of modern React applications.

This project combines the best of both worlds.

- Keep WordPress.
- Upgrade only the frontend.
- Improve performance.
- Improve SEO.
- Preserve existing URLs.
- Preserve your content.
- Preserve your investment.

---

✨ Features

- Next.js 16 App Router
- React 19
- TypeScript
- WordPress REST API
- Server Components
- Server Actions
- Dynamic Metadata
- Dynamic Sitemap
- Open Graph Images
- Image Optimization
- ISR (Incremental Static Regeneration)
- Cache Revalidation
- Tailwind CSS
- shadcn/ui
- Dark Mode
- Responsive Design
- Type-safe API
- Excellent SEO
- Production Ready

---

🏗 Architecture

                 Visitors
                     │
                     ▼
            Next.js Frontend
        (React 19 + App Router)
                     │
              REST API Requests
                     │
                     ▼
              WordPress CMS
                     │
                     ▼
                MySQL Database

Fallback Mode

Normal Operation

Visitor
   │
   ▼
Next.js
   │
REST API
   │
WordPress

Emergency Mode

Visitor
   │
   ▼
WordPress Theme

The content never changes.

Only the frontend changes.

Your URLs remain exactly the same.

Your SEO remains intact.

---

🎯 Perfect For

This project is ideal for:

- Corporate Websites
- WooCommerce Stores
- Personal Blogs
- Educational Platforms
- News Websites
- Company Websites
- Large Content Portals
- Government Websites
- High-Traffic Websites

---

📚 Table of Contents

- Overview
- Why This Project
- Features
- Architecture
- Why Hybrid?
- SEO Benefits
- Performance
- Installation
- Project Structure
- Environment Variables
- Deployment
- Cache Revalidation
- Roadmap
- FAQ
- Services
- Contact
- فارسی
- License

---

🌍 Why Hybrid Instead of Fully Headless?

A fully headless architecture is technically attractive, but it introduces new operational challenges.

If your frontend is hosted on cloud providers such as Vercel while your WordPress installation remains elsewhere, the availability of your website depends on multiple services.

For many businesses this is acceptable.

However, there are situations where maximum availability is more important than having only one frontend.

This project introduces a hybrid strategy.

WordPress remains fully functional.

Next.js acts as a modern frontend.

If necessary, switching back to the native WordPress theme can be done without changing URLs or content.

This architecture minimizes business risk while still providing all the advantages of a modern React application.

---

🚀 SEO First

Search engine optimization is not an afterthought.

It is one of the core goals of this project.

Included SEO features:

- Dynamic Metadata
- Dynamic Open Graph Images
- Twitter Cards
- XML Sitemap
- Robots.txt
- Canonical URLs
- Semantic HTML
- Server-side Rendering
- Static Generation
- Image Optimization
- Core Web Vitals Optimization
- Fast Loading Pages

---

💼 Looking for a Headless WordPress Developer?

If you already have a WordPress website and would like to modernize it with Next.js without rebuilding everything from scratch, I can help.

Services include:

- Headless WordPress Development
- Next.js Development
- React Development
- WordPress Migration
- WooCommerce Headless
- Technical SEO
- Performance Optimization
- API Integration
- Enterprise Frontend Architecture

I work remotely with clients worldwide and would be happy to discuss your project.

## Let's Connect

If you have any questions, suggestions, or projects, I would be happy to hear from you.

### LinkedIn

https://www.linkedin.com/in/seyedahmaddev

### WhatsApp

https://wa.me/989034260454

