


export default function Hero() {
    

    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 ">
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                />
                <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <h1 className="max-w-2xl text-xl font-semibold tracking-tight text-balance text-gray-900 sm:text-3xl lg:col-span-2 xl:col-auto">
                           سید احمد | توسعه‌دهنده React & Next.js
                        </h1>
                        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                من سیداحمد هستم، توسعه‌دهنده فرانت‌اند با تمرکز روی ساخت وب‌سایت‌ها و اپلیکیشن‌های مدرن با
                                Next.js، TypeScript و معماری Headless CMS مانند Strapi.
                                هدف من ساخت محصولاتی است که سریع، بهینه برای سئو و
                                قابل توسعه در مقیاس بالا باشند؛ از لندینگ‌پیج‌های سریع تا سیستم‌های محتوامحور در مقیاس واقعی.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    همین حالا شروع کنید
                                </a>
                                <a href="Techs" className="text-sm/6 font-semibold text-gray-900">
                                   تکنولوژی ها<span aria-hidden="true">←</span>
                                </a>
                            </div>
                        </div>
                        <img
                            alt="سید احمد توسعه دهنده و طراحی سایت نکست جی اس و ری اکت و وردپرس و استراپی"
                            src="/seyedahmad-Web-developer-nextjs.jpeg"
                            className="aspect-6/5 w-full max-w-lg rounded-2xl object-cover  lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 mt-16"
                        />
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />            </div>
        </div>
    );
}