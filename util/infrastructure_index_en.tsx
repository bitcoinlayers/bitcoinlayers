import type { Infrastructure } from "@/components/infrastructure/infrastructureProps";
import astriaJson from "../messages/en/infrastructures/astria.json" assert { type:
    "json" };

const astria: Infrastructure = astriaJson as Infrastructure;
import availJson from "../messages/en/infrastructures/avail.json" assert { type:
    "json" };
const avail: Infrastructure = availJson as Infrastructure;
import bvmJson from "../messages/en/infrastructures/bvm.json" assert { type:
    "json" };
const bvm: Infrastructure = bvmJson as Infrastructure;
import celestiaJson from "../messages/en/infrastructures/celestia.json" assert { type:
    "json" };
const celestia: Infrastructure = celestiaJson as Infrastructure;
import espressoJson from "../messages/en/infrastructures/espresso.json" assert { type:
    "json" };
const espresso: Infrastructure = espressoJson as Infrastructure;
import lorenzoJson from "../messages/en/infrastructures/lorenzo.json" assert { type:
    "json" };
const lorenzo: Infrastructure = lorenzoJson as Infrastructure;
import sovereignJson from "../messages/en/infrastructures/sovereign.json" assert { type:
    "json" };
const sovereign: Infrastructure = sovereignJson as Infrastructure;
import nubitJson from "../messages/en/infrastructures/nubit.json" assert { type:
    "json" };
const nubit: Infrastructure = nubitJson as Infrastructure;
import babylonJson from "../messages/en/infrastructures/babylon.json" assert { type:
    "json" };
const babylon: Infrastructure = babylonJson as Infrastructure;
import fedimintJson from "../messages/en/infrastructures/fedimint.json" assert { type:
    "json" };
const fedimint: Infrastructure = fedimintJson as Infrastructure;
import dlclinkJson from "../messages/en/infrastructures/dlclink.json" assert { type:
    "json" };
const dlclink: Infrastructure = dlclinkJson as Infrastructure;
import boolJson from "../messages/en/infrastructures/bool.json" assert { type:
    "json" };
const bool: Infrastructure = boolJson as Infrastructure;
import tbtcJson from "../messages/en/infrastructures/tbtc.json" assert { type:
    "json" };
const tbtc: Infrastructure = tbtcJson as Infrastructure;
import cashuJson from "../messages/en/infrastructures/cashu.json" assert { type:
    "json" };
const cashu: Infrastructure = cashuJson as Infrastructure;

export const allInfrastructures: Infrastructure[] = [
    astria,
    avail,
    celestia,
    espresso,
    lorenzo,
    sovereign,
    nubit,
    babylon,
    fedimint,
    dlclink,
    bool,
    tbtc,
    cashu,
];
export const allInfrastructureSlugs: string[] = allInfrastructures.map(
    (infrastructure) => infrastructure.slug,
);
