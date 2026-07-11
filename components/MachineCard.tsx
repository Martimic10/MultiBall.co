"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Machine } from "@/lib/content";

export interface MachineCardProps {
  machine: Machine;
  index?: number;
}

export default function MachineCard({ machine, index = 0 }: MachineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="chunk overflow-hidden bg-card"
    >
      <div className="relative aspect-square w-full overflow-hidden border-b-[3px] border-ink bg-ink">
        <Image
          src={machine.imageSrc}
          alt={machine.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain p-6"
        />
      </div>

      <div className="p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-pink">
          {machine.tagline}
        </p>
        <h3 className="mt-2 font-display text-xl uppercase text-ink">
          {machine.name}
        </h3>
        <p className="mt-3 font-body text-sm text-ink/80">
          {machine.description}
        </p>
        <span className="chunk mt-5 inline-block bg-gold px-3 py-1 font-mono text-sm text-ink">
          {machine.price}
        </span>
      </div>
    </motion.div>
  );
}
