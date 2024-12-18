import React from "react";
import Image from "next/image";
import { MappingRanked } from "@/hooks/use-get-mappings";

interface TokenListProps {
    tokens: MappingRanked[];
}

const TokenList: React.FC<TokenListProps> = ({ tokens }) => {
    if (!tokens || tokens.length === 0) {
        return <div>.....</div>;
    }

    const topTokens = tokens.slice(0, 3);

    return (
        <ul className="flex flex-wrap gap-2">
            {topTokens.map((token) => (
                <li key={token.token_slug} className="flex items-center gap-2">
                    <Image
                        src={`/logos/${token.token_slug}.png`}
                        alt="" //{`${token.token_slug} icon`}
                        width={20}
                        height={20}
                        // onError={(e) => {
                        //     (e.target as HTMLImageElement).src =
                        //         "/icons/btc.svg";
                        // }}
                    />
                    {/* <span>{token.token_slug}</span> */}
                </li>
            ))}
        </ul>
    );
};

export default TokenList;
