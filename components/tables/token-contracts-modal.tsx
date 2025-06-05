import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ExternalLink } from "lucide-react";
import ImageWithFallback from "./image-with-fallback";
import { ContractAddress } from "@/hooks/get-contract-addresses";

interface TokenContractsModalProps {
    children: React.ReactNode;
    contracts: ContractAddress[];
    title: string;
    type: "tokens" | "networks";
}

const TokenContractsModal: React.FC<TokenContractsModalProps> = ({
    children,
    contracts,
    title,
    type,
}) => {
    const [showAll, setShowAll] = useState(false);
    const [open, setOpen] = useState(false);

    const displayedContracts = showAll ? contracts : contracts.slice(0, 8);
    const remainingCount = contracts.length - 8;

    const getContractUrl = (contract: ContractAddress) => {
        // Custom URL logic similar to the existing ProjectContractAddresses component
        const customUrls: { [key: string]: string } = {
            "Rootstock-RBTC_Rootstock": "https://explorer.rootstock.io/",
            "xLink-aBTC_Stacks":
                "https://explorer.hiro.so/token/SP2XD7417HGPRTREMKF748VNEQPDRR0RMANB7X1NK.token-abtc?chain=mainnet",
            "Alex-xBTC_Stacks":
                "https://explorer.hiro.so/token/SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin?chain=mainnet",
            "Stacks-sBTC_Stacks":
                "https://explorer.hiro.so/token/SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token?chain=mainnet",
        };

        const customKey = `${contract.token_slug}_${contract.network_slug}`;
        if (customUrls[customKey]) {
            return customUrls[customKey];
        }

        if (contract.explorer && contract.token_address) {
            return `${contract.explorer}${contract.token_address}`;
        }

        // Fallback URL construction if needed
        return "#";
    };

    const getDisplayName = (contract: ContractAddress) => {
        if (type === "tokens") {
            return contract.token_name || contract.token_slug;
        }
        return contract.network_name || contract.network_slug;
    };

    const getDisplayAddress = (contract: ContractAddress) => {
        if (contract.token_address) {
            return contract.token_address;
        }
        // For networks or when address is not available, return a placeholder
        return "Contract address not available";
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent
                className="p-0 border-0 bg-transparent shadow-none max-w-none"
                style={{
                    width: "var(--breakpoint-sm, 640px)",
                    maxWidth: "90vw",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "var(--breakpoint-sm, 640px)",
                        padding: "var(--spacing-6, 24px)",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "var(--spacing-4, 16px)",
                        flexShrink: 0,
                        borderRadius: "var(--border-radius-lg, 8px)",
                        background: "var(--bg-primary-off-grey-50, #FDFDFD)",
                        boxShadow:
                            "0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="self-end"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "4px",
                        }}
                    >
                        <X size={24} color="var(--text-primary-link-water-900, #434D65)" />
                    </button>

                    {/* Title */}
                    <div
                        style={{
                            color: "var(--text-primary-link-water-900, #434D65)",
                            fontFamily: "Public Sans",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "28px",
                            alignSelf: "stretch",
                            textAlign: "center",
                        }}
                    >
                        {title}
                    </div>

                    {/* Token contracts container */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "24px",
                            alignSelf: "stretch",
                        }}
                    >
                        {displayedContracts.map((contract, index) => (
                            <div
                                key={`${contract.network_slug}-${contract.token_slug}-${index}`}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "8px",
                                    alignSelf: "stretch",
                                }}
                            >
                                {/* Network/Token name with logo */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        color: "var(--text-primary-link-water-900, #434D65)",
                                        fontFamily: "Public Sans",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "28px",
                                    }}
                                >
                                    <ImageWithFallback
                                        slug={type === "tokens" ? contract.token_slug : contract.network_slug}
                                        folder="logos"
                                        altText={getDisplayName(contract)}
                                        width={24}
                                        height={24}
                                    />
                                    {getDisplayName(contract)}
                                </div>

                                {/* Contract address */}
                                <a
                                    href={getContractUrl(contract)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        color: "var(--text-primary-link-water-900, #434D65)",
                                        fontFamily: "Hack",
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        lineHeight: "normal",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.textDecoration = "underline";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.textDecoration = "none";
                                    }}
                                >
                                    {getDisplayAddress(contract)}
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        ))}

                        {/* Show more button */}
                        {!showAll && remainingCount > 0 && (
                            <button
                                onClick={() => setShowAll(true)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "var(--text-secondary-storm-gray-700, #767B8F)",
                                    fontFamily: "Public Sans",
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "20px",
                                    textDecorationLine: "underline",
                                    textDecorationStyle: "solid",
                                    textDecorationSkipInk: "none",
                                    textDecorationThickness: "auto",
                                    textUnderlineOffset: "auto",
                                    textUnderlinePosition: "from-font",
                                }}
                            >
                                Show {remainingCount} more addresses
                            </button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TokenContractsModal; 