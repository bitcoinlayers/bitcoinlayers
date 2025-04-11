import { InfrastructureProject } from "../content/props";

import opcatProject from "../content/infrastructures/opcat";
import opctvProject from "../content/infrastructures/opctv";

const opcat: InfrastructureProject = opcatProject;
const opctv: InfrastructureProject = opctvProject;

export const allOpcodes: InfrastructureProject[] = [opcat, opctv];

export const allOpcodesSlugs: string[] = allOpcodes.map(
    (infrastructure) => infrastructure.slug,
);