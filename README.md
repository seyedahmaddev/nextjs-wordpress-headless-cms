# Next.js + WordPress Hybrid Starter

> Modern Headless WordPress powered by **Next.js 16**, **React 19** and **TypeScript** with a built-in fallback to the native WordPress frontend.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![WordPress](https://img.shields.io/badge/WordPress-7-21759B)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

# Why This Project?

I have been developing WordPress websites for years.

After moving to React and Next.js, my goal was to build every new project as a fully Headless CMS.

However, there is an important challenge for businesses in Iran and some other regions.

Because international internet connectivity may become unstable, hosting the frontend entirely on platforms like Vercel could make websites temporarily inaccessible.

This project solves that problem.

Instead of replacing WordPress completely, it keeps WordPress alive as the primary CMS while Next.js becomes the modern frontend whenever it is available.

If the frontend cannot be reached, the website can instantly switch back to the original WordPress theme without losing content, URLs, or SEO.

---

# Architecture

```
                    Visitors
                       │
                       ▼
              Next.js Frontend
             (React 19 / App Router)
                       │
                REST API Requests
                       │
                       ▼
                 WordPress CMS
               (Content Management)
                       │
                       ▼
                 MySQL Database
```

### Fallback Strategy

Normal Mode

```
Visitor
     │
     ▼
 Next.js
     │
 REST API
     │
 WordPress
```

Emergency Mode

```
Visitor
     │
     ▼
WordPress Theme
```

The content never changes.

Only the frontend changes.

All URLs remain exactly the same.

This helps preserve SEO and user experience.

---

# Features

- Next.js 16 App Router
- React 19
- TypeScript
- WordPress REST API
- Dynamic Metadata
- Dynamic Sitemap
- Open Graph Images
- Server Components
- Server Actions
- Image Optimization
- Incremental Static Regeneration
- Cache Revalidation
- Responsive Design
- Dark Mode
- Tailwind CSS
- shadcn/ui
- Type-safe API
- Excellent SEO

---

# Why Keep WordPress?

Many companies already have years of content inside WordPress.

Migrating everything to another CMS is expensive and risky.

With this architecture you can:

- Keep your current WordPress dashboard
- Keep your plugins
- Keep your existing URLs
- Keep your SEO rankings
- Upgrade only the frontend
- Improve performance dramatically

---

# Perfect For

- Corporate Websites
- Personal Blogs
- WooCommerce Stores
- Educational Platforms
- News Websites
- Company Websites
- Large Content Portals

---

# SEO Benefits

This starter is built with SEO as the first priority.

Features include:

- Dynamic Metadata
- Open Graph
- Twitter Cards
- Dynamic Sitemap
- Robots.txt
- Canonical URLs
- Server-side Rendering
- Static Generation
- Optimized Images
- Fast Core Web Vitals

---

# Technology Stack

- Next.js 16
- React 19
- TypeScript
- WordPress 7
- REST API
- Tailwind CSS
- shadcn/ui

---

# Roadmap

- Authentication
- Comments
- WooCommerce Support
- Search
- Multi-language
- PWA
- Dashboard
- Analytics
- AI Search

---

# Looking for a Headless WordPress Developer?

If you already have a WordPress website and would like to modernize it without rebuilding everything from scratch, I can help.

Services include:

- WordPress to Next.js Migration
- Headless WordPress Development
- WooCommerce Headless
- React Development
- Next.js Development
- Technical SEO
- Performance Optimization
- Custom API Integration

I work remotely with clients worldwide.

---

# Contact

If you have any questions, ideas, or business inquiries, feel free to reach out.

### LinkedIn

https://www.linkedin.com/in/seyedahmadgholami

### WhatsApp (International)

https://wa.me/YOUR_NUMBER

### Bale Messenger (Iran)

https://ble.ir/YOUR_USERNAME

---

# Support the Project

If you found this project useful,

⭐ Please give it a Star.

It helps this project reach more developers and motivates me to keep improving it.

Contributions, Issues and Pull Requests are always welcome.

---

# License

MIT License