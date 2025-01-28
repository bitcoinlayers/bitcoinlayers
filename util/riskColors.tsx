// riskColors.tsx
export const getRiskColorText = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "hsl(var(--risk-text-low))";
        case "Medium":
            return "hsl(var(--risk-text-medium))";
        case "High":
            return "hsl(var(--risk-text-high))";
        case "Very High":
            return "hsl(var(--risk-text-very-high))";
        case "Critical":
            return "hsl(var(--risk-text-critical))";
        case "Under Review":
            return "hsl(var(--risk-text-under-review))";
        case "Unverified":
            return "var(--color-text-secondary)";
        default:
            return "var(--color-text-secondary)";
    }
};

export const getRiskColorIcon = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "hsl(var(--risk-icon-low))";
        case "Medium":
            return "hsl(var(--risk-icon-medium))";
        case "High":
            return "hsl(var(--risk-icon-high))";
        case "Very High":
            return "hsl(var(--risk-icon-very-high))";
        case "Critical":
            return "hsl(var(--risk-icon-critical))";
        case "Under Review":
            return "hsl(var(--risk-icon-under-review))";
        case "Unverified":
            return "var(--color-icon-secondary)";
        default:
            return "var(--color-icon-secondary)";
    }
};

export const getRiskColorBackground = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "hsl(var(--risk-background-low))";
        case "Medium":
            return "hsl(var(--risk-background-medium))";
        case "High":
            return "hsl(var(--risk-background-high))";
        case "Very High":
            return "hsl(var(--risk-background-very-high))";
        case "Critical":
            return "hsl(var(--risk-background-critical))";
        case "Under Review":
            return "hsl(var(--risk-background-under-review))";
        case "Unverified":
            return "var(--color-background-secondary)";
        default:
            return "var(--color-background-secondary)";
    }
};

export const getRiskEmoji = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "✅";
        case "Medium":
            return "⚠️";
        case "High":
            return "🚨";
        case "Very High":
            return "🛑";
        case "Critical":
            return "🛑";
        case "Under Review":
            return "🔬";
        case "Unverified":
            return "❓";
        default:
            return "🔬";
    }
};
