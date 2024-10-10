import { allLayers } from "@/messages/en/layers";
import LayerTableRisks from "@/components/layer/layerTableRisks";
import tableStyles from "../styles/tableStyles";

interface LayerTabProps {
    // none
}

const LayerTabRisks: React.FC<LayerTabProps> = () => {
    const mainnetLayers = allLayers
        .filter((layer) => layer.live === "Mainnet")
        .sort((a, b) => a.slug.localeCompare(b.slug));

    return <LayerTableRisks data={mainnetLayers} />;
};

export default tableStyles(LayerTabRisks);
