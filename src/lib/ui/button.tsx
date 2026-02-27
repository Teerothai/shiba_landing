import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--kawaii-pink)] text-white hover:bg-[var(--kawaii-pink)]/90 shadow-kawaii-sm hover:shadow-kawaii-md",
        secondary:
          "bg-white border-2 border-[var(--kawaii-pink)] text-[var(--kawaii-brown)] hover:bg-[var(--kawaii-light-pink)]/10",
        outline:
          "border-2 border-[var(--kawaii-brown)]/30 bg-transparent text-[var(--kawaii-brown)] hover:bg-[var(--kawaii-brown)] hover:text-white",
        ghost:
          "text-[var(--kawaii-brown)] hover:bg-[var(--kawaii-light-pink)]/20",
        link: "text-[var(--kawaii-pink)] underline-offset-4 hover:underline",
        mint: "bg-[var(--kawaii-mint-green)] text-white hover:bg-[var(--kawaii-mint-green)]/90 shadow-kawaii-sm",
        gold: "bg-[var(--kawaii-gold)] text-[var(--kawaii-brown)] hover:bg-[var(--kawaii-gold)]/90 shadow-kawaii-sm",
        purple:
          "bg-[var(--kawaii-soft-purple)] text-white hover:bg-[var(--kawaii-soft-purple)]/90 shadow-kawaii-sm",
        line: "bg-[#06C755] text-white hover:bg-[#05b34c] shadow-md hover:shadow-lg",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        "2xl": "h-16 px-12 text-xl md:h-20 md:px-14 md:text-2xl",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-xl",
        full: "rounded-full",
        lg: "rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
