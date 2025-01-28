// riskColors.tsx
export const getRiskColorText = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "var(--color-risk-low-text)";
        case "Medium":
            return "var(--color-risk-medium-text)";
        case "High":
            return "var(--color-risk-high-text)";
        case "Very High":
            return "var(--color-risk-critical-text)";
        case "Critical":
            return "var(--color-risk-critical-text)";
        case "Under Review":
            return "var(--color-text-secondary)";
        case "Unverified":
            return "var(--color-risk-unverified-text)";
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
            return "var(--color-risk-critical-icon)";
        case "Critical":
            return "hsl(var(--risk-icon-critical))";
        case "Under Review":
            return "var(--color-icon-secondary)";
        case "Unverified":
            return "var(--color-risk-unverified-icon)";
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
            return "var(--color-risk-critical-bg)";
        case "Critical":
            return "hsl(var(--risk-background-critical))";
        case "Under Review":
            return "#d6d6d6";
        case "Unverified":
            return "var(--color-risk-unverified-bg)";
        default:
            return "#abadb1";
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
