import React, { useState } from "react";
import { Snapshot } from "@/hooks/get-current-supplies-by-tokenimpl";
import ImageWithFallback from "./image-with-fallback";
import TokenContractsModal from "./token-contracts-modal";
import getContractAddresses from "@/hooks/get-contract-addresses";

interface TokenListProps {
    tokens: Snapshot[];
    networkSlug: string;
}

const TokenList: React.FC<TokenListProps> = ({ tokens, networkSlug }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const { data: contractData, isLoading } = getContractAddresses({
        slug: networkSlug,
        isLayer: true,
        enabled: modalOpen,
    });

    if (!tokens || tokens.length === 0) {
        return null;
    }

    const topTokens = tokens.slice(0, 3);
    const remainingCount = tokens.length - 3;

    const handleClick = () => {
        setModalOpen(true);
    };

    return (
        <TokenContractsModal
            contracts={contractData || []}
            title="BTC Pegs Contracts"
            type="tokens"
        >
            <div 
                className="flex flex-nowrap gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleClick}
            >
                {topTokens.map((token) => (
                    <div key={token.token_slug} className="flex items-center gap-2">
                        <ImageWithFallback
                            slug={token.token_slug}
                            folder="logos"
                            altText="" // {token.token_slug}
                        />
                        {/* <span>{token.token_slug}</span> */}
                    </div>
                ))}
                {remainingCount > 0 && (
                    <div className="flex items-center">
                        <span
                            style={{
                                color: "var(--text-primary-link-water-900, #434D65)",
                                fontFamily: "Public Sans",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "20px",
                            }}
                        >
                            +{remainingCount}
                        </span>
                    </div>
                )}
            </div>
        </TokenContractsModal>
    );
};

export default TokenList;
