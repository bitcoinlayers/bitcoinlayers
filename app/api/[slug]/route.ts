import { allLayers } from "../../../util/layer_index";
import { allInfrastructures, popupOnlyInfrastructures } from "../../../util/infrastructure_index";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> },
): Promise<Response> {
    const { slug } = await params;

    if (!slug) {
        return new Response(
            JSON.stringify({ error: "Slug parameter is required" }),
            { status: 400, headers: { "Content-Type": "application/json" } },
        );
    }

    const allProjects = [...allLayers, ...allInfrastructures, ...popupOnlyInfrastructures];

    const project = allProjects.find((project) => project.slug === slug);

    if (!project) {
        return new Response(JSON.stringify({ error: "Project not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify(project), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
