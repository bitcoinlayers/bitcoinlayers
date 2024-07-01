import Link from "next/link";
import React from "react";

export const parseTextWithLinks = (text: string) => {
    const urlRegex = /\[Link\]\((https?:\/\/[^\s]+)\)/g;
    const newlineRegex = /\n/g;

    const parts = text.split(newlineRegex).map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
            {line.split(urlRegex).map((part, index) => {
                const match = part.match(urlRegex);
                return match ? (
                    <Link
                        key={index}
                        href={match[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {match[1]}
                    </Link>
                ) : (
                    part
                );
            })}
            {lineIndex < text.split(newlineRegex).length - 1 && <br />}
        </React.Fragment>
    ));

    return parts;
};
