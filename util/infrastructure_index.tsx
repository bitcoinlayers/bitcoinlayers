import { InfrastructureProject } from "../content/props";

import astriaProject from "../content/infrastructures/astria";
import availProject from "../content/infrastructures/avail";
import bvmProject from "../content/infrastructures/bvm";
import celestiaProject from "../content/infrastructures/celestia";
import espressoProject from "../content/infrastructures/espresso";
import lorenzoProject from "../content/infrastructures/lorenzo-stbtc";
import sovereignProject from "../content/infrastructures/sovereign";
import nubitProject from "../content/infrastructures/nubit";
import babylonProject from "../content/infrastructures/babylon";
import fedimintProject from "../content/infrastructures/fedimint";
import ibtcnetworkProject from "../content/infrastructures/ibtcnetwork-ibtc";
import cashuProject from "../content/infrastructures/cashu";
import tbtcProject from "../content/infrastructures/threshold-tbtc";
import lombardProject from "../content/infrastructures/lombard-lbtc";
import wbtcProject from "../content/infrastructures/bitgo-wbtc";
import cbbtcProject from "../content/infrastructures/coinbase-cbbtc";
import kbtcProject from "../content/infrastructures/kraken-kbtc";
import solvProject from "../content/infrastructures/solv-solvbtc";
import solvbbnProject from "../content/infrastructures/solv-solvbtcbbn";
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
import icpckbtcProject from "@/content/infrastructures/icp-ckbtc";
import layerbankbtcProject from "@/content/infrastructures/layerbank-btc";
import layerbankubtcProject from "@/content/infrastructures/layerbank-ubtc";
import librepbtcProject from "@/content/infrastructures/libre-pbtc";
import liquidlbtcProject from "@/content/infrastructures/liquid-lbtc";
import nomicnbtcProject from "@/content/infrastructures/nomic-nbtc";
import rootstockrbtcProject from "@/content/infrastructures/rootstock-rbtc";
import avalanchebtcbProject from "@/content/infrastructures/avalanche-btcb";
import obeliskobtcProject from "@/content/infrastructures/obelisk-obtc";

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
const ibtcnetwork: InfrastructureProject = ibtcnetworkProject;
const cashu: InfrastructureProject = cashuProject;
const tbtc: InfrastructureProject = tbtcProject;
const lombard: InfrastructureProject = lombardProject;
const wbtc: InfrastructureProject = wbtcProject;
const cbbtc: InfrastructureProject = cbbtcProject;
const kbtc: InfrastructureProject = kbtcProject;
const solv: InfrastructureProject = solvProject;
const solvbbn: InfrastructureProject = solvbbnProject;
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

export const allInfrastructures: InfrastructureProject[] = [
    lombard,
    tbtc,
    wbtc,
    cbbtc,
    kbtc,
    ibtcnetwork,
    // nubit,
    // sovereign,
    lorenzo,
    // espresso,
    // celestia,
    // bvm,
    // avail,
    // astria,
    // babylon,
    solv,
    solvbbn,
    solvena,
    bedrock,
    pump,
    fire,
    bitcoinos,
    binancebtcb,
    unirouter,
    acorn,
    babypie,
    chakra,
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
    layerbankbtc,
    layerbankubtc,
    librepbtc,
    liquidlbtc,
    nomicnbtc,
    rootstockrbtc,
    avalanchebtcb,
    obeliskobtc,
];

export const allInfrastructureSlugs: string[] = allInfrastructures.map(
    (infrastructure) => infrastructure.slug,
);
