"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Risk from "@/components/layer/layerTableItemRisk";
import TableHeader from "@/components/tables/tableHeader";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { LayerProject, LiveStatus } from "@/content/props";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LayersIcon } from "lucide-react";
import getCurrentSuppliesByTokenimpl, {
    Snapshot,
} from "@/hooks/get-current-supplies-by-tokenimpl";
import getCurrentSuppliesByNetwork from "@/hooks/get-current-supplies-by-network";
import TokenList from "@/components/tables/mapping-token-img";
import { EntityCategory } from "@/content/props";
import NoticeSnapshotDialog from "../layer/notice-snapshot/notice-snapshot-dialog";

type TableTabKey =
    | "Trust Assumptions"
    | "Type"
    | "Unit"
    | "BTC Pegs"
    | "BTC Supply";

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
    const [category, setCategory] = useQueryState<EntityCategory>(
        "entityCategory",
        {
            defaultValue: EntityCategory.BitcoinNative,
            parse: (value) =>
                Object.values(EntityCategory).includes(value as EntityCategory)
                    ? (value as EntityCategory)
                    : EntityCategory.BitcoinNative,
            serialize: (value) => value,
        },
    );

    const [sortBy, setSortBy] = useQueryState("sortBy", {
        defaultValue: "BTC Supply",
    });
    const [sortOrder, setSortOrder] = useQueryState("sortOrder", {
        defaultValue: "desc",
    });

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
                case "Unit":
                    valueA = a.nativeToken;
                    valueB = b.nativeToken;
                    break;
                case "BTC Supply":
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

        filtered = filtered.filter((item) => item.live === LiveStatus.Mainnet);

        if (types.length > 0) {
            filtered = filtered.filter((item) =>
                types.includes(item.entityType),
            );
        }
        filtered = filtered.filter((item) => item.entityCategory === category);

        return filtered;
    }, [data, sortBy, sortOrder, types, category, totaledBalances]);

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
                        <LayersIcon className="mr-3" /> Networks
                    </CardTitle>
                    <CardDescription>
                        Learn the tradeoffs for different networks
                    </CardDescription>
                </div>
                <div className="flex">
                    {Object.values(EntityCategory).map((cat) => (
                        <button
                            key={cat}
                            data-active={category === cat}
                            className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 min-w-[100px] sm:min-w-[150px]"
                            onClick={() => setCategory(cat)}
                        >
                            <span className="text-xs text-muted-foreground">
                                {cat}
                            </span>
                            <span className="text-lg font-bold leading-none sm:text-3xl">
                                {data
                                    .filter(
                                        (item) =>
                                            item.entityCategory === cat &&
                                            item.live === LiveStatus.Mainnet,
                                    )
                                    .length.toLocaleString()}
                            </span>
                        </button>
                    ))}
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
                                        <div className="flex items-center space-x-2">
                                            <Link
                                                href={`/layers/${item.slug}`}
                                                className="flex items-center"
                                            >
                                                <LayerImage
                                                    src={`/logos/${item.slug.toLowerCase()}.png`}
                                                    title={item.title}
                                                />
                                                <span className="ml-2 truncate lg:word-break-none">
                                                    {item.title}
                                                </span>
                                            </Link>
                                            {item.notice && (
                                                <NoticeSnapshotDialog
                                                    layer={item}
                                                />
                                            )}
                                        </div>
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
                                        mobileActiveTab === "Unit") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-border">
                                            <Link
                                                href={`/layers/${item.slug}`}
                                                className="flex items-center"
                                            >
                                                {item.feeToken.toLowerCase() ===
                                                "btc" ? (
                                                    <Image
                                                        src="/btc.svg"
                                                        alt="BTC logo"
                                                        width={20}
                                                        height={20}
                                                        className="mr-2"
                                                    />
                                                ) : item.feeToken
                                                      .toLowerCase()
                                                      .includes("btc") ? (
                                                    <Image
                                                        src="/btc-inverse.svg"
                                                        alt="BTC inverse logo"
                                                        width={20}
                                                        height={20}
                                                        className="mr-2"
                                                    />
                                                ) : null}
                                                {item.feeToken}
                                            </Link>
                                        </td>
                                    )}
                                    {(!isMobile || mobileActiveTab === "BTC Pegs") && (
  <td className="lg:px-4 px-4 py-3 lg:py-4 border-border">
    {item.entityCategory === EntityCategory.BitcoinNative ? (
      <Image
        src="/btc.svg"
        alt="BTC"
        width={20}
        height={20}
      />
    ) : isLoading ? (
      <div>Loading...</div>
    ) : (
      <TokenList
        tokens={
          tokensMap[item.slug.toLowerCase()] || []
        }
      />
    )}
  </td>
)}

                                    {(!isMobile ||
                                        mobileActiveTab === "BTC Supply") && (
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
                                                        Unavailable
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
