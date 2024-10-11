"use client";

import useGetCurrentBalancesPerLayer, {
    Balance,
} from "@/hooks/use-get-current-balances-perlayer";
import { Layer } from "./layerProps";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const Categories: React.FC<{ layer: Layer }> = ({ layer }) => {
    const { slug } = useParams();

    const { data: balances } = useGetCurrentBalancesPerLayer();

    return (
        <div className="lg:flex lg:justify-between w-full grid grid-cols-2 gap-4">
            <div className="flex-col lg:justify-center lg:items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    Status
                </div>
                <div className="text-text_header">{layer.live}</div>
            </div>
            <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    Type
                </div>
                <div className="text-text_header">{layer.layerType}</div>
            </div>
            <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    Fee Token
                </div>
                <div className="text-text_header">{layer.feeToken}</div>
            </div>
            <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    TVL
                </div>
                <div className="text-zinc-800 text-base font-normal leading-normal">
                    ₿ {/* Fallback to layer.btcLocked */}
                    {balances
                        ? balances.toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                          })
                        : layer.btcLocked}
                </div>
            </div>
        </div>
    );
};

export default Categories;
