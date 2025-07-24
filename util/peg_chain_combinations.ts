import { RiskFactor, RiskCategory, LayerProject } from "@/content/props";
import { allLayers } from "@/util/layer_index";

export interface PegChainImplementation {
    pegSlug: string;
    pegName: string;
    chainSlug: string;
    chainName: string;
    chainCategory: "BitcoinNative" | "Sidesystem" | "Integrated" | "Alt";
    riskTier: RiskFactor;
    title: string;
    trustAssumptions: string;
    bridgeType: "native" | "federated" | "escrow" | "custom" | "official";
    specificDetails: {
        federationSize?: string;
        upgradeability?: string;
        timeDelay?: string;
        additionalRisks?: string[];
    };
    alert?: {
        type: "info" | "warning" | "error";
        title: string;
        content: string;
        linkText?: string;
        linkUrl?: string;
        collapsible?: boolean;
        expandable?: boolean;
    };
}

// Type guard to check if a value is a valid RiskFactor
function isValidRiskFactor(value: any): value is RiskFactor {
    return Object.values(RiskFactor).includes(value);
}

// Dynamic extraction of peg implementations from layer data
function extractPegImplementations(): PegChainImplementation[] {
    const implementations: PegChainImplementation[] = [];
    
    allLayers.forEach(layer => {
        // Find BTC custody risk analysis section
        const btcCustodySection = layer.riskAnalysis?.find(
            analysis => analysis.category === RiskCategory.BtcCustody
        );
        
        if (btcCustodySection?.pegs) {
            btcCustodySection.pegs.forEach(peg => {
                // Only process pegs with valid risk factors
                if (!isValidRiskFactor(peg.tier) || !peg.name || !peg.infrastructureSlug) {
                    return;
                }

                // Parse federation info from content
                const federationSize = extractFederationSize(peg.content);
                const upgradeability = extractUpgradeability(peg.content);
                const timeDelay = extractTimeDelay(peg.content);
                const additionalRisks = extractAdditionalRisks(peg.content, layer.entityCategory);
                
                implementations.push({
                    pegSlug: peg.infrastructureSlug,
                    pegName: peg.name,
                    chainSlug: layer.slug,
                    chainName: layer.title,
                    chainCategory: mapEntityCategory(layer.entityCategory),
                    riskTier: peg.tier,
                    title: peg.title || "Trust assumptions for this peg implementation",
                    trustAssumptions: cleanContent(peg.content),
                    bridgeType: determineBridgeType(peg.content, layer.slug),
                    specificDetails: {
                        federationSize,
                        upgradeability,
                        timeDelay,
                        additionalRisks
                    },
                    alert: peg.alert // Include alert data from the peg
                });
            });
        }
    });
    
    return implementations;
}

// Helper functions to extract information from content strings
function extractFederationSize(content: string): string | undefined {
    const patterns = [
        /(\d+\/\d+)\s*(?:multisig|federation|members?)/i,
        /(\d+)\s+(?:of\s+)?(\d+)\s+(?:members?|signers?)/i,
        /(\d+)\s+member\s+federation/i
    ];
    
    for (const pattern of patterns) {
        const match = content.match(pattern);
        if (match) {
            if (match[2]) {
                return `${match[1]}/${match[2]}`;
            }
            return match[1];
        }
    }
    return undefined;
}

function extractUpgradeability(content: string): string | undefined {
    if (content.includes("instantly upgradeable") || content.includes("instantly upgrade")) {
        return "Instant upgrade";
    }
    if (content.includes("upgradeable") || content.includes("upgrade")) {
        if (content.includes("single signer")) {
            return "Single signer upgrade";
        }
        return "Centralized upgradeable bridge";
    }
    return undefined;
}

function extractTimeDelay(content: string): string | undefined {
    const match = content.match(/(\d+)\s+day\s+delay/i);
    return match ? `${match[1]} day delay` : undefined;
}

