"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/70 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 34 }}
            className="fixed inset-y-0 right-0 z-50 flex h-dvh w-[80%] max-w-xs flex-col border-l-[3px] border-ink bg-bgAlt px-6 pb-8 pt-24 shadow-chunkLg md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="chunk-panel block px-4 py-3 font-mono text-sm uppercase tracking-widest text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto font-mono text-[10px] uppercase leading-relaxed tracking-widest text-card/50">
              Est. 1987
              <br />
              Hand-Built In-House
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[70] border-b-[3px] border-ink bg-bg/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-sm uppercase tracking-wide text-card transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          variant="accent"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </nav>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
