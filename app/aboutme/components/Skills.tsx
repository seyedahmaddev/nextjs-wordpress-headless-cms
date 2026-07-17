"use client";

import Reveal from "./Reveal";
import SkillBar from "./SkillBar";

const skills = [
  { skill: "Next.js", percent: 95 },
  { skill: "React", percent: 93 },
  { skill: "TypeScript", percent: 90 },
  { skill: "JavaScript", percent: 95 },
  { skill: "Tailwind CSS", percent: 92 },
  { skill: "Material UI", percent: 90 },
  { skill: "WordPress", percent: 88 },
  { skill: "SEO", percent: 85 },
];

export default function Skills() {
  return (
    <section className="py-24">

      <div className="container mx-auto max-w-5xl px-6">

        <Reveal>

          <div className="mb-16 text-center">

            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
              مهارت‌ها و تخصص‌ها
            </span>

            <h2 className="mt-6 text-2xl lg:text-5xl font-black">
              تخصص‌های فنی من
            </h2>

            <p className="mt-6 text-gray-600">
             در پروژه‌های خود از فناوری‌های مدرن فرانت‌اند برای توسعه وب‌سایت‌ها و اپلیکیشن‌های سریع، واکنش‌گرا و بهینه استفاده می‌کنم.
            </p>

          </div>

        </Reveal>

        <div className="space-y-8">

          {skills.map((skill) => (
            <Reveal key={skill.skill}>
              <SkillBar
                skill={skill.skill}
                percent={skill.percent}
              />
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}