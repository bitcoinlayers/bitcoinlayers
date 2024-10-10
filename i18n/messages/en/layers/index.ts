import type { Layer } from "@/components/layer/layerProps";

import coreJson from "@/i18n/messages/en/layers/core.json";
import internetcomputerJson from "@/i18n/messages/en/layers/internetcomputer.json";
import lightningJson from "@/i18n/messages/en/layers/lightning.json";
import liquidJson from "@/i18n/messages/en/layers/liquid.json";
import mercurylayerJson from "@/i18n/messages/en/layers/mercurylayer.json";
import rootstockJson from "@/i18n/messages/en/layers/rootstock.json";
import stacksJson from "@/i18n/messages/en/layers/stacks.json";
import alpenJson from "@/i18n/messages/en/layers/alpen.json";
import bisonJson from "@/i18n/messages/en/layers/bison.json";
import bobJson from "@/i18n/messages/en/layers/bob.json";
import botanixJson from "@/i18n/messages/en/layers/botanix.json";
import bsquaredJson from "@/i18n/messages/en/layers/bsquared.json";
import citreaJson from "@/i18n/messages/en/layers/citrea.json";
import rgbJson from "@/i18n/messages/en/layers/rgb.json";
import libreJson from "@/i18n/messages/en/layers/libre.json";
import merlinJson from "@/i18n/messages/en/layers/merlin.json";
import rolluxJson from "@/i18n/messages/en/layers/rollux.json";
import zkcoinsJson from "@/i18n/messages/en/layers/zkcoins.json";
import zklayerJson from "@/i18n/messages/en/layers/zklayer.json";
import coordinateJson from "@/i18n/messages/en/layers/coordinate.json";
import alysJson from "@/i18n/messages/en/layers/alys.json";
import zuluJson from "@/i18n/messages/en/layers/zulu.json";
import bitlayerJson from "@/i18n/messages/en/layers/bitlayer.json";
import moleculeJson from "@/i18n/messages/en/layers/molecule.json";
import sideJson from "@/i18n/messages/en/layers/side.json";
import mezoJson from "@/i18n/messages/en/layers/mezo.json";
import arkJson from "@/i18n/messages/en/layers/ark.json";
import arkliquidJson from "@/i18n/messages/en/layers/arkliquid.json";
import hedgehogJson from "@/i18n/messages/en/layers/hedgehog.json";
import roochJson from "@/i18n/messages/en/layers/rooch.json";
import bit2Json from "@/i18n/messages/en/layers/bit2.json";
import sequentiaJson from "@/i18n/messages/en/layers/sequentia.json";
import brollupJson from "@/i18n/messages/en/layers/brollup.json";
import nomicJson from "@/i18n/messages/en/layers/nomic.json";
import fractalJson from "@/i18n/messages/en/layers/fractal.json";
import yonaJson from "@/i18n/messages/en/layers/yona.json";
import nexioJson from "@/i18n/messages/en/layers/nexio.json";
import highlayerJson from "@/i18n/messages/en/layers/highlayer.json";
import qedJson from "@/i18n/messages/en/layers/qed.json";
import bitfinityJson from "@/i18n/messages/en/layers/bitfinity.json";
import bevmJson from "@/i18n/messages/en/layers/bevm.json";
import starknetJson from "@/i18n/messages/en/layers/starknet.json";
import bitcoinosJson from "@/i18n/messages/en/layers/bitcoinos.json";
import satoshivmJson from "@/i18n/messages/en/layers/satoshivm.json";
import bouncebitJson from "@/i18n/messages/en/layers/bouncebit.json";

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
