"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { MobileView, isMobile } from "react-device-detect";
import { getRiskColorText } from "@/util/riskColors";
import { LayerProject } from "@/content/props";

interface Props {
    data: LayerProject[];
}
type MobileRiskKey = "BTC Custody" | "DA" | "Operators" | "Settlement";

const layerHeaders = [
    { name: "Name", mobileLabel: "Name" },
    { name: "BTC Custody", mobileLabel: "BTC Custody" },
    { name: "DA", mobileLabel: "DA" },
    { name: "Operators", mobileLabel: "Operators" },
    { name: "Settlement", mobileLabel: "Settlement" },
];

const LayerImage = ({ src, title }: { src: string; title: string }) => {
    const [imageSrc, setImageSrc] = useState(src);

    const handleError = () => {
        setImageSrc("/bitcoinlayers-logo.png");
    };

    return (
        <Image
            src={imageSrc}
            alt={`${title} logo`}
            width={20}
            height={20}
            onError={handleError}
        />
    );
};

const LayerTableRisks = ({ data }: Props) => {
    const [mobileRiskTab, setMobileRiskTab] =
        useState<MobileRiskKey>("BTC Custody");
    const router = useRouter();

    const handleRowClick = (destination: string) => {
        router.push(destination);
    };
    const handleMobileTabClick = (tab: MobileRiskKey) => {
        setMobileRiskTab(tab);
    };

    return (
        <div className="px-6 lg:px-0">
            <MobileView className="flex justify-center">
                <div className="justify-center items-start gap-4 inline-flex flex-wrap py-3">
                    {layerHeaders.slice(1).map((_item, ind) => {
                        return (
                            <div
                                className={`h-[30px] px-4 py-[5px] rounded-full border-2 justify-center items-center gap-1.5 flex cursor-pointer ${
                                    mobileRiskTab === _item.name
                                        ? "bg-white border-orange-600"
                                        : "border-slate-300"
                                }`}
                                onClick={() =>
                                    handleMobileTabClick(
                                        _item.name as MobileRiskKey,
                                    )
                                }
                                key={ind}
                            >
                                <div
                                    className={`text-center text-sm font-medium leading-tight ${
                                        mobileRiskTab === _item.name
                                            ? "text-orange-600"
                                            : "text-slate-600"
                                    }`}
                                >
                                    {_item.mobileLabel}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </MobileView>

            <div className="overflow-x-auto bg-lightsecondary rounded-xl mx-auto border border-stroke_tertiary">
                <table className="bg-lightsecondary table-fixed w-full text-sm text-left rtl:text-right rounded-xl">
                    <thead className="bg-table_header rounded-t-xl">
                        <tr className="border-b border-stroke_tertiary rounded-t-xl">
                            <th className="lg:px-6 px-4 lg:py-6 py-2 font-medium text-text_table_header table_header border-r lg:border-r-0 border-stroke_tertiary rounded-tl-xl">
                                Name
                            </th>
                            {(!isMobile || mobileRiskTab === "BTC Custody") && (
                                <th className="lg:px-6 px-4 lg:py-6 py-2 font-medium text-text_table_header table_header border-stroke_tertiary">
                                    BTC Custody
                                </th>
                            )}
                            {(!isMobile || mobileRiskTab === "DA") && (
                                <th className="lg:px-6 px-4 lg:py-6 py-2 font-medium text-text_table_header table_header border-stroke_tertiary">
                                    Data Availability
                                </th>
                            )}
                            {(!isMobile || mobileRiskTab === "Operators") && (
                                <th className="lg:px-6 px-4 lg:py-6 py-2 font-medium text-text_table_header table_header border-stroke_tertiary">
                                    Network Operator
                                </th>
                            )}
                            {(!isMobile || mobileRiskTab === "Settlement") && (
                                <th className="lg:px-6 px-4 lg:py-6 py-2 font-medium text-text_table_header table_header border-r border-stroke_tertiary first:rounded-tr-xl">
                                    Settlement Assurance
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="bg-white gap-x-8 border-t border-stroke_tertiary text_table_important">
                        {data.map((item, index) => (
                            <tr
                                className={`cursor-pointer ${
                                    index === data.length - 1
                                        ? ""
                                        : "border-b border-stroke_tertiary"
                                }`}
                                key={index}
                                onClick={() =>
                                    handleRowClick(`/layers/${item.slug}`)
                                }
                            >
                                <td className="lg:px-6 px-4 lg:py-4 py-3 font-semibold whitespace-nowrap border-stroke_tertiary border-r lg:border-r-0 text-table_body">
                                    <div className="flex items-center">
                                        <LayerImage
                                            src={`/logos/${item.slug}.png`}
                                            title={item.title}
                                        />
                                        <span className="ml-2 truncate">
                                            {item.title}
                                        </span>
                                    </div>
                                </td>

                                {(!isMobile ||
                                    mobileRiskTab === "BTC Custody") && (
                                    <td
                                        className={
                                            "lg:px-6 px-4 lg:py-4 py-3 border-stroke_tertiary text_table_body"
                                        }
                                        style={{
                                            color: getRiskColorText(
                                                item.riskAnalysis[0]?.tier ||
                                                    "",
                                            ),
                                        }}
                                    >
                                        {/* {item.btcBridge} */}
                                    </td>
                                )}
                                {(!isMobile || mobileRiskTab === "DA") && (
                                    <td
                                        className={
                                            "lg:px-6 px-4 lg:py-4 py-3 border-stroke_tertiary text_table_body"
                                        }
                                        style={{
                                            color: getRiskColorText(
                                                item.riskAnalysis[1]?.tier ||
                                                    "",
                                            ),
                                        }}
                                    >
                                        {/* {item.settlement} */}
                                    </td>
                                )}
                                {(!isMobile ||
                                    mobileRiskTab === "Operators") && (
                                    <td className="lg:px-6 px-4 lg:py-4 py-3 border-stroke_tertiary text_table_body">
                                        {/* {item.consensus} */}
                                    </td>
                                )}
                                {(!isMobile ||
                                    mobileRiskTab === "Settlement") && (
                                    <td
                                        className={
                                            "lg:px-6 px-4 lg:py-4 py-3 border-stroke_tertiary text_table_body"
                                        }
                                        style={{
                                            color: getRiskColorText(
                                                item.riskAnalysis[3]?.tier ||
                                                    "",
                                            ),
                                        }}
                                    >
                                        {/* {item.executionEnv} */}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LayerTableRisks;
