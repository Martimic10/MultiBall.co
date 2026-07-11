"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats, type Stat } from "@/lib/content";

function useCountUp(target: number, active: boolean, duration = 1.4) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const value = useCountUp(stat.value, inView);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 px-6 py-8 text-center"
    >
      <span className="font-mono text-4xl text-gold sm:text-5xl">
        {value}
        {stat.suffix ?? ""}
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-card/70">
        {stat.label}
      </span>
    </div>
  );
}

export default function Scoreboard() {
  return (
    <section id="stats" className="bg-ink px-5 py-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 divide-y-2 divide-dashed divide-card/20 sm:grid-cols-4 sm:divide-y-0 sm:divide-x-2">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
