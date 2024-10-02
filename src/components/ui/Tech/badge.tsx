import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground font-bold  hover:text-primary-foreground/80 hover:bg-primary/80 transition-colors",
        secondary:
          "bg-secondary text-secondary-foreground font-bold  hover:text-secondary-foreground/80 hover:bg-secondary/80 transition-colors",
        destructive:
          "bg-destructive text-destructive-foreground font-bold  hover:text-destructive-foreground/80 hover:bg-destructive/80 transition-colors",
        outline: "bg-card text-foreground border-4 border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
