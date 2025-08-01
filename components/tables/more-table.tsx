"use client";

import React, { useState, useMemo, ReactNode, Component } from "react";
import Image from "next/image";
import TableHeader from "@/components/tables/tableHeader";
import { MobileView, isMobile } from "react-device-detect";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { InfrastructureProject, Project } from "@/content/props";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { LayersIcon } from "lucide-react";
import ApplicationReviewDialog from "@/components/layer/application-review-dialog";
import RiskSummaryDialog from "@/components/layer/risk-summary-dialog";
import AssociatedNetworksDialog from "@/components/layer/associated-networks-dialog";
import UseCaseDialog from "@/components/layer/use-case-dialog";

type TableTabKey =
    | "Type"
    | "Purpose"
    | "Asset Custody"
    | "Risk Summary"
    | "Use Case"
    | "Associated Networks";

interface Props {
    data: InfrastructureProject[];
    headers: {
        name: string;
        showSorting: boolean;
        filterOptions?: string[];
        mobileLabel: string;
    }[];
    title?: string;
    description?: string;
    icon?: ReactNode;
    isMore?: boolean;
}

const InfrastructureImage = ({
    src,
    title,
}: {
    src: string;
    title: string;
}) => {
    const [imageSrc, setImageSrc] = useState(src);

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

const AssociatedNetworkImage = ({
    associatedLayers,
}: {
    associatedLayers: string | undefined;
}) => {
    const [imageSrc, setImageSrc] = useState(
        associatedLayers ? `/logos/${associatedLayers.toLowerCase()}.png` : "/bitcoinlayers-logo.png"
    );

    const handleError = () => {
        console.log(`Image failed to load: /logos/${associatedLayers?.toLowerCase()}.png`);
        setImageSrc("/bitcoinlayers-logo.png");
    };

    console.log(`AssociatedNetworkImage - associatedLayers: "${associatedLayers}", imageSrc: "${imageSrc}"`);

    if (!associatedLayers) {
        console.log("No associatedLayers, showing nothing");
        return null;
    }

    return (
        <Image
            src={imageSrc}
            alt={`${associatedLayers} logo`}
            width={20}
            height={20}
            onError={handleError}
        />
    );
};

const MoreTable = ({
    data,
    headers,
    title,
    description,
    icon,
    isMore = false,
}: Props) => {
    const [status, setStatus] = useQueryState("status", {
        defaultValue: "mainnet",
    });
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

    const [mobileActiveTab, setMobileActiveTab] = useState<TableTabKey>("Type");

    const sortAndFilterData = useMemo(() => {
        const sorted = [...data].sort((a, b) => {
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
                case "Purpose":
                    valueA = a.purpose;
                    valueB = b.purpose;
                    break;
                case "Asset Custody":
                    valueA = a.live;
                    valueB = b.live;
                    break;
                case "Risk Summary":
                    valueA = a.nativeToken;
                    valueB = b.nativeToken;
                    break;
                case "Use Case":
                    valueA = a.sections?.find(s => s.id === "usecases")?.title || "";
                    valueB = b.sections?.find(s => s.id === "usecases")?.title || "";
                    break;
                case "Associated Networks":
                    valueA = a.associatedLayers;
                    valueB = b.associatedLayers;
                    break;
                default:
                    return 0;
            }

            if (valueA === undefined || valueB === undefined) return 0;
            if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
            if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });

        let filtered = sorted;
        if (types.length > 0) {
            filtered = filtered.filter((item) =>
                types.includes(item.entityType),
            );
        }

        filtered = filtered.filter((item) => {
            if (status === "mainnet") return item.live === "Mainnet" || item.live === "Beta";
            if (status === "testnet") return item.live !== "Mainnet" && item.live !== "Beta";
            return true;
        });

        return filtered;
    }, [data, sortBy, sortOrder, types, status]);

    const handleSort = (header: string) => {
        if (sortBy === header) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(header);
            setSortOrder("asc");
        }
    };

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
                        {icon || <LayersIcon className="mr-3" />}{" "}
                        {title || "Infrastructure"}
                    </CardTitle>
                    <CardDescription>
                        {description ||
                            "Learn the tradeoffs for different infrastructure projects"}
                    </CardDescription>
                </div>
                <div className="flex">
                    <button
                        data-active={status === "mainnet"}
                        className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 min-w-[100px] sm:min-w-[150px]"
                        onClick={() => setStatus("mainnet")}
                    >
                        <span className="text-xs text-muted-foreground">
                            Live projects
                        </span>
                        <span className="text-lg font-bold leading-none sm:text-3xl">
                            {data
                                .filter((item) => item.live === "Mainnet" || item.live === "Beta")
                                .length.toLocaleString()}
                        </span>
                    </button>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto mx-auto border-none">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <TableHeader
                            headers={isMobile ? mobileTableHeaders : headers}
                            onSort={handleSort}
                        />
                        <tbody className="gap-x-8">
                            {sortAndFilterData.map((item, index) => (
                                <tr
                                    className={`cursor-pointer ${
                                        index !== sortAndFilterData.length - 1
                                            ? "border-b border-border"
                                            : ""
                                    }`}
                                    key={item.slug}
                                >
                                    <td className="lg:px-6 px-4 py-4 font-semibold whitespace-nowrap">
                                        <Link
                                            href={`/${isMore ? "more" : "infrastructure"}/${item.slug}`}
                                            className="flex items-center"
                                        >
                                            <InfrastructureImage
                                                src={`/logos/${item.slug}.png`}
                                                title={item.title}
                                            />
                                            <span className="ml-2 truncate lg:word-break-none">
                                                {item.title}
                                            </span>
                                        </Link>
                                    </td>

                                    {(!isMobile ||
                                        mobileActiveTab === "Type") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <Link
                                                href={`/${isMore ? "more" : "infrastructure"}/${item.slug}`}
                                            >
                                                {item.entityType}
                                            </Link>
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "Asset Custody") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <ApplicationReviewDialog application={item} />
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab ===
                                            "Risk Summary") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <RiskSummaryDialog 
                                                layer={item}
                                                riskSummary={item.riskSummary || []}
                                            />
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "Use Case") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <UseCaseDialog application={item} />
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab ===
                                            "Associated Networks") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4">
                                            <AssociatedNetworksDialog application={item} />
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

export default MoreTable;
