import { InfrastructureProject } from "../content/props";

import bvmProject from "../content/infrastructures/bvm";
import celestiaProject from "../content/infrastructures/celestia";
import espressoProject from "../content/infrastructures/espresso";
import lorenzoProject from "../content/infrastructures/lorenzo-stbtc";
import sovereignProject from "../content/infrastructures/sovereign";
import nubitProject from "../content/infrastructures/nubit";
import babylonbtcProject from "../content/infrastructures/babylonstaked-btc";
import fedimintProject from "../content/infrastructures/fedimint";
import ibtcnetworkProject from "../content/infrastructures/ibtcnetwork-ibtc";
import cashuProject from "../content/infrastructures/cashu";
import tbtcProject from "../content/infrastructures/threshold-tbtc";
import lombardProject from "../content/infrastructures/lombard-lbtc";
import wbtcProject from "../content/infrastructures/bitgo-wbtc";
import cbbtcProject from "../content/infrastructures/coinbase-cbbtc";
import kbtcProject from "../content/infrastructures/kraken-kbtc";
import solvProject from "../content/infrastructures/solv-solvbtc";
import xsolvbtcProject from "../content/infrastructures/solv-xsolvbtc";
import solvenaProject from "../content/infrastructures/solv-solvbtcena";
import bedrockProject from "../content/infrastructures/bedrock-unibtc";
import pumpProject from "../content/infrastructures/pump-pumpbtc";
import fireProject from "../content/infrastructures/firebitcoin-fbtc";
import bitcoinosProject from "../content/infrastructures/bitcoinos";
import binancebtcbProject from "../content/infrastructures/binance-btcb";
import unirouterProject from "../content/infrastructures/unirouter-ubtc";
import acornProject from "../content/infrastructures/acorn-abtc";
import babypieProject from "../content/infrastructures/babypie-mbtc";
import chakraProject from "../content/infrastructures/chakra-stbtc";
import kinzaProject from "../content/infrastructures/kinza-kbtc";
import pstakeProject from "../content/infrastructures/pstake-ybtc";
import alexxbtcProject from "../content/infrastructures/alex-xbtc";
import boolbbtcProject from "../content/infrastructures/bool-bbtc";
import simplesbtcProject from "../content/infrastructures/simple-sbtc";
import xlinkabtcProject from "../content/infrastructures/xlink-abtc";
import bevmwbtcProject from "../content/infrastructures/bevm-wbtc";
import bitlayerwbtcProject from "@/content/infrastructures/bitlayer-wbtc";
import corecorebtcProject from "@/content/infrastructures/core-corebtc";
import icpckbtcProject from "@/content/infrastructures/internetcomputer-ckbtc";
import layerbankbtcProject from "@/content/infrastructures/layerbank-btc";
import layerbankubtcProject from "@/content/infrastructures/layerbank-ubtc";
import librepbtcProject from "@/content/infrastructures/libre-pbtc";
import liquidlbtcProject from "@/content/infrastructures/liquid-lbtc";
import nomicnbtcProject from "@/content/infrastructures/nomic-nbtc";
import rootstockrbtcProject from "@/content/infrastructures/rootstock-rbtc";
import avalanchebtcbProject from "@/content/infrastructures/avalanche-btcb";
import obeliskobtcProject from "@/content/infrastructures/obelisk-obtc";
import cornbtcnProject from "@/content/infrastructures/corn-btcn";
import stackssbtcProject from "@/content/infrastructures/stacks-sbtc";
import tronbtcProject from "@/content/infrastructures/tron-btc";
import merlinmbtcProject from "@/content/infrastructures/merlin-mbtc";
import alloallobtcProject from "@/content/infrastructures/allo-allobtc";
import sidesbtcProject from "@/content/infrastructures/side-sbtc";
import hyperliquidbtc from "@/content/infrastructures/unit-ubtc";
import solvsolvbtccore from "@/content/infrastructures/solv-solvbtccore";
import bedrockbrbtc from "@/content/infrastructures/bedrock-brbtc";
import nexusnbtc from "@/content/infrastructures/nexus-nbtc";
import hemihemibtc from "@/content/infrastructures/hemi-hemibtc";
import axelaraxlbtc from "@/content/infrastructures/axelar-axlbtc";
import merlinwbtc from "@/content/infrastructures/merlin-wbtc";
import twentyonesharesbtc from "@/content/infrastructures/21shares-btc";
import badgerebtc from "@/content/infrastructures/badger-ebtc";
import mantambtc from "@/content/infrastructures/manta-mbtc";
import zueszbtc from "@/content/infrastructures/zeus-zbtc";
import lorenzoenzobtc from "@/content/infrastructures/lorenzo-enzobtc";
import OsmosisBTC from "@/content/infrastructures/osmosis-osmobtc";
import osmosis from "@/content/layers/osmosis";
import statechain from "@/content/infrastructures/statechain";
import fiammafiabtc from "@/content/infrastructures/fiamma-fiabtc";

