// riskColors.tsx
export const getRiskColorText = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "var(--color-risk-low-text)";
        case "Medium":
            return "var(--color-risk-medium-text)";
        case "High":
            return "var(--color-risk-high-text)";
        case "VeryHigh":
            return "var(--color-risk-critical-text)";
        case "Critical":
            return "var(--color-risk-critical-text)";
        case "UnderReview":
            return "var(--color-risk-unverified-text)";
        case "Unverified":
            return "var(--color-risk-unverified-text)";
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
        case "Unverified":
            return "var(--color-risk-unverified-icon)";
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
        case "Critical":
            return "🛑";
        case "Unverified":
            return "❓";
        default:
            return "ℹ️";
    }
};
