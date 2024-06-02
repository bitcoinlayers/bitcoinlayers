import { Layer } from "@/components/layer/layerProps";
import { allLayers } from "@/util/layer_index";
import LayerTableRisks from "@/components/layer/layerTableRisks";
import tableStyles from "../styles/tableStyles";

interface LayerTabProps {
    // none
}

const LayerTabRisks: React.FC<LayerTabProps> = () => {
    const mainnetLayers = allLayers
        .filter((layer) => layer.live === "Mainnet")
        .sort((a, b) => a.title.localeCompare(b.title));

    return <LayerTableRisks data={mainnetLayers} />;
};

export default tableStyles(LayerTabRisks);
