"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { queryClient } from "@/util/tanstack";
import { Suspense } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={null}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </ThemeProvider>
        </Suspense>
    );
}
