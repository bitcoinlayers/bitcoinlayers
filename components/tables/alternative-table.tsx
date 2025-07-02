"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Risk from "@/components/layer/layerTableItemRisk";
import TableHeader from "@/components/tables/tableHeader";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { LayerProject, LiveStatus, EntityCategory, Notice, BitcoinLayer, UnilateralExit, OtherIcons } from "@/content/props";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LayersIcon } from "lucide-react";
import getCurrentSuppliesByTokenimpl, { Snapshot } from "@/hooks/get-current-supplies-by-tokenimpl";
import getCurrentSuppliesByNetwork from "@/hooks/get-current-supplies-by-network";
import TokenList from "@/components/tables/mapping-token-img";
import NoticeSnapshotDialog from "../layer/notice-snapshot/notice-snapshot-dialog";
import ClaimBitcoinLayerDialog from "../layer/claim-bitcoin-layer-dialog";
import UnderReviewDialog from "../layer/under-review-dialog";
import OtherReasonBridgeDialog from "../layer/other-reason-bridge-dialog";
import BitcoinLayerDialog from "../layer/bitcoin-layer-dialog";
import UnilateralExitDialog from "../layer/unilateral-exit-dialog";
import MergeMineDialog from "../layer/merge-mine-dialog";
import NotALayerDialog from "../layer/not-a-layer-dialog";
import HybridDialog from "../layer/hybrid-dialog";
import StakingDialog from "../layer/staking-dialog";
import RiskSummaryDialog from "../layer/risk-summary-dialog";
import NetworkTypeHoverCard from "../layer/network-type-hover-card";
import SupplyDistributionHoverCard from "../layer/supply-distribution-hover-card";
import CustodyTypeDialog from "../layer/custody-type-dialog";

type TableTabKey =
    | "Trust Assumptions"
    | "Type"
    | "Risk Summary"
    | "Custody Type"
    | "BTC Pegs";

interface Props {
    data: LayerProject[];
    headers: {
        name: string;
        showSorting: boolean;
        filterOptions?: string[];
        mobileLabel: string;
    }[];
    showToggleGroup?: boolean;
}

const LayerImage = ({ src, title }: { src: string; title: string }) => {
    const [imageSrc, setImageSrc] = useState(src);

    useEffect(() => {
        setImageSrc(src);
    }, [src]);

    const handleError = () => {
        setImageSrc("/bitcoinlayers-logo.png");
    };

    return (
        <Image
            src={imageSrc}
            alt={`${title} logo`}
            width={20}
            height={20}
            onError={handleError}
        />
    );
};

