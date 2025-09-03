"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, TrendingUp } from "lucide-react";

interface NewsItem {
    id: string;
    title: string;
    summary: string;
    source: string;
    publishedAt: string;
    url: string;
    category: "bitcoin" | "layer2" | "markets" | "regulatory" | "technology";
    image?: string;
    sentiment: "bullish" | "bearish" | "neutral";
}

const CATEGORY_COLORS = {
    bitcoin: "bg-bitcoin/10 text-bitcoin border-bitcoin/20",
    layer2: "bg-brand/10 text-brand border-brand/20",
    markets: "bg-green-500/10 text-green-600 border-green-500/20",
    regulatory: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    technology: "bg-purple-500/10 text-purple-600 border-purple-500/20"
};

const SENTIMENT_COLORS = {
    bullish: "text-green-500",
    bearish: "text-red-500",
    neutral: "text-gray-500"
};

export default function NewsSection() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    // Simulate news fetching - replace with actual news API
    useEffect(() => {
        const fetchNews = async () => {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1200));
            
            // Mock news data - replace with real news API integration
            const mockNews: NewsItem[] = [
                {
                    id: "1",
                    title: "Bitcoin Lightning Network Reaches New Milestone with 5,000 BTC Capacity",
                    summary: "The Lightning Network continues its growth trajectory as total network capacity surpasses 5,000 BTC for the first time, marking significant adoption of Bitcoin's layer 2 scaling solution.",
                    source: "Bitcoin Magazine",
                    publishedAt: "2024-01-15T10:30:00Z",
                    url: "#",
                    category: "layer2",
                    sentiment: "bullish"
                },
                {
                    id: "2",
                    title: "Liquid Network Sees 15% Increase in Wrapped Bitcoin Supply",
                    summary: "Blockstream's Liquid sidechain reports substantial growth in L-BTC supply, driven by increased institutional demand for faster Bitcoin settlements.",
                    source: "CoinDesk",
                    publishedAt: "2024-01-15T09:15:00Z",
                    url: "#",
                    category: "layer2",
                    sentiment: "bullish"
                },
                {
                    id: "3",
                    title: "Bitcoin Price Analysis: Technical Indicators Suggest Continued Bullish Momentum",
                    summary: "On-chain data and technical analysis point to sustained upward pressure on Bitcoin price, with key resistance levels being tested.",
                    source: "The Block",
                    publishedAt: "2024-01-15T08:45:00Z",
                    url: "#",
                    category: "markets",
                    sentiment: "bullish"
                },
                {
                    id: "4",
                    title: "New Bitcoin Layer 2 Protocol Announces Mainnet Launch",
                    summary: "A novel Bitcoin scaling solution focusing on privacy-preserving transactions is set to launch on mainnet next month after successful testnet operations.",
                    source: "Decrypt",
                    publishedAt: "2024-01-15T07:20:00Z",
                    url: "#",
                    category: "technology",
                    sentiment: "neutral"
                },
                {
                    id: "5",
                    title: "US Regulatory Clarity Boosts Bitcoin ETF Inflows to Record Highs",
                    summary: "Bitcoin exchange-traded funds see unprecedented inflows as regulatory environment becomes more favorable for cryptocurrency investments.",
                    source: "Reuters",
                    publishedAt: "2024-01-15T06:30:00Z",
                    url: "#",
                    category: "regulatory",
                    sentiment: "bullish"
                }
            ];
            
            setNews(mockNews);
            setLoading(false);
        };

        fetchNews();
        
        // Set up periodic updates
        const interval = setInterval(fetchNews, 60000); // Update every minute
        
        return () => clearInterval(interval);
    }, []);

    const formatTimeAgo = (timestamp: string) => {
        const now = new Date();
        const published = new Date(timestamp);
        const diffMs = now.getTime() - published.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        
        if (diffHours > 0) {
            return `${diffHours}h ago`;
        } else if (diffMinutes > 0) {
            return `${diffMinutes}m ago`;
        } else {
            return "Just now";
        }
    };

    const filteredNews = selectedCategory === "all" 
        ? news 
        : news.filter(item => item.category === selectedCategory);

    if (loading) {
        return (
            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <TrendingUp className="w-6 h-6 text-brand" />
                            Latest Bitcoin News
                        </h2>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-muted-foreground">Loading news...</span>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="border border-border rounded-lg p-4 animate-pulse">
                                <div className="flex gap-3">
                                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="bg-gray-300 dark:bg-gray-700 h-4 w-3/4 rounded"></div>
                                        <div className="bg-gray-300 dark:bg-gray-700 h-3 w-full rounded"></div>
                                        <div className="bg-gray-300 dark:bg-gray-700 h-3 w-2/3 rounded"></div>
                                        <div className="flex gap-2">
                                            <div className="bg-gray-300 dark:bg-gray-700 h-6 w-16 rounded-full"></div>
                                            <div className="bg-gray-300 dark:bg-gray-700 h-6 w-20 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-brand" />
                        Latest Bitcoin News
                    </h2>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-muted-foreground">Live updates</span>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <button
                        onClick={() => setSelectedCategory("all")}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                            selectedCategory === "all"
                                ? "bg-brand text-white"
                                : "bg-secondary text-text_primary hover:bg-brand/10"
                        }`}
                    >
                        All News
                    </button>
                    {Object.keys(CATEGORY_COLORS).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors capitalize ${
                                selectedCategory === category
                                    ? "bg-brand text-white"
                                    : "bg-secondary text-text_primary hover:bg-brand/10"
                            }`}
                        >
                            {category === "layer2" ? "Layer 2" : category}
                        </button>
                    ))}
                </div>

                {/* News Feed */}
                <div className="space-y-4">
                    {filteredNews.map((item) => (
                        <div
                            key={item.id}
                            className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow group"
                        >
                            <div className="flex gap-4">
                                {/* News Icon/Image */}
                                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-5 h-5 text-brand" />
                                </div>
                                
                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h3 className="font-semibold text-text_header group-hover:text-brand transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-text_secondary hover:text-brand transition-colors flex-shrink-0"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                    
                                    <p className="text-sm text-text_secondary mb-3 line-clamp-2">
                                        {item.summary}
                                    </p>
                                    
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <Badge variant="outline" className={CATEGORY_COLORS[item.category]}>
                                            {item.category === "layer2" ? "Layer 2" : item.category}
                                        </Badge>
                                        
                                        <span className="text-xs text-text_secondary">
                                            {item.source}
                                        </span>
                                        
                                        <div className="flex items-center gap-1 text-xs text-text_secondary">
                                            <Clock className="w-3 h-3" />
                                            {formatTimeAgo(item.publishedAt)}
                                        </div>
                                        
                                        <div className={`text-xs font-medium ${SENTIMENT_COLORS[item.sentiment]}`}>
                                            {item.sentiment === "bullish" && "📈 Bullish"}
                                            {item.sentiment === "bearish" && "📉 Bearish"}
                                            {item.sentiment === "neutral" && "➖ Neutral"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-6">
                    <button className="px-6 py-2 bg-secondary hover:bg-brand/10 text-text_primary hover:text-brand transition-colors rounded-full text-sm font-medium">
                        Load More News
                    </button>
                </div>

                {/* News Sources */}
                <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-text_tertiary text-center">
                        News aggregated from Bitcoin Magazine, CoinDesk, The Block, Decrypt, and other trusted sources
                        <br />
                        <span className="text-brand">Updates every minute</span>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
