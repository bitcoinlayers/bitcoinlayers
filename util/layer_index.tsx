import { LayerProject } from "../content/props";

import coreProject from "../content/layers/core";
import internetcomputerProject from "../content/layers/internetcomputer";
import lightningProject from "../content/layers/lightning";
import liquidProject from "../content/layers/liquid";
import mercurylayerProject from "../content/layers/mercurylayer";
import rootstockProject from "../content/layers/rootstock";
import stacksProject from "../content/layers/stacks";
import babylonProject from "../content/layers/babylon";
import bobProject from "../content/layers/bob";
import bsquaredProject from "../content/layers/bsquared";
import merlinProject from "../content/layers/merlin";
import rolluxProject from "../content/layers/rollux";
import bitlayerProject from "../content/layers/bitlayer";
import sideProject from "../content/layers/side";
import mezoProject from "../content/layers/mezo";
import nomicProject from "../content/layers/nomic";
import fractalProject from "../content/layers/fractal";
import bitfinityProject from "../content/layers/bitfinity";
import bevmProject from "../content/layers/bevm";
import starknetProject from "../content/layers/starknet";
import bouncebitProject from "../content/layers/bouncebit";
import hemiProject from "../content/layers/hemi";
import sparkProject from "../content/layers/spark";
import arbitrumProject from "../content/layers/arbitrum";
import avalancheProject from "../content/layers/avalanche";
import baseProject from "../content/layers/base";
import bnbsmartchainProject from "../content/layers/bnbsmartchain";
import optimismProject from "../content/layers/optimism";
import ethereumProject from "../content/layers/ethereum";
import polygonProject from "../content/layers/polygonpos";
import solanaProject from "../content/layers/solana";
import cornProject from "../content/layers/corn";
import zetaProject from "../content/layers/zeta";
import fantomProject from "../content/layers/fantom";
import gnosisProject from "../content/layers/gnosis";
import polygonzkevmProject from "../content/layers/polygonzkevm";
import scrollProject from "../content/layers/scroll";
import taikoProject from "../content/layers/taiko";
import tronProject from "../content/layers/tron";
import zksyncProject from "../content/layers/zksync";
import osmosisProject from "../content/layers/osmosis";
import berachainProject from "../content/layers/berachain";
import sonicProject from "../content/layers/sonic";
import hyperliquidProject from "@/content/layers/hyperliquid";

const core: LayerProject = coreProject;
const internetcomputer: LayerProject = internetcomputerProject;
const lightning: LayerProject = lightningProject;
const liquid: LayerProject = liquidProject;
const mercurylayer: LayerProject = mercurylayerProject;
const rootstock: LayerProject = rootstockProject;
const stacks: LayerProject = stacksProject;
const babylon: LayerProject = babylonProject;
const bob: LayerProject = bobProject;
const bsquared: LayerProject = bsquaredProject;
const merlin: LayerProject = merlinProject;
const rollux: LayerProject = rolluxProject;
const bitlayer: LayerProject = bitlayerProject;
const side: LayerProject = sideProject;
const mezo: LayerProject = mezoProject;
const nomic: LayerProject = nomicProject;
const fractal: LayerProject = fractalProject;
const bitfinity: LayerProject = bitfinityProject;
const bevm: LayerProject = bevmProject;
const starknet: LayerProject = starknetProject;
const bouncebit: LayerProject = bouncebitProject;
const hemi: LayerProject = hemiProject;
const spark: LayerProject = sparkProject;
const arbitrum: LayerProject = arbitrumProject;
const avalanche: LayerProject = avalancheProject;
const base: LayerProject = baseProject;
const bnbsmartchain: LayerProject = bnbsmartchainProject;
const optimism: LayerProject = optimismProject;
const ethereum: LayerProject = ethereumProject;
const polygon: LayerProject = polygonProject;
const solana: LayerProject = solanaProject;
const corn: LayerProject = cornProject;
const zeta: LayerProject = zetaProject;
const fantom: LayerProject = fantomProject;
const gnosis: LayerProject = gnosisProject;
const polygonzkevm: LayerProject = polygonzkevmProject;
const scroll: LayerProject = scrollProject;
const taiko: LayerProject = taikoProject;
const tron: LayerProject = tronProject;
const zksync: LayerProject = zksyncProject;
const osmosis: LayerProject = osmosisProject;
const berachain: LayerProject = berachainProject;
const sonic: LayerProject = sonicProject;
const hyperliquid: LayerProject = hyperliquidProject;

export const allLayers: LayerProject[] = [
    core,
    internetcomputer,
    lightning,
    liquid,
    mercurylayer,
    rootstock,
    stacks,
    babylon,
    bob,
    bsquared,
    merlin,
    rollux,
    bitlayer,
    side,
    mezo,
    nomic,
    fractal,
    bitfinity,
    bevm,
    starknet,
    hemi,
    spark,
    arbitrum,
    avalanche,
    base,
    bnbsmartchain,
    optimism,
    ethereum,
    polygon,
    solana,
    corn,
    zeta,
    fantom,
    gnosis,
    polygonzkevm,
    scroll,
    taiko,
    tron,
    zksync,
    osmosis,
    berachain,
    sonic,
    hyperliquid,
];

export const allLayerSlugs: string[] = allLayers.map((layer) => layer.slug);
