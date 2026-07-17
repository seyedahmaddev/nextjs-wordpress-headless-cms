"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

interface Props {
  image: string;
}

export default function AboutSection({ image }: Props) {
  return (
    <section className="py-24">

      <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">

        <Reveal direction="left">

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-3xl bg-indigo-500/10 blur-3xl" />

            <Image
              src={"/seyedahmad-Web-developer-nextjs.jpeg"}
              alt="About"
              width={650}
              height={750}
              className="relative rounded-3xl shadow-2xl"
            />

          </motion.div>

        </Reveal>

        <Reveal direction="right">

          <div className="space-y-8">

            <span className="rounded-full bg-indigo-100 px-4 py-2 mb-4 text-sm font-semibold text-indigo-600">
              درباره من
            </span>

            <h2 className="text-2xl my-4 font-black leading-tight lg:text-4xl">
              توسعه‌دهنده وب با تمرکز بر فرانت‌اند
            </h2>

            <p className="leading-9 text-gray-600">
              در طراحی و توسعه وب‌سایت‌های مدرن با React، Next.js و TypeScript 
              تخصص دارم و همواره سرعت، سئو و تجربه کاربری را در اولویت قرار می‌دهم.
            </p>

            <p className="leading-9 text-gray-600">
              هدف من توسعه وب‌سایت‌هایی با معماری استاندارد،
               کدنویسی تمیز و رابط کاربری حرفه‌ای است.
            </p>

            <div className="grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-slate-50 p-6">

                <h4 className="font-bold">
                  کدنویسی استاندارد
                </h4>

                <p className="mt-3 text-gray-600">
                  کدی تمیز، قابل نگهداری و توسعه‌پذیر.
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-6">

                <h4 className="font-bold">
                  سئو فنی
                </h4>

                <p className="mt-3 text-gray-600">
                  بهینه‌سازی ساختار سایت برای موتورهای جستجو.
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-6">

                <h4 className="font-bold">
                  سرعت و عملکرد
                </h4>

                <p className="mt-3 text-gray-600">
                  بهینه‌سازی سرعت و شاخص‌های Core Web Vitals.
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-6">

                <h4 className="font-bold">
                  طراحی واکنش‌گرا
                </h4>

                <p className="mt-3 text-gray-600">
                  نمایش صحیح در موبایل، تبلت و دسکتاپ.
                </p>

              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}