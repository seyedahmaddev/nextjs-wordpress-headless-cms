"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import {
  FaReact,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiVercel,
  SiPostman,
  SiStrapi,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "text-sky-500",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "text-blue-500",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    color: "text-sky-700",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-gray-900 dark:text-white",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "text-black dark:text-white",
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "text-pink-500",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-500",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-blue-500",
  },
  {
    name: "Strapi",
    icon: SiStrapi,
    color: "text-indigo-600",
  },
];

export default function TechStack() {
  return (
    <section className="py-24">

      <div className="container mx-auto px-6">

        <Reveal>

          <div className="mb-14 text-center">

            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              ابزارها و فناوری‌ها
            </span>

            <h2 className="mt-6 text-2xl lg:text-5xl font-black">
              تکنولوژی‌هایی که با آن‌ها کار می‌کنم
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
              در پروژه‌های واقعی از این ابزارها و فناوری‌ها برای توسعه
              وب‌سایت‌ها و اپلیکیشن‌های مدرن، سریع و مقیاس‌پذیر استفاده می‌کنم.
            </p>

          </div>

        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {technologies.map((item) => {

            const Icon = item.icon;

            return (

              <Reveal key={item.name}>

                <motion.div

                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: .97,
                  }}

                  className="
                  group
                  flex
                  flex-col
                  items-center
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-indigo-500
                  hover:shadow-xl
                  "

                >

                  <motion.div

                    whileHover={{
                      rotate: 360,
                    }}

                    transition={{
                      duration: .6,
                    }}

                    className={item.color}

                  >

                    <Icon size={48} />

                  </motion.div>

                  <h3 className="mt-6 text-lg font-bold">

                    {item.name}

                  </h3>

                </motion.div>

              </Reveal>

            );

          })}

        </div>

      </div>

    </section>
  );
}