"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { queryClient } from "@/util/tanstack";
import { Suspense } from "react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

export default function Providers({
    children,
    messages,
    locale,
    timeZone,
}: {
    children: React.ReactNode;
    messages: AbstractIntlMessages;
    locale: string;
    timeZone: string;
}) {
    return (
        <Suspense fallback={null}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                forcedTheme="light"
            >
                <QueryClientProvider client={queryClient}>
                    <NextIntlClientProvider
                        messages={messages}
                        locale={locale}
                        timeZone={timeZone}
                    >
                        {children}
                    </NextIntlClientProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </Suspense>
    );
}
