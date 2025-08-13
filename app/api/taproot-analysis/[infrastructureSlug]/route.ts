import { NextRequest, NextResponse } from 'next/server';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ infrastructureSlug: string }> }
) {
    try {
        const { infrastructureSlug } = await params;
        
        // Convert infrastructure slug to match folder name
        const folderName = infrastructureSlug.replace('-', '_');
        
        // Construct the path to the analysis folder
        const analysisDir = join(
            process.cwd(),
            'researchers',
            'token-analyzer',
            'analysis-reports',
            folderName
        );

        // Look for taproot transaction analysis files
        const files = await readdir(analysisDir);
        const taprootFiles = files.filter(file => 
            file.startsWith('taproot_transaction_') && file.endsWith('.json')
        );

        if (taprootFiles.length === 0) {
            return NextResponse.json(
                { error: 'No Taproot analysis found for this infrastructure' },
                { status: 404 }
            );
        }

        // Use the most recent taproot analysis file (or first one found)
        const taprootFile = taprootFiles[0];
        const analysisPath = join(analysisDir, taprootFile);

        // Read and parse the analysis file
        const analysisData = await readFile(analysisPath, 'utf-8');
        const parsedData = JSON.parse(analysisData);

        return NextResponse.json(parsedData);
    } catch (error) {
        console.error('Error loading Taproot analysis:', error);
        return NextResponse.json(
            { error: 'Failed to load Taproot analysis' },
            { status: 500 }
        );
    }
}
