export enum CustodyTitle {
    BitcoinNative = "Bitcoin Native",
    Federated = "Federated",
    Custodial = "Custodial",
}

export enum CustodyText {
    BitcoinNaitve = "placeholder",
    Federated = "placeholder",
    Custodial = "placeholder",
}

export interface CustodyMechanism {
    label: string;
    description: string;
    networks: string[];
}

export interface CustodyProps {
    [key: string]: CustodyMechanism;
}

export const custodyProps: CustodyProps = {
    "bitcoin-native": {
        label: "Bitcoin Native",
        description: "These protocols use Bitcoin's native features like 2-of-2 multisigs, payment channels, or statechains where users maintain control of their private keys and can unilaterally exit without trusting third parties. The security model relies entirely on Bitcoin's consensus and cryptographic guarantees.",
        networks: [
            "lightning",
            "mercurylayer",
            "spark"
        ]
    },
    "multisig": {
        label: "Multisig",
        description: "These protocols secure Bitcoin through multi-signature wallets managed by federations or validator sets. While not fully self-custodial, they distribute trust across multiple known parties rather than a single entity. Users must trust that a threshold of signers won't collude to steal funds.",
        networks: [
            "liquid",
            "stacks",
            "rootstock",
            "side",
            "nomic"
        ]
    },
    "mpc": {
        label: "MPC",
        description: "Multi-Party Computation (MPC) protocols use cryptographic schemes where multiple parties collectively manage private keys without any single party having full control. These systems often involve institutional custodians and threshold signature schemes to secure Bitcoin deposits.",
        networks: [
            "merlin",
            "bouncebit",
            "bsquared",
            "bitlayer",
            "hemi"
        ]
    },
    "custodial": {
        label: "Custodial",
        description: "These protocols rely on centralized custodians or trusted third parties to hold Bitcoin reserves backing tokens on their networks. Users must trust these entities not to steal funds and to maintain proper reserves. This includes major centralized exchanges and institutional custody providers.",
        networks: [
            "arbitrum",
            "avalanche",
            "base",
            "berachain", 
            "bevm",
            "bitfinity",
            "bnbsmartchain",
            "bob",
            "core",
            "corn",
            "ethereum",
            "fantom",
            "fractal",
            "gnosis",
            "hyperliquid",
            "internetcomputer",
            "mezo",
            "optimism",
            "osmosis",
            "polygonpos",
            "polygonzkevm",
            "rollux",
            "scroll",
            "solana",
            "sonic",
            "starknet",
            "taiko",
            "tron",
            "zeta",
            "zksync"
        ]
    }
};

export default custodyProps;