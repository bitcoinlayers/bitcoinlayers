import { Layer } from "@/components/layer/layerProps";
import { allLayers } from "@/util/layer_index";
import LayerTable from "@/components/layer/layerTable";

const LayerTab = () => {
  return (
    <div className="max-w-6xl mx-auto pb-16">
      <LayerTable data={allLayers} />
    </div>
  );
};

export default LayerTab;
