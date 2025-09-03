"use client";

import { useState } from "react";
import VideoPlayer from "@/components/media/video-player";
import DataMetrics from "@/components/media/data-metrics";
import NewsSection from "@/components/media/news-section";
import MediaNav from "@/components/media/media-nav";

export default function MediaPage() {
    const [activeContent, setActiveContent] = useState<"live" | "podcasts">("live");

    return (
        <div className="mx-auto space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-8">
                <h1 className="font-playfair italic font-black text-brand text-6xl lg:text-8xl">
                    Bitcoin Media
                </h1>
                <p className="text-text_secondary text-lg max-w-2xl mx-auto">
                    24/7 Bitcoin-native financial network featuring expert analysis, 
                    breaking news, and comprehensive cryptocurrency coverage
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Video/Podcast Section - Takes 2 columns */}
                <div className="lg:col-span-2">
                    <div className="space-y-4">
                        <MediaNav 
                            activeContent={activeContent} 
                            setActiveContent={setActiveContent} 
                        />
                        <VideoPlayer activeContent={activeContent} />
                    </div>
                </div>

                {/* Data Metrics Sidebar - Takes 1 column */}
                <div className="lg:col-span-1">
                    <DataMetrics />
                </div>
            </div>

            {/* News and Additional Content Section - Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* News Section - Takes half the width */}
                <div>
                    <NewsSection />
                </div>

                {/* Stacked Cards - Takes the other half */}
                <div className="space-y-6">
                    {/* Twitter Bot Section */}
                    <div className="bg-card border rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-text_header">@BitcoinLayers</h3>
                                <p className="text-sm text-text_secondary">Twitter Bot</p>
                            </div>
                            <div className="ml-auto">
                                <div className="flex items-center gap-1 text-xs text-green-500">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    Live
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="border-l-4 border-brand pl-4 py-2">
                                <div className="flex items-start gap-2 mb-2">
                                    <svg className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                    </svg>
                                    <div className="flex-1">
                                        <p className="text-sm text-text_primary">
                                            "Lightning Network capacity hits new ATH 🚀 L2 adoption accelerating across the board"
                                        </p>
                                        <div className="flex items-center gap-2 mt-2 text-xs text-text_secondary">
                                            <span>RT @BitcoinMagazine</span>
                                            <span>•</span>
                                            <span>2m ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-l-4 border-brand pl-4 py-2">
                                <div className="flex items-start gap-2 mb-2">
                                    <svg className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                    </svg>
                                    <div className="flex-1">
                                        <p className="text-sm text-text_primary">
                                            "Liquid sidechain processes $2.1B in settlements this month. Institutional adoption growing 📈"
                                        </p>
                                        <div className="flex items-center gap-2 mt-2 text-xs text-text_secondary">
                                            <span>RT @TheBlock__</span>
                                            <span>•</span>
                                            <span>15m ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-l-4 border-brand pl-4 py-2">
                                <div className="flex items-start gap-2 mb-2">
                                    <svg className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                    </svg>
                                    <div className="flex-1">
                                        <p className="text-sm text-text_primary">
                                            "New research: Bitcoin layer 2 protocols handling 45% more transactions than last quarter"
                                        </p>
                                        <div className="flex items-center gap-2 mt-2 text-xs text-text_secondary">
                                            <span>RT @CoinDesk</span>
                                            <span>•</span>
                                            <span>28m ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-stroke_tertiary text-center">
                            <a 
                                href="https://twitter.com/BitcoinLayers" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xs text-brand hover:underline"
                            >
                                Follow @BitcoinLayers →
                            </a>
                        </div>
                    </div>

                    {/* Market Analysis */}
                    <div className="bg-card border rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-text_header mb-4">
                            Market Analysis
                        </h3>
                        <div className="space-y-3">
                            <div className="p-3 border border-stroke_secondary rounded">
                                <div className="text-sm text-text_secondary">Bitcoin Dominance</div>
                                <div className="text-lg font-semibold text-text_primary">54.2%</div>
                                <div className="text-xs text-green-500">+1.2% 24h</div>
                            </div>
                            <div className="p-3 border border-stroke_secondary rounded">
                                <div className="text-sm text-text_secondary">Fear & Greed Index</div>
                                <div className="text-lg font-semibold text-text_primary">72</div>
                                <div className="text-xs text-bitcoin">Greed</div>
                            </div>
                        </div>
                    </div>

                    {/* Trending Topics */}
                    <div className="bg-card border rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-text_header mb-4">
                            Trending Topics
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand rounded-full"></div>
                                <span className="text-sm text-text_primary">#BitcoinETF</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand rounded-full"></div>
                                <span className="text-sm text-text_primary">#Lightning</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand rounded-full"></div>
                                <span className="text-sm text-text_primary">#Layer2</span>
                            </div>
                        </div>
                    </div>

                    {/* Schedule */}
                    <div className="bg-card border rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-text_header mb-4">
                            Schedule
                        </h3>
                        <div className="space-y-3">
                            <div className="text-sm">
                                <div className="text-text_secondary">Next: 2:00 PM EST</div>
                                <div className="text-text_primary font-medium">Bitcoin Market Report</div>
                            </div>
                            <div className="text-sm">
                                <div className="text-text_secondary">4:00 PM EST</div>
                                <div className="text-text_primary font-medium">Layer 2 Deep Dive</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
