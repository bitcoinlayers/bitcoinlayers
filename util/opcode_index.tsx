import { InfrastructureProject } from "../content/props";

import opcatProject from "../content/infrastructures/opcat";

const opcat: InfrastructureProject = opcatProject;

export const allOpcode: InfrastructureProject[] = [opcat];

export const allOpcodeSlugs: string[] = allOpcode.map(
    (infrastructure) => infrastructure.slug,
);