import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Props {
    showDivisionButtons: boolean;
    chartType: string;
    setChartType: (value: string) => void;
    dateRange: string;
    setDateRange: (value: string) => void;
}

export default function ChartFilters({
    showDivisionButtons,
    chartType,
    setChartType,
    dateRange,
    setDateRange,
}: Props) {
    return (
        <>
            {showDivisionButtons && (
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
            )}
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
        </>
    );
}
