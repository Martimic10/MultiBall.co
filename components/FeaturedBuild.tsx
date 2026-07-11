"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export interface FeaturedBuildProps {
  imageSrc?: string;
  imageAlt?: string;
}

const checklist = [
  "Solid Baltic birch cabinet, powder-coated hardware",
  "Custom hand-painted backglass art",
  "Hand-wired switches, coils, and LED matrix",
  "60-day shop-tested warranty on every build",
];

export default function FeaturedBuild({
  imageSrc,
  imageAlt = "MULTIBALL CO. featured custom pinball machine build",
}: FeaturedBuildProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(imageSrc) && !imageFailed;

  return (
    <section id="featured" className="bg-bg px-5 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative flex items-center justify-center">
          {/* Radial glow plate */}
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-pink/30 blur-3xl sm:h-96 sm:w-96" />
          {/* Pedestal ellipse */}
          <div className="pointer-events-none absolute bottom-2 h-8 w-56 rounded-full bg-black/50 blur-xl sm:w-72" />

          {showImage ? (
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="chunk relative aspect-square w-full max-w-md overflow-hidden bg-card"
            >
              <Image
                src={imageSrc as string}
                alt={imageAlt}
                fill
                sizes="(min-width: 768px) 448px, 100vw"
                className="object-contain"
                onError={() => setImageFailed(true)}
              />
            </motion.div>
          ) : (
            <div className="chunk relative flex aspect-square w-full max-w-md flex-col items-center justify-center gap-3 border-dashed bg-card/60 p-8 text-center">
              <p className="font-display text-lg uppercase text-ink">
                Add Your Build Graphic
              </p>
              <p className="font-mono text-sm text-ink/70">
                Drop a transparent PNG, 1200px+ wide, into the
                FeaturedBuild imageSrc prop to showcase a custom machine
                render here.
              </p>
            </div>
          )}
        </div>

        <div>
          <span className="chunk-panel mb-4 inline-block bg-pink px-4 py-2 font-mono text-xs uppercase tracking-widest text-card">
            Featured Build
          </span>
          <h2 className="font-display text-3xl uppercase leading-tight text-card sm:text-4xl">
            The Starbreaker
          </h2>
          <p className="mt-4 font-body text-base text-card/80 sm:text-lg">
            Our flagship deep-space table, built to order with a
            hand-painted backglass and a four-ball wizard mode. Every
            unit is fabricated, wired, and bench-tested in our shop
            before it ships.
          </p>

          <ul className="gold-bullets mt-6 font-body text-card/90">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Button asChild variant="accent" className="mt-8">
            <Link href="/contact">REQUEST A BUILD</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
