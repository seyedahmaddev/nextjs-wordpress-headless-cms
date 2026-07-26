// import {
//   BarChart3,
//   Search,
//   Shield,
//   Share2,
//   Bot,
//   ArrowLeft,
// } from "lucide-react";
// import Link from "next/link";

// const services = [
//   {
//     id: "analytics",
//     title: "آنالیز سایت",
//     description: "وضعیت وب سایت خودتان را بهتر درک کنید",
//     icon: BarChart3,
//     href: "#analytics",
//     gradient: "from-blue-500/20 to-cyan-500/20",
//     iconBg: "bg-blue-500/10 text-blue-400",
//   },
//   {
//     id: "seo",
//     title: "بهینه سازی سایت",
//     description: "وب سایت خودتان را سئو و بهینه کنید",
//     icon: Search,
//     href: "#seo",
//     gradient: "from-purple-500/20 to-pink-500/20",
//     iconBg: "bg-purple-500/10 text-purple-400",
//   },
//   {
//     id: "security",
//     title: "امنیت وب سایت",
//     description: "امنیت وب سایت خودتان را تامین کنید",
//     icon: Shield,
//     href: "#security",
//     gradient: "from-red-500/20 to-orange-500/20",
//     iconBg: "bg-red-500/10 text-red-400",
//   },
//   {
//     id: "social",
//     title: "سازگاری و شبکه اجتماعی",
//     description: "اتصال به ابزارهای آنلاین و شبکه اجتماعی",
//     icon: Share2,
//     href: "#social",
//     gradient: "from-green-500/20 to-emerald-500/20",
//     iconBg: "bg-green-500/10 text-green-400",
//   },
//   {
//     id: "automation",
//     title: "اتوماسیون",
//     description: "خودکارسازی پست محتوا و اتوریپلای چت",
//     icon: Bot,
//     href: "#automation",
//     gradient: "from-yellow-500/20 to-amber-500/20",
//     iconBg: "bg-yellow-500/10 text-yellow-400",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16 md:py-24">
//       {/* دکوراسیون پس‌زمینه */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
//       </div>

//       {/* محتوای اصلی با فاصله از لبه‌ها */}
//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 xl:px-20">
//         {/* هدر بخش */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
//             خدمات <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">ما</span>
//           </h2>
//           <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
//             راه‌حل‌های جامع برای رشد و بهبود وب‌سایت شما
//           </p>
//         </div>

//         {/* منوی سریع (لینک‌های داخلی) */}
//         <div className="mb-12 flex flex-wrap justify-center gap-3">
//           {services.map((service) => (
//             <a
//               key={service.id}
//               href={service.href}
//               className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white hover:scale-105"
//             >
//               <service.icon className="size-4" />
//               {service.title}
//             </a>
//           ))}
//         </div>

//         {/* کارت‌های خدمات */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={service.id}
//                 id={service.id}
//                 className="group relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 border border-white/10"
//               >
//                 {/* افکت گرادیان در پس‌زمینه کارت */}
//                 <div
//                   className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
//                 />

//                 <div className="relative z-10">
//                   {/* آیکون */}
//                   <div
//                     className={`mb-4 inline-flex rounded-xl ${service.iconBg} p-3 transition-all duration-300 group-hover:scale-110`}
//                   >
//                     <Icon className="size-6" />
//                   </div>

//                   {/* عنوان */}
//                   <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
//                     {service.title}
//                   </h3>

//                   {/* توضیحات */}
//                   <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">
//                     {service.description}
//                   </p>

//                   {/* لینک داخلی (اسکرول به بخش) */}
//                   <a
//                     href={service.href}
//                     className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition-all hover:text-blue-300 hover:gap-2"
//                   >
//                     <span>مشاهده بیشتر</span>
//                     <ArrowLeft className="size-4" />
//                   </a>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* دکمه اقدام (اختیاری) */}
//         <div className="mt-12 text-center">
//           <Link
//             href="/services"
//             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
//           >
//             <span>مشاهده تمام خدمات</span>
//             <ArrowLeft className="size-5" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// app/page.tsx
import ServicesSection from "@/app/components/services/ServicesSection";
import ServicesDetails from "@/app/components/services/ServicesDetails";

export default function Home() {
  return (
    <main>
      {/* سایر بخش‌ها */}
      <ServicesSection />
      <ServicesDetails />
      {/* سایر بخش‌ها */}
    </main>
  );
}