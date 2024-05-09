"use client";

import { useState, useMemo } from "react";
import { Layer } from "@/components/layer/layerProps";
import { useRouter } from "next/navigation";

interface Props {
  data: Layer[];
}

const LayerTable = ({ data }: Props) => {
  const [sortBy, setSortBy] = useState("title");
  // const [sortOrder, setSortOrder] = useState("asc");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const router = useRouter();
  const [layerTypeFilter, setLayerTypeFilter] = useState("");
  // const [settlementFilter, setSettlementFilter] = useState("");
  const [liveFilter, setLiveFilter] = useState("Mainnet");

  const filteredAndSortedData = useMemo(() => {
    const liveStatusOrder = ["Mainnet", "Testnet", "Announced"];

    return [...data]
      .filter(
        (item) =>
          (layerTypeFilter ? item.layerType === layerTypeFilter : true) &&
          // (settlementFilter ? item.settlement === settlementFilter : true) &&
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
  }, [data, layerTypeFilter, liveFilter, sortBy, sortOrder]);

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

  interface SortableHeaderProps {
    title: string;
    sortByValue: string;
    onSort: (value: string) => void;
    isSortedBy: boolean;
    sortOrder: "asc" | "desc";
    className?: string;
  }

  const SortableHeader: React.FC<SortableHeaderProps> = ({
    title,
    sortByValue,
    onSort,
    isSortedBy,
    sortOrder,
    className,
  }) => {
    return (
      <th
        scope="col"
        className={`flex-1 px-6 py-3 cursor-pointer w-1/3 sm:w-1/8 text-lighttableheader dark:text-bitcoin ${className}`}
        onClick={() => onSort(sortByValue)}
      >
        <span className="flex items-center">
          {title}
          {/* <span className={`ml-1 ${isSortedBy ? "" : "text-gray-500"}`}>
            {sortOrder === "asc" && isSortedBy ? "▲" : "▼"}
          </span> */}
        </span>
      </th>
    );
  };

  return (
    <div className="overflow-x-auto px-4 py-4 bg-lightsecondary dark:bg-secondary rounded-lg">
      {/* Table */}
      <table className="bg-lightsecondary dark:bg-secondary table-fixed sm:w-full text-sm text-left rtl:text-right">
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

            <SortableHeader
              title="Risks"
              sortByValue="live"
              onSort={(value: string) => {
                setSortBy(value);
                toggleSortOrder();
              }}
              isSortedBy={sortBy === "live"}
              sortOrder={sortOrder}
            />
            <SortableHeader
              title="Layer Type"
              sortByValue="layerType"
              onSort={(value: string) => {
                setSortBy(value);
                toggleSortOrder();
              }}
              isSortedBy={sortBy === "layerType"}
              sortOrder={sortOrder}
            />
            <SortableHeader
              title="Purpose"
              sortByValue="purpose"
              onSort={(value: string) => {
                setSortBy(value);
                toggleSortOrder();
              }}
              isSortedBy={sortBy === "purpose"}
              sortOrder={sortOrder}
            />
            <SortableHeader
              title="BTC Bridge"
              sortByValue="btcBridge"
              onSort={(value: string) => {
                setSortBy(value);
                toggleSortOrder();
              }}
              isSortedBy={sortBy === "btcBridge"}
              sortOrder={sortOrder}
            />
            <SortableHeader
              title="BTC Locked"
              sortByValue="btcLocked"
              onSort={(value: string) => {
                setSortBy(value);
                toggleSortOrder();
              }}
              isSortedBy={sortBy === "btcLocked"}
              sortOrder={sortOrder}
            />
          </tr>
        </thead>
        <tbody className="dark:border-primary gap-x-8">
          {filteredAndSortedData.map((item, index) => (
            <tr
              className={`dark:border-primary cursor-pointer ${
                index === filteredAndSortedData.length - 1 ? "" : "border-b-2"
              }`}
              key={index}
              onClick={() => handleRowClick(`/layers/${item.slug}`)}
            >
              <td className="flex-1 px-6 py-4 font-semibold whitespace-nowrap">
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
                  <div className="flex flex-row py-4 items-center flex flex-row relative group cursor-pointer">
                    {item.riskFactors.map((riskFactor, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-0.5 ${getRiskColorClass(
                          riskFactor
                        )}`}
                      ></div>
                    ))}
                    {/* Tooltip */}
                    <div className="absolute -right-12 top-10 w-64 mt-2 hidden group-hover:flex flex-col items-center before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white z-10">
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
                    </div>
                  </div>
                )}
              </td>
              <td className="flex-1 px-6 py-4">{item.layerType}</td>
              <td className="flex-1 px-6 py-4">{item.purpose}</td>
              <td className="flex-1 px-6 py-4">
                {item.live !== "Mainnet" ? (
                  <div>-</div>
                ) : (
                  <div>{item.btcBridge}</div>
                )}
              </td>
              {/* <td className="flex-1 px-6 py-4">
                {item.live !== "Mainnet" ? (
                  <div>-</div>
                ) : (
                  <div>{item.settlement}</div>
                )}
              </td> */}
              <td className="flex-1 px-6 py-4">
                {item.underReview === "yes" ? (
                  <div>-</div>
                ) : (
                  <div>{Number(item.btcLocked).toLocaleString()} BTC</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Filter dropdowns */}
      <div className="flex gap-4 mt-2">
        <select
          className="rounded-md p-2 font-semibold text-xs dark:text-bitcoin bg-lightsecondary dark:bg-secondary border-2 border-gray-300"
          value={liveFilter}
          onChange={(e) => setLiveFilter(e.target.value)}
        >
          <option value="">All Layers</option>
          <option value="Mainnet">Mainnet</option>
          <option value="Testnet">Testnet</option>
          <option value="Announced">Announced</option>
        </select>
        <select
          className="rounded-md p-2 font-semibold text-xs dark:text-bitcoin bg-lightsecondary dark:bg-secondary border-2 border-gray-300"
          value={layerTypeFilter}
          onChange={(e) => setLayerTypeFilter(e.target.value)}
        >
          <option value="">All Layer Types</option>
          <option value="Rollup">Rollup</option>
          <option value="Sidechain">Sidechain</option>
          <option value="State Channel">State Channel</option>
          <option value="Statechain">Statechain</option>
        </select>
      </div>
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

export default LayerTable;
