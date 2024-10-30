import { LayerProject } from "../content/props";

import coreProject from "../content/layers/core";
import internetcomputerProject from "../content/layers/internetcomputer";
import lightningProject from "../content/layers/lightning";
import liquidProject from "../content/layers/liquid";
import mercurylayerProject from "../content/layers/mercurylayer";
import rootstockProject from "../content/layers/rootstock";
import stacksProject from "../content/layers/stacks";
import strataProject from "../content/layers/strata";
import bisonProject from "../content/layers/bison";
import bobProject from "../content/layers/bob";
import botanixProject from "../content/layers/botanix";
import bsquaredProject from "../content/layers/bsquared";
import citreaProject from "../content/layers/citrea";
import rgbProject from "../content/layers/rgb";
import libreProject from "../content/layers/libre";
import merlinProject from "../content/layers/merlin";
import rolluxProject from "../content/layers/rollux";
import zkcoinsProject from "../content/layers/zkcoins";
import zklayerProject from "../content/layers/zklayer";
import coordinateProject from "../content/layers/coordinate";
import alysProject from "../content/layers/alys";
import zuluProject from "../content/layers/zulu";
import bitlayerProject from "../content/layers/bitlayer";
import moleculeProject from "../content/layers/molecule";
import sideProject from "../content/layers/side";
import mezoProject from "../content/layers/mezo";
import arkonliquidProject from "../content/layers/arkonliquid";
import hedgehogProject from "../content/layers/hedgehog";
import roochProject from "../content/layers/rooch";
import bit2Project from "../content/layers/bit2";
import sequentiaProject from "../content/layers/sequentia";
import brollupProject from "../content/layers/brollup";
import nomicProject from "../content/layers/nomic";
import fractalProject from "../content/layers/fractal";
import yonaProject from "../content/layers/yona";
import nexioProject from "../content/layers/nexio";
import highlayerProject from "../content/layers/highlayer";
import qedProject from "../content/layers/qed";
import bitfinityProject from "../content/layers/bitfinity";
import bevmProject from "../content/layers/bevm";
import starknetProject from "../content/layers/starknet";
import satoshivmProject from "../content/layers/satoshivm";
import bouncebitProject from "../content/layers/bouncebit";
import hemiProject from "../content/layers/hemi";
import goatProject from "../content/layers/goat";
import encifherProject from "../content/layers/encifher";
import sparkProject from "../content/layers/spark";
import barkProject from "../content/layers/bark";
import clarkProject from "../content/layers/clark";

const core: LayerProject = coreProject;
const internetcomputer: LayerProject = internetcomputerProject;
const lightning: LayerProject = lightningProject;
const liquid: LayerProject = liquidProject;
const mercurylayer: LayerProject = mercurylayerProject;
const rootstock: LayerProject = rootstockProject;
const stacks: LayerProject = stacksProject;
const strata: LayerProject = strataProject;
const bison: LayerProject = bisonProject;
const bob: LayerProject = bobProject;
const botanix: LayerProject = botanixProject;
const bsquared: LayerProject = bsquaredProject;
const citrea: LayerProject = citreaProject;
const rgb: LayerProject = rgbProject;
const libre: LayerProject = libreProject;
const merlin: LayerProject = merlinProject;
const rollux: LayerProject = rolluxProject;
const zkcoins: LayerProject = zkcoinsProject;
const zklayer: LayerProject = zklayerProject;
const coordinate: LayerProject = coordinateProject;
const alys: LayerProject = alysProject;
const zulu: LayerProject = zuluProject;
const bitlayer: LayerProject = bitlayerProject;
const molecule: LayerProject = moleculeProject;
const side: LayerProject = sideProject;
const mezo: LayerProject = mezoProject;
const arkonliquid: LayerProject = arkonliquidProject;
const hedgehog: LayerProject = hedgehogProject;
const rooch: LayerProject = roochProject;
const bit2: LayerProject = bit2Project;
const sequentia: LayerProject = sequentiaProject;
const brollup: LayerProject = brollupProject;
const nomic: LayerProject = nomicProject;
const fractal: LayerProject = fractalProject;
const yona: LayerProject = yonaProject;
const nexio: LayerProject = nexioProject;
const highlayer: LayerProject = highlayerProject;
const qed: LayerProject = qedProject;
const bitfinity: LayerProject = bitfinityProject;
const bevm: LayerProject = bevmProject;
const starknet: LayerProject = starknetProject;
const satoshivm: LayerProject = satoshivmProject;
const bouncebit: LayerProject = bouncebitProject;
const hemi: LayerProject = hemiProject;
const goat: LayerProject = goatProject;
const encifher: LayerProject = encifherProject;
const spark: LayerProject = sparkProject;
const bark: LayerProject = barkProject;
const clark: LayerProject = clarkProject;

export const allLayers: LayerProject[] = [
    core,
    internetcomputer,
    lightning,
    liquid,
    mercurylayer,
    rootstock,
    stacks,
    strata,
    bison,
    bob,
    botanix,
    bsquared,
    citrea,
    rgb,
    libre,
    merlin,
    rollux,
    zklayer,
    coordinate,
    alys,
    zulu,
    bitlayer,
    molecule,
    side,
    mezo,
    rooch,
    sequentia,
    brollup,
    nomic,
    fractal,
    yona,
    nexio,
    qed,
    bitfinity,
    bevm,
    starknet,
    hemi,
    goat,
    encifher,
    spark,
    bark,
    clark,
];

export const allLayerSlugs: string[] = allLayers.map((layer) => layer.slug);
