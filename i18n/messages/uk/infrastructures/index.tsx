import type { Infrastructure } from "@/components/infrastructure/infrastructureProps";
import astriaJson from "@/i18n/messages/uk/infrastructures/astria.json" assert { type:
    "json" };

const astria: Infrastructure = astriaJson as Infrastructure;
import availJson from "@/i18n/messages/uk/infrastructures/avail.json" assert { type:
    "json" };
const avail: Infrastructure = availJson as Infrastructure;
import bvmJson from "@/i18n/messages/uk/infrastructures/bvm.json" assert { type:
    "json" };
const bvm: Infrastructure = bvmJson as Infrastructure;
import celestiaJson from "@/i18n/messages/uk/infrastructures/celestia.json" assert { type:
    "json" };
const celestia: Infrastructure = celestiaJson as Infrastructure;
import espressoJson from "@/i18n/messages/uk/infrastructures/espresso.json" assert { type:
    "json" };
const espresso: Infrastructure = espressoJson as Infrastructure;
import lorenzoJson from "@/i18n/messages/uk/infrastructures/lorenzo.json" assert { type:
    "json" };
const lorenzo: Infrastructure = lorenzoJson as Infrastructure;
import sovereignJson from "@/i18n/messages/uk/infrastructures/sovereign.json" assert { type:
    "json" };
const sovereign: Infrastructure = sovereignJson as Infrastructure;
import nubitJson from "@/i18n/messages/uk/infrastructures/nubit.json" assert { type:
    "json" };
const nubit: Infrastructure = nubitJson as Infrastructure;
import babylonJson from "@/i18n/messages/uk/infrastructures/babylon.json" assert { type:
    "json" };
const babylon: Infrastructure = babylonJson as Infrastructure;
import fedimintJson from "@/i18n/messages/uk/infrastructures/fedimint.json" assert { type:
    "json" };
const fedimint: Infrastructure = fedimintJson as Infrastructure;
import dlclinkJson from "@/i18n/messages/uk/infrastructures/dlclink.json" assert { type:
    "json" };
const dlclink: Infrastructure = dlclinkJson as Infrastructure;
import boolJson from "@/i18n/messages/uk/infrastructures/bool.json" assert { type:
    "json" };
const bool: Infrastructure = boolJson as Infrastructure;
import tbtcJson from "@/i18n/messages/uk/infrastructures/tbtc.json" assert { type:
    "json" };
const tbtc: Infrastructure = tbtcJson as Infrastructure;
import cashuJson from "@/i18n/messages/uk/infrastructures/cashu.json" assert { type:
    "json" };
const cashu: Infrastructure = cashuJson as Infrastructure;
import lombardJson from "@/i18n/messages/uk/infrastructures/lombard.json" assert { type:
    "json" };
const lombard: Infrastructure = lombardJson as Infrastructure;
import wbtcJson from "@/i18n/messages/uk/infrastructures/wbtc.json" assert { type:
    "json" };
const wbtc: Infrastructure = wbtcJson as Infrastructure;
import cbbtcJson from "@/i18n/messages/uk/infrastructures/cbbtc.json" assert { type:
    "json" };
const cbbtc: Infrastructure = cbbtcJson as Infrastructure;

export const allInfrastructures: Infrastructure[] = [
    cashu,
    fedimint,
    lombard,
    tbtc,
    wbtc,
    cbbtc,
    dlclink,
    bool,
    nubit,
    sovereign,
    lorenzo,
    espresso,
    celestia,
    bvm,
    avail,
    astria,
    babylon,
];

export const allInfrastructureSlugs: string[] = allInfrastructures.map(
    (infrastructure) => infrastructure.slug,
);
