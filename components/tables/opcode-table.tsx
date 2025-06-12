"use client";

import React, { useState, useMemo, ReactNode } from "react";
import Image from "next/image";
import TableHeader from "@/components/tables/tableHeader";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { InfrastructureProject, EntityType, LayerProject } from "@/content/props";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CoinsIcon } from "lucide-react";
import NetworkTypeHoverCard from "../layer/network-type-hover-card";
import ImageWithFallback from "./image-with-fallback";
import OpcodeSummaryDialog, { OPCODE_SUMMARIES } from "../opcodes/opcode-summary-dialog";
import ApplicationsSummaryDialog, { OPCODE_APPLICATIONS } from "../opcodes/applications-summary-dialog";
import OpcodesButtonDialog from "../opcodes/opcodes-button-dialog";
import type { NetworkInfo } from "./support-networks-modal";
import SupportNetworksModal from "./support-networks-modal";
import starknet from "@/content/layers/starknet";
import base from "@/content/layers/base";
import optimism from "@/content/layers/optimism";
import bob from "@/content/layers/bob";
import scroll from "@/content/layers/scroll";
import taiko from "@/content/layers/taiko";
import zksync from "@/content/layers/zksync";

// Hardcoded support networks for each opcode
const OPCODE_SUPPORT_NETWORKS: Record<string, string[]> = {
    "opcat": ["starknet", "spark", "bob"],
    "opctv": ["starknet", "spark", "bob"],
};

type TableTabKey =
    | "Opcodes"
    | "Applications"
    | "Status"
    | "Summary"
    | "Support Networks"
    | "Purpose";

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
    isOpcode?: boolean;
}

