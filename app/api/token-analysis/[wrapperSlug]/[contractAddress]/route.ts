import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ wrapperSlug: string; contractAddress: string }> }
) {
    try {
        const { wrapperSlug, contractAddress } = await params;
        
        // Construct the path to the analysis file
        const analysisPath = join(
            process.cwd(),
            'researchers',
            'token-analyzer',
            'analysis-reports',
            wrapperSlug,
            `${contractAddress.toLowerCase()}.json`
        );

        // Try to read the analysis file
        const analysisData = await readFile(analysisPath, 'utf-8');
        const parsedData = JSON.parse(analysisData);

        return NextResponse.json(parsedData);
    } catch (error) {
        // If file doesn't exist or there's an error, return 404
        console.error('Error loading token analysis:', error);
        return NextResponse.json(
            { error: 'Analysis not found' },
            { status: 404 }
        );
    }
}
