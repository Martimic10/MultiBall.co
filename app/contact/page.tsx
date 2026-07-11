import type { Metadata } from "next";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube, type LucideIcon } from "lucide-react";
import Nav from "@/components/Nav";
import FooterCta from "@/components/FooterCta";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import {
  contactInfo,
  shopHours,
  socialLinks,
  type SocialLink,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | MULTIBALL CO.",
  description:
    "Get in touch with MULTIBALL CO. to start a custom pinball or arcade cabinet build, hand-built in-house since 1987.",
};

const socialIcons: Record<SocialLink["icon"], LucideIcon> = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
};

export default function ContactPage() {
  return (
    <main>
      <Nav />

      <section className="px-5 pb-16 pt-16 sm:pt-20">
        <div className="mx-auto max-w-6xl text-center">
          <span className="chunk-panel mb-4 inline-block bg-pink px-4 py-2 font-mono text-xs uppercase tracking-widest text-card">
            Get In Touch
          </span>
          <h1 className="font-display text-3xl uppercase text-card sm:text-5xl">
            Let&rsquo;s Build Something
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-card/70">
            Tell us about the build you have in mind and a member of our
            shop will follow up with next steps and a quote.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="chunk-panel p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-pink">
                Direct Contact
              </h3>
              <ul className="mt-4 space-y-3 font-body text-sm text-ink/80">
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5 shrink-0 text-pink" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="transition-colors hover:text-ink"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 shrink-0 text-pink" />
                  <a
                    href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
                    className="transition-colors hover:text-ink"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-pink" />
                  <span>{contactInfo.address}</span>
                </li>
              </ul>
            </div>

            <div className="chunk-panel p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-pink">
                Shop Hours
              </h3>
              <ul className="mt-4 space-y-2 font-mono text-sm text-ink/80">
                {shopHours.map((entry) => (
                  <li key={entry.day} className="flex justify-between gap-4">
                    <span>{entry.day}</span>
                    <span>{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="chunk-panel p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-pink">
                Follow Us
              </h3>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <Button
                      key={social.label}
                      asChild
                      variant="secondary"
                      size="icon"
                    >
                      <a href={social.href} aria-label={social.label}>
                        <Icon size={18} />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCta />
    </main>
  );
}
