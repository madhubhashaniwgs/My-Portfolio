"use client";

import * as React from "react";
import { useToast } from "@/hooks/useToast";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
      aria-live="polite"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl border border-border bg-surface/95 backdrop-blur-md shadow-xl text-foreground text-sm transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
        >
          {t.type === "success" && (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          )}
          {t.type === "error" && (
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          )}
          {t.type === "default" && (
            <Info className="w-5 h-5 text-aurora-cyan shrink-0 mt-0.5" />
          )}

          <div className="flex-1 space-y-0.5">
            <p className="font-semibold">{t.title}</p>
            {t.description && (
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.description}
              </p>
            )}
          </div>

          <button
            onClick={() => dismiss(t.id)}
            type="button"
            className="p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

