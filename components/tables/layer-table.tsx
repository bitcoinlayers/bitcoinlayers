"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Risk from "@/components/layer/layerTableItemRisk";
import TableHeader from "@/components/tables/tableHeader";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import { useQueryState } from "nuqs";
import useGetLayertvlCurrentAll from "@/hooks/use-get-layertvl-current-all";
import { LayerProject } from "@/content/props";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LayersIcon } from "lucide-react";

type TableTabKey =
    | "Trust Assumptions"
    | "Type"
    | "Status"
    | "Unit of Account"
    | "BTC Locked";

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

const LayerTable = ({ data, headers }: Props) => {
    const [types] = useQueryState<string[]>("type", {
        defaultValue: [],
        parse: (value) => value.split(",").filter(Boolean),
        serialize: (value) => value.join(","),
    });
    // const [status] = useQueryState<string[]>("status", {
    //     defaultValue: ["Mainnet", "Beta"],
    //     parse: (value) => value.split(",").filter(Boolean),
    //     serialize: (value) => value.join(","),
    // });
    const [status, setStatus] = useQueryState("status", {
        defaultValue: "mainnet",
    }); //rm when adding back in status table filter
    const [sortBy, setSortBy] = useQueryState("sortBy", {
        defaultValue: "Name",
    });
    const [sortOrder, setSortOrder] = useQueryState("sortOrder", {
        defaultValue: "asc",
    });

    const { data: balances } = useGetLayertvlCurrentAll();

    const totaledBalances = useMemo(() => {
        if (!balances) return {};

        return balances.reduce(
            (acc, balance) => {
                const { layer_slug, total_amount } = balance;

                if (!acc[layer_slug]) {
                    acc[layer_slug] = { totalAmount: 0 };
                }

                acc[layer_slug].totalAmount += total_amount;

                return acc;
            },
            {} as Record<string, { totalAmount: number }>,
        );
    }, [balances]);

    const [mobileActiveTab, setMobileActiveTab] =
        useState<TableTabKey>("Trust Assumptions");

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
                case "Status":
                    valueA = a.live;
                    valueB = b.live;
                    break;
                case "Unit of Account":
                    valueA = a.nativeToken;
                    valueB = b.nativeToken;
                    break;
                case "BTC Locked":
                    valueA = totaledBalances[a.slug]?.totalAmount ?? -Infinity;
                    valueB = totaledBalances[b.slug]?.totalAmount ?? -Infinity;
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
                types.includes(item.entityType),
            );
        }
        // if (status.length > 0) {
        //     filtered = filtered.filter((item) =>
        //         status.some((s) => s.toLowerCase() === item.live.toLowerCase()),
        //     );
        // }
        filtered = filtered.filter((item) => {
            if (status === "mainnet") return item.live === "Mainnet";
            if (status === "testnet") return item.live !== "Mainnet";
            return true;
        }); //rm when adding back in status table filter

        return filtered;
    }, [data, sortBy, sortOrder, types, status, totaledBalances]);

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
            {/* <CardHeader>
                <MobileView className="flex justify-center">
                    <div className="justify-center lg:items-start gap-1 inline-flex">
                        {headers.slice(1).map((_item, ind) => {
                            const isAllowedTab = [
                                "Risk",
                                "Type",
                                "Status",
                                "Unit of Account",
                                "BTC Locked",
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
            </CardHeader> */}
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row border-none">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className="flex">
                        <LayersIcon className="mr-3" /> Layers
                    </CardTitle>
                    <CardDescription>
                        Learn the tradeoffs for different bitcoin layers
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
                <div className="overflow-x-auto mx-auto border-none">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <TableHeader
                            headers={isMobile ? mobileTableHeaders : headers}
                            onSort={handleSort}
                        />
                        <tbody className="gap-x-8">
                            {filteredData.map((item, index) => (
                                <tr
                                    className={`cursor-pointer ${
                                        index !== filteredData.length - 1
                                            ? "border-b border-border"
                                            : ""
                                    }`}
                                    key={item.slug}
                                >
                                    <td className="lg:px-6 px-4 py-4 font-semibold whitespace-nowrap">
                                        <Link
                                            href={`/layers/${item.slug}`}
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
                                        mobileActiveTab === "Type") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <Link href={`/layers/${item.slug}`}>
                                                {item.entityType}
                                            </Link>
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "Status") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <Link href={`/layers/${item.slug}`}>
                                                {item.live}
                                            </Link>
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab ===
                                            "Unit of Account") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <Link
                                                href={`/layers/${item.slug}`}
                                                className="flex items-center"
                                            >
                                                {item.feeToken
                                                    .toLowerCase()
                                                    .includes("btc") && (
                                                    <Image
                                                        src="/btc.svg"
                                                        alt="BTC logo"
                                                        width={20}
                                                        height={20}
                                                        className="mr-2"
                                                    />
                                                )}
                                                {item.feeToken}
                                            </Link>
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "BTC Locked") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4">
                                            <Link href={`/layers/${item.slug}`}>
                                                {item.underReview ||
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
                                                    <div className="font-light">
                                                        Under review
                                                    </div>
                                                ) : (
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
                                                )}
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

export default LayerTable;
