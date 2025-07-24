"use client";

import { useRef, useState, useEffect } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import getContractAddresses, { ContractAddress } from "@/hooks/get-contract-addresses";
import { getAvailablePegs, getPegImplementations, PegChainImplementation } from "@/util/peg_chain_combinations";
import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ContractSearchResult {
    type: 'contract' | 'application';
    contractAddress?: string;
    tokenSlug?: string;
    tokenName?: string;
    networkSlug?: string;
    networkName?: string;
    applicationName?: string;
    applicationSlug?: string;
    pegSlug?: string;
    chainSlug?: string;
}

interface PegContractSearchProps {
    inputClassName?: string;
    imageClassName?: string;
    onSelect: (chainSlug: string, pegSlug: string) => void;
}

const PegContractSearch = ({
    inputClassName,
    imageClassName,
    onSelect,
}: PegContractSearchProps) => {
    const [inputValue, setInputValue] = useState("");
    const [isInputFocused, setInputFocused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchResults, setSearchResults] = useState<ContractSearchResult[]>([]);
    const [allContracts, setAllContracts] = useState<ContractAddress[]>([]);

    useOnClickOutside(ref, () => setInputFocused(false));

    // Fetch all contract addresses on component mount
    useEffect(() => {
        const fetchAllContracts = async () => {
            try {
                // Get all infrastructure slugs to fetch their contracts
                const infraSlugs = allInfrastructures.map(infra => infra.slug);
                const allContractPromises = infraSlugs.map(slug => 
                    fetch(`${process.env.NEXT_PUBLIC_API_URL}/current_supplies_by_tokenimpl?token_slug=ilike.${slug}`)
                        .then(res => res.json())
                        .catch(() => [])
                );
                
                const contractArrays = await Promise.all(allContractPromises);
                const flatContracts = contractArrays.flat();
                setAllContracts(flatContracts);
            } catch (error) {
                console.error('Error fetching contracts:', error);
            }
        };

        fetchAllContracts();
    }, []);

    const shouldRenderSearchResult = () => {
        return isInputFocused && inputValue && searchResults.length > 0;
    };

    const handleInputSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const input = evt.target.value;
        const sanitizedValue = input.replace(/"/g, "");
        setInputValue(sanitizedValue);
        
        if (!input || input.length < 3) {
            setSearchResults([]);
            return;
        }

        const results: ContractSearchResult[] = [];
        const searchTerm = input.toLowerCase();

        // Search contract addresses
        allContracts.forEach(contract => {
            if (contract.token_address && 
                contract.token_address.toLowerCase().includes(searchTerm)) {
                results.push({
                    type: 'contract',
                    contractAddress: contract.token_address,
                    tokenSlug: contract.token_slug,
                    tokenName: contract.token_name,
                    networkSlug: contract.network_slug,
                    networkName: contract.network_name,
                    pegSlug: contract.token_slug,
                    chainSlug: contract.network_slug
                });
            }
        });

        // Search application names (infrastructures)
        allInfrastructures.forEach(infra => {
            if (infra.title.toLowerCase().includes(searchTerm) ||
                infra.slug.toLowerCase().includes(searchTerm)) {
                
                // Find which networks this application is available on
                const allPegs = getAvailablePegs();
                const matchingPeg = allPegs.find(peg => peg.slug === infra.slug);
                
                if (matchingPeg) {
                    const implementations = getPegImplementations(matchingPeg.slug);
                    // Add result for each network this peg is available on
                    implementations.forEach((impl: PegChainImplementation) => {
                        results.push({
                            type: 'application',
                            applicationName: infra.title,
                            applicationSlug: infra.slug,
                            pegSlug: impl.pegSlug,
                            chainSlug: impl.chainSlug
                        });
                    });
                }
            }
        });

        setSearchResults(results.slice(0, 8)); // Limit to 8 results
    };

    const handleResultClick = (result: ContractSearchResult) => {
        if (result.chainSlug && result.pegSlug) {
            onSelect(result.chainSlug, result.pegSlug);
            setInputValue("");
            setSearchResults([]);
            setInputFocused(false);
        }
    };

    const getDisplayText = (result: ContractSearchResult): string => {
        if (result.type === 'contract') {
            return `${result.tokenName} on ${result.networkName}`;
        } else {
            const layer = allLayers.find(l => l.slug === result.chainSlug);
            const chainName = layer ? layer.title : result.chainSlug;
            return `${result.applicationName} on ${chainName}`;
        }
    };

    const getSecondaryText = (result: ContractSearchResult): string => {
        if (result.type === 'contract') {
            return result.contractAddress || '';
        } else {
            return 'Application';
        }
    };

    return (
        <div
            className="w-[22rem] relative"
            ref={ref}
            role="presentation"
            onClick={() => {
                inputRef.current?.focus();
                setInputFocused(true);
            }}
        >
            <input
                type="text"
                placeholder="Insert token contract or application"
                value={inputValue}
                onChange={handleInputSearch}
                onFocus={() => setInputFocused(true)}
                ref={inputRef}
                className={cn(
                    "bg-white border-2 border-slate-300 rounded-full p-2 w-full text-black pl-6 pr-12 outline-none h-11 font_playfair cursor-pointer hover:placeholder:text-slate-600 active:border-[#fe4e18] focus:border-[#fe4e18] text-xl",
                    inputClassName,
                )}
            />

            <Image
                src={
                    isInputFocused
                        ? "/icons/search-red.svg"
                        : "/icons/search.svg"
                }
                alt="Search icon"
                className={cn(
                    "absolute outline bottom-3 right-6 cursor-pointer",
                    imageClassName,
                )}
                width={21}
                height={21}
            />

            {shouldRenderSearchResult() && (
                <ContractSearchResult 
                    searchResult={searchResults} 
                    onSelect={handleResultClick}
                    getDisplayText={getDisplayText}
                    getSecondaryText={getSecondaryText}
                />
            )}
        </div>
    );
};

