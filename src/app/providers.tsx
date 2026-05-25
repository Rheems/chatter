"use client";

import { ThemeProvider } from "next-themes";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/lib/router";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      scriptProps={{
        suppressHydrationWarning: true,
      }}
    >
      <RouterProvider router={router} />
      {children}
    </ThemeProvider>
  );
}
