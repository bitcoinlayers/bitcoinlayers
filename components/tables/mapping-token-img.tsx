import React from "react";
import { MappingRanked } from "@/hooks/use-get-mappings";
import ImageWithFallback from "./image-with-fallback";

interface TokenListProps {
    tokens: MappingRanked[];
}

const TokenList: React.FC<TokenListProps> = ({ tokens }) => {
    if (!tokens || tokens.length === 0) {
        return null;
    }

    const topTokens = tokens.slice(0, 3);

    return (
        <ul className="flex flex-wrap gap-2">
            {topTokens.map((token) => (
                <li key={token.token_slug} className="flex items-center gap-2">
                    <ImageWithFallback
                        slug={token.token_slug}
                        folder="logos"
                        altText="" // {token.token_slug}
                    />
                    {/* <span>{token.token_slug}</span> */}
                </li>
            ))}
        </ul>
    );
};

export default TokenList;
