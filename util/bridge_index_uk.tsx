import type { Bridge } from "@/components/bridge/bridgeProps";
import monetaJson from "../messages/uk/bridges/moneta.json" assert { type:
    "json" };

const moneta: Bridge = monetaJson as Bridge;

export const allBridges: Bridge[] = [moneta];
export const allBridgeSlugs: string[] = allBridges.map((bridge) => bridge.slug);
