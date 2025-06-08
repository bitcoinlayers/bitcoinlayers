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

    // Show only first 4 contracts initially, then all when showAll is true
    const displayedContracts = showAll ? contracts : contracts.slice(0, 4);
    const remainingCount = contracts.length - 4;

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
                className="p-0 border-0 bg-transparent shadow-none max-w-fit [&>button]:hidden"
                style={{
                    width: "auto",
                    maxWidth: "90vw",
                }}
            >
                <div
                    className="bg-popover border border-border rounded-lg shadow-lg"
                    style={{
                        display: "flex",
                        width: "var(--breakpoint-sm, 640px)",
                        padding: "var(--spacing-6, 24px)",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "var(--spacing-4, 16px)",
                        flexShrink: 0,
                    }}
                >
                    {/* Title box with close button */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            alignSelf: "stretch",
                        }}
                    >
                        {/* Title text */}
                        <div
                            className="text-popover-foreground"
                            style={{
                                fontFamily: "Public Sans",
                                fontSize: "20px",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "28px",
                            }}
                        >
                            {title}
                        </div>

                        {/* Close button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="text-muted-foreground hover:text-popover-foreground"
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "4px",
                            }}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Divider */}
                    <div
                        className="bg-border"
                        style={{
                            width: "592px",
                            height: "1px",
                        }}
                    />

                    {/* Token addresses container */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: showAll ? "flex-start" : "center",
                            alignItems: "center",
                            gap: "24px",
                            alignSelf: "stretch",
                            ...(showAll && {
                                maxHeight: "400px",
                                overflowY: "auto",
                                paddingRight: "8px",
                                paddingTop: "0px",
                            }),
                        }}
                        className={showAll ? "contracts-scrollable" : ""}
                    >
                        {displayedContracts.map((contract, index) => (
                            <div
                                key={`${contract.network_slug}-${contract.token_slug}-${index}`}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    gap: "16px",
                                    alignSelf: "stretch",
                                }}
                            >
                                {/* Network/Token name with logo */}
                                <div
                                    className="text-popover-foreground"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
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
                                    className="text-muted-foreground hover:text-popover-foreground transition-colors"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        fontFamily: "Public Sans",
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
                                onClick={() => {
                                    setShowAll(true);
                                    setTimeout(() => {
                                        const scrollableElement = document.querySelector('.contracts-scrollable');
                                        if (scrollableElement) {
                                            scrollableElement.scrollTop = 0;
                                        }
                                    }, 0);
                                }}
                                className="text-muted-foreground hover:text-popover-foreground transition-colors underline"
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "Public Sans",
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "20px",
                                }}
                            >
                                Show {remainingCount} more addresses
                            </button>
                        )}
                    </div>

                    {/* Add CSS for custom scrollbar styling */}
                    <style jsx>{`
                        .contracts-scrollable {
                            scrollbar-width: thin;
                            scrollbar-color: hsl(var(--muted-foreground)) transparent;
                        }
                        
                        .contracts-scrollable::-webkit-scrollbar {
                            width: 6px;
                        }
                        
                        .contracts-scrollable::-webkit-scrollbar-track {
                            background: transparent;
                        }
                        
                        .contracts-scrollable::-webkit-scrollbar-thumb {
                            background-color: hsl(var(--muted-foreground));
                            border-radius: 3px;
                        }
                        
                        .contracts-scrollable::-webkit-scrollbar-thumb:hover {
                            background-color: hsl(var(--popover-foreground));
                        }
                    `}</style>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TokenContractsModal; 