"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroImage, fadeLeft, fadeRight, floating } from "./animations";

interface HeroProps {
    image: string;
}

export default function Hero({ image }: HeroProps) {
    return (
        <section className="relative overflow-hidden py-24">

            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />

            <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

            <div className="container relative mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">

                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    <div className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                        توسعه دهنده فرانت اند
                    </div>

                    <h1 className="text-xl font-extrabold leading-tight lg:text-4xl">
                        سلام، من
                        <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                            سید احمد غلامی
                        </span>
                        طراح سایت و توسعه دهنده وب هستم
                    </h1>

                    <p className="max-w-xl text-lg leading-9 text-gray-600">
                        متخصص طراحی و توسعه وب‌سایت‌های مدرن با React، Next.js و TypeScript با تمرکز بر سرعت، سئو و معماری استاندارد.
                    </p>

                    <div className="flex flex-wrap gap-4">

                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                            }}
                            whileTap={{
                                scale: .96,
                            }}
                        >
                            <Link
                                href="/مشاوره-طراحی-سایت"
                                className="rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-lg shadow-indigo-500/30 transition"
                            >
                                تماس با من
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                            }}
                        >
                            <Link
                                href="/portfolio"
                                className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold"
                            >
                                نمونه کارهای من
                            </Link>
                        </motion.div>

                    </div>

                </motion.div>

                <motion.div
                    variants={heroImage}
                    initial="hidden"
                    animate="visible"
                    className="relative flex justify-center"
                >

                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        whileHover={{
                            scale: 1.05,
                            rotate: 1,
                        }}
                        className="relative"
                    >

                        <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-[80px]" />

                        <div className="relative overflow-hidden rounded-full border-8 border-white shadow-2xl">

                            <Image
                                src={"/logo.png"}
                                alt="Seyed Ahmad Gholami"
                                width={420}
                                height={420}
                                priority
                                className="object-cover"
                            />

                        </div>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}