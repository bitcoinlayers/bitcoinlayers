import { InfrastructureProject } from "../content/props";

import opcatProject from "../content/infrastructures/opcat";

const opcat: InfrastructureProject = opcatProject;

export const allOpcodes: InfrastructureProject[] = [opcat];

export const allOpcodesSlugs: string[] = allOpcodes.map(
    (infrastructure) => infrastructure.slug,
);