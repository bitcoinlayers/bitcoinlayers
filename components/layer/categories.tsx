'use client'

import useGetBalances from "@/hooks/use-get-balances";
import { Layer } from "./layerProps";
import { useParams } from "next/navigation";

const Categories: React.FC<{ layer: Layer }> = ({ layer }) => {
    const { slug } = useParams()

    const { data } = useGetBalances({
        queryString: `?layer_slug=ilike.${slug}&date=gte.${new Date(Date.now() - 86400000).toDateString()}`
    })

    // Calculate total amount
    const totalAmount = data?.reduce((sum, item) => sum + item.amount, 0);

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
                    ₿ {totalAmount
                        ? totalAmount.toLocaleString('en-US', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                          })
                        : layer.btcLocked}
                </div>
            </div>
        </div>
    );
};

export default Categories