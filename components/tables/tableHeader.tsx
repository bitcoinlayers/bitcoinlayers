import React, { useState } from "react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import FilterPopover from "./filter-popover";

interface TableHeaderProps {
    headers: {
        name: string;
        filterOptions?: string[];
        showSorting?: boolean;
    }[];
    onSort: (header: string, ascending: boolean) => void;
    onFilter: (header: string, value: string) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
    headers,
    onSort,
    onFilter,
}) => {
    const [filterOpen, setFilterOpen] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<{
        [key: string]: boolean | null;
    }>({});

    const toggleFilterDropdown = (header: string) => {
        if (filterOpen === header) {
            setFilterOpen(null);
        } else {
            setFilterOpen(header);
        }
    };

    const handleSort = (header: string, ascending: boolean) => {
        setSortOrder({ [header]: ascending });
        onSort(header, ascending);
    };

    return (
        <thead className="bg-table_header">
            <tr className="border-b border-stroke_tertiary">
                {headers.map((header, index) => (
                    <th
                        key={index}
                        className={`lg:pl-6 lg:py-6 pl-4 py-2 font-medium text-text_table_header table_header border-t border-stroke_tertiary last:pr-4 first:border-l first:rounded-tl-xl last:border-r last:rounded-tr-xl`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center grow">
                                <div className="text-zinc-800 text-sm font-medium leading-tight">
                                    {header.name}
                                </div>
                            </div>
                            <div className="relative flex items-center">
                                {header.filterOptions && (
                                    <div className="relative mr-2">
                                        <FilterPopover
                                            filters={header.filterOptions}
                                        />
                                    </div>
                                )}
                                {header.showSorting && (
                                    <div className="relative lg:w-[11px] lg:h-[22px] w-[8px] h-[18px] ml-2 flex flex-col items-center justify-center">
                                        <div
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleSort(header.name, false)
                                            }
                                        >
                                            <svg
                                                width="11"
                                                height="11"
                                                viewBox="0 0 11 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="rotate-180"
                                            >
                                                <path
                                                    d="M9.46854 2.93848H1.53146C1.2934 2.93848 1.16047 3.18983 1.3079 3.36143L5.27644 7.9632C5.39003 8.09492 5.60876 8.09492 5.72356 7.9632L9.6921 3.36143C9.83953 3.18983 9.7066 2.93848 9.46854 2.93848Z"
                                                    fill={
                                                        sortOrder[
                                                            header.name
                                                        ] === false
                                                            ? "#FE4F18"
                                                            : "#C9D0D8"
                                                    }
                                                />
                                            </svg>
                                        </div>
                                        <div
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleSort(header.name, true)
                                            }
                                        >
                                            <svg
                                                width="11"
                                                height="11"
                                                viewBox="0 0 11 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.46854 2.93848H1.53146C1.2934 2.93848 1.16047 3.18983 1.3079 3.36143L5.27644 7.9632C5.39003 8.09492 5.60876 8.09492 5.72356 7.9632L9.6921 3.36143C9.83953 3.18983 9.7066 2.93848 9.46854 2.93848Z"
                                                    fill={
                                                        sortOrder[
                                                            header.name
                                                        ] === true
                                                            ? "#FE4F18"
                                                            : "#C9D0D8"
                                                    }
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {index < headers.length - 1 && (
                                <span className="w-px h-7 bg-[#E1EAF8] ml-5"></span>
                            )}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
