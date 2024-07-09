"use client";

import { useRouter } from "next/navigation";
import { Infrastructure } from "@/components/infrastructure/infrastructureProps";
import { useState } from "react";
import Image from "next/image";

interface Props {
    data: Infrastructure[];
}

const InfrastructureImage = ({
    src,
    title,
}: {
    src: string;
    title: string;
}) => {
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

const InfrastructureTable = ({ data }: Props) => {
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
                            Bitcoin Security
                        </th>
                        <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
                            Type
                        </th>
                        <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
                            Purpose
                        </th>
                        <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-r border-stroke_tertiary first:rounded-tr-xl">
                            Associated Layers
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
                            onClick={() =>
                                handleRowClick(`/infrastructure/${item.slug}`)
                            }
                        >
                            <td className="px-6 py-4 font-semibold whitespace-nowrap border-l border-stroke_tertiary text_table_important">
                                <div className="flex items-center">
                                    <InfrastructureImage
                                        src={`/logos/${item.slug}.png`}
                                        title={item.title}
                                    />
                                    <span className="ml-2">{item.title}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 border-stroke_tertiary">
                                {item.bitcoinSecurity}
                            </td>
                            <td className="px-6 py-4 border-stroke_tertiary">
                                {item.infrastructureType}
                            </td>
                            <td className="px-6 py-4 border-stroke_tertiary">
                                {item.purpose}
                            </td>
                            <td className="px-6 py-4 border-r border-stroke_tertiary">
                                {item.associatedLayers}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InfrastructureTable;
