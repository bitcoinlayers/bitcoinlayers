// riskColors.tsx
export const getRiskColorText = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "var(--color-risk-low-text)";
        case "Medium":
            return "var(--color-risk-medium-text)";
        case "High":
            return "var(--color-risk-high-text)";
        case "Critical":
            return "var(--color-risk-critical-text)";
        default:
            return "var(--color-text-secondary)";
    }
};

export const getRiskColorIcon = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "var(--color-risk-low-icon)";
        case "Medium":
            return "var(--color-risk-medium-icon)";
        case "High":
            return "var(--color-risk-high-icon)";
        case "Critical":
            return "var(--color-risk-critical-icon)";
        default:
            return "var(--color-icon-secondary)";
    }
};

export const getRiskColorBackground = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "var(--color-risk-low-bg)";
        case "Medium":
            return "var(--color-risk-medium-bg)";
        case "High":
            return "var(--color-risk-high-bg)";
        case "Critical":
            return "var(--color-risk-critical-bg)";
        default:
            return "var(--color-bg-secondary)";
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
        case "Critical":
            return "🛑";
        default:
            return "ℹ️";
    }
};
