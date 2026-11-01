import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "aurora";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-purple/50 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-primary text-primary-foreground hover:opacity-90 shadow-sm",
      secondary:
        "bg-surface border border-border text-foreground hover:bg-muted/40",
      outline:
        "border border-border/80 bg-transparent hover:bg-surface text-foreground",
      ghost:
        "text-muted-foreground hover:text-foreground hover:bg-muted/40",
      aurora:
        "bg-aurora-gradient text-white shadow-md hover:shadow-lg hover:shadow-aurora-purple/20 hover:opacity-95",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-xs gap-1.5",
      md: "px-4 py-2 text-sm gap-2",
      lg: "px-6 py-3 text-base gap-2.5",
      icon: "w-9 h-9 p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
