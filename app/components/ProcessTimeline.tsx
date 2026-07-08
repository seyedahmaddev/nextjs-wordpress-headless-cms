const steps = [
  {
    title: "تحلیل نیازمندی‌ها",
    description: "بررسی اهداف کسب‌وکار و نیازهای پروژه",
  },
  {
    title: "طراحی راهکار",
    description: "انتخاب معماری مناسب و طراحی ساختار صفحات",
  },
  {
    title: "توسعه و پیاده‌سازی",
    description: "پیاده‌سازی رابط کاربری و اتصال به API",
  },
  {
    title: "تحویل و پشتیبانی",
    description: "تست، استقرار و بهینه‌سازی نهایی",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-white">
            فرآیند همکاری
          </h2>

          <h3 className="mt-2 text-3xl font-bold text-white">
            مسیر اجرای پروژه
          </h3>
        </div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex gap-6">
              {/* خط عمودی */}
              {index !== steps.length - 1 && (
                <div className="absolute right-5 top-12 h-full w-px bg-gray-200" />
              )}

              {/* دایره شماره */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {index + 1}
              </div>

              {/* محتوا */}
              <div className="pb-8">
                <h4 className="text-lg font-semibold text-white">
                  {step.title}
                </h4>

                <p className="mt-2 text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}