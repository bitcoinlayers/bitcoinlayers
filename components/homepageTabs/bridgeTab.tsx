import { Bridge } from "@/components/bridge/bridgeProps";
import { allBridges } from "@/util/bridge_index";
import BridgeTable from "@/components/bridge/bridgeTable";

const BridgeTab = () => {
  return (
    <div className="max-w-5xl mx-auto pb-16">
      <h1 className="my-4 text-xl font-bold text-bitcoin">Coming Soon</h1>
      <BridgeTable data={allBridges} />
    </div>
  );
};

export default BridgeTab;