const ContractSearchResult = ({ 
    searchResult, 
    onSelect,
    getDisplayText,
    getSecondaryText
}: { 
    searchResult: ContractSearchResult[];
    onSelect: (result: ContractSearchResult) => void;
    getDisplayText: (result: ContractSearchResult) => string;
    getSecondaryText: (result: ContractSearchResult) => string;
}) => {
    return (
        <>
            {searchResult.length > 0 ? (
                <div className="absolute z-50 w-full rounded-xl border-2 border-brand bg-background/100 backdrop-blur-sm px-1 shadow-lg text-foreground mt-2 overflow-hidden">
                    <div className="max-h-[15rem] overflow-auto bg-background/100 rounded-xl">
                        {searchResult.map((item, index) => (
                            <div
                                key={`${item.type}-${index}`}
                                className="flex items-center gap-3 text-[1rem] py-3 hover:bg-muted px-4 rounded my-1 cursor-pointer"
                                onClick={() => onSelect(item)}
                            >
                                <div className="flex items-center gap-2">
                                    {item.type === 'contract' ? (
                                        <>
                                            <ContractSearchItemImage
                                                src={`/logos/${item.tokenSlug}.png`}
                                                title={item.tokenName || ''}
                                            />
                                            <ContractSearchItemImage
                                                src={`/logos/${item.networkSlug}.png`}
                                                title={item.networkName || ''}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <ContractSearchItemImage
                                                src={`/logos/${item.pegSlug}.png`}
                                                title={item.applicationName || ''}
                                            />
                                            <ContractSearchItemImage
                                                src={`/logos/${item.chainSlug}.png`}
                                                title={item.chainSlug || ''}
                                            />
                                        </>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium">{getDisplayText(item)}</div>
                                    <div className="text-xs text-muted-foreground font-mono">
                                        {getSecondaryText(item)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
};

const ContractSearchItemImage = ({ src, title }: { src: string; title: string }) => {
    const [imageSrc, setImageSrc] = useState(src);

    const handleError = () => {
        setImageSrc("/btc-inverse.svg");
    };

    return (
        <Image
            src={imageSrc}
            alt={`${title} logo`}
            width={20}
            height={20}
            className="rounded-sm"
            onError={handleError}
        />
    );
};

export default PegContractSearch; 