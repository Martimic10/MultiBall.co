import Link from "next/link";
import { machines } from "@/lib/content";
import { Button } from "@/components/ui/button";
import MachineCard from "@/components/MachineCard";

export default function MachineGallery() {
  const featured = machines.slice(0, 3);

  return (
    <section id="machines" className="bg-bgAlt px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="chunk-panel mb-4 inline-block bg-cyan px-4 py-2 font-mono text-xs uppercase tracking-widest">
            The Lineup
          </span>
          <h2 className="font-display text-3xl uppercase text-card sm:text-4xl">
            Machines On The Floor
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((machine, i) => (
            <MachineCard key={machine.id} machine={machine} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="secondary">
            <Link href="/machines">VIEW ALL {machines.length} MACHINES</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
