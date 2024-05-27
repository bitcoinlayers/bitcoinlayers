import React, { useState } from "react";
import Image from "next/image";

interface TableHeaderProps {
  headers: { name: string; filterOptions?: string[] }[];
  onSort: (header: string, ascending: boolean) => void;
  onFilter: (header: string, value: string) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers, onSort, onFilter }) => {
  const [filterOpen, setFilterOpen] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<{ [key: string]: boolean | null }>({});

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
            className={`px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary ${
              index === 0 ? "border-l first:rounded-tl-xl" : ""
            } ${
              index === headers.length - 1 ? "border-r first:rounded-tr-xl" : ""
            }`}
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
                    <Image
                      src="/icons/filter.svg"
                      alt="Filter"
                      width={12}
                      height={12}
                      className="cursor-pointer"
                      onClick={() => toggleFilterDropdown(header.name)}
                    />
                    {filterOpen === header.name && (
                      <div className="absolute top-full left-0 mt-2 w-[218px] bg-white rounded-xl shadow-lg z-50 p-4">
                        <div className="h-[204px] flex-col justify-start items-start flex overflow-y-auto">
                          {header.filterOptions.map((option, idx) => (
                            <div
                              key={idx}
                              className="h-8 px-3 py-[5px] flex items-center gap-2 cursor-pointer hover:bg-gray-100"
                              onClick={() => onFilter(header.name, option)}
                            >
                              <div className="w-4 h-4 bg-white rounded-sm border border-slate-300"></div>
                              <div className="text-slate-600 text-sm font-normal leading-tight">
                                {option}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center p-2 border-t border-indigo-100">
                          <button
                            className="text-orange-600 text-sm font-normal"
                            onClick={() => onFilter(header.name, "")}
                          >
                            Reset
                          </button>
                          <button className="bg-orange-600 text-neutral-100 text-sm font-medium rounded-full px-3 py-1">
                            Save
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="relative w-[11px] h-[22px] ml-2 flex flex-col items-center">
                  <div
                    className={`cursor-pointer ${sortOrder[header.name] === true ? "text-brand" : "text-gray-400"}`}
                    onClick={() => handleSort(header.name, true)}
                  >
                    <Image src="/icons/carrot_up.svg" alt="Sort Ascending" width={11} height={11} />
                  </div>
                  <div
                    className={`cursor-pointer ${sortOrder[header.name] === false ? "text-brand" : "text-gray-400"}`}
                    onClick={() => handleSort(header.name, false)}
                  >
                    <Image src="/icons/carrot_up.svg" alt="Sort Descending" width={11} height={11} className="rotate-180" />
                  </div>
                </div>
              </div>
            </div>
            {index < headers.length - 1 && (
              <div className="absolute top-1/8 bottom-1/8 right-0 w-px bg-stroke_tertiary"></div>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
