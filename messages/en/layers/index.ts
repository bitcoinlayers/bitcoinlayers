import type { Layer } from "@/components/layer/layerProps";

import coreJson from "@/messages/en/layers/core.json";
import internetcomputerJson from "@/messages/en/layers/internetcomputer.json";
import lightningJson from "@/messages/en/layers/lightning.json";
import liquidJson from "@/messages/en/layers/liquid.json";
import mercurylayerJson from "@/messages/en/layers/mercurylayer.json";
import rootstockJson from "@/messages/en/layers/rootstock.json";
import stacksJson from "@/messages/en/layers/stacks.json";
import alpenJson from "@/messages/en/layers/alpen.json";
import bisonJson from "@/messages/en/layers/bison.json";
import bobJson from "@/messages/en/layers/bob.json";
import botanixJson from "@/messages/en/layers/botanix.json";
import bsquaredJson from "@/messages/en/layers/bsquared.json";
import citreaJson from "@/messages/en/layers/citrea.json";
import rgbJson from "@/messages/en/layers/rgb.json";
import libreJson from "@/messages/en/layers/libre.json";
import merlinJson from "@/messages/en/layers/merlin.json";
import rolluxJson from "@/messages/en/layers/rollux.json";
import zkcoinsJson from "@/messages/en/layers/zkcoins.json";
import zklayerJson from "@/messages/en/layers/zklayer.json";
import coordinateJson from "@/messages/en/layers/coordinate.json";
import alysJson from "@/messages/en/layers/alys.json";
import zuluJson from "@/messages/en/layers/zulu.json";
import bitlayerJson from "@/messages/en/layers/bitlayer.json";
import moleculeJson from "@/messages/en/layers/molecule.json";
import sideJson from "@/messages/en/layers/side.json";
import mezoJson from "@/messages/en/layers/mezo.json";
import arkJson from "@/messages/en/layers/ark.json";
import arkliquidJson from "@/messages/en/layers/arkliquid.json";
import hedgehogJson from "@/messages/en/layers/hedgehog.json";
import roochJson from "@/messages/en/layers/rooch.json";
import bit2Json from "@/messages/en/layers/bit2.json";
import sequentiaJson from "@/messages/en/layers/sequentia.json";
import brollupJson from "@/messages/en/layers/brollup.json";
import nomicJson from "@/messages/en/layers/nomic.json";
import fractalJson from "@/messages/en/layers/fractal.json";
import yonaJson from "@/messages/en/layers/yona.json";
import nexioJson from "@/messages/en/layers/nexio.json";
import highlayerJson from "@/messages/en/layers/highlayer.json";
import qedJson from "@/messages/en/layers/qed.json";
import bitfinityJson from "@/messages/en/layers/bitfinity.json";
import bevmJson from "@/messages/en/layers/bevm.json";
import starknetJson from "@/messages/en/layers/starknet.json";
import bitcoinosJson from "@/messages/en/layers/bitcoinos.json";
import satoshivmJson from "@/messages/en/layers/satoshivm.json";
import bouncebitJson from "@/messages/en/layers/bouncebit.json";

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
