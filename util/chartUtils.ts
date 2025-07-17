interface ProcessedData {
    date: string;
    isRealData?: boolean; // Mark whether this is real or synthetic data
    [key: string]: string | number | boolean | undefined;
}

/**
 * Generates synthetic data points to create a line view for sparse data
 */
export function generateLineViewData(
    originalData: ProcessedData[],
    dateRange: string,
    tokens: string[]
): ProcessedData[] {
    if (!originalData || originalData.length === 0) return [];
    
    // Get the most recent data point values and date
    const latestDataPoint = originalData.reduce(
        (latest, current) =>
            new Date(current.date) > new Date(latest.date) ? current : latest,
        originalData[0]
    );
    
    // Get all real data dates for comparison
    const realDataDates = new Set(originalData.map(item => item.date));
    
    // Generate date range
    const now = new Date();
    const startDate = new Date(now);
    const rangeMappings = { "1mo": 1, "3mo": 3, "1y": 12 };
    startDate.setMonth(
        now.getMonth() - (rangeMappings[dateRange as keyof typeof rangeMappings] || 12)
    );
    
    const syntheticData: ProcessedData[] = [];
    const currentDate = new Date(startDate);
    
    // Generate daily data points
    while (currentDate <= now) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const isRealData = realDataDates.has(dateStr);
        
        const dataPoint: ProcessedData = { 
            date: dateStr,
            isRealData: isRealData
        };
        
        // Use the latest values for each token to create a flat line
        tokens.forEach(token => {
            dataPoint[token] = latestDataPoint[token] || 0;
        });
        
        syntheticData.push(dataPoint);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return syntheticData.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
} 