import { RefObject } from "react";
import { useEventListener } from "./useEventListener";

type THandler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T | null>,
    handler: THandler,
    mouseEvent: "mousedown" | "mouseup" = "mousedown",
): void {
    useEventListener(mouseEvent, (event) => {
        const el = ref?.current;

        // Do nothing if clicking ref's element or descendent elements
        if (!el || el.contains(event.target as Node)) {
            return;
        }

        handler(event);
    });
}

export { useOnClickOutside };
