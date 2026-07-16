import Image from "next/image";
import BaleIcon from "@/public/logos/bale.png";
// TODO: آیکون‌های واقعی هر پلتفرم رو اضافه کن
// import LinkedinIcon from "@/public/logos/linkedin.png";
import EitaaIcon from "@/public/logos/Eitaa2.png";
// import AparatIcon from "@/public/logos/aparat.png";
import RubikaIcon from "@/public/logos/logo-rubika.png";

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
      icon: BaleIcon, // TODO: با LinkedinIcon جایگزین کن
    },
    {
      name: "کانال بله",
      href: "https://ble.ir/seyedahmaddev",
      icon: BaleIcon,
    },
    {
      name: "ایتا",
      href: "لینک ایتا",
      icon: EitaaIcon, // TODO: با EitaaIcon جایگزین کن
    },
    {
      name: "آپارات",
      href: "لینک کانال آپارات",
      icon: BaleIcon, // TODO: با AparatIcon جایگزین کن
    },
    {
      name: "روبیکا",
      href: "لینک روبیکا",
      icon: RubikaIcon, // TODO: با RubikaIcon جایگزین کن
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              alt="طراحی سایت، وب اپلیکیشن داشبورد، توسعه دهنده سیداحمد غلامی"
              src="/logos/Seyed-ahmad-dev3-150x150.png"
              width={24} height={24}
            />
            <p className="text-sm/6 text-balance text-gray-300">
              طراحی و توسعه وب با بهترین تکنولوژی‌های روز دنیا.
            </p>
            <div className="flex gap-x-6">
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
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">خدمات</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">لینک‌ها</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-400">
            &copy; {new Date().getFullYear()} سید احمد. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}