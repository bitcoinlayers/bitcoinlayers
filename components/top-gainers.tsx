"use client";

import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ImageWithFallback from "@/components/tables/image-with-fallback";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Period = "daily" | "weekly" | "monthly" | "yearly";

export default function TopGainers() {
    const [percentagePeriod, setPercentagePeriod] = useState<Period>("weekly");
    const [absolutePeriod, setAbsolutePeriod] = useState<Period>("weekly");

    const {
        data: topGainersPercentage,
        isLoading: topGainersPercentageLoading,
    } = useQuery({
        queryKey: ["top-gainers-percentage", percentagePeriod],
        queryFn: () =>
            fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/top_gainers_by_tokenimpl?period=eq.${percentagePeriod}&limit=3`,
            ),
    });

    const { data: topGainersAbsolute, isLoading: topGainersAbsoluteLoading } =
        useQuery({
            queryKey: ["top-gainers-absolute", absolutePeriod],
            queryFn: () =>
                fetcher(
                    `${process.env.NEXT_PUBLIC_API_URL}/top_gainers_by_tokenimpl_absolute?period=eq.${absolutePeriod}&limit=3`,
                ),
        });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Percentage Gainers Card */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            📈 Percent Growth
                        </h2>
                        <ToggleGroup
                            type="single"
                            value={percentagePeriod}
                            onValueChange={(value) =>
                                setPercentagePeriod(value as Period)
                            }
                        >
                            <ToggleGroupItem
                                size="sm"
                                value="weekly"
                                aria-label="Toggle weekly"
                            >
                                W
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                size="sm"
                                value="monthly"
                                aria-label="Toggle monthly"
                            >
                                M
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                size="sm"
                                value="yearly"
                                aria-label="Toggle yearly"
                            >
                                Y
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>

                    <div className="space-y-4">
                        {topGainersPercentage?.map(
                            (token: any, index: number) => (
                                <div
                                    key={token.token_implementation}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <ImageWithFallback
                                            slug={token.token_slug}
                                            folder="logos"
                                            altText={token.token_name}
                                            width={20}
                                            height={20}
                                        />
                                        <div>
                                            <div className="font-medium">
                                                {token.token_name}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {token.network_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium">
                                            <span className="text-emerald-500">
                                                ↑
                                            </span>{" "}
                                            {token.percent_change.toFixed(0)}%
                                        </div>
                                        <div className="text-sm">
                                            {token.recent_balance.toFixed(0)}{" "}
                                            BTC
                                        </div>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Absolute Gainers Card */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            🚀 Supply Growth
                        </h2>
                        <ToggleGroup
                            type="single"
                            value={absolutePeriod}
                            onValueChange={(value) =>
                                setAbsolutePeriod(value as Period)
                            }
                        >
                            <ToggleGroupItem
                                size="sm"
                                value="weekly"
                                aria-label="Toggle weekly"
                            >
                                W
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                size="sm"
                                value="monthly"
                                aria-label="Toggle monthly"
                            >
                                M
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                size="sm"
                                value="yearly"
                                aria-label="Toggle yearly"
                            >
                                Y
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>

                    <div className="space-y-4">
                        {topGainersAbsolute?.map((token: any) => (
                            <div
                                key={token.token_implementation}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <ImageWithFallback
                                        slug={token.token_slug}
                                        folder="logos"
                                        altText={token.token_name}
                                        width={20}
                                        height={20}
                                    />
                                    <div>
                                        <div className="font-medium">
                                            {token.token_name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {token.network_name}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium">
                                        <span className="text-emerald-500">
                                            +
                                        </span>{" "}
                                        {token.supply_change.toFixed(0)} BTC
                                    </div>
                                    <div className="text-sm">
                                        {token.recent_balance.toFixed(0)}{" "}
                                        <span className="">total BTC</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
