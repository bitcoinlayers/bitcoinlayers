import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ layer: string }> }
) {
    try {
        const { layer } = await params;
        
        if (!layer) {
            return NextResponse.json(
                { error: "Layer parameter is required" },
                { status: 400 }
            );
        }

        // Look for Bitcoin analysis files in the researchers/reports directory
        const analysisDir = join(process.cwd(), "researchers", "reports");
        
        let analysisData = null;
        
        // Map wrapper slugs to their corresponding analysis directories
        const wrapperToAnalysisDir: { [key: string]: string } = {
            "nomic-nbtc": "nomic",
            "stacks-sbtc": "stacks"
        };
        
        // Try to find and read the analysis file
        try {
            const fs = require("fs");
            
            // Determine the correct subdirectory name
            const analysisSubdir = wrapperToAnalysisDir[layer] || layer;
            
            // First try the layer/wrapper subdirectory
            const layerDir = join(analysisDir, analysisSubdir);
            if (fs.existsSync(layerDir)) {
                const files = fs.readdirSync(layerDir);
                const bitcoinAnalysisFiles = files.filter((file: string) => 
                    file.startsWith('bitcoin_transaction_') && file.endsWith('.json')
                );
                
                if (bitcoinAnalysisFiles.length > 0) {
                    // Use the most recent file if multiple exist
                    const file = bitcoinAnalysisFiles.sort().reverse()[0];
                    const filePath = join(layerDir, file);
                    const fileContent = readFileSync(filePath, "utf-8");
                    analysisData = JSON.parse(fileContent);
                }
            }
            
            // If not found in subdirectory, try the main analysis directory
            if (!analysisData && fs.existsSync(analysisDir)) {
                const files = fs.readdirSync(analysisDir);
                const bitcoinAnalysisFiles = files.filter((file: string) => 
                    file.startsWith(`bitcoin_transaction_${layer}_`) && file.endsWith('.json')
                );
                
                if (bitcoinAnalysisFiles.length > 0) {
                    const file = bitcoinAnalysisFiles.sort().reverse()[0];
                    const filePath = join(analysisDir, file);
                    const fileContent = readFileSync(filePath, "utf-8");
                    analysisData = JSON.parse(fileContent);
                }
            }
        } catch (error) {
            console.error(`Error reading Bitcoin analysis for ${layer}:`, error);
        }

        if (!analysisData) {
            return NextResponse.json(
                { error: "No Bitcoin analysis found for this wrapper/layer" },
                { status: 404 }
            );
        }

        // Return the analysis data
        return NextResponse.json(analysisData, {
            headers: {
                "Cache-Control": "no-cache, no-store, must-revalidate", // No caching for development
            },
        });

    } catch (error) {
        console.error("Error in Bitcoin analysis API:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
