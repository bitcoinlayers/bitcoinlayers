import React, { useState } from "react";
import Image from "next/image";
import { MappingRanked } from "@/hooks/use-get-mappings";

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
            {topTokens.map((token) => {
                const [imageSrc, setImageSrc] = useState(
                    `/logos/${token.token_slug}.png`,
                );
                const fallbackSrc = "/logos/bitcoinlayers-logo.png";

                return (
                    <li
                        key={token.token_slug}
                        className="flex items-center gap-2"
                    >
                        <Image
                            src={imageSrc}
                            alt=""
                            width={20}
                            height={20}
                            onError={() => setImageSrc(fallbackSrc)}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default TokenList;
