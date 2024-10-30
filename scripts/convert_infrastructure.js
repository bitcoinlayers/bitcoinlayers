const fs = require("fs").promises;
const path = require("path");

const LAYERS_DIR = "./content/infrastructures";
const PROPS_IMPORT =
    "import { Project, Purpose, Type, LiveStatus, RiskFactor, EntityType, Site, RiskSection, ContentSection, RiskCategory } from '../props';\n\n";

const PROJECT_KEYS = [
    "slug",
    "title",
    "infrastructureType",
    "live",
    "staking",
    "bridge",
    "underReview",
    "riskFactors",
    "nativeToken",
    "bitcoinOnly",
    "links",
    "description",
    "sections",
    "btcLocked",
    "feeToken",
    "riskAnalysis",
    "associatedLayers",
    "purpose",
];

function convertToValidIdentifier(key) {
    if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)) {
        return key;
    }
    return `"${key}"`;
}

function getSiteEnum(index) {
    const siteMap = {
        0: "Website",
        2: "Docs",
        3: "Explorer",
        4: "GitHub",
        5: "Twitter",
    };
    return siteMap[index] || "Website";
}

function getRiskCategory(category) {
    const categoryMap = {
        "BTC Custody": "BtcCustody",
        "Data Availability": "DataAvailability",
        "Network Operators": "NetworkOperators",
        "Settlement Assurance": "SettlementAssurance",
        "Unilateral Exits": "UnilateralExits",
        "Block Production": "BlockProduction",
        "State Validation": "StateValidation",
    };
    return categoryMap[category] || category;
}

function getRiskFactor(factor) {
    const factorMap = {
        Low: "Low",
        Medium: "Medium",
        High: "High",
        Critical: "Critical",
        Unverified: "Unverified",
        "Under Review": "UnderReview",
        "Not Applicable": "NotApplicable",
    };
    return factorMap[factor] || factor;
}

function convertObjectKeys(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(convertObjectKeys);
    }

    const result = { type: "Type.Infrastructure" };

    Object.entries(obj).forEach(([key, value]) => {
        if (!PROJECT_KEYS.includes(key) && key !== "infrastructureType") {
            return; // Skip properties not in the Project interface
        }

        let newKey = convertToValidIdentifier(key);
        if (key === "infrastructureType") {
            newKey = "entityType";
            result[newKey] = `EntityType.${value.replace(/\s/g, "")}`;
        } else if (key === "underReview") {
            result[newKey] =
                value === true || value === "yes" || value === "true";
        } else if (key === "links") {
            result[newKey] = value.map((link, index) => {
                if (typeof link === "string") {
                    return { text: `Site.${getSiteEnum(index)}`, url: link };
                }
                return { ...link, text: `Site.${getSiteEnum(index)}` };
            });
        } else if (key === "riskFactors") {
            result[newKey] = value.map((factor) =>
                factor ? `RiskFactor.${getRiskFactor(factor)}` : "",
            );
        } else if (key === "riskAnalysis") {
            result[newKey] = value.map((item) => ({
                ...item,
                category: `RiskCategory.${getRiskCategory(item.category)}`,
                tier: item.tier ? `RiskFactor.${getRiskFactor(item.tier)}` : "",
            }));
        } else if (key === "sections") {
            // Preserve original data for sections
            result[newKey] = value;
        } else if (key === "purpose") {
            result[newKey] = `Purpose.${value}`;
        } else {
            result[newKey] = convertObjectKeys(value);
        }
    });

    return result;
}

async function convertJsonToTs(filePath) {
    const content = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(content);
    const convertedData = convertObjectKeys(jsonData);

    let tsContent = PROPS_IMPORT;
    tsContent += `const ${path.basename(filePath, ".json")}: Project = ${JSON.stringify(convertedData, null, 2)};\n\n`;
    tsContent += `export default ${path.basename(filePath, ".json")};\n`;

    // Add type assertions and remove quotes from enum values
    tsContent = tsContent.replace(
        /"type": "Type\.Infrastructure"/g,
        "type: Type.Infrastructure",
    );
    tsContent = tsContent.replace(
        /"entityType": "EntityType\.([^"]+)"/g,
        "entityType: EntityType.$1",
    );
    tsContent = tsContent.replace(/"live": "([^"]+)"/g, "live: LiveStatus.$1");
    tsContent = tsContent.replace(/"riskFactors": \[/g, "riskFactors: [");
    tsContent = tsContent.replace(/"RiskFactor\.([^"]+)"/g, "RiskFactor.$1");
    tsContent = tsContent.replace(/"links": \[/g, "links: [");
    tsContent = tsContent.replace(/"text": "Site\.([^"]+)"/g, "text: Site.$1");
    tsContent = tsContent.replace(/"riskAnalysis": \[/g, "riskAnalysis: [");
    tsContent = tsContent.replace(
        /"category": "RiskCategory\.([^"]+)"/g,
        "category: RiskCategory.$1",
    );
    tsContent = tsContent.replace(
        /"tier": "RiskFactor\.([^"]+)"/g,
        "tier: RiskFactor.$1",
    );
    tsContent = tsContent.replace(/"sections": \[/g, "sections: [");
    tsContent = tsContent.replace(
        /"purpose": "Purpose\.([^"]+)"/g,
        "purpose: Purpose.$1",
    );

    // Remove quotes from property names
    tsContent = tsContent.replace(/"([a-zA-Z_$][a-zA-Z0-9_$]*)"\s*:/g, "$1:");

    const tsFilePath = filePath.replace(".json", ".ts");
    await fs.writeFile(tsFilePath, tsContent);
    await fs.unlink(filePath);

    console.log(`Converted ${filePath} to ${tsFilePath}`);
}

async function convertAllJsonFiles() {
    const files = await fs.readdir(LAYERS_DIR);
    const jsonFiles = files.filter((file) => path.extname(file) === ".json");

    for (const file of jsonFiles) {
        await convertJsonToTs(path.join(LAYERS_DIR, file));
    }
}

convertAllJsonFiles().catch(console.error);
