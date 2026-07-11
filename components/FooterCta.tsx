"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import {
  contactInfo,
  navLinks,
  shopHours,
  socialLinks,
  type SocialLink,
} from "@/lib/content";

const socialIcons: Record<SocialLink["icon"], LucideIcon> = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
};

export default function FooterCta() {
  return (
    <footer className="bg-bgAlt">
      <div className="px-5 pb-16 pt-20 text-center">
        <h2 className="marquee-text mx-auto max-w-4xl font-display text-3xl uppercase leading-tight text-card sm:text-5xl">
          Ready To Build
          <br />
          Something Loud?
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-body text-base text-card/80">
          Custom builds start at a 6-week lead time. Tell us your theme,
          your budget, and how many multiballs you can handle.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="pink" className="min-w-[240px]">
            <a href={`mailto:${contactInfo.email}`}>START A BUILD</a>
          </Button>
          <Button asChild variant="secondary" className="min-w-[240px]">
            <Link href="/machines">SEE THE LINEUP</Link>
          </Button>
        </div>
      </div>

      <div className="border-t-[3px] border-ink px-5 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs font-body text-sm text-card/70">
              Custom pinball machines and arcade cabinets, hand-built
              in-house since 1987.
            </p>
            <div className="mt-5 flex gap-3">
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

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-card/80 transition-colors hover:text-card"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-card/80">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-cyan" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-card"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-cyan" />
                <a
                  href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-card"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold">
              Shop Hours
            </h3>
            <ul className="mt-4 space-y-2 font-mono text-sm text-card/80">
              {shopHours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span>{entry.day}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-[3px] border-ink px-5 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 font-mono text-xs uppercase tracking-widest text-card/60 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} MULTIBALL CO. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-card">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-card">
              Terms of Service
            </a>
          </div>
          <span>A LABS PROJECT BY FULL TILT STUDIO</span>
        </div>
      </div>
    </footer>
  );
}
