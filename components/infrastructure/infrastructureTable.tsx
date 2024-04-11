"use client";

import { useState, useMemo } from "react";
import { Infrastructure } from "@/components/infrastructure/infrastructureProps";
import { useRouter } from "next/navigation";

interface Props {
  data: Infrastructure[];
}

const InfrastructureTable = ({ data }: Props) => {
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const router = useRouter();
  const [infrastructureTypeFilter, setInfrastructureTypeFilter] = useState("");
  const [liveFilter, setLiveFilter] = useState("Mainnet");

  const filteredAndSortedData = useMemo(() => {
    const liveStatusOrder = ["Mainnet", "Testnet", "Announced"]; // Define the order for sorting by live status

    return [...data]
      .filter(
        (item) =>
          (infrastructureTypeFilter
            ? item.infrastructureType === infrastructureTypeFilter
            : true) &&
          (liveFilter ? item.live === liveFilter : true)
      )
      .sort((a, b) => {
        // First, sort by live status
        const orderA = liveStatusOrder.indexOf(a.live);
        const orderB = liveStatusOrder.indexOf(b.live);
        if (orderA !== orderB) {
          return (sortOrder === "asc" ? 1 : -1) * (orderA - orderB);
        }

        // If live statuses are the same, then sort by title
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return sortOrder === "asc" ? 1 : -1;
        }

        // If both live status and title are the same, return 0 (no sorting)
        return 0;
      });
  }, [
    data,
    infrastructureTypeFilter,
    liveFilter,
    sortBy,
    sortOrder,
  ]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const getRiskColorClass = (riskFactor: string) => {
    switch (riskFactor) {
      case "Low":
        return "bg-low";
      case "Medium":
        return "bg-medium";
      case "High":
        return "bg-high";
      default:
        return "bg-high";
    }
  };

  const handleRowClick = (destination: string) => {
    router.push(destination);
  };

  return (
    <div className="rounded-lg bg-highlight bg-opacity-20 dark:bg-secondary dark:bg-opacity-100 px-4 pt-4 overflow-x-auto">
      {/* Filter dropdowns */}
      <div className="flex gap-4 mb-4">
        <select
          className="rounded-md p-2 font-semibold text-xs text-bitcoin border border-gray-300 bg-secondary"
          value={liveFilter}
          onChange={(e) => setLiveFilter(e.target.value)}
        >
          <option value="">All Infrastructures</option>
          <option value="Mainnet">Mainnet</option>
          <option value="Testnet">Testnet</option>
          <option value="Announced">Announced</option>
        </select>
        <select
          className="rounded-md  p-2 font-semibold text-xs text-bitcoin border border-gray-300 bg-secondary"
          value={infrastructureTypeFilter}
          onChange={(e) => setInfrastructureTypeFilter(e.target.value)}
        >
          <option value="">All Infrastructure Types</option>
          <option value="Data Availability">Data Availability</option>
          <option value="Federation SDK">Federation SDK</option>
          <option value="RaaS">RaaS</option>
          <option value="Restaking">Restaking</option>
          <option value="Rollup SDK">Rollup SDK</option>
          <option value="Sequencing">Sequencing</option>
        </select>
      </div>
      {/* Table */}
      <table className="rounded-lg table-fixed sm:w-full text-sm text-left rtl:text-right">
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
            <th
              scope="col"
              className="flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8"
              onClick={() => {
                setSortBy("live");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Risks{" "}
                <span
                  className={`ml-1 ${sortBy === "live" ? "" : "text-gray-500"}`}
                >
                  {sortOrder === "asc" && sortBy === "live" ? "▲" : "▼"}
                </span>
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
                  {sortOrder === "asc" && sortBy === "infrastructureType"
                    ? "▲"
                    : "▼"}
                </span>
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
            >
              <span className="flex items-center">Associated Layers </span>
            </th>
          </tr>
        </thead>
        <tbody className="dark:border-primary gap-x-8">
          {filteredAndSortedData.map((item, index) => (
            <tr
              className={`dark:border-primary h-12 cursor-pointer ${
                index === filteredAndSortedData.length - 1 ? "" : "border-b-2"
              }`}
              key={index}
              onClick={() => handleRowClick(`/infrastructure/${item.slug}`)}
            >
              <td className="flex-1 px-6 py-4 font-bold whitespace-nowrap">
                <h2>{item.title}</h2>
              </td>
              <td className="flex-1 px-6 pr-2">
                {item.live === "Testnet" ? (
                  <div className="text-white font-bold">Testnet</div>
                ) : item.live === "Announced" ? (
                  <div className="text-white font-bold">Announced</div>
                ) : item.underReview === "yes" ? (
                  <div className="text-bitcoin font-bold">Under Review</div>
                ) : (
                  <div className="flex flex-row py-3 items-center flex flex-row relative group cursor-pointer">
                    {item.riskFactors.map((riskFactor, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-0.5 ${getRiskColorClass(
                          riskFactor
                        )}`}
                      ></div>
                    ))}
                    {/* Tooltip */}
                    {/* <div className="absolute -right-12 top-10 w-64 mt-2 hidden group-hover:flex flex-col items-center before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white z-10">
                      <div className="bg-secondary text-white text-xs rounded border-2 border-white py-1 px-3">
                        <p className="text-lg font-bold">Risk Factors</p>
                        {item.riskFactors.length > 0 ? (
                          item.riskFactors.map((riskFactor, index) => (
                            <p key={index}>{riskFactor}</p>
                          ))
                        ) : (
                          <p>No risk factors listed</p>
                        )}
                      </div>
                    </div> */}
                  </div>
                )}
              </td>
              <td className="flex-1 px-6 py-4">{item.infrastructureType}</td>
              <td className="flex-1 px-6 py-4">{item.purpose}</td>
              <td className="flex-1 px-6 py-4">{item.associatedLayers}</td>
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
