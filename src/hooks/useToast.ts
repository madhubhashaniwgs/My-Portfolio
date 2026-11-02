"use client";

import * as React from "react";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  type?: "default" | "success" | "error";
}

type ToastListener = (toasts: ToastItem[]) => void;

let toastsList: ToastItem[] = [];
const listeners: ToastListener[] = [];

function notify() {
  listeners.forEach((listener) => listener([...toastsList]));
}

export function toast({
  title,
  description,
  type = "default",
  duration = 4000,
}: {
  title: string;
  description?: string;
  type?: "default" | "success" | "error";
  duration?: number;
}) {
  const id = Math.random().toString(36).substring(2, 9);
  const newToast: ToastItem = { id, title, description, type };
  toastsList = [...toastsList, newToast];
  notify();

  setTimeout(() => {
    toastsList = toastsList.filter((t) => t.id !== id);
    notify();
  }, duration);
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  React.useEffect(() => {
    listeners.push(setToasts);
    setToasts([...toastsList]);
    return () => {
      const index = listeners.indexOf(setToasts);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  const dismiss = (id: string) => {
    toastsList = toastsList.filter((t) => t.id !== id);
    notify();
  };

  return { toasts, dismiss, toast };
}

