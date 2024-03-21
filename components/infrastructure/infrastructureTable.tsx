"use client";

import { useState } from "react";
import { Infrastructure } from "@/components/infrastructure/infrastructureProps";
import { useRouter } from "next/navigation";

interface Props {
  data: Infrastructure[];
}

const InfrastructureTable = ({ data }: Props) => {
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
    <div className="rounded-lg bg-highlight bg-opacity-20 dark:bg-secondary dark:bg-opacity-100 px-4 pt-4 overflow-x-auto">
      <table className="rounded-lg table-fixed sm:w-full text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase dark:text-bitcoin">
          <tr>
            {/* <th
            scope="col"
            className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
            onClick={() => {
              setSortBy("live");
              toggleSortOrder();
            }}
          >
            <span className="flex items-center">
              <span
                className={`ml-1 ${sortBy === "live" ? "" : "text-gray-500"}`}
              >
                {sortOrder === "asc" && sortBy === "live" ? "▲" : "▼"}
              </span>
            </span>
          </th> */}
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
            <th
              scope="col"
              className="flex-1 px-6 py-3 w-1/3 sm:w-1/8"
              //rm cursor-pointer from above
              // onClick={() => {
              //   setSortBy("riskFactors");
              //   toggleSortOrder();
              // }}
            >
              <span className="flex items-center">
                Risks{" "}
                {/* <span
                  className={`ml-1 ${
                    sortBy === "riskFactors" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "riskFactors" ? "▲" : "▼"}
                </span> */}
              </span>
            </th>
            <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("infrastructureType");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Type{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "infrastructureType" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "infrastructureType" ? "▲" : "▼"}
                </span>
                {/* <svg
                  className="w-3 h-3 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg> */}
              </span>
            </th>
            <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("purpose");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Purpose{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "purpose" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "purpose" ? "▲" : "▼"}
                </span>
              </span>
            </th>
            <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("btcBridge");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Associated Layers{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "btcBridge" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "btcBridge" ? "▲" : "▼"}
                </span>
              </span>
            </th>
            {/* <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("settlement");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Settlement{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "settlement" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "settlement" ? "▲" : "▼"}
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
                BTC Locked{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "btcLocked" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "btcLocked" ? "▲" : "▼"}
                </span>
              </span>
            </th> */}
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
                <div className="text-bitcoin font-bold">Under Review</div>
              </td>
              <td className="flex-1 px-6 py-4">{item.infrastructureType}</td>
              <td className="flex-1 px-6 py-4">{item.purpose}</td>
              <td className="flex-1 px-6 py-4">{item.executionEnv}</td>
              {/* <td className="flex-1 px-6 py-4">-</td>
              <td className="flex-1 px-6 py-4">-</td> */}
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

export default InfrastructureTable;
