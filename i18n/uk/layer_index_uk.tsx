import type { Layer } from "@/components/layer/layerProps";

import coreJson from "@/messages/uk/layers/core.json";
import internetcomputerJson from "@/messages/uk/layers/internetcomputer.json";
import lightningJson from "@/messages/uk/layers/lightning.json";
import liquidJson from "@/messages/uk/layers/liquid.json";
import mercurylayerJson from "@/messages/uk/layers/mercurylayer.json";
import rootstockJson from "@/messages/uk/layers/rootstock.json";
import stacksJson from "@/messages/uk/layers/stacks.json";
import alpenJson from "@/messages/uk/layers/alpen.json";
import bisonJson from "@/messages/uk/layers/bison.json";
import bobJson from "@/messages/uk/layers/bob.json";
import botanixJson from "@/messages/uk/layers/botanix.json";
import bsquaredJson from "@/messages/uk/layers/bsquared.json";
import citreaJson from "@/messages/uk/layers/citrea.json";
import rgbJson from "@/messages/uk/layers/rgb.json";
import libreJson from "@/messages/uk/layers/libre.json";
import merlinJson from "@/messages/uk/layers/merlin.json";
import rolluxJson from "@/messages/uk/layers/rollux.json";
import zkcoinsJson from "@/messages/uk/layers/zkcoins.json";
import zklayerJson from "@/messages/uk/layers/zklayer.json";
import coordinateJson from "@/messages/uk/layers/coordinate.json";
import alysJson from "@/messages/uk/layers/alys.json";
import zuluJson from "@/messages/uk/layers/zulu.json";
import bitlayerJson from "@/messages/uk/layers/bitlayer.json";
import moleculeJson from "@/messages/uk/layers/molecule.json";
import sideJson from "@/messages/uk/layers/side.json";
import mezoJson from "@/messages/uk/layers/mezo.json";
import arkJson from "@/messages/uk/layers/ark.json";
import arkliquidJson from "@/messages/uk/layers/arkliquid.json";
import hedgehogJson from "@/messages/uk/layers/hedgehog.json";
import roochJson from "@/messages/uk/layers/rooch.json";
import bit2Json from "@/messages/uk/layers/bit2.json";
import sequentiaJson from "@/messages/uk/layers/sequentia.json";
import brollupJson from "@/messages/uk/layers/brollup.json";
import nomicJson from "@/messages/uk/layers/nomic.json";
import fractalJson from "@/messages/uk/layers/fractal.json";
import yonaJson from "@/messages/uk/layers/yona.json";
import nexioJson from "@/messages/uk/layers/nexio.json";
import highlayerJson from "@/messages/uk/layers/highlayer.json";
import qedJson from "@/messages/uk/layers/qed.json";
import bitfinityJson from "@/messages/uk/layers/bitfinity.json";
import bevmJson from "@/messages/uk/layers/bevm.json";
import starknetJson from "@/messages/uk/layers/starknet.json";
import bitcoinosJson from "@/messages/uk/layers/bitcoinos.json";
import satoshivmJson from "@/messages/uk/layers/satoshivm.json";
import bouncebitJson from "@/messages/uk/layers/bouncebit.json";

// @ts-ignore
const core: Layer = coreJson as Layer;
const internetcomputer: Layer = internetcomputerJson as Layer;
const lightning: Layer = lightningJson as Layer;
const liquid: Layer = liquidJson as Layer;
const mercurylayer: Layer = mercurylayerJson as Layer;
const rootstock: Layer = rootstockJson as Layer;
const stacks: Layer = stacksJson as Layer;
const alpen: Layer = alpenJson as Layer;
const bison: Layer = bisonJson as Layer;
// @ts-ignore
const bob: Layer = bobJson as Layer;
const botanix: Layer = botanixJson as Layer;
// @ts-ignore
const bsquared: Layer = bsquaredJson as Layer;
const citrea: Layer = citreaJson as Layer;
const rgb: Layer = rgbJson as Layer;
const libre: Layer = libreJson as Layer;
const merlin: Layer = merlinJson as Layer;
const rollux: Layer = rolluxJson as Layer;
const zkcoins: Layer = zkcoinsJson as Layer;
const zklayer: Layer = zklayerJson as Layer;
const coordinate: Layer = coordinateJson as Layer;
const alys: Layer = alysJson as Layer;
// @ts-ignore
const zulu: Layer = zuluJson as Layer;
// @ts-ignore
const bitlayer: Layer = bitlayerJson as Layer;
const molecule: Layer = moleculeJson as Layer;
const side: Layer = sideJson as Layer;
const mezo: Layer = mezoJson as Layer;
const ark: Layer = arkJson as Layer;
const arkliquid: Layer = arkliquidJson as Layer;
const hedgehog: Layer = hedgehogJson as Layer;
const rooch: Layer = roochJson as Layer;
const bit2: Layer = bit2Json as Layer;
const sequentia: Layer = sequentiaJson as Layer;
const brollup: Layer = brollupJson as Layer;
const nomic: Layer = nomicJson as Layer;
const fractal: Layer = fractalJson as Layer;
const yona: Layer = yonaJson as Layer;
const nexio: Layer = nexioJson as Layer;
const highlayer: Layer = highlayerJson as Layer;
const qed: Layer = qedJson as Layer;
const bitfinity: Layer = bitfinityJson as Layer;
const bevm: Layer = bevmJson as Layer;
const starknet: Layer = starknetJson as Layer;
const bitcoinos: Layer = bitcoinosJson as Layer;
const satoshivm: Layer = satoshivmJson as Layer;
const bouncebit: Layer = bouncebitJson as Layer;

export const allLayers: Layer[] = [
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
    ark,
    arkliquid,
    hedgehog,
    rooch,
    bit2,
    sequentia,
    brollup,
    nomic,
    fractal,
    yona,
    nexio,
    highlayer,
    qed,
    bitfinity,
    bevm,
    starknet,
    bitcoinos,
];

export const allLayerSlugs: string[] = allLayers.map((layer) => layer.slug);
