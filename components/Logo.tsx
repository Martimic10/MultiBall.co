"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const markVariants = {
  rest: { rotate: 0, y: 0 },
  hover: { rotate: [0, -14, 10, -6, 0], y: [0, -4, -1, -2, 0] },
};

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <motion.div
        className="flex items-center gap-2"
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          variants={markVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="chunk flex h-10 w-10 items-center justify-center bg-pink font-display text-lg text-card"
        >
          M
        </motion.span>
        <span className="font-display text-lg tracking-wide text-card">
          MULTIBALL CO.
        </span>
      </motion.div>
    </Link>
  );
}
