import { Layer } from "@/components/layer/layerProps";
import { allLayers } from "@/util/layer_index";
import LayerTable from "@/components/layer/layerTable";
import tableStyles from "../styles/tableStyles";

interface LayerTabProps {
  // none
}

const LayerTab: React.FC<LayerTabProps> = () => {
  return (
    <LayerTable data={allLayers} />
  );
};

export default tableStyles(LayerTab);
