import { Layer } from "@/components/layer/layerProps";
import { allLayers } from "@/util/layer_index";
import LayerTable2 from "@/components/layer/layerTable2";
import tableStyles from "../styles/tableStyles";

interface LayerTabProps {
  // none
}

const LayerTab: React.FC<LayerTabProps> = () => {
  return (
    <LayerTable2 data={allLayers} />
  );
};

export default tableStyles(LayerTab);
