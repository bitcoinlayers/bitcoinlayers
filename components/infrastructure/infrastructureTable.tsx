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
            : true) && (liveFilter ? item.live === liveFilter : true)
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
  }, [data, infrastructureTypeFilter, liveFilter, sortBy, sortOrder]);

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
    <div className="overflow-x-auto px-4 py-4 bg-lightsecondary dark:bg-secondary">
      {/* Filter dropdowns */}
      <div className="flex gap-4 mb-4">
        <select
          className="rounded-md p-2 font-semibold text-xs dark:text-bitcoin bg-lightsecondary dark:bg-secondary border-2 border-gray-300"
          value={liveFilter}
          onChange={(e) => setLiveFilter(e.target.value)}
        >
          <option value="">All Infrastructures</option>
          <option value="Mainnet">Mainnet</option>
          <option value="Testnet">Testnet</option>
          <option value="Announced">Announced</option>
        </select>
        <select
          className="rounded-md p-2 font-semibold text-xs dark:text-bitcoin bg-lightsecondary dark:bg-secondary border-2 border-gray-300"
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
      <table className="rounded-lg bg-lightsecondary dark:bg-secondary table-fixed sm:w-full text-sm text-left rtl:text-right">
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
                setSortBy("bitcoinSecurity");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Bitcoin Security{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "bitcoinSecurity" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "bitcoinSecurity"
                    ? "▲"
                    : "▼"}
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
              className={`dark:border-primary cursor-pointer ${
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
                  <div className="dark:text-white">Testnet</div>
                ) : item.live === "Announced" ? (
                  <div className="dark:text-white">Announced</div>
                ) : item.underReview === "yes" ? (
                  <div className="dark:text-bitcoin">Under Review</div>
                ) : (
                  <div className="dark:text-white">{item.bitcoinSecurity}</div>
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
