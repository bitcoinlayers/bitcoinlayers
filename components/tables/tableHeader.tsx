import FilterPopover from "./filter-popover";
import PegSupplyToggle from "./peg-supply-toggle";
import { useQueryState } from "nuqs";

const getFilterType = (headerName: string): "type" | "status" => {
    switch (headerName.toLowerCase()) {
        case "type":
            return "type";
        case "status":
            return "status";
        default:
            return "type"; // fallback, though this shouldn't happen
    }
};

interface TableHeaderProps {
    headers: {
        name: string;
        filterOptions?: string[];
        showSorting?: boolean;
        filterQueryParam?: string;
    }[];
    onSort: (header: string) => void;
    sortBy?: string;
    sortOrder?: string;
    sortByQueryParam?: string;
    sortOrderQueryParam?: string;
    filterQueryParam?: string;
    pegSupplyView?: "pegs" | "supply";
    onPegSupplyViewChange?: (view: "pegs" | "supply") => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
    headers,
    onSort,
    sortBy: propSortBy,
    sortOrder: propSortOrder,
    sortByQueryParam = "sortBy",
    sortOrderQueryParam = "sortOrder",
    pegSupplyView = "pegs",
    onPegSupplyViewChange,
}) => {
    const [querySortBy] = useQueryState(sortByQueryParam, {
        defaultValue: "Name",
    });
    const [querySortOrder] = useQueryState(sortOrderQueryParam, {
        defaultValue: "asc",
    });

    const sortBy = propSortBy || querySortBy || "Name";
    const sortOrder = propSortOrder || querySortOrder || "asc";

    const handleSort = (header: string) => {
        onSort(header);
    };

    return (
        <thead>
            <tr className="border-b border-border">
                {headers.map((header, index) => (
                    <th
                        key={index}
                        className={`lg:pl-6 lg:py-6 pl-4 py-2 font-medium border-t border-border last:pr-4 `}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center grow">
                                {header.name === "BTC Pegs" && onPegSupplyViewChange && pegSupplyView ? (
                                    <PegSupplyToggle
                                        currentView={pegSupplyView}
                                        onViewChange={onPegSupplyViewChange}
                                        label="Pegs"
                                    />
                                ) : header.name === "Networks" && onPegSupplyViewChange && pegSupplyView ? (
                                    <PegSupplyToggle
                                        currentView={pegSupplyView}
                                        onViewChange={onPegSupplyViewChange}
                                        label="Networks"
                                    />
                                ) : (
                                    <div className="text-sm font-medium leading-tight">
                                        {header.name}
                                    </div>
                                )}
                            </div>
                            <div className="relative flex items-center">
                                {header.filterOptions &&
                                    header.filterOptions?.length > 0 && (
                                        <div className="relative mr-2">
                                            <FilterPopover
                                                filterType={
                                                    header.filterQueryParam ??
                                                    getFilterType(header.name)
                                                }
                                                filterOptions={
                                                    header.filterOptions
                                                }
                                            />
                                        </div>
                                    )}
                                {header.showSorting && (
                                    <div className="relative lg:w-[11px] lg:h-[22px] w-[8px] h-[18px] ml-2 flex flex-col items-center justify-center">
                                        <div
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleSort(header.name)
                                            }
                                        >
                                            <svg
                                                width="11"
                                                height="11"
                                                viewBox="0 0 11 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`rotate-180 fill-current ${
                                                    sortBy === header.name &&
                                                    sortOrder === "desc"
                                                        ? "text-brand"
                                                        : "text-muted-foreground"
                                                }`}
                                            >
                                                <path d="M9.46854 2.93848H1.53146C1.2934 2.93848 1.16047 3.18983 1.3079 3.36143L5.27644 7.9632C5.39003 8.09492 5.60876 8.09492 5.72356 7.9632L9.6921 3.36143C9.83953 3.18983 9.7066 2.93848 9.46854 2.93848Z" />
                                            </svg>
                                        </div>
                                        <div
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleSort(header.name)
                                            }
                                        >
                                            <svg
                                                width="11"
                                                height="11"
                                                viewBox="0 0 11 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`fill-current ${
                                                    sortBy === header.name &&
                                                    sortOrder === "asc"
                                                        ? "text-brand"
                                                        : "text-muted-foreground"
                                                }`}
                                            >
                                                <path d="M9.46854 2.93848H1.53146C1.2934 2.93848 1.16047 3.18983 1.3079 3.36143L5.27644 7.9632C5.39003 8.09492 5.60876 8.09492 5.72356 7.9632L9.6921 3.36143C9.83953 3.18983 9.7066 2.93848 9.46854 2.93848Z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {index < headers.length - 1 && (
                                <span className="w-px h-7 bg-border ml-5"></span>
                            )}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
