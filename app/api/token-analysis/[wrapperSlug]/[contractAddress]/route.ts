import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

async function getAnalysisPath(wrapperSlug: string, contractAddress: string, networkName?: string) {
    // Convert slug format to match folder names (kebab-case to snake_case)
    const folderName = wrapperSlug.replace(/-/g, '_');
    
    // If we have a network name, use the new wrapper/network structure
    if (networkName) {
        const networkSlug = networkName.toLowerCase().replace(/[^a-z0-9]/g, '_');
        return join(
            process.cwd(),
            'researchers',
            'reports',
            folderName,
            networkSlug,
            `${contractAddress.toLowerCase()}.json`
        );
    }
    
    // Fallback to old flat structure for backwards compatibility
    return join(
        process.cwd(),
        'researchers',
        'reports',
        folderName,
        `${contractAddress.toLowerCase()}.json`
    );
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ wrapperSlug: string; contractAddress: string }> }
) {
    const { wrapperSlug, contractAddress } = await params;
    const { searchParams } = new URL(request.url);
    const networkName = searchParams.get('network');
    
    console.log('API: Received request for:', { wrapperSlug, contractAddress, networkName });
    
    // Try new structure first, then fall back to old structure
    let analysisPath = await getAnalysisPath(wrapperSlug, contractAddress, networkName || undefined);
    console.log('API: Attempting to read file at:', analysisPath);
    
    try {
        // Try to read the analysis file
        const analysisData = await readFile(analysisPath, 'utf-8');
        const parsedData = JSON.parse(analysisData);

        console.log('API: Successfully loaded analysis, data length:', analysisData.length);
        return NextResponse.json(parsedData);
    } catch (error) {
        // If new structure failed and we had a network name, try the old flat structure
        if (networkName) {
            try {
                console.log('API: New structure failed, trying old structure...');
                const fallbackPath = await getAnalysisPath(wrapperSlug, contractAddress);
                console.log('API: Attempting fallback path:', fallbackPath);
                
                const analysisData = await readFile(fallbackPath, 'utf-8');
                const parsedData = JSON.parse(analysisData);
                
                console.log('API: Successfully loaded analysis from fallback, data length:', analysisData.length);
                return NextResponse.json(parsedData);
            } catch (fallbackError) {
                console.error('Error loading token analysis from fallback:', fallbackError);
            }
        }
        
        // If all attempts failed, return 404
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
        const { searchParams } = new URL(request.url);
        const networkName = searchParams.get('network');
        
        // Try new structure first
        let analysisPath = await getAnalysisPath(wrapperSlug, contractAddress, networkName);
        
        try {
            // Try to read the analysis file (just to check if it exists)
            await readFile(analysisPath, 'utf-8');
            return new NextResponse(null, { status: 200 });
        } catch (error) {
            // If new structure failed and we had a network name, try the old flat structure
            if (networkName) {
                try {
                    const fallbackPath = await getAnalysisPath(wrapperSlug, contractAddress);
                    await readFile(fallbackPath, 'utf-8');
                    return new NextResponse(null, { status: 200 });
                } catch (fallbackError) {
                    // Both failed
                }
            }
            
            // If all attempts failed, return 404
            return new NextResponse(null, { status: 404 });
        }
    } catch (error) {
        // If there's an error, return 404
        return new NextResponse(null, { status: 404 });
    }
}
