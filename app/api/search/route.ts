import { allLayers } from "../../../util/layer_index";
import { allInfrastructures } from "../../../util/infrastructure_index";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const params = url.searchParams;

    const liquidStaking = params.get("liquidStaking");
    const staking = params.get("staking");
    const entityType = params.get("entityType");
    const live = params.get("live");

    const allProjects = [...allLayers, ...allInfrastructures];

    const filteredProjects = allProjects.filter((project) => {
        return (
            (liquidStaking === null ||
                project.liquidStaking === (liquidStaking === "true")) &&
            (staking === null || project.staking === (staking === "true")) &&
            (entityType === null || project.entityType === entityType) &&
            (live === null || project.live === live)
        );
    });

    if (filteredProjects.length === 0) {
        return new Response(
            JSON.stringify({
                error: "No projects found matching the criteria",
            }),
            { status: 404, headers: { "Content-Type": "application/json" } },
        );
    }

    return new Response(JSON.stringify(filteredProjects), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
