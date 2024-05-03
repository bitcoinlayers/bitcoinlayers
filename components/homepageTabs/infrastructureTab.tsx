import { Infrastructure } from "@/components/infrastructure/infrastructureProps";
import { allInfrastructures } from "@/util/infrastructure_index";
import InfrastructureTable from "@/components/infrastructure/infrastructureTable";
import tableStyles from "../styles/tableStyles";

interface InfrastructureTabProps {
  // none
}

const InfrastructureTab: React.FC<InfrastructureTabProps> = () => {
  return (
    <InfrastructureTable data={allInfrastructures} />
  );
};

export default tableStyles(InfrastructureTab);
