"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown, Search, Check, Bitcoin, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPegImplementations, getAvailablePegs, PegChainImplementation } from "@/util/peg_chain_combinations";
import { allLayers } from "@/util/layer_index";
import { LiveStatus, Type, EntityCategory } from "@/content/props";
import PegChainSummary from "@/components/peg-chain-summary";
import Image from "next/image";

// Peg Image component with fallback to btc-inverse.svg
const PegImage = ({ 
    pegSlug, 
    alt, 
    width = 20, 
    height = 20, 
    className = "rounded-sm" 
}: { 
    pegSlug: string; 
    alt: string; 
    width?: number; 
    height?: number; 
    className?: string; 
}) => {
    const [imageSrc, setImageSrc] = useState(`/logos/${pegSlug}.png`);

    const handleError = () => {
        setImageSrc("/btc-inverse.svg");
    };

    return (
        <Image 
            src={imageSrc}
            alt={alt}
            width={width} 
            height={height} 
            className={className}
            onError={handleError}
        />
    );
};

export default function PegChainSelector() {
    const [selectedPeg, setSelectedPeg] = useState<string>("");
    const [selectedChain, setSelectedChain] = useState<string>("");
    const [availableChains, setAvailableChains] = useState<PegChainImplementation[]>([]);
    const [allChainSlugs, setAllChainSlugs] = useState<string[]>([]);
    const [chainSearchOpen, setChainSearchOpen] = useState<boolean>(false);
    const [pegSearchOpen, setPegSearchOpen] = useState<boolean>(false);
    const [chainSearchQuery, setChainSearchQuery] = useState<string>("");
    const [pegSearchQuery, setPegSearchQuery] = useState<string>("");

    // Logo mapping functions
    const getPegLogo = (pegSlug: string): string => {
        // Use the simplified approach that directly maps to the public/logos files
        return `/logos/${pegSlug}.png`;
    };

    const getChainLogo = (chainSlug: string): string => {
        // Use the simplified approach that directly maps to the public/logos files
        return `/logos/${chainSlug}.png`;
    };

    // Get chain name from slug
    const getChainName = (chainSlug: string): string => {
        const layer = allLayers.find(l => l.slug === chainSlug);
        return layer ? layer.title : chainSlug.charAt(0).toUpperCase() + chainSlug.slice(1);
    };

    // Get peg name from slug
    const getPegName = (pegSlug: string): string => {
        // Look for the peg in availableChains first, then fallback
        const peg = availableChains.find(impl => impl.pegSlug === pegSlug);
        return peg ? peg.pegName : pegSlug;
    };

    // Load filtered layers on component mount
    useEffect(() => {
        // Filter to only include layers that are:
        // 1. Actually layers (Type.Layer)
        // 2. On mainnet or beta (LiveStatus.Mainnet || LiveStatus.Beta)
        // 3. Not under review (underReview: false)
        const filteredLayers = allLayers.filter(layer => 
            layer.type === Type.Layer && 
            (layer.live === LiveStatus.Mainnet || layer.live === LiveStatus.Beta) && 
            !layer.underReview
        );
        
        const chains = filteredLayers.map(layer => layer.slug);
        setAllChainSlugs(chains);
    }, []);

    // Filter and group chains by category
    const getGroupedChains = () => {
        const searchTerm = chainSearchQuery.toLowerCase();
        const filteredSlugs = allChainSlugs.filter(chainSlug =>
            getChainName(chainSlug).toLowerCase().includes(searchTerm)
        );

        // Get layer objects for categorization
        const layersWithCategories = filteredSlugs.map(slug => {
            const layer = allLayers.find(l => l.slug === slug);
            return { slug, layer };
        }).filter(item => item.layer); // Only include items where we found the layer

        // Group by entity category
        const bitcoinNative = layersWithCategories.filter(item => 
            item.layer!.entityCategory === EntityCategory.BitcoinNative
        );
        const sidesystems = layersWithCategories.filter(item => 
            item.layer!.entityCategory === EntityCategory.Sidesystem
        );
        const otherNetworks = layersWithCategories.filter(item => 
            item.layer!.entityCategory === EntityCategory.Integrated || item.layer!.entityCategory === EntityCategory.Alt
        );

        const groups = [];
        
        if (bitcoinNative.length > 0) {
            groups.push({
                name: "Bitcoin Native",
                chains: bitcoinNative.map(item => item.slug)
            });
        }
        
        if (sidesystems.length > 0) {
            groups.push({
                name: "Sidesystems", 
                chains: sidesystems.map(item => item.slug)
            });
        }
        
        if (otherNetworks.length > 0) {
            groups.push({
                name: "Other Networks",
                chains: otherNetworks.map(item => item.slug)
            });
        }

        return groups;
    };

    const groupedChains = getGroupedChains();

    // Only show pegs available on the selected chain
    const filteredPegs = availableChains.filter(impl =>
        impl.pegName.toLowerCase().includes(pegSearchQuery.toLowerCase())
    );

    // Helper functions to safely extract peg properties - now simplified since we only use PegChainImplementation
    const getPegSlugFromItem = (item: PegChainImplementation): string => {
        return item.pegSlug;
    };

    const getPegNameFromItem = (item: PegChainImplementation): string => {
        return item.pegName;
    };

    const handleChainSelection = (chainSlug: string) => {
        setSelectedChain(chainSlug);
        setSelectedPeg(""); // Always clear peg selection when chain changes
        
        // Load pegs available on the selected chain
        const allPegs = getAvailablePegs();
        const implementationsOnChain: PegChainImplementation[] = [];
        
        allPegs.forEach(peg => {
            const pegImpls = getPegImplementations(peg.slug);
            const chainImpl = pegImpls.find((impl: PegChainImplementation) => impl.chainSlug === chainSlug);
            if (chainImpl) {
                implementationsOnChain.push(chainImpl);
            }
        });
        
        setAvailableChains(implementationsOnChain);
    };

    const handlePegSelection = (pegSlug: string) => {
        setSelectedPeg(pegSlug);
    };

    const selectedImplementation = availableChains.find(impl => impl.chainSlug === selectedChain && impl.pegSlug === selectedPeg);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Asset-Specific Reviews</h1>
                <p className="text-lg text-muted-foreground">
                    Learn more about who custodies bitcoin on various networks and apps
                </p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div className="flex-1">
                            <CardTitle className="flex items-center gap-2 mb-1.5">
                                Select Network & Custody Mechanism
                            </CardTitle>
                            <CardDescription>
                                Select a network and choose the custody mechanism to moves BTC onto the network
                            </CardDescription>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                                setSelectedPeg("");
                                setSelectedChain("");
                                setAvailableChains([]);
                                setChainSearchQuery("");
                                setPegSearchQuery("");
                                setChainSearchOpen(false);
                                setPegSearchOpen(false);
                            }}
                            title="Reset selections"
                            className="flex-shrink-0"
                        >
                            <RotateCcw className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Dropdowns Side by Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Chain Selection */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">What network are you using?</label>
                            <Popover open={chainSearchOpen} onOpenChange={setChainSearchOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={chainSearchOpen}
                                        className="w-full justify-between"
                                    >
                                        {selectedChain ? (
                                            <div className="flex items-center gap-2">
                                                <Image 
                                                    src={getChainLogo(selectedChain)} 
                                                    alt={getChainName(selectedChain)}
                                                    width={20} 
                                                    height={20} 
                                                    className="rounded-sm"
                                                />
                                                <span>{getChainName(selectedChain)}</span>
                                            </div>
                                        ) : (
                                            "Select a network..."
                                        )}
                                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                                    <div className="p-2">
                                        <div className="flex items-center border border-input rounded-md px-3">
                                            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                                            <input
                                                placeholder="Search blockchains..."
                                                value={chainSearchQuery}
                                                onChange={(e) => setChainSearchQuery(e.target.value)}
                                                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                                            />
                                        </div>
                                    </div>
                                    <div className="max-h-60 overflow-y-auto">
                                        {groupedChains.length === 0 ? (
                                            <div className="p-4 text-sm text-muted-foreground">No blockchains found.</div>
                                        ) : (
                                            groupedChains.map((group) => (
                                                <div key={group.name} className="space-y-2">
                                                    <h3 className="text-sm font-semibold px-3 py-2">{group.name}</h3>
                                                    {group.chains.length === 0 ? (
                                                        <div className="p-4 text-sm text-muted-foreground">No blockchains found.</div>
                                                    ) : (
                                                        group.chains.map((chainSlug) => (
                                                            <div
                                                                key={chainSlug}
                                                                className={cn(
                                                                    "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-accent",
                                                                    selectedChain === chainSlug && "bg-accent"
                                                                )}
                                                                onClick={() => {
                                                                    handleChainSelection(chainSlug);
                                                                    setChainSearchOpen(false);
                                                                    setChainSearchQuery("");
                                                                }}
                                                            >
                                                                <Image 
                                                                    src={getChainLogo(chainSlug)} 
                                                                    alt={getChainName(chainSlug)}
                                                                    width={20} 
                                                                    height={20} 
                                                                    className="rounded-sm"
                                                                />
                                                                <span className="flex-1">{getChainName(chainSlug)}</span>
                                                                {selectedChain === chainSlug && (
                                                                    <Check className="h-4 w-4" />
                                                                )}
                                                            </div>
                                                        ))
                                                    )}
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Peg Selection */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">What is the custody mechanism?</label>
                            <Popover open={pegSearchOpen} onOpenChange={setPegSearchOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={pegSearchOpen}
                                        className="w-full justify-between"
                                        disabled={!selectedChain}
                                    >
                                        {selectedPeg ? (
                                            <div className="flex items-center gap-2">
                                                <PegImage 
                                                    pegSlug={selectedPeg} 
                                                    alt={getPegName(selectedPeg)}
                                                />
                                                <span>{getPegName(selectedPeg)}</span>
                                            </div>
                                        ) : (
                                            selectedChain ? "Select a custody mechanism..." : "Select a network first"
                                        )}
                                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                                    <div className="p-2">
                                        <div className="flex items-center border border-input rounded-md px-3">
                                            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                                            <input
                                                placeholder="Search Bitcoin pegs..."
                                                value={pegSearchQuery}
                                                onChange={(e) => setPegSearchQuery(e.target.value)}
                                                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                                            />
                                        </div>
                                    </div>
                                    <div className="max-h-60 overflow-y-auto">
                                        {filteredPegs.length === 0 ? (
                                            <div className="p-4 text-sm text-muted-foreground">
                                                {!selectedChain ? "Select a blockchain first" : "No Bitcoin pegs found on this chain."}
                                            </div>
                                        ) : (
                                            filteredPegs.map((impl) => (
                                                <div
                                                    key={getPegSlugFromItem(impl)}
                                                    className={cn(
                                                        "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-accent",
                                                        selectedPeg === getPegSlugFromItem(impl) && "bg-accent"
                                                    )}
                                                    onClick={() => {
                                                        handlePegSelection(getPegSlugFromItem(impl));
                                                        setPegSearchOpen(false);
                                                        setPegSearchQuery("");
                                                    }}
                                                >
                                                    <PegImage 
                                                        pegSlug={getPegSlugFromItem(impl)} 
                                                        alt={getPegNameFromItem(impl)}
                                                    />
                                                    <span className="flex-1">{getPegNameFromItem(impl)}</span>
                                                    {selectedPeg === getPegSlugFromItem(impl) && (
                                                        <Check className="h-4 w-4" />
                                                    )}
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>



                    {/* Summary Display */}
                    {selectedPeg && selectedChain && selectedImplementation && (
                        <div className="mt-4">
                            <PegChainSummary implementation={selectedImplementation} />
                        </div>
                    )}
                </CardContent>
            </Card>


        </div>
    );
} 