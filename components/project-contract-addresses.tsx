"use client";

import { ChevronsUpDown, ExternalLinkIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ImageWithFallback from "./tables/image-with-fallback";
import ComingSoonTokenContracts from "./coming-soon-token-contracts";
import TokenContractAnalysisDropdown from "./layer/token-contract-analysis-dropdown";

const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// This will be handled by the TokenContractAnalysisDropdown component itself
// It will only show content if the analysis file exists for the specific contract address

interface Props {
    slug: string;
    isLayer: boolean;
}

const AddressItem = ({
    item,
    showBorder,
    isLayer,
    wrapperName,
}: {
    item: {
        token_slug: string;
        explorer: string;
        token_address: string;
        token_name: string;
        network_slug: string;
        network_name: string;
    };
    showBorder: boolean;
    isLayer: boolean;
    wrapperName?: string;
}) => {
    const customUrls: { [key: string]: string } = {
        "Rootstock-RBTC_Rootstock": "https://explorer.rootstock.io/",
        "xLink-aBTC_Stacks":
            "https://explorer.hiro.so/token/SP2XD7417HGPRTREMKF748VNEQPDRR0RMANB7X1NK.token-abtc?chain=mainnet",
        "Alex-xBTC_Stacks":
            "https://explorer.hiro.so/token/SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin?chain=mainnet",
        "Stacks-sBTC_Stacks":
            "https://explorer.hiro.so/token/SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token?chain=mainnet",
    };

    const url =
        customUrls[`${item.token_slug}_${item.network_slug}`] ??
        `${item.explorer}${item.token_address}`;

    return (
        <div className={`${showBorder ? "border-b" : ""} py-4`}>
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="!text-muted-foreground mb-1 flex items-center">
                    <ImageWithFallback
                        slug={isLayer ? item.token_slug : item.network_slug}
                        folder="logos"
                        altText={isLayer ? item.token_name : item.network_name}
                        width={20}
                        height={20}
                    />
                    <p className="ml-2">
                        {isLayer ? item.token_name : item.network_name}
                    </p>
                </div>
            </div>
            <div className="!text-foreground flex flex-wrap text-wrap break-all">
                <Link
                    href={url}
                    target="_blank"
                    className="flex items-center gap-1 hover:underline"
                >
                    {customUrls[item.token_slug] ? (
                        <span className="pl-7">{url}</span>
                    ) : (
                        <>
                            <span className="sm:hidden pl-7">
                                {truncateAddress(item.token_address)}
                            </span>
                            <span className="hidden sm:inline pl-7">
                                {item.token_address}
                            </span>
                        </>
                    )}
                    <ExternalLinkIcon className="h-4 w-4 ml-2" />
                </Link>
            </div>
            

        </div>
    );
};

export default function ProjectContractAddresses({ slug, isLayer }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const { data, isLoading, error } = useQuery({
        queryKey: [`contract-addresses-${slug}`],
        queryFn: () =>
            fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/current_supplies_by_tokenimpl?${isLayer ? `network_slug=ilike.${slug}` : `token_slug=ilike.${slug}`}`,
            ),
    });

    if (!data?.length || isLoading || error) return <ComingSoonTokenContracts />;

    const initialItems = data.slice(0, 3);
    const collapsibleItems = data.slice(3);

    // Get wrapper name from the first item in data
    const wrapperName = data.length > 0 ? data[0].token_name : undefined;

    // Transform data into contracts format for the unified analysis component
    // Preserve all database information including explorer URLs
    const contracts = data
        .filter((item: any) => item.token_address.startsWith("0x")) // Only EVM contracts
        .map((item: any) => ({
            address: item.token_address,
            network: item.network_name,
            wrapperName: wrapperName || item.token_name,
            explorer: item.explorer, // Preserve database explorer URL
            token_slug: item.token_slug,
            network_slug: item.network_slug,
            token_name: item.token_name
        }));

    return (
        <section
            id="tokencontracts"
            className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border flex-col justify-center items-end gap-4"
        >
            <div className="self-stretch justify-start items-start gap-4">
                <div className="body_section !text-foreground">
                    Token Contracts
                </div>
            </div>

            {/* Unified Token Contract Analysis - shows only if there are EVM contracts */}
            {contracts.length > 0 ? (
                <div className="w-full">
                    <TokenContractAnalysisDropdown 
                        contracts={contracts}
                        wrapperName={wrapperName}
                        isLayer={isLayer}
                    />
                </div>
            ) : (
                <>
                    {/* Show individual address items only if no EVM contracts with analysis */}
                    {initialItems.map((item: any, index: number) => (
                        <AddressItem
                            key={index}
                            item={item}
                            showBorder={
                                index !== initialItems.length - 1 ||
                                (collapsibleItems.length > 0 && isOpen)
                            }
                            isLayer={isLayer}
                            wrapperName={wrapperName}
                        />
                    ))}

                    {collapsibleItems.length > 0 && (
                        <Collapsible
                            open={isOpen}
                            onOpenChange={setIsOpen}
                            className="w-full space-y-2"
                        >
                            {!isOpen && (
                                <CollapsibleTrigger asChild>
                                    <div className="flex items-center justify-between space-x-4 mt-6 cursor-pointer">
                                        <h4 className="text-sm text-muted-foreground">
                                            Show {collapsibleItems.length} more{" "}
                                            {collapsibleItems.length === 1
                                                ? "address"
                                                : "addresses"}
                                        </h4>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-9 p-0"
                                        >
                                            <ChevronsUpDown className="h-4 w-4" />
                                            <span className="sr-only">Toggle</span>
                                        </Button>
                                    </div>
                                </CollapsibleTrigger>
                            )}
                            <CollapsibleContent className="space-y-2">
                                {collapsibleItems.map((item: any, index: number) => (
                                    <AddressItem
                                        key={index}
                                        item={item}
                                        showBorder={
                                            index !== collapsibleItems.length - 1
                                        }
                                        isLayer={isLayer}
                                        wrapperName={wrapperName}
                                    />
                                ))}
                            </CollapsibleContent>
                        </Collapsible>
                    )}
                </>
            )}
        </section>
    );
}
