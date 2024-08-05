import Link from "next/link";
import React from "react";

export const parseTextWithLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

    const parts = [];
    let lastIndex = 0;

    let match;
    while ((match = linkRegex.exec(text)) !== null) {
        parts.push(text.slice(lastIndex, match.index));

        const displayText = match[1];
        const url = match[2];

        parts.push(
            <Link
                key={match.index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand"
                style={{ textDecoration: 'underline', textDecorationStyle: 'dotted' }}
            >
                {displayText}
            </Link>
        );

        lastIndex = linkRegex.lastIndex;
    }

    parts.push(text.slice(lastIndex));

    return <>{parts}</>;
};
