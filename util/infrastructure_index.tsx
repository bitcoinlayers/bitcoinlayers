import { InfrastructureProject } from "../content/props";

import astriaProject from "../content/infrastructures/astria";
import availProject from "../content/infrastructures/avail";
import bvmProject from "../content/infrastructures/bvm";
import celestiaProject from "../content/infrastructures/celestia";
import espressoProject from "../content/infrastructures/espresso";
import lorenzoProject from "../content/infrastructures/lorenzo";
import sovereignProject from "../content/infrastructures/sovereign";
import nubitProject from "../content/infrastructures/nubit";
import babylonProject from "../content/infrastructures/babylon";
import fedimintProject from "../content/infrastructures/fedimint";
import dlclinkProject from "../content/infrastructures/dlclink";
import boolProject from "../content/infrastructures/bool";
import cashuProject from "../content/infrastructures/cashu";
import tbtcProject from "../content/infrastructures/tbtc";
import lombardProject from "../content/infrastructures/lombard";
import wbtcProject from "../content/infrastructures/wbtc";
import cbbtcProject from "../content/infrastructures/cbbtc";
import kbtcProject from "../content/infrastructures/kbtc";
import solvProject from "../content/infrastructures/solv";
import solvlstProject from "../content/infrastructures/solvlst";
import bedrockProject from "../content/infrastructures/bedrock";
import pumpProject from "../content/infrastructures/pump";
import fireProject from "../content/infrastructures/fire";
import bitcoinosProject from "../content/infrastructures/bitcoinos";
import binancebtcbProject from "../content/infrastructures/binancebtcb";
import unirouterProject from "../content/infrastructures/unirouter";

const astria: InfrastructureProject = astriaProject;
const avail: InfrastructureProject = availProject;
const bvm: InfrastructureProject = bvmProject;
const celestia: InfrastructureProject = celestiaProject;
const espresso: InfrastructureProject = espressoProject;
const lorenzo: InfrastructureProject = lorenzoProject;
const sovereign: InfrastructureProject = sovereignProject;
const nubit: InfrastructureProject = nubitProject;
const babylon: InfrastructureProject = babylonProject;
const fedimint: InfrastructureProject = fedimintProject;
const dlclink: InfrastructureProject = dlclinkProject;
const bool: InfrastructureProject = boolProject;
const cashu: InfrastructureProject = cashuProject;
const tbtc: InfrastructureProject = tbtcProject;
const lombard: InfrastructureProject = lombardProject;
const wbtc: InfrastructureProject = wbtcProject;
const cbbtc: InfrastructureProject = cbbtcProject;
const kbtc: InfrastructureProject = kbtcProject;
const solv: InfrastructureProject = solvProject;
const solvlst: InfrastructureProject = solvlstProject;
const bedrock: InfrastructureProject = bedrockProject;
const pump: InfrastructureProject = pumpProject;
const fire: InfrastructureProject = fireProject;
const bitcoinos: InfrastructureProject = bitcoinosProject;
const binancebtcb: InfrastructureProject = binancebtcbProject;
const unirouter: InfrastructureProject = unirouterProject;

export const allInfrastructures: InfrastructureProject[] = [
    lombard,
    tbtc,
    wbtc,
    cbbtc,
    kbtc,
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
    solv,
    solvlst,
    bedrock,
    pump,
    fire,
    bitcoinos,
    binancebtcb,
    unirouter,
];

export const allInfrastructureSlugs: string[] = allInfrastructures.map(
    (infrastructure) => infrastructure.slug,
);
