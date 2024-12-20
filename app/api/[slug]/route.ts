import path from "path";
import fs from "fs/promises";

export async function generateStaticParams() {
    const infrastructuresPath = path.join(
        process.cwd(),
        "content",
        "infrastructures",
    );
    const files = await fs.readdir(infrastructuresPath);

    return files
        .filter((file) => file.endsWith(".ts"))
        .map((file) => ({
            slug: file.replace(".ts", ""),
        }));
}

export async function GET(
    request: Request,
    props: { params: Promise<{ slug: string }> },
) {
    const params = await props.params;
    const { slug } = params;

    try {
        const projectPath = path.join(
            process.cwd(),
            "content",
            "infrastructures",
            `${slug}.ts`,
        );

        await fs.access(projectPath);

        const project = (
            await import(`../../../content/infrastructures/${slug}`)
        ).default;

        const response = {
            title: project.title,
            type: project.entityType,
            website:
                project.links.find((link: any) => link.text === "Website")
                    ?.url || null,
            incentives: project.incentives || "Not specified",
            contractAddress: project.contractAddress || "Not specified",
            about: project.description,
        };

        return new Response(JSON.stringify(response), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "project not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
}
