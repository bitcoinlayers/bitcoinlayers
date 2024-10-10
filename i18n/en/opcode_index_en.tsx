import type { Opcode } from "@/components/opcode/opcodeProps";
import opcatJson from "@/messages/en/opcodes/opcat.json" assert { type:
    "json" };

const opcat: Opcode = opcatJson as Opcode;

export const allOpcodes: Opcode[] = [opcat];
export const allOpcodeSlugs: string[] = allOpcodes.map((opcode) => opcode.slug);
