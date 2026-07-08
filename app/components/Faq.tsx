import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "چه نوع پروژه‌هایی انجام می‌دهید؟",
    answer:
      "طراحی و توسعه وب‌سایت‌های شخصی، شرکتی، فروشگاهی، پنل‌های مدیریتی و اپلیکیشن‌های تحت وب با استفاده از React و Next.js انجام می‌دهم."
  },
  {
    question: "چرا برای توسعه سایت از Next.js استفاده کنیم؟",
    answer:
      "Next.js امکاناتی مانند سرعت بالا، سئو بهتر، رندر سمت سرور، تجربه کاربری بهتر و معماری قابل توسعه را فراهم می‌کند."
  },
  {
    question: "آیا امکان انتقال سایت وردپرسی به معماری مدرن وجود دارد؟",
    answer:
      "بله. می‌توان سایت‌های وردپرسی را به معماری Headless منتقل کرد؛ به شکلی که محتوا حفظ شود و بخش رابط کاربری با تکنولوژی‌های مدرن توسعه پیدا کند."
  },
  {
    question: "هزینه طراحی سایت چقدر است؟",
    answer:
      "هزینه پروژه به امکانات، پیچیدگی، طراحی، زمان توسعه و نیازهای فنی بستگی دارد. بعد از بررسی نیازمندی‌ها، برآورد دقیق ارائه می‌شود."
  },
  {
    question: "مدت زمان اجرای پروژه چقدر است؟",
    answer:
      "زمان اجرای پروژه به اندازه و امکانات آن بستگی دارد. پروژه‌های ساده معمولاً سریع‌تر و پروژه‌های بزرگ‌تر طی چند مرحله اجرا می‌شوند."
  },
  {
    question: "آیا سایت‌ها واکنش‌گرا و مناسب موبایل هستند؟",
    answer:
      "بله. تمام پروژه‌ها با رویکرد Mobile First توسعه داده می‌شوند تا روی موبایل، تبلت و دسکتاپ تجربه مناسبی داشته باشند."
  },
  {
    question: "آیا سئو در طراحی سایت رعایت می‌شود؟",
    answer:
      "بله. ساختار صفحات، سرعت سایت، متاتگ‌ها، داده‌های ساختاریافته و اصول فنی سئو در زمان توسعه در نظر گرفته می‌شوند."
  },
  {
    question: "آیا بعد از تحویل پروژه پشتیبانی ارائه می‌دهید؟",
    answer:
      "بله. امکان پشتیبانی، رفع مشکل، بهبود عملکرد و توسعه قابلیت‌های جدید بعد از تحویل پروژه وجود دارد."
  },
  {
    question: "آیا کد پروژه تحویل داده می‌شود؟",
    answer:
      "بله. سورس پروژه و ساختار کد به صورت کامل تحویل داده می‌شود تا مالکیت پروژه در اختیار شما باشد."
  },
  {
    question: "آیا پروژه‌های قدیمی قابل بهینه‌سازی هستند؟",
    answer:
      "بله. بازبینی کد، ریفکتور، افزایش سرعت، بهبود معماری و ارتقای تجربه کاربری پروژه‌های موجود انجام می‌شود."
  },
  {
    question: "آیا فقط فرانت‌اند انجام می‌دهید؟",
    answer:
      "تمرکز اصلی روی توسعه فرانت‌اند مدرن با React و Next.js است و با معماری‌های Headless و اتصال به بک‌اند نیز کار می‌کنم."
  },
  {
    question: "برای شروع همکاری چه اطلاعاتی لازم است؟",
    answer:
      "کافی است ایده، هدف پروژه، امکانات مورد نیاز و زمان‌بندی مدنظر خود را ارسال کنید تا مسیر مناسب پیشنهاد شود."
  },
  {
    question: "آیا سایت‌های سریع‌تر باعث تجربه بهتر کاربران می‌شوند؟",
    answer:
      "بله. سرعت لود، عملکرد صفحات و تجربه کاربری از عوامل مهم موفقیت یک وب‌سایت هستند و در توسعه پروژه‌ها اولویت دارند."
  },
  {
    question: "آیا امکان توسعه فروشگاه اینترنتی وجود دارد؟",
    answer:
      "بله. فروشگاه‌ها و سیستم‌های تحت وب قابل توسعه هستند و می‌توان امکاناتی مانند مدیریت محصولات، پرداخت و پنل مدیریت را پیاده‌سازی کرد."
  }
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            بیشترین سوالاتی که از من پرسیده میشود
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}