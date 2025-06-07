"use client";

import { ChevronsUpDown, ExternalLinkIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

interface ContractItem {
    title: string;
    address: string;
    subtitle: string;
    explorerUrl: string;
}

interface Props {
    contracts: ContractItem[];
    sectionTitle?: string;
    sectionId?: string;
}

const ContractAddressItem = ({
    item,
    showBorder,
}: {
    item: ContractItem;
    showBorder: boolean;
}) => {
    return (
        <div className={`${showBorder ? "border-b" : ""} py-4`}>
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="!text-foreground mb-1 flex items-center">
                    <p className="font-medium">{item.title}</p>
                </div>
            </div>
            <div className="!text-foreground flex flex-wrap text-wrap break-all mb-2">
                <Link
                    href={item.explorerUrl}
                    target="_blank"
                    className="flex items-center gap-1 hover:underline"
                >
                    <span className="sm:hidden">
                        {truncateAddress(item.address)}
                    </span>
                    <span className="hidden sm:inline">
                        {item.address}
                    </span>
                    <ExternalLinkIcon className="h-4 w-4 ml-2" />
                </Link>
            </div>
            <div className="!text-muted-foreground text-sm">
                {item.subtitle}
            </div>
        </div>
    );
};

export default function ManualContractAddresses({ 
    contracts, 
    sectionTitle = "Additional Contracts",
    sectionId = "manualcontracts" 
}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    if (!contracts?.length) return null;

    const initialItems = contracts.slice(0, 3);
    const collapsibleItems = contracts.slice(3);

    return (
        <section
            id={sectionId}
            className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border flex-col justify-center items-end gap-4"
        >
            <div className="self-stretch justify-start items-start gap-4">
                <div className="body_section !text-foreground">
                    {sectionTitle}
                </div>
            </div>

            {initialItems.map((item, index) => (
                <ContractAddressItem
                    key={index}
                    item={item}
                    showBorder={
                        index !== initialItems.length - 1 ||
                        (collapsibleItems.length > 0 && isOpen)
                    }
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
                                        ? "contract"
                                        : "contracts"}
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
                        {collapsibleItems.map((item, index) => (
                            <ContractAddressItem
                                key={index}
                                item={item}
                                showBorder={
                                    index !== collapsibleItems.length - 1
                                }
                            />
                        ))}
                    </CollapsibleContent>
                </Collapsible>
            )}
        </section>
    );
} 