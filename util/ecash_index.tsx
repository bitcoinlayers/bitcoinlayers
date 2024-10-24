import { InfrastructureProject } from "../content/props";

import fedimintProject from "../content/infrastructures/fedimint";
import cashuProject from "../content/infrastructures/cashu";

const fedimint: InfrastructureProject = fedimintProject;
const cashu: InfrastructureProject = cashuProject;

export const allEcash: InfrastructureProject[] = [cashu, fedimint];

export const allEcashSlugs: string[] = allEcash.map(
    (infrastructure) => infrastructure.slug,
);
