import { Infrastructure } from "@/components/infrastructure/infrastructureProps";
import { allInfrastructures } from "@/util/infrastructure_index";
import InfrastructureTable from "@/components/infrastructure/infrastructureTable";

const InfrastructureTab = () => {
  return (
    <div className="max-w-6xl mx-auto pb-16">
      {/* <h1 className="my-4 text-xl font-bold text-bitcoin">Coming Soon</h1> */}
      <InfrastructureTable data={allInfrastructures} />
    </div>
  );
};

export default InfrastructureTab;
