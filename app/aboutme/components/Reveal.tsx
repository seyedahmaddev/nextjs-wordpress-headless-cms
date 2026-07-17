"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
} from "./animations";

type Direction =
  | "up"
  | "left"
  | "right"
  | "scale";

interface Props {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
}

export default function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: Props) {
  const variants = {
    up: fadeUp,
    left: fadeLeft,
    right: fadeRight,
    scale: scaleIn,
  };

  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}