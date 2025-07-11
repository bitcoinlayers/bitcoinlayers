"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp } from "lucide-react";

interface ComingSoonChartProps {
    title?: string;
    description?: string;
}

export default function ComingSoonChart({ 
    title = "BTC Supply", 
    description = "Total supply per day" 
}: ComingSoonChartProps) {
    return (
        <Card className="bg-background mb-6" id={title}>
            <div className="w-full flex flex-col sm:flex-row border-y">
                <div className="flex flex-col justify-center items-start py-4 sm:py-7 border-b sm:border-b-0 px-6 sm:w-3/4">
                    <div className="text-lg sm:text-xl">{title}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                        {description}
                    </div>
                </div>
                <div className="flex flex-row sm:w-1/4">
                    <div className="flex flex-1 flex-col justify-center gap-1 pl-6 py-2 sm:px-6 sm:py-4 text-left bg-muted/30">
                        <span className="text-xs text-muted-foreground">
                            Supply
                        </span>
                        <span className="text-xs sm:text-base leading-none">
                            <span className="text-[10px] italic text-muted-foreground">
                                coming soon
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <CardContent className="flex flex-col items-center justify-center lg:h-80 h-64">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-5 w-5" />
                        <TrendingUp className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">
                            Chart Data Coming Soon
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-md">
                            We're currently gathering and processing data for this network. 
                            Chart analytics will be available once sufficient data is collected.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
} 