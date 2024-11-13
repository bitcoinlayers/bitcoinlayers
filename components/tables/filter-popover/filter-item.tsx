import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface FilterItemProps {
    value: string;
    filterType: string;
    selectedFilters: string[];
    setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterItem = ({
    value,
    filterType,
    selectedFilters,
    setSelectedFilters,
}: FilterItemProps) => (
    <div
        className={cn(
            "flex items-center space-x-2 px-2 py-2.5",
            selectedFilters.includes(value) && "bg-brand/5",
        )}
    >
        <Checkbox
            id={`${filterType}-${value}`}
            checked={selectedFilters.includes(value)}
            onCheckedChange={() =>
                setSelectedFilters((prev) =>
                    prev.includes(value)
                        ? prev.filter((f) => f !== value)
                        : [...prev, value],
                )
            }
            className="border border-gray-300 text-white data-[state=checked]:bg-brand data-[state=checked]:border-none"
        />
        <label
            htmlFor={`${filterType}-${value}`}
            className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                selectedFilters.includes(value) && "text-brand/90",
            )}
        >
            {value}
        </label>
    </div>
);

export default FilterItem;
