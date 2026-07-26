// components/ServicesDetails.tsx
import {
  BarChart3,
  Search,
  Shield,
  Share2,
  Bot,
  MessageSquare,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const servicesDetails = [
  {
    id: "detail-analytics",
    title: "آنالیز سایت",
    icon: BarChart3,
    iconBg: "bg-blue-100 text-blue-700",
    borderColor: "border-blue-200",
    description: "وضعیت وب سایت خودتان را بهتر درک کنید",
    content: [
      {
        title: "بررسی جامع وضعیت سئو",
        items: [
          "تحلیل کلمات کلیدی و جایگاه آنها در نتایج جستجو",
          "بررسی متا تگ‌ها (عنوان، توضیحات، هدرها) و بهینه‌سازی آنها",
          "ارزیابی ساختار URL و لینک‌های داخلی",
          "بررسی نقشه سایت (Sitemap) و فایل robots.txt",
        ],
      },
      {
        title: "ارزیابی امنیتی و فنی",
        items: [
          "اسکن آسیب‌پذیری‌های رایج (XSS، SQL Injection، CSRF)",
          "بررسی هدرهای امنیتی (CSP، HSTS، X-Frame-Options)",
          "بررسی گواهی SSL و وضعیت HTTPS",
          "شناسایی لینک‌های شکسته و خطاهای ۴۰۴",
        ],
      },
      {
        title: "تحلیل عملکرد و سرعت",
        items: [
          "اندازه‌گیری Core Web Vitals (LCP، FID، CLS)",
          "بررسی زمان بارگذاری صفحات در دستگاه‌های مختلف",
          "تحلیل درخواست‌های HTTP و حجم فایل‌ها",
          "ارائه پیشنهادات عملی برای بهبود سرعت",
        ],
      },
    ],
  },
  {
    id: "detail-seo",
    title: "بهینه سازی سایت",
    icon: Search,
    iconBg: "bg-purple-100 text-purple-700",
    borderColor: "border-purple-200",
    description: "وب سایت خودتان را سئو و بهینه کنید",
    content: [
      {
        title: "سئو فنی برای اپلیکیشن‌های مدرن (Next.js و React)",
        items: [
          "پیاده‌سازی SSR (Server Side Rendering) و ISR برای ایندکس بهتر",
          "بهینه‌سازی تصاویر با فرمت‌های مدرن (WebP، AVIF) و لود تنبل",
          "تنظیم هدرهای کش و استراتژی‌های Cache-Control",
          "پیاده‌سازی Schema Markup برای نمایش غنی در نتایج جستجو",
        ],
      },
      {
        title: "سئو تخصصی برای سایت‌های وردپرسی",
        items: [
          "نصب و تنظیم افزونه‌های سئو (Rank Math، Yoast SEO)",
          "بهینه‌سازی ساختار نوشته‌ها و برگه‌ها",
          "مدیریت برچسب‌ها، دسته‌بندی‌ها و لینک‌سازی داخلی",
          "بهبود سرعت با کش‌سازی، بهینه‌سازی دیتابیس و CDN",
        ],
      },
      {
        title: "استراتژی محتوا و کلمات کلیدی",
        items: [
          "تحقیق کلمات کلیدی هدف و تحلیل رقبا",
          "بهینه‌سازی محتوای موجود و تولید محتوای جدید",
          "ساختاردهی به هدرها (H1، H2، H3) و متا دسکریپشن‌ها",
          "برنامه‌ریزی لینک‌سازی خارجی و داخلی",
        ],
      },
    ],
  },
  {
    id: "detail-security",
    title: "امنیت وب سایت",
    icon: Shield,
    iconBg: "bg-red-100 text-red-700",
    borderColor: "border-red-200",
    description: "امنیت وب سایت خودتان را تامین کنید",
    content: [
      {
        title: "امنیت برای اپلیکیشن‌های Next.js و React",
        items: [
          "پیاده‌سازی احراز هویت پیشرفته (JWT، OAuth2، NextAuth)",
          "مقابله با حملات XSS با استفاده از sanitize و CSP",
          "امنیت API routes با اعتبارسنجی ورودی و نرخ‌محدودیت",
          "مدیریت محیط‌های توسعه و تولید با متغیرهای محیطی امن",
        ],
      },
      {
        title: "امنیت برای سایت‌های وردپرسی",
        items: [
          "نصب و پیکربندی افزونه‌های امنیتی (Wordfence، Sucuri)",
          "تنظیم فایروال اپلیکیشن وب (WAF) و مسدودسازی IP‌های مخرب",
          "بروزرسانی منظم هسته، قالب و افزونه‌ها",
          "پشتیبان‌گیری خودکار و مدیریت دسترسی کاربران",
        ],
      },
      {
        title: "زیرساخت امنیتی عمومی",
        items: [
          "پیاده‌سازی SSL/HTTPS با گواهی معتبر",
          "تنظیم هدرهای امنیتی (HSTS، X-Frame-Options، X-Content-Type-Options)",
          "ارسال گزارش‌های امنیتی و مانیتورینگ دائمی",
          "برنامه‌ریزی واکنش به حملات و بازیابی پس از آسیب",
        ],
      },
    ],
  },
  {
    id: "detail-social",
    title: "سازگاری و شبکه اجتماعی",
    icon: Share2,
    iconBg: "bg-green-100 text-green-700",
    borderColor: "border-green-200",
    description: "اتصال به ابزارهای آنلاین و شبکه اجتماعی",
    content: [
      {
        title: "نمایش آیکون‌های پیام‌رسان و شبکه‌های اجتماعی",
        items: [
          "افزایش اعتماد کاربران با نمایش آیکون‌های بله، ایتا، روبیکا، تلگرام و اینستاگرام",
          "اتصال مستقیم به کانال‌ها و صفحات رسمی شما",
          "قابلیت تنظیم سفارشی برای هر شبکه و پیام‌رسان",
          "طراحی واکنش‌گرا و سازگار با تمام دستگاه‌ها",
        ],
      },
      {
        title: "نمایش محتوای کانال‌ها در وب‌سایت",
        items: [
          "اتصال به API شبکه‌های اجتماعی (تلگرام، اینستاگرام، ایتا)",
          "نمایش آخرین پست‌های کانال در قالب ویجت یا بخش اختصاصی",
          "فیلتر و دسته‌بندی محتوای نمایش داده شده",
          "بروزرسانی خودکار محتوا با هر پست جدید",
        ],
      },
      {
        title: "اشتراک‌گذاری و تعامل اجتماعی",
        items: [
          "دکمه‌های اشتراک‌گذاری در شبکه‌های مختلف",
          "نمایش تعداد اشتراک‌گذاری‌ها و بازخوردها",
          "یکپارچه‌سازی با سیستم‌های نظردهی و بازخورد",
        ],
      },
    ],
  },
  {
    id: "detail-automation",
    title: "اتوماسیون",
    icon: Bot,
    iconBg: "bg-yellow-100 text-yellow-700",
    borderColor: "border-yellow-200",
    description: "خودکارسازی پست محتوا و اتوریپلای چت",
    content: [
      {
        title: "خودکارسازی انتشار محتوا",
        items: [
          "زمان‌بندی انتشار پست‌ها و مقالات در وب‌سایت",
          "اتصال به شبکه‌های اجتماعی برای انتشار همزمان محتوا",
          "برنامه‌ریزی خودکار برای پست‌های دوره‌ای (هفتگی، ماهانه)",
          "یکپارچه‌سازی با تقویم محتوایی و یادآوری‌ها",
        ],
      },
      {
        title: "اتوریپلای چت با هوش مصنوعی",
        items: [
          "اضافه کردن ربات‌های چت مبتنی بر هوش مصنوعی به وب‌سایت",
          "پاسخ‌دهی خودکار به سوالات متداول کاربران",
          "اتصال به مدل‌های زبانی (GPT، Claude) برای مکالمات طبیعی",
          "گزارش‌گیری از مکالمات و تحلیل نیازهای کاربران",
        ],
      },
      {
        title: "خبرنامه و ایمیل مارکتینگ خودکار",
        items: [
          "ارسال خودکار خبرنامه به کاربران عضو شده",
          "شخصی‌سازی ایمیل‌ها بر اساس رفتار کاربر",
          "برنامه‌ریزی کمپین‌های ایمیل و پیگیری نتایج",
          "اتصال به سرویس‌های ایمیل مارکتینگ (Mailchimp، SendGrid)",
        ],
      },
    ],
  },
  {
    id: "detail-robot",
    title: "ساخت ربات در بله",
    icon: MessageSquare,
    iconBg: "bg-indigo-100 text-indigo-700",
    borderColor: "border-indigo-200",
    description: "افزایش فروش و تعامل با مشتریان",
    content: [
      {
        title: "ربات فروش و تجارت الکترونیک",
        items: [
          "ساخت ربات هوشمند برای پاسخ به سوالات محصولات و راهنمایی خرید",
          "اتصال به درگاه‌های پرداخت برای انجام تراکنش‌های مستقیم",
          "نمایش کاتالوگ محصولات و پیشنهاد خرید بر اساس سلیقه کاربر",
          "پیگیری سفارشات و ارسال نوتیفیکیشن‌های وضعیت",
        ],
      },
      {
        title: "ربات پشتیبانی و خدمات مشتریان",
        items: [
          "پاسخ‌گویی ۲۴/۷ به سوالات متداول و مشکلات رایج",
          "اتصال به سیستم تیکتینگ برای مدیریت درخواست‌ها",
          "ارسال راهنماهای تصویری و متنی برای رفع مشکلات",
          "ثبت نظرات و بازخوردهای مشتریان",
        ],
      },
      {
        title: "ربات اطلاع‌رسانی و بازاریابی",
        items: [
          "ارسال خودکار اخبار، تخفیف‌ها و رویدادهای جدید",
          "برنامه‌ریزی کمپین‌های تبلیغاتی و ارسال پیام‌های هدفمند",
          "تقسیم‌بندی کاربران بر اساس علایق و رفتار",
          "گزارش‌گیری از نرخ باز شدن پیام‌ها و تعامل کاربران",
        ],
      },
      {
        title: "ربات جذب و تعامل",
        items: [
          "طراحی بازی‌ها و مسابقات تعاملی برای افزایش مشارکت",
          "ارسال محتوای سرگرم‌کننده و آموزشی جذاب",
          "امکان نظرسنجی و دریافت بازخورد مستقیم",
          "افزایش نرخ بازگشت کاربران با پیام‌های یادآوری",
        ],
      },
    ],
  },
];

export default function ServicesDetails() {
  return (
    <section id="services-details" className="relative w-full overflow-hidden">
      {servicesDetails.map((service, index) => {
        const Icon = service.icon;
        // ایجاد پس‌زمینه متناوب: زوج => سفید، فرد => خاکستری روشن
        const bgColor = index % 2 === 0 ? "bg-white" : "bg-gray-50/80";

        return (
          <section
            key={service.id}
            id={service.id}
            className={`${bgColor} scroll-mt-20 py-16 md:py-24 border-b border-gray-100/80`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                {/* سایدبار یا هدر سرویس */}
                <div className="lg:col-span-4">
                  <div className="sticky top-24 space-y-4">
                    <div
                      className={`inline-flex rounded-2xl ${service.iconBg} p-4`}
                    >
                      <Icon className="size-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {service.description}
                    </p>
                    <div className="pt-4">
                      <Link
                        href="/مشاوره-طراحی-سایت"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        <span>دریافت مشاوره</span>
                        <ArrowLeft className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* محتوای اصلی */}
                <div className="lg:col-span-8 space-y-8">
                  {service.content.map((section, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm border border-gray-100/80 shadow-sm"
                    >
                      <h3 className="mb-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
                        {section.title}
                      </h3>
                      <ul className="space-y-3 pr-4">
                        {section.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <CheckCircle2 className="mt-0.5 size-5 flex-shrink-0 text-blue-500" />
                            <span className="text-base leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}