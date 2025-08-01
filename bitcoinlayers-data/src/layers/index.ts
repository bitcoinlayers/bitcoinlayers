// Export all layer types
export * from '../types';

// Import all layer data
import ailayer from '../layers/ailayer';
import algorand from '../layers/algorand';
import arbitrum from '../layers/arbitrum';
import aurora from '../layers/aurora';
import avalanche from '../layers/avalanche';
import babylongenesis from '../layers/babylongenesis';
import base from '../layers/base';
import berachain from '../layers/berachain';
import bevm from '../layers/bevm';
import bitfinity from '../layers/bitfinity';
import bitlayer from '../layers/bitlayer';
import bnbsmartchain from '../layers/bnbsmartchain';
import bob from '../layers/bob';
import botanix from '../layers/botanix';
import bouncebit from '../layers/bouncebit';
import bsquared from '../layers/bsquared';
import core from '../layers/core';
import corn from '../layers/corn';
import ethereum from '../layers/ethereum';
import fantom from '../layers/fantom';
import fractal from '../layers/fractal';
import fuel from '../layers/fuel';
import gnosis from '../layers/gnosis';
import goat from '../layers/goat';
import hemi from '../layers/hemi';
import hyperliquid from '../layers/hyperliquid';
import ink from '../layers/ink';
import internetcomputer from '../layers/internetcomputer';
import iotex from '../layers/iotex';
import kava from '../layers/kava';
import lightning from '../layers/lightning';
import linea from '../layers/linea';
import liquid from '../layers/liquid';
import manta from '../layers/manta';
import mantle from '../layers/mantle';
import mercurylayer from '../layers/mercurylayer';
import merlin from '../layers/merlin';
import mezo from '../layers/mezo';
import mode from '../layers/mode';
import movement from '../layers/movement';
import nomic from '../layers/nomic';
import optimism from '../layers/optimism';
import osmosis from '../layers/osmosis';
import polygonpos from '../layers/polygonpos';
import polygonzkevm from '../layers/polygonzkevm';
import rollux from '../layers/rollux';
import rootstock from '../layers/rootstock';
import scroll from '../layers/scroll';
import side from '../layers/side';
import solana from '../layers/solana';
import soneium from '../layers/soneium';
import sonic from '../layers/sonic';
import spark from '../layers/spark';
import stacks from '../layers/stacks';
import starknet from '../layers/starknet';
import sui from '../layers/sui';
import taiko from '../layers/taiko';
import tron from '../layers/tron';
import zeta from '../layers/zeta';
import zksync from '../layers/zksync';

// Export all layers array
export const allLayers = [
  core,
  internetcomputer,
  lightning,
  liquid,
  mercurylayer,
  rootstock,
  stacks,
  bob,
  bsquared,
  merlin,
  rollux,
  bitlayer,
  side,
  nomic,
  fractal,
  bitfinity,
  bevm,
  starknet,
  bouncebit,
  hemi,
  spark,
  arbitrum,
  avalanche,
  base,
  bnbsmartchain,
  optimism,
  ethereum,
  polygonpos,
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
  mezo,
  babylongenesis,
  mode,
  ailayer,
  algorand,
  fuel,
  ink,
  iotex,
  kava,
  linea,
  manta,
  mantle,
  movement,
  soneium,
  sui,
  botanix,
  goat,
];

// Export layer slugs
export const allLayerSlugs: string[] = allLayers.map((layer) => layer.slug);

// Export individual layers for direct access
export {
  ailayer,
  algorand,
  arbitrum,
  aurora,
  avalanche,
  babylongenesis,
  base,
  berachain,
  bevm,
  bitfinity,
  bitlayer,
  bnbsmartchain,
  bob,
  botanix,
  bouncebit,
  bsquared,
  core,
  corn,
  ethereum,
  fantom,
  fractal,
  fuel,
  gnosis,
  goat,
  hemi,
  hyperliquid,
  ink,
  internetcomputer,
  iotex,
  kava,
  lightning,
  linea,
  liquid,
  manta,
  mantle,
  mercurylayer,
  merlin,
  mezo,
  mode,
  movement,
  nomic,
  optimism,
  osmosis,
  polygonpos,
  polygonzkevm,
  rollux,
  rootstock,
  scroll,
  side,
  solana,
  soneium,
  sonic,
  spark,
  stacks,
  starknet,
  sui,
  taiko,
  tron,
  zeta,
  zksync,
};