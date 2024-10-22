import { Project } from "../content/props";

import coreProject from "../content/layers/core";
import internetcomputerProject from "../content/layers/internetcomputer";
import lightningProject from "../content/layers/lightning";
import liquidProject from "../content/layers/liquid";
import mercurylayerProject from "../content/layers/mercurylayer";
import rootstockProject from "../content/layers/rootstock";
import stacksProject from "../content/layers/stacks";
import alpenProject from "../content/layers/alpen";
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
import bitcoinosProject from "../content/layers/bitcoinos";
import satoshivmProject from "../content/layers/satoshivm";
import bouncebitProject from "../content/layers/bouncebit";

const core: Project = coreProject;
const internetcomputer: Project = internetcomputerProject;
const lightning: Project = lightningProject;
const liquid: Project = liquidProject;
const mercurylayer: Project = mercurylayerProject;
const rootstock: Project = rootstockProject;
const stacks: Project = stacksProject;
const alpen: Project = alpenProject;
const bison: Project = bisonProject;
const bob: Project = bobProject;
const botanix: Project = botanixProject;
const bsquared: Project = bsquaredProject;
const citrea: Project = citreaProject;
const rgb: Project = rgbProject;
const libre: Project = libreProject;
const merlin: Project = merlinProject;
const rollux: Project = rolluxProject;
const zkcoins: Project = zkcoinsProject;
const zklayer: Project = zklayerProject;
const coordinate: Project = coordinateProject;
const alys: Project = alysProject;
const zulu: Project = zuluProject;
const bitlayer: Project = bitlayerProject;
const molecule: Project = moleculeProject;
const side: Project = sideProject;
const mezo: Project = mezoProject;
const arkonliquid: Project = arkonliquidProject;
const hedgehog: Project = hedgehogProject;
const rooch: Project = roochProject;
const bit2: Project = bit2Project;
const sequentia: Project = sequentiaProject;
const brollup: Project = brollupProject;
const nomic: Project = nomicProject;
const fractal: Project = fractalProject;
const yona: Project = yonaProject;
const nexio: Project = nexioProject;
const highlayer: Project = highlayerProject;
const qed: Project = qedProject;
const bitfinity: Project = bitfinityProject;
const bevm: Project = bevmProject;
const starknet: Project = starknetProject;
const bitcoinos: Project = bitcoinosProject;
const satoshivm: Project = satoshivmProject;
const bouncebit: Project = bouncebitProject;

export const allLayers: Project[] = [
    core,
    internetcomputer,
    lightning,
    liquid,
    mercurylayer,
    rootstock,
    stacks,
    alpen,
    bison,
    bob,
    botanix,
    bsquared,
    citrea,
    rgb,
    libre,
    merlin,
    rollux,
    zkcoins,
    zklayer,
    coordinate,
    alys,
    zulu,
    bitlayer,
    molecule,
    side,
    mezo,
    arkonliquid,
    hedgehog,
    rooch,
    bit2,
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
    bitcoinos,
];

export const allLayerSlugs: string[] = allLayers.map((layer) => layer.slug);
