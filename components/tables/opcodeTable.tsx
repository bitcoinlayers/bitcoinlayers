"use client";

import { useRouter } from "next/navigation";
import { Opcode } from "@/components/opcode/opcodeProps";
import LogoImage from "../logoImage";

interface Props {
  data: Opcode[];
}

const OpcodeTable = ({ data }: Props) => {
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
              Opcode
            </th>
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-stroke_tertiary">
              Purpose
            </th>
            <th className="px-6 py-6 font-medium text-text_table_header table_header border-t border-r border-stroke_tertiary first:rounded-tr-xl">
              Status
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
              onClick={() => handleRowClick(`/opcode/${item.slug}`)}
            >
              <td className="flex items-center px-6 py-4 font-semibold whitespace-nowrap border-l border-stroke_tertiary">
                <LogoImage
                  src={`/logos/${item.slug}.png`}
                  title={item.title}
                />
                <span className="ml-2">{item.title}</span>
              </td>
              <td className="px-6 py-4 border-stroke_tertiary">
                {item.bitcoinSecurity}
              </td>
              <td className="px-6 py-4 border-stroke_tertiary">
                {item.opcodeType}
              </td>
              <td className="px-6 py-4 border-r border-stroke_tertiary">
                {item.nativeToken}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpcodeTable;
