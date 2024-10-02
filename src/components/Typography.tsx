import React from "react";
import { cn } from "@/lib/utils"; // Ensure you have this utility function for class name merging

export const Typography: React.FC<{
  variant: string;
  className?: string;
  children: React.ReactNode;
}> = ({ variant, className, children }) => {
  const baseStyles = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-left",
    h2: "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left",
    h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-left",
    p: "text-muted-foreground text-left",
  };

  const Element = variant as keyof JSX.IntrinsicElements;
  const baseClassName = baseStyles[variant as keyof typeof baseStyles] || "";

  return (
    <Element className={cn(baseClassName, "text-left !important", className)}>
      {children}
    </Element>
  );
};
