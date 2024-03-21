import type { Bridge } from '@/components/bridge/bridgeProps';

//
//live bridges
import monetaJson from "../content/bridges/moneta.json" assert { type: 'json' };
const moneta: Bridge = monetaJson as Bridge;

export const allBridges: Bridge[] = [moneta];
