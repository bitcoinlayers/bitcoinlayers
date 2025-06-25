import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { EntityType } from "@/content/props";

interface NetworkTypeHoverCardProps {
    entityType: EntityType;
    children: React.ReactNode;
}

// Entity type definitions mapping
const entityTypeDefinitions: Record<EntityType, { name: string; description: string }> = {
    [EntityType.Rollup]: {
        name: "Rollup",
        description: "A modular blockchain that uses a parent blockchain for data availability. The blockchain stores its state root and enough transaction data to reconstruct the state of the blockchain from genesis in the parent blockchain."
    },
    [EntityType.Sidechain]: {
        name: "Sidechain",
        description: "An L1 that exists to add more functionality to BTC the asset. L1s are sovereign in technical architecture but typically exist as subsets of the broader bitcoin ecosystem. It's common for sidechains to enshrine a BTC bridge into their consensus mechanisms or involve bitcoin miners in consensus - through merge mining or fee sharing."
    },
    [EntityType.MergeMined]: {
        name: "Merge-mined",
        description: "A blockchain (L1) that uses a similar consensus mechanism to bitcoin, with the same PoW hashing algorithm. By using the same algorithm for consensus, bitcoin miners can opt-in to securing and producing blocks for the sidechain with essentially no additional costs (i.e., reusing the same “work” from bitcoin’s PoW)."
    },
    [EntityType.Federation]: {
        name: "Federation",
        description: "A network operated by a permissioned set of entities responsible for operating all facets of the network. Users trust the federation to not censor them, halt the network, and freeze user funds."
    },
    [EntityType.Statechain]: {
        name: "Statechain",
        description: "A protocol where users enter a 2-2 multisig with a federated entity and transfer ownership of a UTXO to an intended recipient by providing them a statechain private key for that specific UTXO."
    },
    [EntityType.StateChannel]: {
        name: "State Channel",
        description: "A type of L2 scaling solution that allows participants to conduct transactions offchain, in a faster and cheaper environment. Only the state differentials (i.e., the start state and the end state) are recorded on the blockchain, reducing the load on the main network and by extension, the fees required. Unlike rollups, state channels do not have a 'global state' and instead exist as a series of bilateral agreements between participants."
    },
    [EntityType.SovereignRollup]: {
        name: "Sovereign Rollup",
        description: "A rollup implementation that sovereignly manages its own execution environment, and does not have a canonical bridge with its parent blockchain. Rollups on bitcoin are technically sovereign rollups, even if they have a socially enshrined two-way peg."
    },
    [EntityType.AltRollup]: {
        name: "Alternative Rollup",
        description: "An alternative rollup (alt. rollup) is a modular blockchain that uses a parent blockchain for data availability. The blockchain stores its state root and enough transaction data to reconstruct the state of the blockchain from genesis in the parent blockchain. An alternative rollup does not use bitcoin for data availability."
    },
    [EntityType.AltL1]: {
        name: "Alternative Layer 1",
        description: "An alternative blockchain that operates independently of Bitcoin, with its own consensus mechanism and security model."
    },
    [EntityType.CSV]: {
        name: "Client Side Validation",
        description: "A paradigm to allow each data kept outside bitcoin transactions (onchain) under bitcoin consensus rules. This sees users verify transactions and state transitions independently."
    },
    [EntityType.VirtualUTXOs]: {
        name: "Virtual UTXOs",
        description: "A protocol that creates virtual representations of Bitcoin UTXOs to enable more complex transaction structures and scaling."
    },
    [EntityType.zkCSV]: {
        name: "Zero-Knowledge Client Side Validation",
        description: "A client-side validation protocol enhanced with zero-knowledge proofs for improved privacy and efficiency."
    },
    [EntityType.Hybrid]: {
        name: "Hybrid",
        description: "An alternative blockchain that has an official two-wage peg with bitcoin and also enables users to interact with the network through L1 transactions."
    },
    [EntityType.EthereumRollup]: {
        name: "Ethereum Rollup",
        description: "A rollup that uses Ethereum as its data availability layer and settles transactions on the Ethereum network."
    },
    [EntityType.SidechainRollup]: {
        name: "Sidechain Rollup",
        description: "A hybrid approach that combines sidechain and rollup technologies for enhanced scalability and functionality."
    },
    [EntityType.Anchor]: {
        name: "Anchor Chain",
        description: "An anchor chain is a blockchain that posts its latest state root to bitcoin and requires its block produces to build upon that latest state root. This sees anchor chain transactions inherit additional double-spend resistance from bitcoin."
    },
    [EntityType.ChaumianEcashProtocol]: {
        name: "Chaumian Ecash Protocol",
        description: "A digital cash protocol that provides anonymity and privacy for electronic transactions."
    },
    [EntityType.FederationSDK]: {
        name: "Federation SDK",
        description: "A software development kit for building federated networks and applications."
    },
    [EntityType.LiquidStaking]: {
        name: "Liquid Staking",
        description: "A staking mechanism that provides liquidity for staked assets through derivative tokens."
    },
    [EntityType.Restaking]: {
        name: "Restaking",
        description: "A protocol that allows already-staked assets to be used to secure additional networks or services."
    },
    [EntityType.RollupSDK]: {
        name: "Rollup SDK",
        description: "A software development kit for building and deploying rollup solutions."
    },
    [EntityType.Staking]: {
        name: "Staking",
        description: "A process where users lock up their cryptocurrency to support network operations and earn rewards."
    },
    [EntityType.PermissionedChain]: {
        name: "Permissioned Chain",
        description: "A blockchain network where participation is restricted to approved entities."
    },
    [EntityType.ArkSidechain]: {
        name: "Ark on Sidechain",
        description: "An implementation of the Ark protocol running on a sidechain architecture."
    },
    [EntityType.Sequencing]: {
        name: "Sequencing",
        description: "A service that orders and processes transactions before they are included in blocks."
    },
    [EntityType.DataAvailability]: {
        name: "Data Availability",
        description: "A service that ensures transaction data is available and accessible for verification."
    },
    [EntityType.Bridge]: {
        name: "Bridge",
        description: "A protocol that enables the transfer of assets between different blockchain networks."
    },
    [EntityType.RaaS]: {
        name: "Rollup as a Service",
        description: "A service that provides infrastructure and tools for deploying and managing rollup networks."
    },
    [EntityType.BTCWrapper]: {
        name: "BTC Wrapper",
        description: "A protocol that creates wrapped versions of Bitcoin for use on other blockchain networks."
    },
    [EntityType.ReserveAsset]: {
        name: "Reserve Asset",
        description: "A digital asset backed by reserves held in custody or through other mechanisms."
    },
    [EntityType.Lending]: {
        name: "Lending",
        description: "A protocol that enables users to lend and borrow cryptocurrency assets."
    },
    [EntityType.Yield]: {
        name: "Yield",
        description: "A protocol focused on generating returns on cryptocurrency holdings through various strategies."
    },
    [EntityType.SequencingDA]: {
        name: "Sequencing & Data Availability",
        description: "A combined service that provides both transaction sequencing and data availability."
    },
    [EntityType.BitcoinBridge]: {
        name: "Bitcoin Bridge",
        description: "A specialized bridge protocol for transferring Bitcoin assets between networks."
    },
    [EntityType.MPCProtocol]: {
        name: "Multi-Party Computation Protocol",
        description: "A cryptographic protocol that enables multiple parties to jointly compute functions over their inputs while keeping those inputs private."
    },
    [EntityType.TBD]: {
        name: "To Be Determined",
        description: "A placeholder for protocols or networks that are still being categorized or developed."
    },
    [EntityType.Ark]: {
        name: "Ark",
        description: "A protocol that enables users to send and receive payments without going onchain for every transaction."
    },
    [EntityType.Alt]: {
        name: "Alternative Chain",
        description: "An alternative blockchain network that operates independently with its own consensus mechanism."
    },
    [EntityType.SingleOp]: {
        name: "Single Opcode",
        description: "A protocol or improvement that focuses on a single Bitcoin opcode enhancement."
    },
    [EntityType.GroupOp]: {
        name: "Group of Opcodes",
        description: "A protocol or improvement that involves multiple Bitcoin opcodes working together."
    },
    [EntityType.StakedBTC]: {
        name: "Natively Staked BTC",
        description: "Bitcoin that is natively staked to secure a network or protocol."
    },
    [EntityType["-"]]: {
        name: "Not Applicable",
        description: "This classification does not apply to the current context."
    }
};

const NetworkTypeHoverCard: React.FC<NetworkTypeHoverCardProps> = ({ entityType, children }) => {
    const typeInfo = entityTypeDefinitions[entityType];
    
    if (!typeInfo) {
        return <>{children}</>;
    }

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                {children}
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{typeInfo.name}</h4>
                    <p className="text-sm text-muted-foreground">
                        {typeInfo.description}
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default NetworkTypeHoverCard; 