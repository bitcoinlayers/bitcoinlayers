"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Risk from "@/components/layer/layerTableItemRisk";
import TableHeader from "@/components/tables/tableHeader";
import { MobileView, isMobile } from "react-device-detect";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { Project, Type } from "@/content/props";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { BitcoinIcon, DatabaseIcon } from "lucide-react";

type TableTabKey = "Risk" | "Type" | "Status" | "Category";

interface Props {
    data: Project[];
    headers: {
        name: string;
        showSorting: boolean;
        filterOptions?: string[];
        mobileLabel: string;
    }[];
}

const isLayer = (item: Project) => {
    return item.type === Type.Layer;
};

const isInfrastructure = (item: Project) => {
    return item.type === Type.Infrastructure;
};

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

const BitcoinonlyTable = ({ data, headers }: Props) => {
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
        defaultValue: "asc",
    });

    const [mobileActiveTab, setMobileActiveTab] = useState<TableTabKey>("Risk");

    const sortAndFilterData = useMemo(() => {
        const sorted = [...data].sort((a, b) => {
            let valueA, valueB;
            switch (sortBy) {
                case "Name":
                    valueA = a.title.toLowerCase();
                    valueB = b.title.toLowerCase();
                    break;
                case "Category":
                    valueA = isLayer(a) ? "Layer" : "Infrastructure";
                    valueB = isLayer(b) ? "Layer" : "Infrastructure";
                    break;
                case "Type":
                    valueA = isLayer(a)
                        ? a.entityType
                        : isInfrastructure(a)
                          ? a.entityType
                          : "";
                    valueB = isLayer(b)
                        ? b.entityType
                        : isInfrastructure(b)
                          ? b.entityType
                          : "";
                    break;
                case "Status":
                    valueA = a.live;
                    valueB = b.live;
                    break;
                default:
                    return 0;
            }
            if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
            if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });

        let filtered = sorted;
        if (types.length > 0) {
            filtered = filtered.filter((item) =>
                types.includes(
                    isLayer(item) ? item.entityType : item.entityType,
                ),
            );
        }

        filtered = filtered.filter((item) => {
            if (!item.bitcoinOnly) return false;
            if (status === "mainnet") return item.live === "Mainnet";
            if (status === "testnet") return item.live !== "Mainnet";
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
                        <BitcoinIcon className="mr-3" /> Bitcoin Only
                    </CardTitle>
                    <CardDescription>
                        Track Bitcoin-only projects and their metrics
                    </CardDescription>
                </div>
                <div className="flex">
                    <button
                        data-active={status === "mainnet"}
                        className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 min-w-[100px] sm:min-w-[150px]"
                        onClick={() => setStatus("mainnet")}
                    >
                        <span className="text-xs text-muted-foreground">
                            On mainnet
                        </span>
                        <span className="text-lg font-bold leading-none sm:text-3xl">
                            {data
                                .filter((item) => item.live === "Mainnet")
                                .length.toLocaleString()}
                        </span>
                    </button>
                    <button
                        data-active={status === "testnet"}
                        className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 min-w-[100px] sm:min-w-[150px]"
                        onClick={() => setStatus("testnet")}
                    >
                        <span className="text-xs text-muted-foreground">
                            Coming soon
                        </span>
                        <span className="text-lg font-bold leading-none sm:text-3xl">
                            {data
                                .filter((item) => item.live !== "Mainnet")
                                .length.toLocaleString()}
                        </span>
                    </button>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <MobileView className="flex justify-center">
                    <div className="justify-center lg:items-start gap-3 inline-flex py-3">
                        {headers.slice(1).map((_item, ind) => {
                            const isAllowedTab = [
                                "Risk",
                                "Category",
                                "Type",
                                "Status",
                            ].includes(_item.name);
                            return (
                                <div
                                    className={`h-[30px] px-4 py-[5px] rounded-full border-2 justify-center items-center gap-1.5 flex cursor-pointer ${
                                        mobileActiveTab === _item.name
                                            ? "bg-white border-orange-600"
                                            : "border-slate-300"
                                    }`}
                                    onClick={() =>
                                        isAllowedTab &&
                                        handleMobileTabClick(
                                            _item.name as TableTabKey,
                                        )
                                    }
                                    key={ind}
                                >
                                    <div
                                        className={`text-center text-sm font-medium leading-tight ${
                                            mobileActiveTab === _item.name
                                                ? "text-orange-600"
                                                : "text-slate-600"
                                        }`}
                                    >
                                        {_item.mobileLabel}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </MobileView>

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
                                        index === sortAndFilterData.length - 1
                                            ? ""
                                            : "border-b border-border"
                                    }`}
                                    key={item.slug}
                                >
                                    <td className="lg:px-6 px-4 py-4 font-semibold whitespace-nowrap">
                                        <Link
                                            href={`/${
                                                isLayer(item)
                                                    ? "layers"
                                                    : "infrastructure"
                                            }/${item.slug}`}
                                            className="flex items-center"
                                        >
                                            <LayerImage
                                                src={`/logos/${item.slug}.png`}
                                                title={item.title}
                                            />
                                            <span className="ml-2 truncate lg:word-break-none">
                                                {item.title}
                                            </span>
                                        </Link>
                                    </td>
                                    {(!isMobile ||
                                        mobileActiveTab === "Risk") && (
                                        <td className="relative px-2 border-border">
                                            {isLayer(item) ? (
                                                !item.underReview ? (
                                                    <Risk layer={item} />
                                                ) : (
                                                    <div className="lg:px-5 px-1 font-light">
                                                        Under review
                                                    </div>
                                                )
                                            ) : (
                                                <div className="lg:px-5 px-1">
                                                    Not applicable
                                                </div>
                                            )}
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "Type") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <Link
                                                href={`/${
                                                    isLayer(item)
                                                        ? "layers"
                                                        : "infrastructure"
                                                }/${item.slug}`}
                                            >
                                                {isLayer(item)
                                                    ? item.entityType
                                                    : isInfrastructure(item)
                                                      ? item.entityType
                                                      : ""}
                                            </Link>
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "Status") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <Link
                                                href={`/${
                                                    isLayer(item)
                                                        ? "layers"
                                                        : "infrastructure"
                                                }/${item.slug}`}
                                            >
                                                {item.live}
                                            </Link>
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "Category") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4">
                                            <Link
                                                href={`/${
                                                    isLayer(item)
                                                        ? "layers"
                                                        : "infrastructure"
                                                }/${item.slug}`}
                                            >
                                                {isLayer(item)
                                                    ? "Layer"
                                                    : "Infrastructure"}
                                            </Link>
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

export default BitcoinonlyTable;
