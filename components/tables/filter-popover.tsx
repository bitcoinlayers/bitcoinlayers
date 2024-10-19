import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface Props {
    filters: string[];
}

const FilterPopover = ({ filters }: Props) => {
    const filterOptions = filters.length > 0 ? filters.sort() : [];
    const [queryFilters, setQueryFilters] = useQueryState<string[]>("type", {
        defaultValue: [],
        parse: (value) => value.split(",").filter(Boolean),
        serialize: (value) => value.join(","),
    });
    const [selectedFilters, setSelectedFilters] = useState<string[]>([
        ...queryFilters,
    ]);
    const [open, setOpen] = useState(false);
    const t = useTranslations("filter-popover");

    const handleFilterChange = (filter: string) => {
        setSelectedFilters((prev) =>
            prev.includes(filter)
                ? prev.filter((f) => f !== filter)
                : [...prev, filter],
        );
    };

    const handleReset = () => setSelectedFilters([]);

    const handleSave = () => {
        setQueryFilters(selectedFilters);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.4369 0H0.563154C0.0635131 0 -0.188604 0.606567 0.165419 0.960589L4.5 5.29517V10.1250C4.5 10.3085 4.59492 10.4788 4.75391 10.5826L6.50391 11.7076C6.81885 11.9225 7.25 11.6921 7.25 11.3125V5.29517L11.5846 0.960589C11.9386 0.606567 11.6865 0 11.4369 0Z"
                        fill={queryFilters.length > 0 ? "#FE4F18" : "#C9D0D8"}
                    />
                </svg>
            </PopoverTrigger>
            <PopoverContent
                className="w-56 pt-0 pb-0 px-0 rounded-xl"
                side="bottom"
            >
                <div className="max-h-56 overflow-y-auto">
                    {filterOptions.map((filter) => (
                        <div
                            key={filter}
                            className={cn(
                                "flex items-center space-x-2 px-2 py-2.5",
                                selectedFilters.includes(filter) &&
                                    "bg-brand/5",
                            )}
                        >
                            <Checkbox
                                id={filter}
                                checked={selectedFilters.includes(filter)}
                                onCheckedChange={() =>
                                    handleFilterChange(filter)
                                }
                                className={cn(
                                    "border border-gray-300 text-white data-[state=checked]:bg-brand data-[state=checked]:border-none",
                                )}
                            />
                            <label
                                htmlFor={filter}
                                className={cn(
                                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                    selectedFilters.includes(filter) &&
                                        "text-brand/90",
                                )}
                            >
                                {filter}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between px-2 py-2 border-t">
                    <Button variant="ghost" size="sm" onClick={handleReset}>
                        {t("reset-btn")}
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="bg-brand text-white hover:bg-brand/80"
                        onClick={handleSave}
                    >
                        {t("save-btn")}
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default FilterPopover;
