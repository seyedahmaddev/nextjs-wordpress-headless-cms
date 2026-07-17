"use client";

import {
  motion,
  useInView,
  animate,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

interface SkillBarProps {

  skill: string;

  percent: number;

  color?: string;
}

export default function SkillBar({

  skill,

  percent,

  color = "from-indigo-500 to-violet-600",

}: SkillBarProps) {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {

    if (!isInView) return;

    const controls = animate(0, percent, {

      duration: 1.8,

      onUpdate(v) {

        setCount(Math.floor(v));

      },

    });

    return () => controls.stop();

  }, [isInView, percent]);

  return (

    <div
      ref={ref}
      className="space-y-2"
    >

      <div className="flex justify-between">

        <span className="font-medium">

          {skill}

        </span>

        <span>

          {count}%

        </span>

      </div>

      <div
        className="
        h-3
        w-full
        rounded-full
        bg-gray-200
        overflow-hidden
        "
      >

        <motion.div

          initial={{
            width: 0,
          }}

          animate={
            isInView
              ? {
                  width: `${percent}%`,
                }
              : {}
          }

          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}

          className={`
          h-full
          rounded-full
          bg-gradient-to-r
          ${color}
          `}
        />

      </div>

    </div>

  );
}