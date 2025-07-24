"use client";

import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { getAvailablePegs, getPegImplementations, PegChainImplementation } from "@/util/peg_chain_combinations";
import { allLayers } from "@/util/layer_index";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PegSearchResult {
    pegSlug: string;
    pegName: string;
    chainSlug: string;
    chainName: string;
    implementation: PegChainImplementation;
}

interface PegSearchBlockProps {
    inputClassName?: string;
    imageClassName?: string;
    onSelect: (chainSlug: string, pegSlug: string) => void;
}

const PegSearchBlock = ({
    inputClassName,
    imageClassName,
    onSelect,
}: PegSearchBlockProps) => {
    const [inputValue, setInputValue] = useState("");
    const [isInputFocused, setInputFocused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [filteredItems, setFilteredItems] = useState<PegSearchResult[]>([]);

    useOnClickOutside(ref, () => setInputFocused(false));

    const shouldRenderSearchResult = () => {
        return isInputFocused && inputValue;
    };

    const handleInputSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const input = evt.target.value;
        const sanitizedValue = input.replace(/"/g, "");
        setInputValue(sanitizedValue);
        
        if (!input) {
            setFilteredItems([]);
            return;
        }

        // Get all available peg-chain combinations
        const allPegs = getAvailablePegs();
        const allCombinations: PegSearchResult[] = [];
        
        allPegs.forEach(peg => {
            const implementations = getPegImplementations(peg.slug);
            implementations.forEach((impl: PegChainImplementation) => {
                // Get chain name from layer index
                const layer = allLayers.find(l => l.slug === impl.chainSlug);
                const chainName = layer ? layer.title : impl.chainSlug;
                
                allCombinations.push({
                    pegSlug: impl.pegSlug,
                    pegName: impl.pegName,
                    chainSlug: impl.chainSlug,
                    chainName: chainName,
                    implementation: impl
                });
            });
        });

        // Filter by peg name or chain name
        const filtered = allCombinations.filter((item) => {
            const searchTerm = input.toLowerCase();
            return (
                item.pegName.toLowerCase().includes(searchTerm) ||
                item.chainName.toLowerCase().includes(searchTerm) ||
                `${item.pegName} on ${item.chainName}`.toLowerCase().includes(searchTerm) ||
                `${item.chainName} through ${item.pegName}`.toLowerCase().includes(searchTerm)
            );
        });
        
        setFilteredItems(filtered || []);
    };

    const handleResultClick = (result: PegSearchResult) => {
        onSelect(result.chainSlug, result.pegSlug);
        setInputValue("");
        setFilteredItems([]);
        setInputFocused(false);
    };

    const getDisplayText = (result: PegSearchResult): string => {
        return result.implementation.chainCategory === "BitcoinNative" 
            ? `${result.chainName} through ${result.pegName}`
            : `${result.pegName} on ${result.chainName}`;
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
                placeholder="Search custody mechanisms..."
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
                <PegSearchResult 
                    searchResult={filteredItems} 
                    onSelect={handleResultClick}
                    getDisplayText={getDisplayText}
                />
            )}
        </div>
    );
};

const PegSearchResult = ({ 
    searchResult, 
    onSelect,
    getDisplayText 
}: { 
    searchResult: PegSearchResult[];
    onSelect: (result: PegSearchResult) => void;
    getDisplayText: (result: PegSearchResult) => string;
}) => {
    return (
        <>
            {searchResult.length > 0 ? (
                <div className="absolute z-50 w-full rounded-xl border-2 border-brand bg-background/100 backdrop-blur-sm px-1 shadow-lg text-foreground mt-2 overflow-hidden">
                    <div className="max-h-[15rem] overflow-auto bg-background/100 rounded-xl">
                        {searchResult?.slice(0, 10).map((item, index) => (
                            <div
                                key={`${item.chainSlug}-${item.pegSlug}-${index}`}
                                className="flex items-center gap-3 text-[1rem] py-3 hover:bg-muted px-4 rounded my-1 cursor-pointer"
                                onClick={() => onSelect(item)}
                            >
                                <div className="flex items-center gap-2">
                                    <PegSearchItemImage
                                        src={`/logos/${item.chainSlug}.png`}
                                        title={item.chainName}
                                    />
                                    <PegSearchItemImage
                                        src={`/logos/${item.pegSlug}.png`}
                                        title={item.pegName}
                                    />
                                </div>
                                <span>{getDisplayText(item)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
};

const PegSearchItemImage = ({ src, title }: { src: string; title: string }) => {
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

export default PegSearchBlock; 