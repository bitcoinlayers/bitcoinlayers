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
import OtherTable from "./other-table";

type NetworkCategory = "bitcoin-native" | "sidesystems" | "other";

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

    // Calculate counts and categorize data
    const tabsData = useMemo((): TabData[] => {
        const bitcoinNativeCount = data.filter(item => item.entityCategory === EntityCategory.BitcoinNative).length;
        const sidesystemsCount = data.filter(item => item.entityCategory === EntityCategory.Sidesystem).length;
        const otherCount = data.filter(item => 
            item.entityCategory === EntityCategory.Other
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
                id: "other",
                label: "Other",
                count: otherCount,
                category: [EntityCategory.Other]
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
            // Bitcoin Native: remove BTC Pegs and BTC Supply columns, add Custody Type (5 columns total)
            return headers
                .filter(header => header.name !== "BTC Pegs" && header.name !== "BTC Supply")
                .concat([{
                    name: "Custody Type",
                    showSorting: false,
                    mobileLabel: "Custody"
                }]);
        } else {
            // Sidesystems & Other: use headers as-is (should have both BTC Pegs and BTC Supply)
            return headers;
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
                        />
                    </div>
                );
            case "other":
                return (
                    <div className="aggregated-table-content">
                        <OtherTable 
                            data={filteredData} 
                            headers={tabHeaders} 
                            hideHeader={true}
                            hideCard={true}
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
