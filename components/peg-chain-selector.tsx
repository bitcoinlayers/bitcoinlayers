"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown, Search, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPegImplementations, getAvailablePegs, PegChainImplementation } from "@/util/peg_chain_combinations";
import { allLayers } from "@/util/layer_index";
import PegChainSummary from "@/components/peg-chain-summary";
import Image from "next/image";

export default function PegChainSelector() {
    const [selectedPeg, setSelectedPeg] = useState<string>("");
    const [selectedChain, setSelectedChain] = useState<string>("");
    const [availableChains, setAvailableChains] = useState<PegChainImplementation[]>([]);
    const [availablePegs, setAvailablePegs] = useState<{ slug: string; name: string; description: string }[]>([]);
    const [allChainSlugs, setAllChainSlugs] = useState<string[]>([]);
    const [chainSearchOpen, setChainSearchOpen] = useState<boolean>(false);
    const [pegSearchOpen, setPegSearchOpen] = useState<boolean>(false);
    const [chainSearchQuery, setChainSearchQuery] = useState<string>("");
    const [pegSearchQuery, setPegSearchQuery] = useState<string>("");

    // Logo mapping functions
    const getPegLogo = (pegSlug: string): string => {
        const logoMap: Record<string, string> = {
            // Threshold tBTC
            "threshold-tbtc": "/logos/threshold-tbtc-v2.png",
            // BitGo wBTC
            "bitgo-wbtc": "/logos/wormhole-wbtc.png",
            // Coinbase cbBTC
            "coinbase-cbbtc": "/logos/bitcoin-btc.png",
            // Lombard LBTC
            "lombard-lbtc": "/logos/lombard-lbtcv.png",
            // Solv pegs
            "solv-solvbtc": "/logos/solv-solvbtccore.png",
            "solv-solvbtccore": "/logos/solv-solvbtccore.png",
            "solv-solvbtcm": "/logos/solv-solvbtcm.png",
            "solv-xsolvbtc": "/logos/solv-xsolvbtc.png",
            "solv-solvbtcena": "/logos/solv-solvbtcena.png",
            "solv-solvbtcb": "/logos/solv-solvbtcb.png",
            // Binance BTCB
            "binance-btcb": "/logos/bnbsmartchain.png",
            // Avalanche BTC.b
            "avalanche-btcb": "/logos/avalanche-btcb.png",
            // Obelisk oBTC
            "obelisk-obtc": "/logos/obelisk-obtc.png",
            // Unirouter uBTC
            "unirouter-ubtc": "/logos/unirouter-ubtc.png",
            // Xlink aBTC
            "xlink-abtc": "/logos/xlink-abtc.png",
            // Core coreBTC
            "core-corebtc": "/logos/core-stakedbtc.png",
            // Internet Computer ckBTC
            "internetcomputer-ckbtc": "/logos/internetcomputer-ckbtc.png",
            // Lightning BTC
            "lightning-btc": "/logos/lightning-btc.png",
            // Liquid L-BTC
            "liquid-lbtc": "/logos/side-sbtc.png",
            // Side sBTC
            "side-sbtc": "/logos/side-sbtc.png",
            // Stacks sBTC
            "stacks-sbtc": "/logos/stacks-sbtc.png",
            // Merlin pegs
            "merlin-mbtc": "/logos/merlin-mbtc.png",
            "merlin-wbtc": "/logos/merlin-wbtc.png",
            // Tron BTC
            "tron-btc": "/logos/tron-btc.png",
            // Zeus zBTC
            "zeus-zbtc": "/logos/zeus-zbtc.png",
            // Unit uBTC
            "unit-ubtc": "/logos/unit-ubtc.png",
            // Osmosis osmoBTC
            "osmosis-osmobtc": "/logos/osmosis-osmobtc.png",
            // Hemi hemiBTC
            "hemi-hemibtc": "/logos/hemi-hemibtc.png",
            // Lorenzo enzoBTC
            "lorenzo-enzobtc": "/logos/lorenzo-enzobtc.png",
            // 21shares BTC
            "21shares-btc": "/logos/21shares-21btc.png",
            // Badger eBTC
            "badger-ebtc": "/logos/badger-ebtc.png",
            // Manta mBTC
            "manta-mbtc": "/logos/manta-mbtc.png",
            // Nexus nBTC
            "nexus-nbtc": "/logos/nexus-nbtc.png",
            // Bedrock brBTC
            "bedrock-brbtc": "/logos/bedrock-brbtc.png",
            // Corn BTCN
            "corn-btcn": "/logos/corn-btcn.png"
        };
        return logoMap[pegSlug] || "/logos/bitcoin-btc.png";
    };

    const getChainLogo = (chainSlug: string): string => {
        const logoMap: Record<string, string> = {
            "ethereum": "/logos/ethereum.png",
            "arbitrum": "/logos/arbitrum.png",
            "base": "/logos/base.png",
            "optimism": "/logos/optimism.png",
            "polygon": "/logos/polygonpos.png",
            "avalanche": "/logos/avalanche.png",
            "bnbsmartchain": "/logos/bnbsmartchain.png",
            "mantle": "/logos/mantle.png",
            "scroll": "/logos/scroll.png",
            "linea": "/logos/linea.png",
            "mode": "/logos/mode.png",
            "starknet": "/logos/starknet.png",
            "solana": "/logos/solana.png",
            "core": "/logos/core-stakedbtc.png",
            "rootstock": "/logos/rootstock-wrbtc.png",
            "liquid": "/logos/side-sbtc.png",
            "stacks": "/logos/stacks-sbtc.png"
        };
        return logoMap[chainSlug] || "/logos/bitcoin-btc.png";
    };

    // Get chain name from slug
    const getChainName = (chainSlug: string): string => {
        const layer = allLayers.find(l => l.slug === chainSlug);
        return layer ? layer.title : chainSlug.charAt(0).toUpperCase() + chainSlug.slice(1);
    };

    // Load all layers on component mount
    useEffect(() => {
        const chains = allLayers.map(layer => layer.slug);
        setAllChainSlugs(chains);
    }, []);

    // Filter functions for search
    const filteredChains = allChainSlugs.filter(chainSlug =>
        getChainName(chainSlug).toLowerCase().includes(chainSearchQuery.toLowerCase())
    );

    const filteredPegs = availableChains.filter(impl =>
        impl.pegName.toLowerCase().includes(pegSearchQuery.toLowerCase())
    );

    const handleChainSelection = (chainSlug: string) => {
        setSelectedChain(chainSlug);
        setSelectedPeg("");
        
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
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Asset-Specific Reviews</h1>
                <p className="text-lg text-muted-foreground">
                    Select a two-way peg and blockchain to see how that specific asset works on that chain
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Search className="h-5 w-5" />
                        Select Asset & Chain
                    </CardTitle>
                    <CardDescription>
                        Choose a two-way peg and the blockchain where you want to use it
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Dropdowns Side by Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Chain Selection */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Blockchain</label>
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
                                            "Select a blockchain..."
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
                                        {filteredChains.length === 0 ? (
                                            <div className="p-4 text-sm text-muted-foreground">No blockchains found.</div>
                                        ) : (
                                            filteredChains.map((chainSlug) => (
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
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Peg Selection */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Two-Way Peg</label>
                            <Popover open={pegSearchOpen} onOpenChange={setPegSearchOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={pegSearchOpen}
                                        className="w-full justify-between"
                                        disabled={!selectedChain}
                                    >
                                        {selectedPeg && selectedChain ? (
                                            <div className="flex items-center gap-2">
                                                <Image 
                                                    src={getPegLogo(selectedPeg)} 
                                                    alt={availableChains.find(impl => impl.pegSlug === selectedPeg)?.pegName || ""}
                                                    width={20} 
                                                    height={20} 
                                                    className="rounded-sm"
                                                />
                                                <span>{availableChains.find(impl => impl.pegSlug === selectedPeg)?.pegName}</span>
                                            </div>
                                        ) : (
                                            selectedChain ? "Select a Bitcoin peg..." : "Select a blockchain first"
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
                                                    key={impl.pegSlug}
                                                    className={cn(
                                                        "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-accent",
                                                        selectedPeg === impl.pegSlug && "bg-accent"
                                                    )}
                                                    onClick={() => {
                                                        handlePegSelection(impl.pegSlug);
                                                        setPegSearchOpen(false);
                                                        setPegSearchQuery("");
                                                    }}
                                                >
                                                    <Image 
                                                        src={getPegLogo(impl.pegSlug)} 
                                                        alt={impl.pegName}
                                                        width={20} 
                                                        height={20} 
                                                        className="rounded-sm"
                                                    />
                                                    <span className="flex-1">{impl.pegName}</span>
                                                    {selectedPeg === impl.pegSlug && (
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