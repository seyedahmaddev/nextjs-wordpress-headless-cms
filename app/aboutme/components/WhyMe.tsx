"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { scaleIn, staggerContainer } from "./animations";
import {
    MonitorSmartphone,
    SearchCheck,
    Zap,
    Code2,
    Smartphone,
    Handshake
} from "lucide-react";

const items = [
    {
        icon: MonitorSmartphone,
        title: "رابط کاربری مدرن",
        desc: "طراحی زیبا با React و Next.js",
    },
    {
        icon: SearchCheck,
        title: "سئو فنی",
        desc: "رعایت استانداردهای SEO",
    },
    {
        icon: Zap,
        title: "سرعت بالا",
        desc: "بهینه‌سازی کامل عملکرد سایت",
    },
    {
        icon: Code2,
        title: "کدنویسی استاندارد",
        desc: "معماری تمیز و قابل توسعه",
    },
    {
        icon: Smartphone,
        title: "ریسپانسیو",
        desc: "نمایش صحیح در همه دستگاه‌ها",
    },
    {
        icon: Handshake,
        title: "پشتیبانی",
        desc: "همراهی تا پایان پروژه",
    },
];

export default function WhyMe() {
    return (
        <section className="bg-slate-50 py-24">

            <div className="container mx-auto px-6">

                <Reveal>

                    <h2 className="mb-16 text-center text-3xl lg:text-5xl font-black">
                        چرا مرا انتخاب کنید
                    </h2>

                </Reveal>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
                >

                    {items.map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                variants={scaleIn}
                                whileHover={{
                                    y: -10,
                                    scale: 1.04,
                                }}
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    text-center
                                    rounded-3xl
                                    bg-white
                                    p-8
                                    shadow-sm
                                    "
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                                    <Icon size={28} strokeWidth={2.2} />
                                </div>

                                <h3 className="text-xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-8 text-gray-600">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}

                </motion.div>

            </div>

        </section>
    );
}