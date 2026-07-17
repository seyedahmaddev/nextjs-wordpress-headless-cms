"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";
import { staggerContainer, scaleIn } from "./animations";

const stats = [
  {
    number: 15,
    suffix: "+",
    title: "سال تجربه",
  },
  {
    number: 20,
    suffix: "+",
    title: "پروژه کامل شده",
  },
  {
    number: 50,
    suffix: "+",
    title: "مشتری راضی",
  },
  {
    number: 360,
    suffix: "/درجه",
    title: "کدنویسی استاندارد",
  },
];

export default function Stats() {
  return (
    <section className="py-20">

      <div className="container mx-auto px-6">

        <Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
          >

            {stats.map((item) => (

              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border bg-white p-10 text-center shadow-sm"
              >

                <h3 className="text-5xl font-black text-indigo-600">

                  <AnimatedCounter
                    value={item.number}
                    suffix={item.suffix}
                  />

                </h3>

                <p className="mt-4 text-gray-600">

                  {item.title}

                </p>

              </motion.div>

            ))}

          </motion.div>

        </Reveal>

      </div>

    </section>
  );
}