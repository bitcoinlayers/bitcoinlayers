import { Column } from "./genericTable";
import Image from "next/image";
import Risk from "../layer/layerTableItemRisk";

export const layerColumns: Column[] = [
    {
        header: "Name",
        accessor: "title",
        render: (title: string, layer: any) => (
            <div className="flex items-center">
                <Image
                    src={`/logos/${layer.slug}.png`}
                    alt={`${title} logo`}
                    width={20}
                    height={20}
                />
                <span className="ml-2">{title}</span>
            </div>
        ),
    },
    {
        header: "Risks",
        accessor: "riskAnalysis",
        render: (riskAnalysis: any) => <Risk layer={riskAnalysis} />,
    },
    { header: "Type", accessor: "layerType" },
    { header: "Status", accessor: "live" },
    { header: "Unit of Account", accessor: "nativeToken" },
    {
        header: "BTC Locked",
        accessor: "btcLocked",
        render: (btcLocked: number, layer: any) =>
            layer.underReview === "yes"
                ? "-"
                : `₿ ${btcLocked.toLocaleString()}`,
    },
];
