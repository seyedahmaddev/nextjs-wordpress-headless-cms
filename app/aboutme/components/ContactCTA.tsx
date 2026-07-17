"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="py-24">

      <div className="container mx-auto px-6">

        <Reveal>

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-indigo-600 to-violet-700 px-10 py-20 text-center text-white">

            <h2 className="text-xl lg:text-5xl font-black">
              بیایید پروژه بعدی شما را بسازیم.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-indigo-100">
              اگر برای توسعه وب‌سایت یا اپلیکیشن خود به یک توسعه‌دهنده 
              React و Next.js نیاز دارید، خوشحال می‌شوم درباره پروژه شما گفتگو کنیم.
            </p>

            <motion.div
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              whileTap={{
                scale: .96,
              }}
              className="mt-12"
            >

              <Link
                href="/%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D8%B3%D8%A7%DB%8C%D8%AA/"
                className="inline-flex rounded-2xl bg-white px-10 py-5 font-bold text-indigo-700 shadow-xl"
              >
                تماس با من
              </Link>

            </motion.div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}