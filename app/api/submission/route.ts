import { Type } from "@/content/props";
import { Octokit } from "@octokit/rest";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: NextResponse) {
    const { type, slug, fileContent } = await request.json();

    console.log(type, slug, fileContent);

    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const owner = "bitcoinlayers";
    const repo = "bitcoinlayers";
    const baseBranch = "main";
    const newBranch = `update-${slug}-${Date.now()}`;

    try {
        // Create a new branch
        await octokit.git.createRef({
            owner,
            repo,
            ref: `refs/heads/${newBranch}`,
            sha: (
                await octokit.git.getRef({
                    owner,
                    repo,
                    ref: `heads/${baseBranch}`,
                })
            ).data.object.sha,
        });

        // Determine the file path based on the project type
        const filePath =
            type === Type.Layer
                ? `content/layers/${slug}.ts`
                : `content/infrastructures/${slug}.ts`;

        // Check if the file already exists
        let existingSha;
        try {
            const existingFile = await octokit.repos.getContent({
                owner,
                repo,
                path: filePath,
                ref: baseBranch,
            });
            existingSha =
                "content" in existingFile.data
                    ? existingFile.data.sha
                    : undefined;
        } catch (error) {
            // File doesn't exist, which is fine for new projects
        }

        // Create or update the file
        await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: filePath,
            message: `${existingSha ? "Update" : "Add"} ${slug} project`,
            content: Buffer.from(fileContent).toString("base64"),
            branch: newBranch,
            sha: existingSha,
        });

        // Create a pull request
        const pr = await octokit.pulls.create({
            owner,
            repo,
            title: `${existingSha ? "Update" : "Add"} ${slug} project`,
            head: newBranch,
            base: baseBranch,
            body: `This PR ${existingSha ? "updates" : "adds"} the ${slug} project information.`,
        });

        return NextResponse.json({ url: pr.data.html_url });
    } catch (error: any) {
        console.error("Error creating PR:", error);

        const errorMessage = error.message || "Unknown error occurred";
        const errorResponse = {
            error: "Failed to create PR",
            message: errorMessage,
            status: error.status || 500,
        };

        return NextResponse.json(errorResponse, {
            status: error.status || 400,
        });
    }
}
