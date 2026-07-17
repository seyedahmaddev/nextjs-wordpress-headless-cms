"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { staggerContainer, scaleIn } from "./animations";

const certificates = [
  {
    title: "React Development",
    company: "Meta",
    year: "2024",
  },
  {
    title: "Next.js",
    company: "Vercel",
    year: "2024",
  },
  {
    title: "TypeScript",
    company: "Microsoft",
    year: "2023",
  },
  {
    title: "Frontend Engineer",
    company: "Professional",
    year: "2023",
  },
];

export default function Certificates() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="container mx-auto px-6">

        <Reveal>

          <h2 className="mb-16 text-center text-3xl lg:text-5xl font-black">
            مدارک و دوره ها
          </h2>

        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >

          {certificates.map((item) => (

            <motion.div
              key={item.title}
              variants={scaleIn}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white">
                🏆
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.company}
              </p>

              <span className="mt-6 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                {item.year}
              </span>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}