"use client";

import Image from "next/image";
import { useState } from "react";
import { Opcode } from "@/components/opcode/opcodeProps";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Props {
    data: Opcode[];
}

const OpcodeImage = ({ src, title }: { src: string; title: string }) => {
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

const OpcodeTable = ({ data }: Props) => {
    const t = useTranslations("opcode");

    return (
        <div className="overflow-x-auto bg-lightsecondary rounded-xl mx-auto border border-stroke_tertiary">
            <table className="bg-lightsecondary table-fixed sm:w-full text-sm text-left rtl:text-right">
                <thead className="bg-table_header">
                    <tr className="border-b border-stroke_tertiary">
                        <th className="px-6 py-6 font-medium text-text_table_header table_header border-l border-t border-stroke_tertiary first:rounded-tl-xl">
                            {t("name")}
                        </th>
                        <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
                            {t("opcode")}
                        </th>
                        <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
                            {t("purpose-0")}
                        </th>
                        <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-r border-stroke_tertiary first:rounded-tr-xl">
                            {t("status")}
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
                        >
                            <td className="px-6 py-4 font-semibold whitespace-nowrap border-l border-stroke_tertiary">
                                <Link
                                    href={`/opcode/${item.slug}`}
                                    className="flex items-center"
                                >
                                    <OpcodeImage
                                        src={`/logos/${item.slug}.png`}
                                        title={item.title}
                                    />
                                    <span className="ml-2">{item.title}</span>
                                </Link>
                            </td>
                            <td className="px-6 py-4 border-stroke_tertiary">
                                <Link href={`/opcode/${item.slug}`}>
                                    {item.bitcoinSecurity}
                                </Link>
                            </td>
                            <td className="px-6 py-4 border-stroke_tertiary">
                                <Link href={`/opcode/${item.slug}`}>
                                    {item.opcodeType}
                                </Link>
                            </td>
                            <td className="px-6 py-4 border-r border-stroke_tertiary">
                                <Link href={`/opcode/${item.slug}`}>
                                    {item.purpose}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OpcodeTable;
