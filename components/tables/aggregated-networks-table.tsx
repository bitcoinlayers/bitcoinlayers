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
import AlternativeTable from "./alternative-table";
import IntegratedTable from "./integrated-table";
import PegSupplyToggle from "./peg-supply-toggle";

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
        defaultValue: "pegs" as "pegs" | "supply",
    });

    // Calculate counts and categorize data
    const tabsData = useMemo((): TabData[] => {
        const bitcoinNativeCount = data.filter(item => item.entityCategory === EntityCategory.BitcoinNative).length;
        const sidesystemsCount = data.filter(item => item.entityCategory === EntityCategory.Sidesystem).length;
        const altNetworksCount = data.filter(item => 
            item.entityCategory === EntityCategory.Alt || 
            item.entityCategory === EntityCategory.Integrated
        ).length;

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
            },
            {
                id: "alt-networks",
                label: "Alt. L1s & More",
                count: altNetworksCount,
                category: [EntityCategory.Alt, EntityCategory.Integrated]
            }
        ];
    }, [data]);

    // Filter data based on active tab
    const filteredData = useMemo(() => {
        const activeTabData = tabsData.find(tab => tab.id === activeTab);
        if (!activeTabData) return data;

        return data.filter(item => 
            activeTabData.category.includes(item.entityCategory)
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
                        <LayerTable data={filteredData} headers={tabHeaders} hideHeader={true} />
                    </div>
                );
            case "sidesystems":
                return (
                    <div className="aggregated-table-content">
                        <SidesystemTable 
                            data={filteredData} 
                            headers={tabHeaders} 
                            hideHeader={true}
                            pegSupplyView={pegSupplyView}
                            onPegSupplyViewChange={setPegSupplyView}
                        />
                    </div>
                );
            case "alt-networks":
                // Check if we have both Alt and Integrated, if so render both
                const altData = filteredData.filter(item => item.entityCategory === EntityCategory.Alt);
                const integratedData = filteredData.filter(item => item.entityCategory === EntityCategory.Integrated);
                
                return (
                    <div className="aggregated-table-content space-y-6">
                        {altData.length > 0 && (
                            <AlternativeTable 
                                data={altData} 
                                headers={tabHeaders} 
                                hideHeader={true}
                                pegSupplyView={pegSupplyView}
                                onPegSupplyViewChange={setPegSupplyView}
                            />
                        )}
                        {integratedData.length > 0 && (
                            <IntegratedTable 
                                data={integratedData} 
                                headers={tabHeaders} 
                                hideHeader={true}
                                pegSupplyView={pegSupplyView}
                                onPegSupplyViewChange={setPegSupplyView}
                            />
                        )}
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
                
                {/* Tab Navigation - positioned on the right like in photo */}
                <div className="flex items-center gap-0 px-6 py-5 sm:py-6">
                    {tabsData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col items-center justify-center min-w-[80px] h-[60px] px-3 py-2 border-l border-border first:border-l-0 transition-colors ${
                                activeTab === tab.id
                                    ? "bg-background text-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                            }`}
                        >
                            <div className="text-xs font-medium text-muted-foreground mb-1">
                                {tab.label}
                            </div>
                            <div className="text-2xl font-bold">
                                {tab.count}
                            </div>
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
