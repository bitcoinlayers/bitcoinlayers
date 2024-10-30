"use client";

import React from "react";
import { useQueryState } from "nuqs";
import LayerTableAll from "../tables/layerTableAll";
import LayersAggregatedTVLChart from "@/components/charts/layers-aggregated-tvl-chart";
import { LayerProject } from "@/content/props";

interface Props {
    data: LayerProject[];
    headers: (
        | {
              name: string;
              showSorting: boolean;
              mobileLabel: string;
              filterOptions?: undefined;
          }
        | {
              name: string;
              showSorting: boolean;
              mobileLabel: string;
              filterOptions: string[];
          }
    )[];
}

const ViewToggleGroup = ({ data, headers }: Props) => {
    const [status, setStatus] = useQueryState("status", {
        defaultValue: "Mainnet",
    });

    return (
        <>
            <div className="flex mb-6 justify-center -mt-12 lg:mt-0 relative z-20">
                <div className="justify-start items-start gap-4 inline-flex">
                    <div
                        className={`h-[30px] px-4 py-[5px] rounded-full border-2 justify-center items-center gap-1.5 flex cursor-pointer ${
                            status === "Mainnet"
                                ? "bg-white border-orange-600"
                                : "border-slate-300"
                        }`}
                        onClick={() => setStatus("Mainnet")}
                    >
                        <div
                            className={`text-center text-sm font-medium leading-tight ${
                                status === "Mainnet"
                                    ? "text-orange-600"
                                    : "text-slate-600"
                            }`}
                        >
                            Mainnet
                        </div>
                    </div>
                    <div
                        className={`h-[30px] rounded-full border-2 justify-center items-center gap-1 flex cursor-pointer ${
                            status === "Testnet"
                                ? "bg-white border-orange-600"
                                : "border-slate-300"
                        }`}
                        onClick={() => setStatus("Testnet")}
                    >
                        <div className="grow shrink basis-0 h-[30px] px-4 py-[5px] justify-center items-center gap-1.5 flex">
                            <div
                                className={`text-center text-sm font-medium leading-tight ${
                                    status === "Testnet"
                                        ? "text-orange-600"
                                        : "text-slate-600"
                                }`}
                            >
                                Testnet
                            </div>
                        </div>
                    </div>
                    <div
                        className={`h-[30px] rounded-full border-2 justify-center items-center gap-1 flex cursor-pointer ${
                            status === "Charts"
                                ? "bg-white border-orange-600"
                                : "border-slate-300"
                        }`}
                        onClick={() => setStatus("Charts")}
                    >
                        <div className="grow shrink basis-0 h-[30px] px-4 py-[5px] justify-center items-center gap-1.5 flex">
                            <div
                                className={`text-center text-sm font-medium leading-tight ${
                                    status === "Charts"
                                        ? "text-orange-600"
                                        : "text-slate-600"
                                }`}
                            >
                                Charts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {status !== "Charts" ? (
                <LayerTableAll
                    data={data}
                    headers={headers}
                    showToggleGroup={false}
                />
            ) : (
                <LayersAggregatedTVLChart />
            )}
        </>
    );
};

export default ViewToggleGroup;
