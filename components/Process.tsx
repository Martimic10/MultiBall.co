"use client";

import { motion } from "framer-motion";
import { Compass, Hammer, Truck, Zap, type LucideIcon } from "lucide-react";
import { processSteps } from "@/lib/content";

const icons: LucideIcon[] = [Compass, Hammer, Zap, Truck];

const accents = [
  { bg: "bg-pink", text: "text-card", ghost: "text-pink/10" },
  { bg: "bg-gold", text: "text-ink", ghost: "text-gold/10" },
  { bg: "bg-cyan", text: "text-ink", ghost: "text-cyan/10" },
  { bg: "bg-pink", text: "text-card", ghost: "text-pink/10" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CHUNK_LG_SHADOW =
  "inset 0 4px 0 0 rgba(255,255,255,0.35), inset 0 -6px 0 0 rgba(0,0,0,0.2), 10px 10px 0 0 #120C24";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden px-5 py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pink/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="chunk-panel mb-4 inline-block bg-gold px-4 py-2 font-mono text-xs uppercase tracking-widest">
            How It&rsquo;s Made
          </span>
          <h2 className="font-display text-3xl uppercase text-card sm:text-4xl">
            The Build Process
          </h2>
          <p className="mt-4 font-body text-base text-card/70">
            Every MULTIBALL CO. cabinet passes through four disciplines
            under one roof before it leaves the shop floor — no
            outsourcing, no shortcuts, no exceptions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline track (desktop only) */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-[3px] -translate-y-1/2 bg-card/15 md:block" />
          <motion.div
            className="pointer-events-none absolute left-[12.5%] top-8 hidden h-[3px] w-[75%] origin-left -translate-y-1/2 bg-gradient-to-r from-pink via-gold to-cyan md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step, i) => {
              const Icon = icons[i];
              const accent = accents[i % accents.length];
              return (
                <motion.div
                  key={step.number}
                  variants={card}
                  whileHover={{ y: -8 }}
                  className="flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div
                    className={`chunk relative z-10 mb-6 flex h-16 w-16 items-center justify-center ${accent.bg} ${accent.text}`}
                  >
                    <Icon size={28} strokeWidth={2.5} />
                    <span className="chunk absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center bg-ink font-mono text-xs text-card">
                      {step.number}
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ boxShadow: CHUNK_LG_SHADOW }}
                    className="chunk-panel relative w-full overflow-hidden p-6"
                  >
                    <span
                      className={`pointer-events-none absolute -right-2 -top-6 select-none font-display text-8xl ${accent.ghost}`}
                    >
                      {step.number}
                    </span>
                    <h3 className="relative font-display text-xl uppercase text-ink">
                      {step.title}
                    </h3>
                    <p className="relative mt-3 font-body text-sm text-ink/80">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
