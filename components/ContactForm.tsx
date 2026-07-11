"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fieldClass =
  "w-full border-[3px] border-ink rounded-chunk bg-card px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-gold/50";

type Status = "idle" | "submitting" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 700);
  };

  return (
    <div className="chunk-panel relative overflow-hidden p-8">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <div className="chunk mb-5 flex h-16 w-16 items-center justify-center bg-gold text-ink">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-display text-xl uppercase text-ink">
              Message Sent
            </h3>
            <p className="mt-3 max-w-sm font-body text-sm text-ink/70">
              Thanks for reaching out. A member of our build team will get
              back to you within one business day.
            </p>
            <Button
              type="button"
              variant="secondary"
              className="mt-6"
              onClick={() => setStatus("idle")}
            >
              SEND ANOTHER MESSAGE
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink/70"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className={fieldClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink/70"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink/70"
                >
                  Phone <span className="normal-case text-ink/40">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(414) 555-0142"
                  className={fieldClass}
                />
              </div>
              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink/70"
                >
                  Project Type
                </label>
                <select id="projectType" name="projectType" className={fieldClass}>
                  <option>New Custom Build</option>
                  <option>Restoration / Repair</option>
                  <option>Parts &amp; Toys</option>
                  <option>Something Else</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink/70"
              >
                Tell Us About Your Build
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Theme, budget, timeline — the more detail, the better."
                className={`${fieldClass} resize-none`}
              />
            </div>

            <Button
              type="submit"
              variant="accent"
              className="mt-2 self-start"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
