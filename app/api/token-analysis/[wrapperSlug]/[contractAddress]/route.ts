import { NextRequest, NextResponse } from 'next/server';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

async function findAnalysisFileInsensitive(dirPath: string, contractAddress: string): Promise<string | null> {
    try {
        const files = await readdir(dirPath);
        const targetFileName = `${contractAddress.toLowerCase()}.json`;
        
        // First try exact match (for performance)
        if (files.includes(targetFileName)) {
            return join(dirPath, targetFileName);
        }
        
        // Then try case-insensitive search
        const matchingFile = files.find(file => 
            file.toLowerCase() === targetFileName
        );
        
        if (matchingFile) {
            return join(dirPath, matchingFile);
        }
        
        return null;
    } catch (error) {
        return null;
    }
}

async function getAnalysisPath(wrapperSlug: string, contractAddress: string, networkName?: string): Promise<string | null> {
    // Convert slug format to match folder names (kebab-case to snake_case)
    const folderName = wrapperSlug.replace(/-/g, '_');
    
    // If we have a network name, use the new wrapper/network structure
    if (networkName) {
        const networkSlug = networkName.toLowerCase().replace(/[^a-z0-9]/g, '_');
        const dirPath = join(
            process.cwd(),
            'researchers',
            'reports',
            folderName,
            networkSlug
        );
        return await findAnalysisFileInsensitive(dirPath, contractAddress);
    }
    
    // Fallback to old flat structure for backwards compatibility
    const dirPath = join(
        process.cwd(),
        'researchers',
        'reports',
        folderName
    );
    return await findAnalysisFileInsensitive(dirPath, contractAddress);
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
    console.log('API: Found analysis file at:', analysisPath);
    
    if (analysisPath) {
        try {
            // Try to read the analysis file
            const analysisData = await readFile(analysisPath, 'utf-8');
            const parsedData = JSON.parse(analysisData);

            console.log('API: Successfully loaded analysis, data length:', analysisData.length);
            return NextResponse.json(parsedData);
        } catch (error) {
            console.error('Error reading analysis file:', error);
        }
    }
    
    // If new structure failed and we had a network name, try the old flat structure
    if (networkName && !analysisPath) {
        console.log('API: New structure failed, trying old structure...');
        const fallbackPath = await getAnalysisPath(wrapperSlug, contractAddress);
        console.log('API: Found fallback file at:', fallbackPath);
        
        if (fallbackPath) {
            try {
                const analysisData = await readFile(fallbackPath, 'utf-8');
                const parsedData = JSON.parse(analysisData);
                
                console.log('API: Successfully loaded analysis from fallback, data length:', analysisData.length);
                return NextResponse.json(parsedData);
            } catch (fallbackError) {
                console.error('Error loading token analysis from fallback:', fallbackError);
            }
        }
    }
    
    // If all attempts failed, return 404
    console.log('API: No analysis file found for:', { wrapperSlug, contractAddress, networkName });
    return NextResponse.json(
        { error: 'Analysis not found' },
        { status: 404 }
    );
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
        let analysisPath = await getAnalysisPath(wrapperSlug, contractAddress, networkName || undefined);
        
        if (analysisPath) {
            try {
                // Try to read the analysis file (just to check if it exists)
                await readFile(analysisPath, 'utf-8');
                return new NextResponse(null, { status: 200 });
            } catch (error) {
                // File exists but can't be read
            }
        }
        
        // If new structure failed and we had a network name, try the old flat structure
        if (networkName && !analysisPath) {
            const fallbackPath = await getAnalysisPath(wrapperSlug, contractAddress);
            if (fallbackPath) {
                try {
                    await readFile(fallbackPath, 'utf-8');
                    return new NextResponse(null, { status: 200 });
                } catch (fallbackError) {
                    // File exists but can't be read
                }
            }
        }
        
        // If all attempts failed, return 404
        return new NextResponse(null, { status: 404 });
    } catch (error) {
        // If there's an error, return 404
        return new NextResponse(null, { status: 404 });
    }
}
