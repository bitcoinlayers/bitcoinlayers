import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { domToPng } from "modern-screenshot";
import { Button } from "@/components/ui/button";
import { ScanIcon } from "lucide-react";

interface Props {
    chartType: string;
    setChartType: (value: string) => void;
    dateRange: string;
    setDateRange: (value: string) => void;
    title: string;
}

export default function ChartFilters({
    chartType,
    setChartType,
    dateRange,
    setDateRange,
    title,
}: Props) {
    const downloadChart = async () => {
        const chart = document.getElementById(title);
        const clonedChart = chart?.cloneNode(true) as HTMLElement;

        if (typeof window !== "undefined" && chart) {
            try {
                // Deep clone the chart element

                // Preserve the original width and ensure proper layout
                clonedChart.style.width = `${chart.offsetWidth}px`;
                clonedChart.style.maxWidth = "100%";

                // Find and replace the exclude-from-screenshot elements with the title
                const excludeElements = clonedChart.getElementsByClassName(
                    "exclude-from-screenshot",
                );

                if (excludeElements[0]) {
                    const titleElement = document.createElement("h2");
                    titleElement.className =
                        "font-playfair italic font-black text-brand text-2xl text-center";
                    titleElement.textContent = "Bitcoin Layers";
                    excludeElements[0].parentNode?.replaceChild(
                        titleElement,
                        excludeElements[0],
                    );
                }

                document.body.appendChild(clonedChart);

                const dataUrl = await domToPng(clonedChart, {
                    filter: (el) => {
                        if (
                            (el as HTMLElement).classList?.contains(
                                "exclude-from-screenshot",
                            )
                        ) {
                            return false;
                        }
                        return true;
                    },
                    width: chart.offsetWidth, // Set explicit width
                    height: chart.offsetHeight, // Set explicit height
                });

                const now = new Date();
                const timeString = now.toTimeString().split(" ")[0];
                const dateString = now.toISOString().split("T")[0];
                const currentDate = `${dateString}_${timeString}`;
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = `${title}_${currentDate}.png`;
                link.click();
            } finally {
                // Always remove the temporary container
                document.body.removeChild(clonedChart);
            }
        }
    };

    return (
        <div className="flex flex-col space-y-2 md:flex-row justify-between items-center md:space-y-0 w-full">
            <div className="flex flex-row">
                <ToggleGroup
                    type="single"
                    value={chartType}
                    onValueChange={(value) =>
                        value && value !== chartType && setChartType(value)
                    }
                    className="!space-x-0"
                >
                    {["combined", "separate"].map((value) => (
                        <ToggleGroupItem
                            key={value}
                            value={value}
                            className="border text-xs"
                            size="sm"
                        >
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </ToggleGroupItem>
                    ))}
                </ToggleGroup>
                <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger className="w-[150px] text-xs rounded-md h-9 ml-1">
                        <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                        {[
                            { value: "1mo", label: "Last month" },
                            { value: "3mo", label: "Last 3 months" },
                            { value: "1y", label: "Last year" },
                        ].map(({ value, label }) => (
                            <SelectItem
                                key={value}
                                value={value}
                                className="text-xs"
                            >
                                {label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Button
                variant="outline"
                size="sm"
                className="flex flex-row items-center justify-center max-w-fit !text-xs exclude-from-screenshot"
                onClick={downloadChart}
            >
                <ScanIcon className="w-3 h-4 mr-1.5" /> Screenshot
            </Button>
        </div>
    );
}
