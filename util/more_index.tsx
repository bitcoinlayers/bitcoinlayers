import { InfrastructureProject } from "../content/props";

import fedimintProject from "../content/infrastructures/fedimint";
import cashuProject from "../content/infrastructures/cashu";

const fedimint: InfrastructureProject = fedimintProject;
const cashu: InfrastructureProject = cashuProject;

export const allMore: InfrastructureProject[] = [cashu, fedimint];

export const allMoreSlugs: string[] = allMore.map(
    (infrastructure) => infrastructure.slug,
);
