"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedText({ text, cname }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin:"-150px", once: false });

  return (
    <motion.h1
      ref={ref}
      className={Boolean(cname) ? cname : "text-4xl font-bold text-gray-800"}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.h1>
  );
}