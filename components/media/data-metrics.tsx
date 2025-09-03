"use client";

import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface MetricData {
    id: string;
    name: string;
    value: string;
    change: string;
    trend: "up" | "down" | "neutral";
    subtext: string;
    chart: number[];
}

type Period = "1h" | "24h" | "7d" | "30d";

export default function DataMetrics() {
    const [period, setPeriod] = useState<Period>("24h");
    const [metrics, setMetrics] = useState<MetricData[]>([]);
    const [loading, setLoading] = useState(true);

    // Simulate data fetching - replace with actual API calls
    useEffect(() => {
        const fetchMetrics = async () => {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Mock data with small chart data - replace with real API integration
            const mockData: MetricData[] = [
                {
                    id: "btc-price",
                    name: "Bitcoin",
                    value: "$94,247",
                    change: "+2.3%",
                    trend: "up",
                    subtext: "BTC/USD",
                    chart: [89000, 90500, 88700, 91200, 93800, 92100, 94247]
                },
                {
                    id: "lightning",
                    name: "Lightning",
                    value: "5,247",
                    change: "+12.1%",
                    trend: "up",
                    subtext: "BTC Capacity",
                    chart: [4800, 4950, 5100, 5050, 5180, 5220, 5247]
                },
                {
                    id: "liquid",
                    name: "Liquid",
                    value: "3,847",
                    change: "+3.4%",
                    trend: "up",
                    subtext: "L-BTC Supply",
                    chart: [3720, 3760, 3790, 3800, 3820, 3835, 3847]
                }
            ];
            
            setMetrics(mockData);
            setLoading(false);
        };

        fetchMetrics();
        
        // Set up periodic updates
        const interval = setInterval(fetchMetrics, 30000); // Update every 30 seconds
        
        return () => clearInterval(interval);
    }, [period]);

    // Generate mini chart SVG
    const generateMiniChart = (data: number[], trend: "up" | "down" | "neutral") => {
        if (data.length < 2) return null;
        
        const width = 60;
        const height = 20;
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min || 1;
        
        const points = data.map((value, index) => {
            const x = (index / (data.length - 1)) * width;
            const y = height - ((value - min) / range) * height;
            return `${x},${y}`;
        }).join(' ');
        
        const color = trend === "up" ? "#10b981" : trend === "down" ? "#ef4444" : "#FE4F18";
        
        return (
            <svg width={width} height={height} className="flex-shrink-0">
                <polyline
                    fill="none"
                    stroke={color}
                    strokeWidth="1.5"
                    points={points}
                />
            </svg>
        );
    };

    if (loading) {
        return (
            <div className="space-y-4">
                {/* Bitcoin Price Card */}
                <Card>
                    <CardContent className="pt-6 pb-6">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-bitcoin rounded-full animate-pulse"></div>
                                <div className="bg-gray-300 dark:bg-gray-700 h-5 w-20 rounded animate-pulse"></div>
                            </div>
                            <div className="bg-gray-300 dark:bg-gray-700 h-8 w-24 rounded animate-pulse"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-gray-300 dark:bg-gray-700 h-4 w-16 rounded animate-pulse"></div>
                            <div className="bg-gray-300 dark:bg-gray-700 h-3 w-12 rounded animate-pulse"></div>
                        </div>
                    </CardContent>
                </Card>
                
                {/* Layer 2 Metrics */}
                <Card>
                    <CardContent className="pt-6 pb-6">
                        <div className="bg-gray-300 dark:bg-gray-700 h-5 w-24 rounded animate-pulse mb-4"></div>
                        <div className="space-y-4">
                            {[...Array(2)].map((_, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                                        <div className="bg-gray-300 dark:bg-gray-700 h-4 w-16 rounded animate-pulse"></div>
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-700 h-4 w-12 rounded animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Bitcoin Price Card */}
            <Card>
                <CardContent className="pt-6 pb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <div className="w-5 h-5 bg-bitcoin rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xs">₿</span>
                            </div>
                            Bitcoin Price
                        </h3>
                        <ToggleGroup
                            type="single"
                            value={period}
                            onValueChange={(value) => setPeriod(value as Period)}
                        >
                            <ToggleGroupItem size="sm" value="1h">1H</ToggleGroupItem>
                            <ToggleGroupItem size="sm" value="24h">24H</ToggleGroupItem>
                            <ToggleGroupItem size="sm" value="7d">7D</ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold">$94,247</div>
                            <div className="text-sm text-muted-foreground">BTC/USD</div>
                        </div>
                        <div className="flex items-center gap-3">
                            {generateMiniChart([89000, 90500, 88700, 91200, 93800, 92100, 94247], "up")}
                            <div className="text-right">
                                <div className="text-emerald-500 font-medium text-sm">
                                    ↑ +2.3%
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {period}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Layer 2 Metrics */}
            <Card>
                <CardContent className="pt-6 pb-6">
                    <h3 className="text-lg font-semibold mb-4">Layer 2 Activity</h3>
                    
                    <div className="space-y-4">
                        {metrics.slice(1).map((metric) => (
                            <div key={metric.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-brand rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-xs">
                                            {metric.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-base">{metric.name}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {metric.subtext}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    {generateMiniChart(metric.chart, metric.trend)}
                                    <div className="text-right">
                                        <div className="font-medium text-lg">{metric.value}</div>
                                        <div className={`text-sm ${
                                            metric.trend === "up" 
                                                ? "text-emerald-500" 
                                                : metric.trend === "down" 
                                                ? "text-red-500" 
                                                : "text-muted-foreground"
                                        }`}>
                                            {metric.trend === "up" && "↑ "}
                                            {metric.trend === "down" && "↓ "}
                                            {metric.change}
                                        </div>
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
