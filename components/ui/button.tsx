"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "chunk inline-flex items-center justify-center whitespace-nowrap font-display uppercase tracking-wide select-none cursor-pointer disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gold text-ink",
        secondary: "bg-card text-ink",
        accent: "bg-cyan text-ink",
        pink: "bg-pink text-card",
      },
      size: {
        default: "px-6 py-3 text-base",
        sm: "px-4 py-2 text-sm",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const MotionSlot = motion.create(Slot);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? MotionSlot : motion.button;
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        whileTap={{
          x: 4,
          y: 4,
          boxShadow:
            "inset 0 2px 0 0 rgba(255,255,255,0.18), inset 0 -2px 0 0 rgba(0,0,0,0.28), 2px 2px 0 0 #120C24",
        }}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
