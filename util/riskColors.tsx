// riskColors.tsx
export const getRiskColorFont = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "text-text_risk_low";
        case "Medium":
            return "text-text_risk_medium";
        case "High":
            return "text-text_risk_high";
        case "Critical":
            return "text-text_risk_critical";
        default:
            return "text-text_secondary";
    }
};

export const getRiskColorClass = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return {
                bg: "bg-bg_low",
                fill: "#52C41A",
            };
        case "Medium":
            return {
                bg: "bg-bg_medium",
                fill: "#F4CD00",
            };
        case "High":
            return {
                bg: "bg-bg_high",
                fill: "#ED1517",
            };
        case "Critical":
            return {
                bg: "bg-bg_critical",
                fill: "#C80D0F",
            };
        default:
            return {
                bg: "bg-lightsecondary",
                fill: "icon_tertiary",
            };
    }
};
