import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedBuild from "@/components/FeaturedBuild";
import Process from "@/components/Process";
import MachineGallery from "@/components/MachineGallery";
import Scoreboard from "@/components/Scoreboard";
import Testimonial from "@/components/Testimonial";
import FooterCta from "@/components/FooterCta";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeaturedBuild
        imageSrc="/Pinball-machine.png"
        imageAlt="The Starbreaker custom pinball machine, hand-built by MULTIBALL CO."
      />
      <Process />
      <MachineGallery />
      <Scoreboard />
      <Testimonial />
      <FooterCta />
    </main>
  );
}
