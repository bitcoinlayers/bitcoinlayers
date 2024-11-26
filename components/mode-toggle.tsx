"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { SunIcon, MoonIcon } from "lucide-react";
import React from "react";

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <Button
            onClick={() =>
                setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
            variant="outline"
            size="icon"
        >
            <span className="sr-only">Toggle mode</span>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}
