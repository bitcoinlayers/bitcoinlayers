"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { SunIcon, MoonIcon } from "lucide-react";

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
            {resolvedTheme !== "dark" ? (
                <SunIcon className="size-4" />
            ) : (
                <MoonIcon className="size-4" />
            )}
        </Button>
    );
}
