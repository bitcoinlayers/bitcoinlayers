import { Bridge } from "@/components/bridge/bridgeProps";
import { allBridges } from "@/util/bridge_index";
import BridgeTable from "@/components/bridge/bridgeTable";
import tableStyles from "../styles/tableStyles";

interface BridgeTabProps {
  // none
}

const BridgeTab: React.FC<BridgeTabProps> = () => {
  return (
    <BridgeTable data={allBridges} />
  );
};

export default tableStyles(BridgeTab);
