"use client";

import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

export interface Column {
    header: string;
    accessor: string;
    render?: (value: any, item: any) => JSX.Element | string;
}

interface GenericTableProps {
    data: any[];
    columns: Column[];
}

const GenericTable = ({ data, columns }: GenericTableProps) => {
    const router = useRouter();

    const handleRowClick = (destination: string) => {
        router.push(destination);
    };

    return (
        <div className="overflow-x-auto bg-lightsecondary rounded-xl mx-auto border border-stroke_tertiary">
            <table className="bg-lightsecondary table-fixed sm:w-full text-sm text-left rtl:text-right">
                <thead className="bg-table_header">
                    <tr className="border-b border-stroke_tertiary">
                        {columns.map((column) => (
                            <th
                                key={column.accessor}
                                className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary"
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white gap-x-8 border-t border-stroke_tertiary text_table_important">
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            className={`cursor-pointer ${
                                index === data.length - 1
                                    ? ""
                                    : "border-b border-stroke_tertiary"
                            }`}
                            onClick={() =>
                                handleRowClick(`/layers/${item.slug}`)
                            }
                        >
                            {columns.map((column) => (
                                <td
                                    key={column.accessor}
                                    className="px-6 py-4 border-stroke_tertiary"
                                >
                                    {column.render
                                        ? column.render(
                                              item[column.accessor],
                                              item,
                                          )
                                        : item[column.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GenericTable;
