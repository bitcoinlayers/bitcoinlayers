"use client";

import { useState, useMemo } from "react";
import { Layer } from "@/components/layer/layerProps";
import { useRouter } from "next/navigation";

interface Props {
  data: Layer[];
}

const LayerTable = ({ data }: Props) => {
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const router = useRouter();
  const [filter, setFilter] = useState<{ key: string; value: string } | null>(
    null
  );
  const [layerTypeFilter, setLayerTypeFilter] = useState("");
  const [settlementFilter, setSettlementFilter] = useState("");
  const [liveFilter, setLiveFilter] = useState("Mainnet");

  const filteredAndSortedData = useMemo(() => {
    return [...data]
      .filter(
        (item) =>
          (layerTypeFilter ? item.layerType === layerTypeFilter : true) &&
          (settlementFilter ? item.settlement === settlementFilter : true) &&
          (liveFilter ? item.live === liveFilter : true)
      )
      .sort((a, b) => {
        if (sortOrder === "asc") {
          // @ts-ignore
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
          // @ts-ignore
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      });
  }, [data, layerTypeFilter, settlementFilter, liveFilter, sortBy, sortOrder]);

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

  const handleRowClick = (destination: string, underReview: string) => {
    const shouldOpenNewTab = underReview === "yes";

    if (shouldOpenNewTab) {
      window.open(destination, "_blank");
    } else {
      router.push(destination);
    }
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
          <option value="">All Layers</option>
          <option value="Mainnet">Mainnet</option>
          <option value="Testnet">Testnet</option>
          <option value="Announced">Announced</option>
        </select>
        <select
          className="rounded-md  p-2 font-semibold text-xs text-bitcoin border border-gray-300 bg-secondary"
          value={layerTypeFilter}
          onChange={(e) => setLayerTypeFilter(e.target.value)}
        >
          <option value="">All Layer Types</option>
          <option value="Rollup">Rollup</option>
          <option value="Sidechain">Sidechain</option>
          <option value="State Channel">State Channel</option>
          <option value="Statechain">Statechain</option>
        </select>
        <select
          className="rounded-md  p-2 font-semibold text-xs text-bitcoin border border-gray-300 bg-secondary"
          value={settlementFilter}
          onChange={(e) => setSettlementFilter(e.target.value)}
        >
          <option value="">All Settlement Types</option>
          <option value="Offchain">Offchain</option>
          <option value="Onchain">Onchain</option>
        </select>
      </div>
      {/* Table */}
      <table className="rounded-lg table-fixed sm:w-full text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase dark:text-bitcoin">
          <tr>
            {/* <th
            scope="col"
            className="flex-1 px-6 py-3 cursor-pointer"
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
                setSortBy("layerType");
                toggleSortOrder();
              }}
            >
              <span className="flex items-center">
                Type{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "layerType" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "layerType" ? "▲" : "▼"}
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
                BTC Bridge{" "}
                <span
                  className={`ml-1 ${
                    sortBy === "btcBridge" ? "" : "text-gray-500"
                  }`}
                >
                  {sortOrder === "asc" && sortBy === "btcBridge" ? "▲" : "▼"}
                </span>
              </span>
            </th>
            <th
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
            </th>
          </tr>
        </thead>
        <tbody className="dark:border-primary gap-x-8">
          {filteredAndSortedData.map((item, index) => (
            <tr
              className={`dark:border-primary h-20 cursor-pointer ${
                index === filteredAndSortedData.length - 1 ? "" : "border-b-2"
              }`}
              key={index}
              onClick={() =>
                handleRowClick(
                  item.underReview === "no" ? `/layers/${item.slug}` : item.links[0],
                  item.underReview
                )
              }
            >
              <td className="flex-1 px-6 py-4 font-bold whitespace-nowrap">
                <h2>{item.title}</h2>
              </td>
              <td className="flex-1 pl-6 pr-2 py-4 flex flex-row mt-4 relative group cursor-pointer">
                {item.live === "no" ? (
                  <div className="font-bold">Testnet</div>
                ) : item.underReview === "yes" ? (
                  <div className="text-bitcoin font-bold">Under Review</div>
                ) : (
                  <>
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
                      <div className="bg-secondary text-white text-xs rounded py-1 px-3 border border-white">
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
                  </>
                )}
              </td>

              {/* <td className="flex-1 px-6 py-4"><LayerChartMini layer={item as LayerPropsFull["layer"]} /> </td> */}
              <td className="flex-1 px-6 py-4">{item.layerType}</td>
              <td className="flex-1 px-6 py-4">{item.purpose}</td>
              <td className="flex-1 px-6 py-4">
                {item.live === "no" ? (
                  <div>-</div>
                ) : (
                  <div>{item.btcBridge}</div>
                )}
              </td>
              <td className="flex-1 px-6 py-4">
                {item.live === "no" ? (
                  <div>-</div>
                ) : (
                  <div>{item.settlement}</div>
                )}
              </td>
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
