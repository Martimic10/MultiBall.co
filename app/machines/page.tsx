import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterCta from "@/components/FooterCta";
import MachineCard from "@/components/MachineCard";
import { machines } from "@/lib/content";

export const metadata: Metadata = {
  title: "Machines | MULTIBALL CO.",
  description:
    "Browse the full MULTIBALL CO. lineup of hand-built custom pinball machines and arcade cabinets, with pricing.",
};

export default function MachinesPage() {
  return (
    <main>
      <Nav />

      <section className="px-5 pb-16 pt-16 sm:pt-20">
        <div className="mx-auto max-w-6xl text-center">
          <span className="chunk-panel mb-4 inline-block bg-cyan px-4 py-2 font-mono text-xs uppercase tracking-widest">
            The Full Lineup
          </span>
          <h1 className="font-display text-3xl uppercase text-card sm:text-5xl">
            Machines On The Floor
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-card/70">
            Every table is hand-built to order in our shop. Prices reflect
            a standard build — custom art, toys, and finishes are quoted
            separately.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine, i) => (
            <MachineCard key={machine.id} machine={machine} index={i} />
          ))}
        </div>
      </section>

      <FooterCta />
    </main>
  );
}
