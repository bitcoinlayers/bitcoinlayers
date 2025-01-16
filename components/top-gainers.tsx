"use client";

import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import ImageWithFallback from "@/components/tables/image-with-fallback";

export default function TopGainers() {
    const [percentagePeriod, setPercentagePeriod] = useState<string>("weekly");
    const [absolutePeriod, setAbsolutePeriod] = useState<string>("weekly");

    const {
        data: topGainersPercentage,
        isLoading: topGainersPercentageLoading,
    } = useQuery({
        queryKey: ["top-gainers-percentage"],
        queryFn: () =>
            fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/top_gainers_by_tokenimpl?period=eq.${percentagePeriod}&limit=3`,
            ),
    });

    const { data: topGainersAbsolute, isLoading: topGainersAbsoluteLoading } =
        useQuery({
            queryKey: ["top-gainers-absolute"],
            queryFn: () =>
                fetcher(
                    `${process.env.NEXT_PUBLIC_API_URL}/top_gainers_by_tokenimpl_absolute?period=eq.${absolutePeriod}&limit=3`,
                ),
        });

    console.log(topGainersAbsolute);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Percentage Gainers Card */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            🔥 Trending
                        </h2>
                        <Button variant="ghost" size="sm">
                            View more{" "}
                            <ChevronRightIcon className="w-4 h-4 ml-1" />
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {topGainersPercentage?.map((token: any) => (
                            <div
                                key={token.token_slug}
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
                                        ${token.recent_balance.toFixed(4)}
                                    </div>
                                    <div className="text-sm text-emerald-500">
                                        ↑ {token.percent_change.toFixed(1)}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Absolute Gainers Card */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            🚀 Top Gainers
                        </h2>
                        <Button variant="ghost" size="sm">
                            View more{" "}
                            <ChevronRightIcon className="w-4 h-4 ml-1" />
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {topGainersAbsolute?.map((token: any) => (
                            <div
                                key={token.token_slug}
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
                                        ${token.recent_balance.toFixed(4)}
                                    </div>
                                    <div className="text-sm text-emerald-500">
                                        ↑ {token.supply_change.toFixed(1)}%
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
