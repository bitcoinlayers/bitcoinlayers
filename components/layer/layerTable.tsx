"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Layer } from "@/components/layer/layerProps";
import Risk from "@/components/layer/layerTableItemRisk";

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

const LayerTable = ({ data }: Props) => {
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
              Risks
            </th>
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
              Type
            </th>
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
              Status
            </th>
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
            Unit of Account
            </th>
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-r border-stroke_tertiary first:rounded-tr-xl">
              BTC Locked
            </th>
          </tr>
        </thead>
        <tbody className="bg-white gap-x-8 border-t border-stroke_tertiary">
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
              <td className="px-2 border-stroke_tertiary">
                <Risk layer={item} />
              </td>
              <td className="px-6 py-4 border-stroke_tertiary">
                {item.layerType}
              </td>
              <td className="px-6 py-4 border-stroke_tertiary">{item.live}</td>
              <td className="px-6 py-4 border-stroke_tertiary">
                {item.nativeToken}
              </td>
              <td className="px-6 py-4 border-r border-stroke_tertiary">
                {item.underReview === "yes" ? (
                  <div>-</div>
                ) : (
                  <div>₿ {Number(item.btcLocked).toLocaleString()}</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LayerTable;
