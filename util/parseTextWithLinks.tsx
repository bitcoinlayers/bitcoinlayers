import Link from "next/link";
import React from "react";

export const parseTextWithLinks = (text: string) => {
    const urlRegex = /(\bhttps?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) =>
        urlRegex.test(part) ? (
            <Link
                key={index}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
            >
                {part}
            </Link>
        ) : (
            part
        ),
    );
};
