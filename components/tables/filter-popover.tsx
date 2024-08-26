import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import { useState } from "react";

interface Props {
    filters: string[];
}

const FilterPopover = ({ filters }: Props) => {
    const filterOptions = filters.length > 0 ? filters : [];
    const [queryFilters, setQueryFilters] = useQueryState<string[]>("type", {
        defaultValue: [],
        parse: (value) => value.split(",").filter(Boolean),
        serialize: (value) => value.join(","),
    });
    const [selectedFilters, setSelectedFilters] = useState<string[]>([
        ...queryFilters,
    ]);
    const [open, setOpen] = useState(false);

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
                <Image
                    src="/icons/filter.svg"
                    alt="Filter"
                    width={12}
                    height={12}
                />
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
                        Reset
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="bg-brand text-white hover:bg-brand/80"
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default FilterPopover;
