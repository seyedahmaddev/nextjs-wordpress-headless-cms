import Image from "next/image";
import BaleIcon from "@/public/logos/bale.png";
import EitaaIcon from "@/public/logos/Eitaa2.png";
import RubikaIcon from "@/public/logos/logo-rubika.png";
import Link from "next/link";

const navigation = {
  services: [
    { name: "توسعه فرانت‌اند", href: "#" },
    { name: "اپلیکیشن‌های وب", href: "#" },
    { name: "مهاجرت وردپرس", href: "#" },
    { name: "بهینه‌سازی پروژه", href: "#" },
  ],
  links: [
    { name: "درباره من", href: "/aboutme/" },
    { name: "وبلاگ", href: "/blog" },
    { name: "نمونه‌کارها", href: "#" },
    { name: "تماس با من", href: "/مشاوره-طراحی-سایت/" },
  ],
  social: [
    {
      name: "لینکدین",
      href: "https://linkedin.com/in/seyedahmaddv",
      icon: BaleIcon,
    },
    {
      name: "کانال بله",
      href: "https://ble.ir/seyedahmaddev",
      icon: BaleIcon,
    },
    {
      name: "ایتا",
      href: "https://eitaa.com/Seyedahmaddeveloper",
      icon: EitaaIcon,
    },
    {
      name: "آپارات",
      href: "https://www.aparat.com/seyedahmaddev",
      icon: BaleIcon,
    },
    {
      name: "روبیکا",
      href: "https://rubika.ir/seyedahmaddev",
      icon: RubikaIcon,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-24 lg:pt-32">
        {/* اضافه کردن text-center برای موبایل و xl:text-right برای دسکتاپ */}
        <div className="xl:grid xl:grid-cols-4 xl:gap-8 text-center xl:text-right">

          {/* ستون اول: برند */}
          <div className="space-y-8">
            <Link href="/">
              <Image
                alt="طراحی سایت، وب اپلیکیشن داشبورد، توسعه دهنده سیداحمد غلامی"
                src="/logos/Seyed-ahmad-dev3-150x150.png"
                width={64}
                height={64}
                className="mx-auto xl:mx-0" // لوگو در موبایل وسط، در دسکتاپ سمت راست
              />
            </Link>
            {/* افزایش فونت در دسکتاپ با xl:text-base */}
            <p className="text-sm/6 xl:text-base text-balance text-gray-300">
              طراحی و توسعه وب با بهترین تکنولوژی‌های روز دنیا.
            </p>
            {/* شبکه‌های اجتماعی: در موبایل وسط، در دسکتاپ سمت راست */}
            <div className="flex gap-x-6 justify-center xl:justify-start">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    aria-hidden="true"
                    className="size-6"
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ستون دوم: خدمات */}
          <div className="mt-16 xl:mt-0">
            <h3 className="text-sm/6 xl:text-base font-semibold text-white">
              خدمات
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm/6 xl:text-base text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون سوم: لینک‌ها */}
          <div className="mt-16 xl:mt-0">
            <h3 className="text-sm/6 xl:text-base font-semibold text-white">
              لینک‌ها
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm/6 xl:text-base text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون چهارم: نشان نماد اعتماد */}
          {/* در موبایل وسط، در دسکتاپ به انتهای چپ (چپ‌ترین) */}
          <div className="mt-16 flex justify-center xl:mt-0 xl:justify-end">
            <a
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=749275&Code=ky6ltiUsenZquqtbY9OOmgbJbzSYOpRG"
            >
              <img
                referrerPolicy="origin"
                src="https://trustseal.enamad.ir/logo.aspx?id=749275&Code=ky6ltiUsenZquqtbY9OOmgbJbzSYOpRG"
                alt="نماد اعتماد"
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
        </div>

        {/* خط جداکننده و کپی‌رایت */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 xl:text-base text-gray-400 text-center xl:text-right">
            &copy; {new Date().getFullYear()}
            <span>طراحی سایت سید احمد غلامی</span>
            <span className="hidden xl:inline mx-2">|</span>
            <span className="block xl:inline">
              توسعه با Next.js، React، وردپرس و معماری هدلس.
            </span>
            <br className="xl:hidden" />
            <span>تمامی حقوق محفوظ است.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}