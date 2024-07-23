import type { Infrastructure } from "@/components/infrastructure/infrastructureProps";
import astriaJson from "../content/infrastructures/astria.json" assert { type:
    "json" };

const astria: Infrastructure = astriaJson as Infrastructure;
import availJson from "../content/infrastructures/avail.json" assert { type:
    "json" };
const avail: Infrastructure = availJson as Infrastructure;
import bvmJson from "../content/infrastructures/bvm.json" assert { type:
    "json" };
const bvm: Infrastructure = bvmJson as Infrastructure;
import celestiaJson from "../content/infrastructures/celestia.json" assert { type:
    "json" };
const celestia: Infrastructure = celestiaJson as Infrastructure;
import espressoJson from "../content/infrastructures/espresso.json" assert { type:
    "json" };
const espresso: Infrastructure = espressoJson as Infrastructure;
import lorenzoJson from "../content/infrastructures/lorenzo.json" assert { type:
    "json" };
const lorenzo: Infrastructure = lorenzoJson as Infrastructure;
import sovereignJson from "../content/infrastructures/sovereign.json" assert { type:
    "json" };
const sovereign: Infrastructure = sovereignJson as Infrastructure;
import rollkitJson from "../content/infrastructures/rollkit.json" assert { type:
    "json" };
const rollkit: Infrastructure = rollkitJson as Infrastructure;
import nubitJson from "../content/infrastructures/nubit.json" assert { type:
    "json" };
const nubit: Infrastructure = nubitJson as Infrastructure;
import babylonJson from "../content/infrastructures/babylon.json" assert { type:
    "json" };
const babylon: Infrastructure = babylonJson as Infrastructure;
import fedimintJson from "../content/infrastructures/fedimint.json" assert { type:
    "json" };
const fedimint: Infrastructure = fedimintJson as Infrastructure;
import mirrorJson from "../content/infrastructures/mirror.json" assert { type:
    "json" };
const mirror: Infrastructure = mirrorJson as Infrastructure;

export const allInfrastructures: Infrastructure[] = [
    astria,
    avail,
    bvm,
    celestia,
    espresso,
    lorenzo,
    sovereign,
    rollkit,
    nubit,
    babylon,
    fedimint,
    mirror,
];
export const allInfrastructureSlugs: string[] = allInfrastructures.map(
    (infrastructure) => infrastructure.slug,
);
