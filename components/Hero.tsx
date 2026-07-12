"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [inserted, setInserted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCoinSlot = () => {
    setInserted(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setInserted(false), 1800);
  };

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:pb-24 sm:pt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
        <div className="text-center md:text-left">
          <span className="chunk-panel mx-auto mb-6 inline-block bg-cyan px-4 py-2 font-mono text-xs uppercase tracking-widest md:mx-0">
            Est. 1987 &middot; Hand-Built In-House
          </span>

          <h1 className="marquee-text font-display text-4xl uppercase leading-tight text-card sm:text-6xl md:text-4xl lg:text-5xl">
            Full Tilt.
            <br />
            Zero Shortcuts.
          </h1>

          <p className="mx-auto mt-8 max-w-xl font-body text-base text-card/80 sm:text-lg md:mx-0">
            MULTIBALL CO. designs, fabricates, and wires custom pinball
            machines and arcade cabinets for collectors, arcades, and
            basements that mean business.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <Button
              type="button"
              onClick={handleCoinSlot}
              className="min-w-[240px] overflow-hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={inserted ? "started" : "insert"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {inserted ? "PLAYER 1 START" : "INSERT COIN"}
                </motion.span>
              </AnimatePresence>
            </Button>

            <Button asChild variant="secondary" className="min-w-[240px]">
              <Link href="/machines">VIEW MACHINES</Link>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="pointer-events-none absolute bottom-4 h-10 w-64 rounded-full bg-black/50 blur-2xl" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative aspect-[2/3] w-full max-w-sm"
          >
            <Image
              src="/Pinball-2.png"
              alt="MULTIBALL CO. Rock N Roll custom pinball machine"
              fill
              sizes="(min-width: 768px) 384px, 80vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