const bvm: InfrastructureProject = bvmProject;
const celestia: InfrastructureProject = celestiaProject;
const espresso: InfrastructureProject = espressoProject;
const lorenzo: InfrastructureProject = lorenzoProject;
const sovereign: InfrastructureProject = sovereignProject;
const nubit: InfrastructureProject = nubitProject;
const babylonbtc: InfrastructureProject = babylonbtcProject;
const fedimint: InfrastructureProject = fedimintProject;
const ibtcnetwork: InfrastructureProject = ibtcnetworkProject;
const cashu: InfrastructureProject = cashuProject;
const tbtc: InfrastructureProject = tbtcProject;
const lombard: InfrastructureProject = lombardProject;
const wbtc: InfrastructureProject = wbtcProject;
const cbbtc: InfrastructureProject = cbbtcProject;
const kbtc: InfrastructureProject = kbtcProject;
const solv: InfrastructureProject = solvProject;
const xsolvbtc: InfrastructureProject = xsolvbtcProject;
const solvena: InfrastructureProject = solvenaProject;
const bedrock: InfrastructureProject = bedrockProject;
const pump: InfrastructureProject = pumpProject;
const fire: InfrastructureProject = fireProject;
const bitcoinos: InfrastructureProject = bitcoinosProject;
const binancebtcb: InfrastructureProject = binancebtcbProject;
const unirouter: InfrastructureProject = unirouterProject;
const acorn: InfrastructureProject = acornProject;
const babypie: InfrastructureProject = babypieProject;
const chakra: InfrastructureProject = chakraProject;
const kinza: InfrastructureProject = kinzaProject;
const pstake: InfrastructureProject = pstakeProject;
const alexxbtc: InfrastructureProject = alexxbtcProject;
const boolbbtc: InfrastructureProject = boolbbtcProject;
const simplesbtc: InfrastructureProject = simplesbtcProject;
const xlinkabtc: InfrastructureProject = xlinkabtcProject;
const bevmwbtc: InfrastructureProject = bevmwbtcProject;
const bitlayerwbtc: InfrastructureProject = bitlayerwbtcProject;
const corecorebtc: InfrastructureProject = corecorebtcProject;
const icpckbtc: InfrastructureProject = icpckbtcProject;
const layerbankbtc: InfrastructureProject = layerbankbtcProject;
const layerbankubtc: InfrastructureProject = layerbankubtcProject;
const librepbtc: InfrastructureProject = librepbtcProject;
const liquidlbtc: InfrastructureProject = liquidlbtcProject;
const nomicnbtc: InfrastructureProject = nomicnbtcProject;
const rootstockrbtc: InfrastructureProject = rootstockrbtcProject;
const avalanchebtcb: InfrastructureProject = avalanchebtcbProject;
const obeliskobtc: InfrastructureProject = obeliskobtcProject;
const cornbtcn: InfrastructureProject = cornbtcnProject;
const stackssbtc: InfrastructureProject = stackssbtcProject;
const tronbtc: InfrastructureProject = tronbtcProject;
const merlinmbtc: InfrastructureProject = merlinmbtcProject;
const alloallobtc: InfrastructureProject = alloallobtcProject;
const sidesbtc: InfrastructureProject = sidesbtcProject;
const statechainModel: InfrastructureProject = statechain;
const fiammafiabtcInfra: InfrastructureProject = fiammafiabtc;

// Infrastructure projects available for popups but not displayed in main tables
export const popupOnlyInfrastructures: InfrastructureProject[] = [
    statechainModel,
];

export const allInfrastructures: InfrastructureProject[] = [
    lombard,
    tbtc,
    wbtc,
    cbbtc,
    kbtc,
    ibtcnetwork,
    babylonbtc,
    // nubit,
    // sovereign,
    lorenzo,
    // espresso,
    // celestia,
    // bvm,
    // avail,
    // astria,
    solv,
    xsolvbtc,
    solvena,
    bedrock,
    pump,
    fire,
    binancebtcb,
    unirouter,
    acorn,
    babypie,
    kinza,
    pstake,
    alexxbtc,
    boolbbtc,
    simplesbtc,
    xlinkabtc,
    bevmwbtc,
    bitlayerwbtc,
    corecorebtc,
    icpckbtc,
    librepbtc,
    liquidlbtc,
    nomicnbtc,
    rootstockrbtc,
    avalanchebtcb,
    obeliskobtc,
    cornbtcn,
    stackssbtc,
    tronbtc,
    merlinmbtc,
    alloallobtc,
    sidesbtc,
    hyperliquidbtc,
    solvsolvbtccore,
    bedrockbrbtc,
    hemihemibtc,
    merlinwbtc,
    twentyonesharesbtc,
    badgerebtc,
    mantambtc,
    zueszbtc,
    lorenzoenzobtc,
    OsmosisBTC,
    fiammafiabtcInfra,
];

export const allInfrastructureSlugs: string[] = [...allInfrastructures, ...popupOnlyInfrastructures].map(
    (infrastructure) => infrastructure.slug,
);