function extractAdditionalRisks(content: string, entityCategory?: string): string[] {
    const risks: string[] = [];
    
    if (content.includes("no fraud proofs") || content.includes("no functional proof")) {
        risks.push("No functional proofs");
    }
    if (content.includes("centralized") && content.includes("upgrade")) {
        risks.push("Centralized upgrade mechanism");
    }
    if (content.includes("federation") && content.includes("bridge")) {
        risks.push("Federation manages bridge");
    }
    if (content.includes("single signer")) {
        risks.push("Single signer risk");
    }
    if (content.includes("custodial") || content.includes("custodian")) {
        risks.push("Custodial backing");
    }
    if (entityCategory === "Alt" && !content.includes("native")) {
        risks.push("Cross-chain implementation");
    }
    
    return risks;
}

function determineBridgeType(content: string, chainSlug: string): PegChainImplementation["bridgeType"] {
    if (chainSlug === "ethereum") {
        return "native";
    }
    if (content.includes("federation") || content.includes("multisig")) {
        return "federated";
    }
    if (content.includes("escrow")) {
        return "escrow";
    }
    if (content.includes("official bridge")) {
        return "official";
    }
    return "custom";
}

function mapEntityCategory(category?: string): PegChainImplementation["chainCategory"] {
    switch (category) {
        case "Bitcoin Native": return "BitcoinNative";
        case "Sidesystems": return "Sidesystem";
        case "Integrated": return "Integrated";
        default: return "Alt";
    }
}

function cleanContent(content: string): string {
    // Remove snippet references and clean up content for display
    return content
        .replace(/\$\{[^}]+\}/g, '') // Remove template literals
        .replace(/\n\n/g, ' ') // Replace double newlines with space
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
}

// Cache the extracted data
let cachedImplementations: PegChainImplementation[] | null = null;

function getAllPegImplementations(): PegChainImplementation[] {
    if (!cachedImplementations) {
        cachedImplementations = extractPegImplementations();
    }
    return cachedImplementations;
}

// Public API functions
export function getPegImplementations(pegSlug: string): PegChainImplementation[] {
    const allImplementations = getAllPegImplementations();
    return allImplementations.filter(impl => impl.pegSlug === pegSlug);
}

export function getPegOnChain(pegSlug: string, chainSlug: string): PegChainImplementation | undefined {
    const implementations = getPegImplementations(pegSlug);
    return implementations.find(impl => impl.chainSlug === chainSlug);
}

export function getAvailablePegs(): { slug: string; name: string; description: string }[] {
    const allImplementations = getAllPegImplementations();
    const pegMap = new Map<string, { name: string; count: number }>();
    
    allImplementations.forEach(impl => {
        if (!pegMap.has(impl.pegSlug)) {
            pegMap.set(impl.pegSlug, { name: impl.pegName, count: 0 });
        }
        pegMap.get(impl.pegSlug)!.count++;
    });
    
    return Array.from(pegMap.entries()).map(([slug, { name, count }]) => ({
        slug,
        name,
        description: getDescriptionForPeg(slug, count)
    }));
}

function getDescriptionForPeg(pegSlug: string, chainCount: number): string {
    const descriptions: Record<string, string> = {
        "threshold-tbtc": "Distributed threshold signature scheme managed by Threshold Network",
        "bitgo-wbtc": "Custodial Bitcoin peg managed by BitGo and BiT Global across multiple jurisdictions",
        "coinbase-cbbtc": "Custodial Bitcoin peg managed by Coinbase with institutional backing",
        "lombard-lbtc": "Liquid staking derivative backed by staked Bitcoin"
    };
    
    return descriptions[pegSlug] || `Bitcoin peg available on ${chainCount} chains`;
}

export function getAvailableChains(pegSlug?: string): string[] {
    const allImplementations = getAllPegImplementations();
    const implementations = pegSlug 
        ? allImplementations.filter(impl => impl.pegSlug === pegSlug)
        : allImplementations;
    
    const uniqueChains = new Set(implementations.map(impl => impl.chainSlug));
    return Array.from(uniqueChains);
}

export function getChainsByCategory(category: PegChainImplementation["chainCategory"], pegSlug?: string): PegChainImplementation[] {
    const allImplementations = getAllPegImplementations();
    const implementations = pegSlug 
        ? allImplementations.filter(impl => impl.pegSlug === pegSlug)
        : allImplementations;
    
    return implementations.filter(impl => impl.chainCategory === category);
}

