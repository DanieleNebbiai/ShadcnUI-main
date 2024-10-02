import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground font-bold text-xl border-4 border-border hover:bg-primary-foreground hover:text-primary transition-colors",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 font-bold text-xl border-4 border-border hover:bg-destructive-foreground hover:text-destructive transition-colors",
        outline:
          "border border-input bg-card hover:bg-primary hover:text-accent-foreground text-primary font-bold text-xl border-4 border-border transition-colors",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-foreground font-bold text-xl border-4 border-border hover:text-secondary transition-colors",
        ghost:
          "bg-transparent text-primary font-bold text-xl hover:border-4 border-border transition-colors",
        link: "text-primary underline-offset-4 hover:underline font-bold text-xl border-4 border-border transition-colors hover:text-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
        brutalist: "py-2 w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
