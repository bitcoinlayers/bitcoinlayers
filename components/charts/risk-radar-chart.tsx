"use client";

import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
} from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Layer } from "../layer/layerProps";
import { TickItem } from "recharts/types/util/types";

export const description = "A radar chart with dots";

const chartData = [
    { factor: "Data Availability", score: 80 },
    { factor: "Network Operators", score: 20 },
    { factor: "Settlement", score: 40 },
    { factor: "Bridge", score: 60 },
];

const chartConfig = {
    score: {
        label: "score",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

const CustomTick = (props: any) => {
    const { payload, x, y, textAnchor } = props;
    let angle = 0;
    let offsetX = 0;
    let offsetY = 0;

    switch (payload.value) {
        case "Data Availability":
            angle = 45;
            offsetX = 40;
            offsetY = 40;
            break;
        case "Network Operators":
            angle = 315;
            offsetX = -80;
            offsetY = 90;
            break;
        case "Settlement":
            angle = 45;
            offsetX = -34;
            offsetY = -26;
            break;
        case "Bridge":
            angle = 315;
            offsetX = 32;
            offsetY = -32;
            break;
        default:
            angle = 0;
    }

    return (
        <text
            {...props}
            x={x + offsetX}
            y={y + offsetY}
            textAnchor={textAnchor}
            transform={`rotate(${angle}, ${x + offsetX}, ${y + offsetY})`}
        >
            {payload.value}
        </text>
    );
};

export default function RiskRadarChart({ layer }: { layer: Layer }) {
    console.log(layer)
    return (
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
            <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="80%">
                <ChartTooltip
                    cursor={false}
                    content={
                        <ChartTooltipContent
                            minimumFractionDigits={0}
                            maximumFractionDigits={0}
                            className="w-48"
                        />
                    }
                />
                <PolarAngleAxis dataKey="factor" tick={<CustomTick />} />
                <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100] as const}
                    ticks={[20, 40, 60, 80, 100] as unknown as TickItem[]}
                    stroke="hsla(var(--foreground))"
                    orientation="left"
                    axisLine={false}
                />
                <PolarGrid />
                <Radar
                    dataKey="score"
                    name="Score"
                    stroke="#000"
                    fill="hsla(var(--chart-5))"
                    dot={{
                        r: 4,
                        fillOpacity: 1,
                        stroke: "#000",
                        fill: "#000",
                    }}
                    className="opacity-70"
                />
            </RadarChart>
        </ChartContainer>
    );
}
