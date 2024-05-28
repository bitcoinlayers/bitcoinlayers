"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Layer } from "@/components/layer/layerProps";

interface Props {
  data: Layer[];
}

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

const getRiskColorClass = (riskFactor: string) => {
  switch (riskFactor) {
    case "Low":
      return "text-text_risk_low";
    case "Medium":
      return "text-text_risk_midlow";
    case "Medium-High":
      return "text-text_risk_midhigh";
    case "High":
      return "text-text_risk_high";
    default:
      return "text-text_secondary";
  }
};

const LayerTableRisks = ({ data }: Props) => {
  const router = useRouter();

  const handleRowClick = (destination: string) => {
    router.push(destination);
  };

  return (
    <div className="overflow-x-auto bg-lightsecondary rounded-xl mx-auto border border-stroke_tertiary">
      <table className="bg-lightsecondary table-fixed sm:w-full text-sm text-left rtl:text-right">
        <thead className="bg-table_header">
          <tr className="border-b border-stroke_tertiary">
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-l border-t border-stroke_tertiary first:rounded-tl-xl">
              Name
            </th>
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
              Bridge
            </th>
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
              Data Availability
            </th>
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
              Network Operator
            </th>
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-r border-stroke_tertiary first:rounded-tr-xl">
              Settlement Assurance
            </th>
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
              onClick={() => handleRowClick(`/layers/${item.slug}`)}
            >
              <td className="flex items-center px-6 py-4 font-semibold whitespace-nowrap border-l border-stroke_tertiary">
                <LayerImage
                  src={`/logos/${item.slug}.png`}
                  title={item.title}
                />
                <span className="ml-2">{item.title}</span>
              </td>
              <td
                className={`px-6 py-4 border-stroke_tertiary ${getRiskColorClass(
                  item.riskAnalysis[0]?.tier || ""
                )}`}
              >
                {item.btcBridge}
              </td>

              <td
                className={`px-6 py-4 border-stroke_tertiary ${
                  item.settlement === "External"
                    ? "text-text_risk_high"
                    : item.settlement === "Onchain"
                    ? "text-text_risk_low"
                    : ""
                }`}
              >
                {item.dataavailability}
              </td>
              <td className="px-6 py-4 border-stroke_tertiary">
                {item.consensus}
              </td>
              <td className="px-6 py-4 border-stroke_tertiary">
                {item.settlement}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LayerTableRisks;
