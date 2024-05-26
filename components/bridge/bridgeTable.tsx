"use client";

import { useState } from "react";
import { Bridge } from "@/components/bridge/bridgeProps";
import { useRouter } from "next/navigation";

interface Props {
  data: Bridge[];
}

const BridgeTable = ({ data }: Props) => {
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const router = useRouter();

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "asc") {
      // @ts-ignore
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      // @ts-ignore
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleRowClick = (destination: string) => {
    window.open(destination, "_blank");
  };

  return (
    <div className="overflow-x-auto">
      <table className="rounded-lg bg-lightsecondary table-fixed sm:w-full text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase dark:text-bitcoin">
          <tr>
            <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("title");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Name{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "title" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "title" ? "▲" : "▼"}
                </span>
              </span>
            </th>
            <th scope="col" className="flex-1 px-6 py-3 w-1/3 sm:w-1/8">
              <span className="flex items-center">Risks </span>
            </th>
            <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("bridgeType");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Type{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "bridgeType" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "bridgeType" ? "▲" : "▼"}
                </span>
              </span>
            </th>
            {/* <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("stability");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Stability Mechanism{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "stability" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "stability" ? "▲" : "▼"}
                </span>
              </span>
            </th>
            <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("collateral_source");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Collateral Source{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "collateral_source" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "collateral_source" ? "▲" : "▼"}
                </span>
              </span>
            </th> */}
            <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("networks");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Networks{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "networks" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "networks" ? "▲" : "▼"}
                </span>
              </span>
            </th>
            <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("btcLocked");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                TVL{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "btcLocked" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "btcLocked" ? "▲" : "▼"}
                </span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="dark:border-primary gap-x-8">
          {sortedData.map((item, index) => (
            <tr
              className={`dark:border-primary cursor-pointer ${
                index === sortedData.length - 1 ? "" : "border-b-2"
              }`}
              key={index}
              onClick={() => handleRowClick(item.links[0])}
            >
              <td className="flex-1 px-6 py-4 font-bold whitespace-nowrap">
                <h2>{item.title}</h2>
              </td>
              <td className="flex-1 px-6 py-4">
                <div className="dark:text-bitcoin">Under Review</div>
              </td>
              <td className="flex-1 px-6 py-4">{item.bridgeType}</td>
              {/* <td className="flex-1 px-6 py-4">{item.settlement}</td>
              <td className="flex-1 px-6 py-4">{item.btcBridge}</td> */}
              <td className="flex-1 px-6 py-4">Moneta</td>
              <td className="flex-1 px-6 py-4">$5.1m</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx global>{`
        /* Custom scrollbar styles */
        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: #888; /* Dark grey */
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555; /* Black */
        }
      `}</style>
    </div>
  );
};

export default BridgeTable;
