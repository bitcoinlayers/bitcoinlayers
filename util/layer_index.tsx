import type { Layer } from "@/components/layer/layerProps";

import coreJson from "../content/layers/core.json";
import internetcomputerJson from "../content/layers/internetcomputer.json";
import lightningJson from "../content/layers/lightning.json";
import liquidJson from "../content/layers/liquid.json";
import mercurylayerJson from "../content/layers/mercurylayer.json";
import rootstockJson from "../content/layers/rootstock.json";
import stacksJson from "../content/layers/stacks.json";
import alpenJson from "../content/layers/alpen.json";
import bisonJson from "../content/layers/bison.json";
import bobJson from "../content/layers/bob.json";
import botanixJson from "../content/layers/botanix.json";
import bsquaredJson from "../content/layers/bsquared.json";
import citreaJson from "../content/layers/citrea.json";
import rgbJson from "../content/layers/rgb.json";
import heliosphereJson from "../content/layers/heliosphere.json";
import libreJson from "../content/layers/libre.json";
import merlinJson from "../content/layers/merlin.json";
import rolluxJson from "../content/layers/rollux.json";
import zkcoinsJson from "../content/layers/zkcoins.json";
import zklayerJson from "../content/layers/zklayer.json";
import coordinateJson from "../content/layers/coordinate.json";
import alysJson from "../content/layers/alys.json";
import zkbitcoinJson from "../content/layers/zkbitcoin.json";
import zuluJson from "../content/layers/zulu.json";
import bitlayerJson from "../content/layers/bitlayer.json";
import moleculeJson from "../content/layers/molecule.json";
import sideJson from "../content/layers/side.json";
import mezoJson from "../content/layers/mezo.json";
import arkJson from "../content/layers/ark.json";
import hedgehogJson from "../content/layers/hedgehog.json";
import roochJson from "../content/layers/rooch.json";
import bit2Json from "../content/layers/bit2.json";
import sequentiaJson from "../content/layers/sequentia.json";
import brollupJson from "../content/layers/brollup.json";
import nomicJson from "../content/layers/nomic.json";

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
const heliosphere: Layer = heliosphereJson as Layer;
const libre: Layer = libreJson as Layer;
const merlin: Layer = merlinJson as Layer;
const rollux: Layer = rolluxJson as Layer;
const zkcoins: Layer = zkcoinsJson as Layer;
const zklayer: Layer = zklayerJson as Layer;
const coordinate: Layer = coordinateJson as Layer;
const alys: Layer = alysJson as Layer;
const zkbitcoin: Layer = zkbitcoinJson as Layer;
// @ts-ignore
const zulu: Layer = zuluJson as Layer;
// @ts-ignore
const bitlayer: Layer = bitlayerJson as Layer;
const molecule: Layer = moleculeJson as Layer;
const side: Layer = sideJson as Layer;
const mezo: Layer = mezoJson as Layer;
const ark: Layer = arkJson as Layer;
const hedgehog: Layer = hedgehogJson as Layer;
const rooch: Layer = roochJson as Layer;
const bit2: Layer = bit2Json as Layer;
const sequentia: Layer = sequentiaJson as Layer;
const brollup: Layer = brollupJson as Layer;
const nomic: Layer = nomicJson as Layer;

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
    heliosphere,
    libre,
    merlin,
    rollux,
    zkcoins,
    zklayer,
    coordinate,
    alys,
    zkbitcoin,
    zulu,
    bitlayer,
    molecule,
    side,
    mezo,
    ark,
    hedgehog,
    rooch,
    bit2,
    sequentia,
    brollup,
    nomic,
];

export const allLayerSlugs: string[] = allLayers.map((layer) => layer.slug);
