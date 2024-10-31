import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useQueryState } from "nuqs";
import { useState } from "react";
import FilterIcon from "./filter-icon";
import FilterItem from "./filter-item";

interface Props {
    filters: string[];
    filterType: "type" | "status";
}

const FilterPopover = ({ filters, filterType }: Props) => {
    const [filter, setFilter] = useQueryState<string[]>(filterType, {
        defaultValue: [],
        parse: (value) => value.split(",").filter(Boolean),
        serialize: (value) => value.join(","),
    });

    const [selectedFilters, setSelectedFilters] = useState<string[]>(filter);
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <FilterIcon filters={filter} />
            </PopoverTrigger>
            <PopoverContent
                className="w-56 pt-0 pb-0 px-0 rounded-xl"
                side="bottom"
            >
                <div className="max-h-56 overflow-y-auto">
                    {filters.sort().map((filter) => (
                        <FilterItem 
                            key={filter} 
                            value={filter}
                            filterType={filterType}
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                        />
                    ))}
                </div>
                <div className="flex justify-between px-2 py-2 border-t">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedFilters([])}
                    >
                        Reset
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="bg-brand text-white hover:bg-brand/80"
                        onClick={() => {
                            setFilter(selectedFilters);
                            setOpen(false);
                        }}
                    >
                        Save
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default FilterPopover;
