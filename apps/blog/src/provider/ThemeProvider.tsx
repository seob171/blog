"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import UseIsMounted from "@/hooks/useIsMounted";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const isMounted = UseIsMounted();
  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction || isMounted) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
  }

  return children;
}