const AlternativeTable = ({ data, headers }: Props) => {
    const [types] = useQueryState<string[]>("type", {
        defaultValue: [],
        parse: (value) => value.split(",").filter(Boolean),
        serialize: (value) => value.join(","),
    });

    const [sortBy, setSortBy] = useQueryState("sortBy", {
        defaultValue: "Name",
    });
    const [sortOrder, setSortOrder] = useQueryState("sortOrder", {
        defaultValue: "desc",
    });

    const [pegSupplyView, setPegSupplyView] = useState<"pegs" | "supply">("pegs");

    const { data: currentSupplies, isLoading } =
        getCurrentSuppliesByTokenimpl();

    const tokensMap = useMemo(() => {
        if (!currentSupplies) return {};
        return currentSupplies.reduce(
            (acc, token) => {
                const slug = token.network_slug
                    ? token.network_slug.toLowerCase()
                    : "";
                if (!acc[slug]) acc[slug] = [];
                acc[slug].push(token);
                return acc;
            },
            {} as Record<string, Snapshot[]>,
        );
    }, [currentSupplies]);

    const { data: balances } = getCurrentSuppliesByNetwork();

    const totaledBalances = useMemo(() => {
        if (!balances) return {};

        return balances.reduce(
            (acc, balance) => {
                const key = balance.network_slug.toLowerCase();
                if (!acc[key]) {
                    acc[key] = { totalAmount: 0 };
                }
                acc[key].totalAmount += balance.total_balance;
                return acc;
            },
            {} as Record<string, { totalAmount: number }>,
        );
    }, [balances]);

    const [mobileActiveTab, setMobileActiveTab] =
        useState<TableTabKey>("Trust Assumptions");

    const sortAndFilterData = useMemo(() => {
        // First filter to only alternative L1 projects
        const alternativeOnly = data.filter(item => item.entityCategory === EntityCategory.Alt);
        
        const sorted = [...alternativeOnly].sort((a, b) => {
            let valueA, valueB;
            switch (sortBy) {
                case "Name":
                    valueA = a.title.toLowerCase();
                    valueB = b.title.toLowerCase();
                    break;
                case "Type":
                    valueA = a.entityType;
                    valueB = b.entityType;
                    break;
                case "Risk Summary":
                    valueA = a.riskSummary?.join(",") || "";
                    valueB = b.riskSummary?.join(",") || "";
                    break;
                default:
                    return 0;
            }

            if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
            if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });

        let filtered = sorted;

        filtered = filtered.filter((item) => 
            item.live === LiveStatus.Mainnet || item.live === LiveStatus.Beta
        );

        if (types.length > 0) {
            filtered = filtered.filter((item) =>
                types.includes(item.entityType),
            );
        }

        return filtered;
    }, [data, sortBy, sortOrder, types, totaledBalances]);

    const handleSort = (header: string) => {
        if (sortBy === header) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(header);
            setSortOrder("asc");
        }
    };

    const filteredData = sortAndFilterData;

    const handleMobileTabClick = (tab: TableTabKey) => {
        setMobileActiveTab(tab);
    };

    const mobileTableHeaders = headers.filter(
        (_item) => _item.name === mobileActiveTab || _item.name === "Name",
    );

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row border-none">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className="flex">
                        <LayersIcon className="mr-3" /> Alternative networks
                    </CardTitle>
                    <CardDescription>
                        Alternative networks are independent networks that leverage bitcoin wrapped assets.
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto mx-auto border-none">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <TableHeader
                            headers={isMobile ? mobileTableHeaders : headers}
                            onSort={handleSort}
                            sortBy={sortBy}
                            sortOrder={sortOrder}
                            pegSupplyView={pegSupplyView}
                            onPegSupplyViewChange={setPegSupplyView}
                        />
                        <tbody className="gap-x-8">
                            {filteredData.map((item, index) => (
                                <tr
                                    className={`${
                                        index !== filteredData.length - 1
                                            ? "border-b border-border"
                                            : ""
                                    }`}
                                    key={item.slug}
                                >
                                    <td className="lg:px-6 px-4 py-4 font-semibold whitespace-nowrap">
                                        <div className="flex items-center space-x-2 max-w-[200px] lg:max-w-[250px]">
                                            <Link
                                                href={`/layers/${item.slug}`}
                                                className="flex items-center min-w-0 flex-1"
                                            >
                                                <LayerImage
                                                    src={`/logos/${item.slug.toLowerCase()}.png`}
                                                    title={item.title}
                                                />
                                                <span className="ml-2 truncate">
                                                    {item.title}
                                                </span>
                                            </Link>
                                            {item.staking && (
                                                <div className="flex-shrink-0">
                                                    <StakingDialog layer={item} />
                                                </div>
                                            )}
                                            {item.otherIcons === OtherIcons.MergeMine && (
                                                <div className="flex-shrink-0">
                                                    <MergeMineDialog layer={item} />
                                                </div>
                                            )}
                                            {item.otherIcons === OtherIcons.NotALayer && (
                                                <div className="flex-shrink-0">
                                                    <NotALayerDialog layer={item} />
                                                </div>
                                            )}
                                            {item.otherIcons === OtherIcons.Hybrid && (
                                                <div className="flex-shrink-0">
                                                    <HybridDialog layer={item} />
                                                </div>
                                            )}
                                            {item.unilateralExit === UnilateralExit.Yes && (
                                                <div className="flex-shrink-0">
                                                    <UnilateralExitDialog layer={item} />
                                                </div>
                                            )}
                                            {item.bitcoinLayer === BitcoinLayer.Yes && (
                                                <div className="flex-shrink-0">
                                                    <BitcoinLayerDialog layer={item} />
                                                </div>
                                            )}
                                            {item.notice === Notice.ClaimBitcoinLayer && (
                                                <div className="flex-shrink-0">
                                                    <ClaimBitcoinLayerDialog layer={item} />
                                                </div>
                                            )}
                                            {item.notice === Notice.UnderReview && (
                                                <div className="flex-shrink-0">
                                                    <UnderReviewDialog layer={item} />
                                                </div>
                                            )}
                                            {item.notice === Notice.OtherReasonBridge && (
                                                <div className="flex-shrink-0">
                                                    <OtherReasonBridgeDialog layer={item} />
                                                </div>
                                            )}
                                            {item.notice && item.notice !== Notice.ClaimBitcoinLayer && item.notice !== Notice.UnderReview && item.notice !== Notice.OtherReasonBridge && (
                                                <div className="flex-shrink-0">
                                                    <NoticeSnapshotDialog layer={item} />
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    {(!isMobile ||
                                        mobileActiveTab === "Type") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <NetworkTypeHoverCard entityType={item.entityType}>
                                                <Link 
                                                    href={`/layers/${item.slug}`}
                                                    className="hover:underline cursor-pointer"
                                                >
                                                    {item.entityType}
                                                </Link>
                                            </NetworkTypeHoverCard>
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab ===
                                            "Trust Assumptions") && (
                                        <td className="relative px-2 border-border">
                                            {!item.underReview ? (
                                                <Risk layer={item} />
                                            ) : (
                                                <div className="lg:px-5 px-1 font-light">
                                                    Under review
                                                </div>
                                            )}
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "Risk Summary") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <RiskSummaryDialog 
                                                layer={item}
                                                riskSummary={item.riskSummary || []}
                                            />
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "Custody Type") && (
                                        <td className="lg:px-4 px-4 py-3 lg:py-4 border-border">
                                            <CustodyTypeDialog layer={item} />
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "BTC Pegs") && (
                                        <td className="lg:px-4 px-4 py-3 lg:py-4 border-border">
                                            {pegSupplyView === "pegs" ? (
                                                isLoading ? (
                                                    <div>Loading...</div>
                                                ) : (
                                                    <TokenList
                                                        tokens={tokensMap[item.slug.toLowerCase()] || []}
                                                        networkSlug={item.slug}
                                                    />
                                                )
                                            ) : (
                                                // Supply view
                                                item.underReview ||
                                                (Object.keys(
                                                    totaledBalances,
                                                ).find(
                                                    (key) =>
                                                        key.toLowerCase() ===
                                                        item.title.toLowerCase(),
                                                ) === undefined &&
                                                    (item.btcLocked === null ||
                                                        isNaN(
                                                            item.btcLocked,
                                                        ))) ? (
                                                    <Link href={`/layers/${item.slug}`}>
                                                        <div className="font-light">
                                                            Unavailable
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <SupplyDistributionHoverCard
                                                        tokens={tokensMap[item.slug.toLowerCase()] || []}
                                                        totalAmount={Number(
                                                            totaledBalances[
                                                                item.slug
                                                            ]?.totalAmount ??
                                                                item.btcLocked,
                                                        )}
                                                        networkName={item.title}
                                                    >
                                                        <Link 
                                                            href={`/layers/${item.slug}`}
                                                            className="hover:underline cursor-pointer"
                                                        >
                                                            <div>
                                                                ₿{" "}
                                                                {Number(
                                                                    totaledBalances[
                                                                        item.slug
                                                                    ]?.totalAmount ??
                                                                        item.btcLocked,
                                                                ).toLocaleString(
                                                                    "en-US",
                                                                    {
                                                                        minimumFractionDigits: 0,
                                                                        maximumFractionDigits: 0,
                                                                    },
                                                                )}
                                                            </div>
                                                        </Link>
                                                    </SupplyDistributionHoverCard>
                                                )
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
};

export default AlternativeTable; 