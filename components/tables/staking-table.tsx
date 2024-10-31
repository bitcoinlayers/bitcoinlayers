"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import TableHeader from "@/components/tables/tableHeader";
import { MobileView, isMobile } from "react-device-detect";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { InfrastructureProject, Project, Type } from "@/content/props";
import useGetInfratvlCurrentAll from "@/hooks/use-get-infratvl-current-all";
import AssessmentSnapshotDialog from "../infrastructure/assessment-snapshot/assessment-snapshot-dialog-table";

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

const StakingTable = ({ data, headers }: Props) => {
    const [status, setStatus] = useQueryState("status", {
        defaultValue: "Mainnet",
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
                types.includes(isLayer(item) ? item.type : item.type),
            );
        }

        filtered = filtered.filter((item) => {
            if (!item.staking) return false;
            if (status === "Mainnet") return item.live === "Mainnet";
            if (status === "Testnet") return item.live !== "Mainnet";
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
        <div className="px-6 lg:px-0 w-full">
            <MobileView className="flex justify-center">
                <div className="justify-center lg:items-start gap-3 inline-flex py-3">
                    {headers.slice(1).map((_item, ind) => {
                        const isAllowedTab = [
                            "Snapshot",
                            "Type",
                            "Status",
                            "TVL",
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
            <div className="overflow-x-auto bg-lightsecondary rounded-xl mx-auto border border-stroke_tertiary">
                <table className="bg-lightsecondary w-full text-sm text-left rtl:text-right rounded-xl">
                    <TableHeader
                        headers={isMobile ? mobileTableHeaders : headers}
                        onSort={handleSort}
                    />
                    <tbody className="bg-white gap-x-8 border-t border-stroke_tertiary text_table_important">
                        {sortAndFilterData.map((item, index) => (
                            <tr
                                className={`cursor-pointer border-b border-stroke_tertiary text_table_important ${
                                    index === sortAndFilterData.length - 1
                                        ? ""
                                        : ""
                                }`}
                                key={item.slug}
                            >
                                <td className="lg:px-6 px-4 py-4 font-semibold whitespace-nowrap border-r lg:border-r-0 border-stroke_tertiary text_table_important text-table_body">
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
                                {(!isMobile || mobileActiveTab === "Type") && (
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
                                {(!isMobile || mobileActiveTab === "TVL") && (
                                    <td className="lg:px-6 px-4 py-3 lg:py-4 border-r border-stroke_tertiary text_table_important">
                                        <Link
                                            href={`/${
                                                isLayer(item)
                                                    ? `layers/${item.slug}/#usecases`
                                                    : `infrastructure/${item.slug}`
                                            }`}
                                        >
                                            {/* {item.underReview ||
                                            Object.keys(totaledBalances).find(
                                                (key) =>
                                                    key.toLowerCase() ===
                                                    item.title.toLowerCase(),
                                            ) === undefined ? (
                                                <div className="font-light">
                                                    Under review
                                                </div>
                                            ) : ( */}
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
                                                    ).toLocaleString("en-US", {
                                                        minimumFractionDigits: 0,
                                                        maximumFractionDigits: 0,
                                                    })}
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
        </div>
    );
};

export default StakingTable;