const OpcodeImage = ({ src, title }: { src: string; title: string }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const handleError = () => setImageSrc("/bitcoinlayers-logo.png");
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

const StatusBadge = ({ status }: { status: string }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Proposed":
                return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
            case "Bip Drafted":
                return "bg-blue-500/20 text-blue-300 border-blue-500/30";
            case "Activation Client":
                return "bg-green-500/20 text-green-300 border-green-500/30";
            default:
                return "bg-gray-500/20 text-gray-300 border-gray-500/30";
        }
    };
    return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(status)}`}>{status}</span>
    );
};

// Utility to get all AltRollup networks
const getAltRollupNetworks = () => {
    const layers: LayerProject[] = [starknet, base, optimism, bob, scroll, taiko, zksync];
    return layers
        .filter((layer) => layer.entityType === EntityType.AltRollup)
        .map((layer) => ({
            slug: layer.slug,
            title: layer.title,
            description: layer.description,
        }));
};

const SupportNetworksList = () => {
    const networks = getAltRollupNetworks();
    const topThree = networks.slice(0, 3);
    const remainingCount = networks.length - 3;

    return (
        <SupportNetworksModal networks={networks}>
            <div className="flex flex-nowrap gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity">
                {topThree.map((network) => (
                    <div key={network.slug} className="flex items-center">
                        <ImageWithFallback
                            slug={network.slug}
                            folder="logos"
                            altText={`${network.title} logo`}
                            width={20}
                            height={20}
                        />
                    </div>
                ))}
                {remainingCount > 0 && (
                    <div className="flex items-center">
                        <span className="text-xs text-muted-foreground">+{remainingCount}</span>
                    </div>
                )}
            </div>
        </SupportNetworksModal>
    );
};

const OpcodeTable = ({ data, headers, title, description, icon, isOpcode = false }: Props) => {
    const [status, setStatus] = useQueryState("status", { defaultValue: "all" });
    const [types] = useQueryState<string[]>("type", {
        defaultValue: [],
        parse: (value) => value.split(",").filter(Boolean),
        serialize: (value) => value.join(","),
    });
    const [sortBy, setSortBy] = useQueryState("sortBy", { defaultValue: "Name" });
    const [sortOrder, setSortOrder] = useQueryState("sortOrder", { defaultValue: "asc" });
    const [mobileActiveTab, setMobileActiveTab] = useState<TableTabKey>("Opcodes");

    const fullHeaders = headers;

    // Only show Name + active tab on mobile
    const mobileTableHeaders = fullHeaders.filter(
        (h) => h.name === mobileActiveTab || h.name === "Name"
    );

    const sortAndFilterData = useMemo(() => {
        const sorted = [...data].sort((a, b) => {
            let valueA: any, valueB: any;
            switch (sortBy) {
                case "Name":
                    valueA = a.title.toLowerCase();
                    valueB = b.title.toLowerCase();
                    break;
                case "Opcodes":
                    valueA = OPCODE_SUMMARIES[a.slug] ? 1 : 0;
                    valueB = OPCODE_SUMMARIES[b.slug] ? 1 : 0;
                    break;
                case "Applications":
                    valueA = OPCODE_APPLICATIONS[a.slug] ? 1 : 0;
                    valueB = OPCODE_APPLICATIONS[b.slug] ? 1 : 0;
                    break;
                case "Status":
                    valueA = a.live;
                    valueB = b.live;
                    break;
                case "Summary":
                    valueA = OPCODE_SUMMARIES[a.slug] ? 1 : 0;
                    valueB = OPCODE_SUMMARIES[b.slug] ? 1 : 0;
                    break;
                case "Support Networks":
                    valueA = OPCODE_SUPPORT_NETWORKS[a.slug]?.length || 0;
                    valueB = OPCODE_SUPPORT_NETWORKS[b.slug]?.length || 0;
                    break;
                default:
                    return 0;
            }
            if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
            if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });

        let filtered = sorted;
        if (types.length) {
            filtered = filtered.filter(item => types.includes(item.entityType));
        }
        if (status !== "all") {
            filtered = filtered.filter(item => {
                switch (status) {
                    case "proposed": return item.live === "Proposed";
                    case "bip":      return item.live === "Bip Drafted";
                    case "activation": return item.live === "Activation Client";
                    default: return true;
                }
            });
        }
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

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-col sm:flex-row p-0 border-none">
                <div className="flex flex-1 flex-col justify-center px-6 py-5 sm:py-6">
                    <CardTitle className="flex">
                        {icon || <CoinsIcon className="mr-3" />} {title || "Proposed Opcodes"}
                    </CardTitle>
                    <CardDescription>{description || "Learn the tradeoffs for different opcode proposals"}</CardDescription>
                </div>
                <div className="flex">
                    {[
                        { key: "all", label: "All", count: data.length },
                        { key: "proposed", label: "Proposed", count: data.filter(d => d.live === "Proposed").length },
                        { key: "bip", label: "BIP Drafted", count: data.filter(d => d.live === "Bip Drafted").length },
                        { key: "activation", label: "Activation", count: data.filter(d => d.live === "Activation Client").length },
                    ].map((statusOption) => (
                        <button
                            key={statusOption.key}
                            data-active={status === statusOption.key}
                            className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 min-w-[100px] sm:min-w-[150px]"
                            onClick={() => setStatus(statusOption.key)}
                        >
                            <span className="text-xs text-muted-foreground">
                                {statusOption.label}
                            </span>
                            <span className="text-lg font-bold leading-none sm:text-3xl">
                                {statusOption.count.toLocaleString()}
                            </span>
                        </button>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <TableHeader
                            headers={isMobile ? mobileTableHeaders : fullHeaders}
                            onSort={handleSort}
                            sortBy={sortBy}
                            sortOrder={sortOrder}
                        />
                        <tbody>
                            {sortAndFilterData.map((item, idx) => (
                                <tr key={item.slug} className={idx < sortAndFilterData.length - 1 ? "border-b" : ""}>
                                    {/* Name */}
                                    <td className="px-4 py-4 font-semibold whitespace-nowrap">
                                        <div className="flex items-center space-x-2 max-w-[250px]">
                                            <Link href={`/${isOpcode ? "opcode" : "infrastructure"}/${item.slug}`} className="flex items-center min-w-0 flex-1">
                                                <OpcodeImage src={`/logos/${item.slug}.png`} title={item.title} />
                                                <span className="ml-2 truncate">{item.title}</span>
                                            </Link>
                                            {item.notice && <div className="w-2 h-2 bg-orange-400 rounded-full" />}    
                                        </div>
                                    </td>
                                                                        {/* Opcodes */}
                                    <td className="px-4 py-3">
                                        {OPCODE_SUMMARIES[item.slug] ? (
                                            <OpcodesButtonDialog opcode={item} summary={OPCODE_SUMMARIES[item.slug]} />
                                        ) : (
                                            <span className="text-muted-foreground text-sm">No opcode data</span>
                                        )}
                                    </td>
                                    {/* Applications */}
                                    <td className="px-4 py-3">
                                        {OPCODE_APPLICATIONS[item.slug] ? (
                                            <ApplicationsSummaryDialog opcode={item} applications={OPCODE_APPLICATIONS[item.slug]} />
                                        ) : (
                                            <span className="text-muted-foreground text-sm">No applications</span>
                                        )}
                                    </td>
                                    {/* Status */}
                                    <td className="px-4 py-3">
                                        <Link href={`/${isOpcode ? "opcode" : "infrastructure"}/${item.slug}`}>
                                            <StatusBadge status={item.live} />
                                        </Link>
                                    </td>
                                    {/* Summary */}
                                    <td className="px-4 py-3">
                                        {OPCODE_SUMMARIES[item.slug] ? (
                                            <OpcodeSummaryDialog opcode={item} summary={OPCODE_SUMMARIES[item.slug]} />
                                        ) : (
                                            <span className="text-muted-foreground text-sm">No summary</span>
                                        )}
                                    </td>
                                    {/* Support Networks */}
                                    <td className="px-4 py-3">
                                        <SupportNetworksList />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
};

export default OpcodeTable;