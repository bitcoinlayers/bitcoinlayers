"use client";

import React, { useState, useMemo } from "react";
import { useQueryState } from "nuqs";
import { LayerProject, EntityCategory } from "@/content/props";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LayersIcon } from "lucide-react";
import LayerTable from "./layer-table";
import SidesystemTable from "./sidesystem-table";

type NetworkCategory = "bitcoin-native" | "sidesystems" | "alt-networks";

interface Props {
    data: LayerProject[];
    headers: {
        name: string;
        showSorting: boolean;
        filterOptions?: string[];
        mobileLabel: string;
    }[];
}

interface TabData {
    id: NetworkCategory;
    label: string;
    count: number;
    category: EntityCategory[];
}

const AggregatedNetworksTable = ({ data, headers }: Props) => {
    const [activeTab, setActiveTab] = useQueryState("network-tab", {
        defaultValue: "bitcoin-native" as NetworkCategory,
    });
    
    const [pegSupplyView, setPegSupplyView] = useQueryState("peg-supply", {
        defaultValue: "pegs",
        parse: (value) => value === "supply" ? "supply" : "pegs",
        serialize: (value) => value,
    });

    // Calculate counts and categorize data
    const tabsData = useMemo((): TabData[] => {
        const bitcoinNativeCount = data.filter(item => item.entityCategory === EntityCategory.BitcoinNative).length;
        const sidesystemsCount = data.filter(item => item.entityCategory === EntityCategory.Sidesystem).length;

        return [
            {
                id: "bitcoin-native",
                label: "Bitcoin Native",
                count: bitcoinNativeCount,
                category: [EntityCategory.BitcoinNative]
            },
            {
                id: "sidesystems",
                label: "Sidesystems",
                count: sidesystemsCount,
                category: [EntityCategory.Sidesystem]
            }
        ];
    }, [data]);

    // Filter data based on active tab
    const filteredData = useMemo(() => {
        const activeTabData = tabsData.find(tab => tab.id === activeTab);
        if (!activeTabData) return data;

        return data.filter(item => 
            item.entityCategory && activeTabData.category.includes(item.entityCategory)
        );
    }, [data, activeTab, tabsData]);

    // Get the appropriate headers for the current tab
    const getTabHeaders = () => {
        if (activeTab === "bitcoin-native") {
            // Bitcoin Native: transform BTC Pegs to Custody Type (5 columns total)
            return headers.map(header => {
                if (header.name === "BTC Pegs") {
                    return {
                        ...header,
                        name: "Custody Type",
                        mobileLabel: "Custody"
                    };
                }
                return header;
            });
        } else {
            // Sidesystems & Alt Networks: add Custody Type column and keep BTC Pegs/Supply (6 columns total)
            const transformedHeaders = headers.map(header => {
                if (header.name === "BTC Pegs") {
                    return {
                        ...header,
                        name: pegSupplyView === "pegs" ? "BTC Pegs" : "BTC Supply",
                        mobileLabel: pegSupplyView === "pegs" ? "Pegs" : "Supply"
                    };
                }
                return header;
            });
            
            // Add Custody Type column before BTC Pegs/Supply
            const btcPegsIndex = transformedHeaders.findIndex(h => h.name === "BTC Pegs" || h.name === "BTC Supply");
            if (btcPegsIndex > -1) {
                transformedHeaders.splice(btcPegsIndex, 0, {
                    name: "Custody Type",
                    showSorting: false,
                    mobileLabel: "Custody"
                });
            }
            
            return transformedHeaders;
        }
    };

    // Render the appropriate table component based on active tab
    const renderTableContent = () => {
        const tabHeaders = getTabHeaders();
        
        switch (activeTab) {
            case "bitcoin-native":
                return (
                    <div className="aggregated-table-content">
                        <LayerTable data={filteredData} headers={tabHeaders} hideHeader={true} hideCard={true} />
                    </div>
                );
            case "sidesystems":
                return (
                    <div className="aggregated-table-content">
                        <SidesystemTable 
                            data={filteredData} 
                            headers={tabHeaders} 
                            hideHeader={true}
                            hideCard={true}
                            pegSupplyView={pegSupplyView as "pegs" | "supply"}
                            onPegSupplyViewChange={setPegSupplyView}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row border-none">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className="flex">
                        <LayersIcon className="mr-3" /> Networks
                    </CardTitle>
                    <CardDescription>
                        Learn the tradeoffs for different networks
                    </CardDescription>
                </div>
                
                <div className="flex">
                    {/* Tab Navigation - styled like wrapper table buttons */}
                    {tabsData.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left transition-colors sm:border-t-0 sm:px-8 sm:py-6 min-w-[100px] sm:min-w-[150px] ${
                                index === 0 ? "sm:border-l" : "border-l"
                            } ${
                                activeTab === tab.id
                                    ? "bg-muted/50 text-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                            }`}
                        >
                            <span className="text-xs text-muted-foreground">
                                {tab.label}
                            </span>
                            <span className="text-lg font-bold leading-none sm:text-3xl">
                                {tab.count}
                            </span>
                        </button>
                    ))}
                </div>
            </CardHeader>

            <CardContent className="p-0">
                {renderTableContent()}
            </CardContent>
        </Card>
    );
};

export default AggregatedNetworksTable;
