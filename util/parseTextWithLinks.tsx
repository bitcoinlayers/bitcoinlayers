import Link from "next/link";
import React from "react";

export const parseTextWithLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const parts: (JSX.Element | string)[] = [];
    let keyCounter = 0;

    const textLines = text.split("\n");
    textLines.forEach((line, lineIndex) => {
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(line)) !== null) {
            parts.push(line.slice(lastIndex, match.index));

            const displayText = match[1];
            const url = match[2];

            parts.push(
                <Link
                    key={`link-${keyCounter++}`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand"
                    style={{
                        textDecoration: "underline",
                        textDecorationStyle: "dotted",
                    }}
                >
                    {displayText}
                </Link>,
            );

            lastIndex = linkRegex.lastIndex;
        }

        parts.push(line.slice(lastIndex));

        if (lineIndex < textLines.length - 1) {
            parts.push(<br key={`br-${keyCounter++}`} />);
        }
    });

    return <>{parts}</>;
};
