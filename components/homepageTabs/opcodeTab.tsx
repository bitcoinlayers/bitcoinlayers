import { Opcode } from "@/components/opcode/opcodeProps";
import { allOpcodes } from "@/util/opcode_index";
import OpcodeTable from "@/components/opcode/opcodeTable";
import tableStyles from "../styles/tableStyles";

interface OpcodeTabProps {
  // none
}

const OpcodeTab: React.FC<OpcodeTabProps> = () => {
  return (
    <OpcodeTable data={allOpcodes} />
  );
};

export default tableStyles(OpcodeTab);
