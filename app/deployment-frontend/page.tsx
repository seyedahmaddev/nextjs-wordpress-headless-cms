import Link from "next/link";

export default function FrontendServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6 md:px-12 font-sans">
      
      {/* بخش هدر صفحه - بدون باکس */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          خدمات توسعه <span className="text-indigo-600">فرانت‌اند</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ساخت وب‌سایت‌های سریع، مدرن و تعاملی با استفاده از جدیدترین تکنولوژی‌های روز دنیا
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* بخش اول: معرفی کلی */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 0 2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.226-1.128m0 0a3.001 3.001 0 0 0 5.78-1.128c0-.399-.078-.78-.226-1.128m0 0a3 3 0 0 0-5.78-1.128m-5.78 1.128a2.25 2.25 0 0 0-2.4 2.245c0 .399.078.78.226 1.128" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">توسعه‌ی حرفه‌ای با مدرن‌ترین ابزارها</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              ما با بهره‌گیری از <strong className="text-indigo-600">Next.js</strong>، <strong className="text-indigo-600">React</strong>، 
              <strong className="text-indigo-600"> TypeScript</strong> و <strong className="text-indigo-600">Tailwind CSS</strong>، 
              وب‌سایت‌هایی با کارایی بالا، تجربه‌ی کاربری فوق‌العاده و سئوی بهینه تحویل می‌دهیم. 
              تمرکز ما بر سرعت، امنیت و مقیاس‌پذیری است تا نیازهای کسب‌وکار شما را به بهترین شکل ممکن پوشش دهیم.
            </p>
          </div>
        </div>
      </div>

      {/* بخش دوم: لیست خدمات - بدون قاب و border */}
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* سرویس ۱: طراحی رابط کاربری */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-rose-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 0 2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.226-1.128m0 0a3.001 3.001 0 0 0 5.78-1.128c0-.399-.078-.78-.226-1.128m0 0a3 3 0 0 0-5.78-1.128m-5.78 1.128a2.25 2.25 0 0 0-2.4 2.245c0 .399.078.78.226 1.128" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">طراحی رابط کاربری (UI/UX)</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              طراحی زیبا، مدرن و واکنش‌گرا با استفاده از Tailwind CSS که در تمام دستگاه‌ها (موبایل، تبلت، دسکتاپ) به‌خوبی نمایش داده می‌شود.
            </p>
            <ul className="space-y-1 text-gray-500 text-sm pr-6">
              <li>✓ طراحی کاملاً ریسپانسیو و سازگار با همه‌ی اندازه‌های صفحه</li>
              <li>✓ استفاده از انیمیشن‌های روان و جذاب برای بهبود تجربه کاربری</li>
              <li>✓ رعایت اصول دسترس‌پذیری (Accessibility) برای کاربران خاص</li>
              <li>✓ پیاده‌سازی دارک مود و تم‌های سفارشی</li>
            </ul>
          </div>
        </div>

        {/* سرویس ۲: توسعه با Next.js و React */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-cyan-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.03a.75.75 0 0 0-.75-.75H4.5a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-9.75a.75.75 0 0 0-.75-.75h-6.75a.75.75 0 0 1-.75-.75v-4.5Z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">توسعه با Next.js و React</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              ساخت اپلیکیشن‌های تک‌صفحه‌ای (SPA) و چندصفحه‌ای (MPA) با قابلیت‌های پیشرفته‌ی Next.js از جمله SSR، ISR و SSG.
            </p>
            <ul className="space-y-1 text-gray-500 text-sm pr-6">
              <li>✓ پیاده‌سازی Server Side Rendering (SSR) برای سئوی بهتر</li>
              <li>✓ استفاده از Incremental Static Regeneration (ISR) برای به‌روزرسانی خودکار</li>
              <li>✓ مدیریت مسیرها و داینامیک روتینگ پیشرفته</li>
              <li>✓ استفاده از App Router و قابلیت‌های جدید Next.js 15</li>
            </ul>
          </div>
        </div>

        {/* سرویس ۳: تایپ‌اسکریپت و کدنویسی امن */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5 12 12.75l5.25-5.25M6.75 16.5l5.25-5.25 5.25 5.25" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">تایپ‌اسکریپت و کدنویسی امن</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              استفاده از TypeScript برای افزایش امنیت کد، کاهش باگ‌ها و بهبود تجربه‌ی توسعه‌دهندگان.
            </p>
            <ul className="space-y-1 text-gray-500 text-sm pr-6">
              <li>✓ تایپ‌گذاری دقیق برای Props، State و API Response</li>
              <li>✓ استفاده از Generic Types برای کامپوننت‌های قابل استفاده‌ی مجدد</li>
              <li>✓ یکپارچه‌سازی با ESLint و Prettier برای کدنویسی استاندارد</li>
              <li>✓ مدیریت خطاها و Exception Handling حرفه‌ای</li>
            </ul>
          </div>
        </div>

        {/* سرویس ۴: بهینه‌سازی عملکرد و سئو */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-emerald-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">بهینه‌سازی عملکرد و سئو</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              بهبود سرعت بارگذاری صفحات و رعایت اصول سئوی فنی برای کسب رتبه‌های برتر در نتایج جستجو.
            </p>
            <ul className="space-y-1 text-gray-500 text-sm pr-6">
              <li>✓ اندازه‌گیری و بهبود Core Web Vitals (LCP، FID، CLS)</li>
              <li>✓ بهینه‌سازی تصاویر با فرمت‌های WebP و AVIF و لود تنبل</li>
              <li>✓ پیاده‌سازی Schema Markup و Meta Tags استاندارد</li>
              <li>✓ تنظیم هدرهای کش و استراتژی‌های Cache-Control</li>
            </ul>
          </div>
        </div>

        {/* سرویس ۵: امنیت و احراز هویت */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-amber-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">امنیت و احراز هویت</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              پیاده‌سازی سیستم‌های احراز هویت پیشرفته و تأمین امنیت وب‌سایت در برابر حملات رایج.
            </p>
            <ul className="space-y-1 text-gray-500 text-sm pr-6">
              <li>✓ پیاده‌سازی JWT، OAuth2 و NextAuth.js</li>
              <li>✓ مقابله با حملات XSS و CSRF با استفاده از CSP و Sanitize</li>
              <li>✓ امنیت API Routes با اعتبارسنجی ورودی و Rate Limiting</li>
              <li>✓ مدیریت متغیرهای محیطی و Environment Variables</li>
            </ul>
          </div>
        </div>

        {/* سرویس ۶: یکپارچه‌سازی با API و بک‌اند */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-purple-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75 15.75 8.25M9.75 7.5 12 9.75m-6 6 2.25 2.25M12.75 15.75l-5.25-5.25M16.5 12.75l-2.25-2.25M9 21.75h6M3.75 21.75h1.5m-7.5 0h-1.5m12-1.5v-3.75A3.75 3.75 0 0 0 5.25 12.75v3.75m12 0v-3.75A3.75 3.75 0 0 0 17.25 12.75v3.75" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">یکپارچه‌سازی با API و بک‌اند</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              اتصال وب‌سایت به APIهای مختلف و سرویس‌های بک‌اند برای دریافت و نمایش داده‌های پویا.
            </p>
            <ul className="space-y-1 text-gray-500 text-sm pr-6">
              <li>✓ استفاده از React Query و SWR برای مدیریت داده‌ها</li>
              <li>✓ پیاده‌سازی Server Actions در Next.js</li>
              <li>✓ مدیریت خطاها و حالت‌های لودینگ در درخواست‌های API</li>
              <li>✓ کش‌سازی داده‌ها و بهینه‌سازی درخواست‌های تکراری</li>
            </ul>
          </div>
        </div>

        {/* سرویس ۷: ابزارها و گردش کار حرفه‌ای */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-indigo-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">ابزارها و گردش کار حرفه‌ای</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              استفاده از ابزارهای مدرن توسعه برای افزایش بهره‌وری و کیفیت کد.
            </p>
            <ul className="space-y-1 text-gray-500 text-sm pr-6">
              <li>✓ استفاده از Git و GitHub برای کنترل نسخه و همکاری تیمی</li>
              <li>✓ تنظیم ESLint، Prettier و Husky برای کدنویسی استاندارد</li>
              <li>✓ استفاده از Vite برای توسعه‌ی سریع و HMR</li>
              <li>✓ پیاده‌سازی CI/CD با GitHub Actions و Vercel</li>
            </ul>
          </div>
        </div>

      </div>

      {/* بخش پایانی: دعوت به اقدام */}
      <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-3">
            برای دریافت مشاوره و شروع همکاری، 
            <Link href="/مشاوره-طراحی-سایت">
            با من در تماس 
            </Link>
            <span> </span>باشید.
          </p>
        </div>
      </div>

    </div>
  );
}