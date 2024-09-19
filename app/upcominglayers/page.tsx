import { allLayers } from "@/util/layer_index";
import Hero from "@/components/hero";
import LayerTableAll from "@/components/tables/layerTableAll";

export default function Home() {
    const layersAll = allLayers.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const layerHeaders = [
        { name: "Name", showSorting: true, mobileLabel: "Name" },
        { name: "Risk", showSorting: false, mobileLabel: "Risk" },
        { name: "Type", showSorting: true, mobileLabel: "Type" },
        { name: "Status", showSorting: true, mobileLabel: "Status" },
        {
            name: "Unit of Account",
            showSorting: true,
            mobileLabel: "Unit",
        },
        { name: "BTC Locked", showSorting: true, mobileLabel: "BTC" },
    ];

    return (
        <div className="mx-auto">
            <Hero />
            <div className="flex mb-4 justify-center mt-16"></div>
            <div className="flex mb-4 justify-center max-w-5xl mx-auto">
                <LayerTableAll data={layersAll} headers={layerHeaders} />,
            </div>
        </div>
    );
}
