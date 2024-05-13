import type { Opcode } from '@/components/opcode/opcodeProps';

//
//opcodes
import opcatJson from "../content/opcodes/opcat.json" assert { type: 'json' };
const opcat: Opcode = opcatJson as Opcode;

export const allOpcodes: Opcode[] = [opcat];
