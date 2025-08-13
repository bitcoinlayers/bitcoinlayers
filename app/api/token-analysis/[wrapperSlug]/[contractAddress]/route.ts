import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

async function getAnalysisPath(wrapperSlug: string, contractAddress: string) {
    return join(
        process.cwd(),
        'researchers',
        'token-analyzer',
        'analysis-reports',
        wrapperSlug,
        `${contractAddress.toLowerCase()}.json`
    );
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ wrapperSlug: string; contractAddress: string }> }
) {
    const { wrapperSlug, contractAddress } = await params;
    console.log('API: Received request for:', { wrapperSlug, contractAddress });
    
    // Construct the path to the analysis file
    const analysisPath = await getAnalysisPath(wrapperSlug, contractAddress);
    console.log('API: Attempting to read file at:', analysisPath);
    
    try {
        // Try to read the analysis file
        const analysisData = await readFile(analysisPath, 'utf-8');
        const parsedData = JSON.parse(analysisData);

        console.log('API: Successfully loaded analysis, data length:', analysisData.length);
        return NextResponse.json(parsedData);
    } catch (error) {
        // If file doesn't exist or there's an error, return 404
        console.error('Error loading token analysis:', error);
        console.log('Attempted path:', analysisPath);
        return NextResponse.json(
            { error: 'Analysis not found' },
            { status: 404 }
        );
    }
}

export async function HEAD(
    request: NextRequest,
    { params }: { params: Promise<{ wrapperSlug: string; contractAddress: string }> }
) {
    try {
        const { wrapperSlug, contractAddress } = await params;
        
        // Construct the path to the analysis file
        const analysisPath = await getAnalysisPath(wrapperSlug, contractAddress);

        // Try to read the analysis file (just to check if it exists)
        await readFile(analysisPath, 'utf-8');

        return new NextResponse(null, { status: 200 });
    } catch (error) {
        // If file doesn't exist or there's an error, return 404
        return new NextResponse(null, { status: 404 });
    }
}
