import type { Infrastructure } from "@/components/infrastructure/infrastructureProps";

import fedimintJson from "../content/infrastructures/fedimint.json" assert { type:
    "json" };
const fedimint: Infrastructure = fedimintJson as Infrastructure;

import cashuJson from "../content/infrastructures/cashu.json" assert { type:
    "json" };
const cashu: Infrastructure = cashuJson as Infrastructure;

export const allEcash: Infrastructure[] = [cashu, fedimint];

export const allEcashSlugs: string[] = allEcash.map(
    (infrastructure) => infrastructure.slug,
);
