import { allLayers } from "../../../util/layer_index";
import { allInfrastructures } from "../../../util/infrastructure_index";

export async function GET(request: Request) {
    try {
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
                (staking === null ||
                    project.staking === (staking === "true")) &&
                (entityType === null || project.entityType === entityType) &&
                (live === null || project.live === live)
            );
        });

        const allowedOrigins = [
            "https://bitcoinlayers.org",
            "https://www.bitcoinlayers.org",
            "https://bitcoinstaking-eight.vercel.app",
            "https://www.bitcoinstaking-eight.vercel.app",
            "https://stakingbitcoin.com",
            "https://www.stakingbitcoin.com",
        ];

        const origin = request.headers.get("origin") || "";

        const headers: HeadersInit = {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Origin": allowedOrigins.includes(origin)
                ? origin
                : "null",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        };

        if (filteredProjects.length === 0) {
            return new Response(
                JSON.stringify({
                    error: "No projects found matching the criteria",
                }),
                { status: 404, headers },
            );
        }

        return new Response(JSON.stringify(filteredProjects), {
            status: 200,
            headers,
        });
    } catch (error) {
        console.error("Internal Server Error:", error);

        return new Response(
            JSON.stringify({
                error: "Internal server error",
                details: (error as Error).message,
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            },
        );
    }
}

export async function OPTIONS(request: Request) {
    const allowedOrigins = [
        "https://bitcoinlayers.org",
        "https://www.bitcoinlayers.org",
        "https://bitcoinstaking-eight.vercel.app",
        "https://www.bitcoinstaking-eight.vercel.app",
        "https://stakingbitcoin.com",
        "https://www.stakingbitcoin.com",
    ];

    const origin = request.headers.get("origin") || "";

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Origin": allowedOrigins.includes(origin)
            ? origin
            : "null",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    return new Response(null, {
        status: 204,
        headers,
    });
}
