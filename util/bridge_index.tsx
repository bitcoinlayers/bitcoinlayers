import type { Infrastructure } from "@/components/infrastructure/infrastructureProps";

import tbtcJson from "../content/infrastructures/tbtc.json" assert { type:
    "json" };
const tbtc: Infrastructure = tbtcJson as Infrastructure;

export const allBridges: Infrastructure[] = [tbtc];

export const allBridgesSlugs: string[] = allBridges.map(
    (infrastructure) => infrastructure.slug,
);
