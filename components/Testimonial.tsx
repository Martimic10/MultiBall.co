"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6000;

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -48 : 48, opacity: 0 }),
};

export default function Testimonial() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const paginate = useCallback((newDirection: number) => {
    setSlide(([prevIndex]) => {
      const nextIndex =
        (prevIndex + newDirection + testimonials.length) % testimonials.length;
      return [nextIndex, newDirection];
    });
  }, []);

  const goTo = (nextIndex: number) => {
    setSlide(([prevIndex]) => [nextIndex, nextIndex > prevIndex ? 1 : -1]);
  };

  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paginate, reducedMotion, paused, index]);

  const current = testimonials[index];

  return (
    <section className="px-5 py-20">
      <div
        className="mx-auto max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div layout className="relative">
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="chunk-panel flex flex-col items-center p-8 text-center sm:p-12"
            >
              <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-ink/70">
                {current.attribution}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            aria-label="Previous testimonial"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={18} />
          </Button>

          <div className="flex items-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.attribution}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-3 w-3 border-2 border-ink transition-colors",
                  i === index ? "bg-gold" : "bg-card/40",
                )}
              />
            ))}
          </div>

          <Button
            type="button"
            variant="secondary"
            size="icon"
            aria-label="Next testimonial"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
