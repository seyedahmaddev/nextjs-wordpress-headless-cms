'use client'
import { ArrowPathIcon, CodeBracketIcon, WrenchScrewdriverIcon, ServerIcon } from '@heroicons/react/24/outline';
import { motion } from "motion/react";

const features = [
  {
    name: 'توسعه فرانت‌اند',
    description: 'پیاده‌سازی UI با React و Next.js — کد تمیز، کامپوننت‌محور و بهینه برای پرفورمنس و تجربه کاربری.',
    icon: CodeBracketIcon,
  },
  {
    name: 'هدلس و فول‌استک',
    description:
      'معماری جداسازی فرانت از بک با Next.js و Strapi؛ مقیاس‌پذیر، انعطاف‌پذیر و آماده رشد.',
    icon: ServerIcon,
  },
  {
    name: 'مهاجرت از وردپرس',
    description:
      'انتقال سایت‌های وردپرسی به معماری مدرن هدلس — بدون از دست دادن محتوا، با عملکرد چند برابر بهتر.',
    icon: ArrowPathIcon,
  },
  {
    name: 'بهینه‌سازی و ریفکتور',
    description:
      'بازنویسی و بهبود کدهای قدیمی، کاهش زمان لود، و ارتقاء معماری پروژه‌های موجود.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 lg:px-2">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 text-xl font-semibold text-blue-600">خدمات من</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            از ایده تا محصول نهایی، با تکنولوژی‌های روز
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
           ✅ طراحی و توسعه رابط‌های کاربری سریع، واکنش‌گرا و بهینه برای افزایش نرخ تبدیل و رضایت کاربران
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pr-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 right-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring" }}
                    >
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </motion.div>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
