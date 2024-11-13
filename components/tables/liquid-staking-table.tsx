"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import TableHeader from "@/components/tables/tableHeader";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { InfrastructureProject, Project, Type } from "@/content/props";
import useGetInfratvlCurrentAll from "@/hooks/use-get-infratvl-current-all";
import AssessmentSnapshotDialog from "../infrastructure/assessment-snapshot/assessment-snapshot-dialog-table";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { DropletsIcon } from "lucide-react";

type TableTabKey = "Snapshot" | "Type" | "Status" | "TVL";

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

const LiquidStakingTable = ({ data, headers }: Props) => {
    const [status, setStatus] = useQueryState("liquid-staking-status", {
        defaultValue: "testnet",
    });
    const [types] = useQueryState<string[]>("liquid-staking-type", {
        defaultValue: [],
        parse: (value) => value.split(",").filter(Boolean),
        serialize: (value) => value.join(","),
    });
    const [sortBy, setSortBy] = useQueryState("liquid-staking-sortBy", {
        defaultValue: "Name",
    });
    const [sortOrder, setSortOrder] = useQueryState(
        "liquid-staking-sortOrder",
        {
            defaultValue: "asc",
        },
    );

    const { data: balances } = useGetInfratvlCurrentAll();

    const totaledBalances = useMemo(() => {
        if (!balances) return {};

        return balances.reduce(
            (acc, balance) => {
                const { infra_slug, total_amount } = balance;

                if (!acc[infra_slug]) {
                    acc[infra_slug] = { totalAmount: 0 };
                }

                acc[infra_slug].totalAmount += total_amount;

                return acc;
            },
            {} as Record<string, { totalAmount: number }>,
        );
    }, [balances]);

    const [mobileActiveTab, setMobileActiveTab] =
        useState<TableTabKey>("Snapshot");

    const sortAndFilterData = useMemo(() => {
        const sorted = [...data].sort((a, b) => {
            let valueA, valueB;
            switch (sortBy) {
                case "Name":
                    valueA = a.title.toLowerCase();
                    valueB = b.title.toLowerCase();
                    break;
                case "TVL":
                    valueA = totaledBalances[a.slug]?.totalAmount ?? -Infinity;
                    valueB = totaledBalances[b.slug]?.totalAmount ?? -Infinity;
                    break;
                case "Type":
                    valueA = isLayer(a)
                        ? a.type
                        : isInfrastructure(a)
                          ? a.type
                          : "";
                    valueB = isLayer(b)
                        ? b.type
                        : isInfrastructure(b)
                          ? b.type
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
            if (!item.liquidStaking) return false;
            if (status === "mainnet") return item.live === "Mainnet";
            if (status === "testnet") return item.live !== "Mainnet";
            return true;
        });

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

    const handleMobileTabClick = (tab: TableTabKey) => {
        setMobileActiveTab(tab);
    };

    const mobileTableHeaders = headers.filter(
        (_item) => _item.name === mobileActiveTab || _item.name === "Name",
    );

    const hasAssessment = (
        project: Project,
    ): project is InfrastructureProject => {
        return (
            project.type === Type.Infrastructure &&
            !!project.assessment &&
            project.assessment.length > 0
        );
    };

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row border-none">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className="flex">
                        <DropletsIcon className="mr-3" /> Liquid Staking
                    </CardTitle>
                    <CardDescription>
                        Learn the tradeoffs for different liquid staking
                        projects
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
                <div className="overflow-x-auto bg-lightsecondary rounded-xl mx-auto border-none">
                    <table className="bg-lightsecondary w-full text-sm text-left rtl:text-right rounded-xl">
                        <TableHeader
                            headers={isMobile ? mobileTableHeaders : headers}
                            onSort={handleSort}
                            sortByQueryParam="liquid-staking-sortBy"
                            sortOrderQueryParam="liquid-staking-sortOrder"
                        />
                        <tbody className="bg-white gap-x-8 border-t border-stroke_tertiary text_table_important">
                            {sortAndFilterData.map((item, index) => (
                                <tr
                                    className={`cursor-pointer text_table_important ${
                                        index !== sortAndFilterData.length - 1
                                            ? "border-b border-stroke_tertiary"
                                            : ""
                                    }`}
                                    key={item.slug}
                                >
                                    <td className="lg:px-6 px-4 py-4 font-semibold whitespace-nowrap text_table_important text-table_body">
                                        <Link
                                            href={`/${
                                                isLayer(item)
                                                    ? `layers/${item.slug}/#usecases`
                                                    : `infrastructure/${item.slug}`
                                            }`}
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
                                        mobileActiveTab === "Snapshot") && (
                                        <td className="relative px-2 border-stroke_tertiary text_table_important">
                                            {hasAssessment(item) ? (
                                                <AssessmentSnapshotDialog
                                                    infrastructure={item}
                                                />
                                            ) : (
                                                <div className="px-4">
                                                    Coming Soon
                                                </div>
                                            )}
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "Type") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-stroke_tertiary text_table_important">
                                            <Link
                                                href={`/${
                                                    isLayer(item)
                                                        ? `layers/${item.slug}/#usecases`
                                                        : `infrastructure/${item.slug}`
                                                }`}
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
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-stroke_tertiary text_table_important">
                                            <Link
                                                href={`/${
                                                    isLayer(item)
                                                        ? `layers/${item.slug}/#usecases`
                                                        : `infrastructure/${item.slug}`
                                                }`}
                                            >
                                                {item.live}
                                            </Link>
                                        </td>
                                    )}
                                    {(!isMobile ||
                                        mobileActiveTab === "TVL") && (
                                        <td className="lg:px-6 px-4 py-3 lg:py-4 border-r border-stroke_tertiary text_table_important">
                                            <Link
                                                href={`/${
                                                    isLayer(item)
                                                        ? `layers/${item.slug}/#usecases`
                                                        : `infrastructure/${item.slug}`
                                                }`}
                                            >
                                                {totaledBalances[item.slug]
                                                    ?.totalAmount == null ? (
                                                    <div className="font-light">
                                                        Under review
                                                    </div>
                                                ) : (
                                                    <div>
                                                        ₿{" "}
                                                        {Number(
                                                            totaledBalances[
                                                                item.slug
                                                            ]?.totalAmount ?? 0,
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

export default LiquidStakingTable;
