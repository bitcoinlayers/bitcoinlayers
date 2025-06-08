import React, { useState } from "react";
import ImageWithFallback from "./image-with-fallback";
import TokenContractsModal from "./token-contracts-modal";
import getContractAddresses from "@/hooks/get-contract-addresses";

interface NetworkListProps {
    networks: { network_slug: string }[];
    tokenSlug: string;
}

const NetworkList: React.FC<NetworkListProps> = ({ networks, tokenSlug }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const { data: contractData, isLoading } = getContractAddresses({
        slug: tokenSlug,
        isLayer: false,
        enabled: modalOpen,
    });

    if (!networks || networks.length === 0) {
        return null;
    }

    const topNetworks = networks.slice(0, 3);
    const remainingCount = networks.length - 3;

    const handleClick = () => {
        setModalOpen(true);
    };

    return (
        <TokenContractsModal
            contracts={contractData || []}
            title="Token Contracts"
            type="networks"
        >
            <div 
                className="flex flex-nowrap gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleClick}
            >
                {topNetworks.map((network) => (
                    <div
                        key={network.network_slug}
                        className="flex items-center gap-2"
                    >
                        <ImageWithFallback
                            slug={network.network_slug}
                            folder="logos"
                            altText="" //{network.network_slug}
                        />
                        {/* <span>{network.network_slug}</span> */}
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

export default NetworkList;
