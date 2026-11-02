import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "accent" | "aurora";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-surface border-border text-foreground hover:bg-muted/50",
    secondary: "bg-muted text-muted-foreground border-transparent",
    outline: "border-border text-muted-foreground",
    accent: "bg-aurora-purple/10 text-aurora-purple border-aurora-purple/20",
    aurora: "bg-gradient-to-r from-aurora-purple/20 to-aurora-cyan/20 text-foreground border-aurora-purple/30",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
