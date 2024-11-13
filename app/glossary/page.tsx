"use client";
import React from "react";

import { useEffect } from "react";

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element =
        document.getElementById(id) ||
        document.getElementById(id.toLowerCase().replace(/\s+/g, "-"));
    if (element) {
        const yOffset = -60;
        const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};

type GlossaryItem = {
    term: string;
    definition: string;
};

type GlossaryData = {
    [key: string]: GlossaryItem[];
};

// {
//     term: "x",
//     definition:
//         "y",
// },

const glossaryData: GlossaryData = {
    A: [
        {
            term: "Atomic swap",
            definition:
                "An exchange of crypto assets that does not require a trusted third party. Atomic swaps leverage smart contracts to ensure both parties fulfill transaction obligations before the swap is completed, otherwise, the transaction is canceled, and funds are returned to their respective owners. Atomicity refers to guarantee of a single, individible outcome, i.e., one token transfer cannot execute without its counterparty transfer also executing. In the context of Bitcoin, atomic swaps enable the seamless exchange of BTC with other cryptocurrencies in a secure and decentralized manner.",
        },
    ],
    B: [
        {
            term: "Bitcoin layer",
            definition:
                "A deliberately ambiguous term that encapsulates L2s, sidechains, state chains, and other networks 'aligned' with either Bitcoin (the network) or BTC (the asset).",
        },
        {
            term: "Bitcoin Script",
            definition:
                "A low-level Assembly-based programming language used to define the conditions under which a Bitcoin UTXO can be spent.",
        },
        {
            term: "Blind merge mining",
            definition:
                "A technique that allows miners to simultaneously mine multiple blockchains without needing to be fully aware of the contents of the additional chains.",
        },
    ],
    C: [
        {
            term: "Challenge period",
            definition:
                "A security mechanism that enables anyone to contest a (sometimes fraudulent) state transition within a given time frame. If a challenge period passes without a challenge, the state transition is considered finalized.",
        },
        {
            term: "Client side validation (CSV)",
            definition:
                "A paradigm to allow each data kept outside bitcoin transactions (onchain) under Bitcoin consensus rules. This sees users verify transactions and state transitions independently.",
        },
        {
            term: "Consensus mechanism",
            definition:
                "A procedure used to reach a collective agreement regarding the status of a data set or the ledger's state. Consensus mechanisms consists of several parts, such as Sybil resistance mechanisms (e.g., PoW, PoS, PoA), leader selection algorithms, and vote-power weighting systems.",
        },
        {
            term: "Covenant",
            definition:
                "A mechanism that allows users to impose constraints on how BTC (a UTXO) can be transferred in future transactions.",
        },
    ],
    D: [
        {
            term: "Data availability",
            definition:
                "The publishing of transaction data is required to verify transactions, satisfy proving schemes, or otherwise progress the chain. Data availability is where a specific party makes a layer's protocol available for a specific period of time. In Bitcoin, a layer's protocol data is made available by bitcoin full nodes. A layer would publish transaction data to bitcoin via an inscription-like envelope and any bitcoin full node would be able to verify that the data has indeed been published.",
        },
        {
            term: "Discrete Log Contract (DLC)",
            definition:
                "A type of smart contract designed to facilitate financial agreements on the Bitcoin network using oracles to provide external data. DLCs enable the creation of complex financial instruments, such as options and futures, by using cryptographic techniques to ensure that the contract is executed based on the outcome of real-world events.",
        },
        // {
        //     term: "Drivechain",
        //     definition:
        //         "A separate blockchain (sidechain) pegged to the Bitcoin mainchain. Drivechains allow Bitcoin to create, delete, send BTC to, and receive BTC from sidechains called sidechains.",
        // },
    ],
    E: [
        {
            term: "Ethereum Virtual Machine (EVM)",
            definition:
                "A software that sets the rules of computing the state of the Ethereum network from block to block. It serves as the runtime environment for executing smart contracts and decentralized applications.",
        },
    ],
    F: [
        {
            term: "Federated peg",
            definition:
                "A two-way peg (bridge) controlled by a federation (a permissioned group of overseers). A group of trusted and permissioned parties (the federation) oversees the transfer process, ensuring the security and integrity of the assets being moved.",
        },
        {
            term: "Forced inclusion",
            definition:
                "A mechanism for increasing censorship resistance in a Bitcoin layer. It enables a single participant to circumvent sequencer censorship by submitting their transaction directly to the L1 inbox contract. This forces the sequencer to include the transaction in the upcoming batch.",
        },
        {
            term: "Fraud proof",
            definition:
                "A cryptographic proof that enables challengers to contest a proposed state transition that contains invalid or fraudulent transactions. Networks that use fraud proofs (e.g., optmistic rollups or optimiums) initially assume that new blocks are valid, then rely on users or watchtowers to challenge blocks if they include invalid state transitions, which are then resolved on the L1.",
        },
        {
            term: "Full node",
            definition:
                "A node actor that validates all transactions. A full node verifies and enforces all the rules of the network, rather than only verifying headers (such as light client nodes do). Full nodes do not participate in block production (such as PoW miner nodes or PoS validator nodes do) or store a full copy of a blockchain's history (such as archival nodes do).",
        },
    ],
    // G: [],
    // H: [],
    // I: [],
    // J: [],
    // K: [],
    L: [
        {
            term: "Layer 1 (L1)",
            definition:
                "A sovereign network that performs all four core functions of a crypto network: consensus, security, data availability, and execution. In this context, Bitcoin is the L1.",
        },
        {
            term: "Layer 2 (L2)",
            definition:
                "A modular network with dedicated execution. L2s rely on an underlying L1 for consensus, security, and data availability, with the ability for users to unilaterally remove funds from the L2 through an L1 transaction.",
        },
    ],

    M: [
        {
            term: "Maximal Extractable Value (MEV)",
            definition:
                "The maximum value block producers (miners or validators) can obtain by including, reordering, or excluding transactions when producing a new block. MEV is also known as miner extractable value in PoW systems. Nearly all consensus systems create, for short periods of time, privileged actors (e.g., the miner with the right to produce the next block) which have asymmetric knowledge or control over transactions; for sophisitacted actors, this asymmetric position allows them to make financial gains at the expense of other users. Less-sophisticated block producers will have trouble capitalizing on MEV opportunities and could be priced out of the role over time if margins are thin, leading to centralization.",
        },
        {
            term: "Merge mining",
            definition:
                "A consensus strategy in which a sidechain (L1) uses a similar consensus mechanism to Bitcoin, with the same PoW hashing algorithm. By using the same algorithm for consensus, Bitcoin miners can opt-in to securing and producing blocks for the sidechain with essentially no additional costs (i.e., reusing the same “work” from Bitcoin’s PoW). To merge mine a sidechain, a Bitcoin miner would run node software for the sidechain and configure it with their Bitcoin miner.",
        },
        {
            term: "Merkle proof",
            definition:
                "A set of hashes that can be used to prove a given leaf's (i.e., a given piece of data) membership in a Merkle tree (i.e, a compressed data format).",
        },
        {
            term: "Modular blockchain",
            definition:
                "A specialized blockchains that focuses on only one core function of a blockchain: consensus, security, data availability, or execution. This is similar to the microservices approach in software engineering, where each service is specialized in one function and can be swapped out for another service that performs the same function.",
        },
        {
            term: "MPC (multi-party computation) bridge",
            definition:
                "A cryptographic technique that enables a group of participants (a federation) to collectively manage and control the movement of BTC between Bitcoin and a given destination chain.",
        },
        {
            term: "Multisig (multi-signature) wallet",
            definition:
                "A wallet for which at least two private keys are needed to sign a transaction.",
        },
    ],
    // N: [
    // {
    //     term: "x",
    //     definition:
    //         "y",
    // },],
    O: [
        {
            term: "Opcode (operation code)",
            definition:
                "An instruction in Bitcoin Script used to dictate logic for transactions, enabling the creation of custom transaction types and smart contracts. Bitcoin Script supports hundreds of opcodes which can be combined to create complex (but not Turing-complete) scripts that define the conditions under which a UTXO can be spent.",
        },
        {
            term: "Optimium",
            definition:
                "A modular execution layer that has a canonical bridge contract with its underlying L1, but does not use that L1 for data availability. Fraud proofs are used to challenge invalid state transitions posted by the sequencer to the L1 contract. Unlike validiums, the enforcement of valid state transitions for optimiums relies on the ability of users to access data availability to create challenges.",
        },
    ],
    P: [
        {
            term: "Payment channel",
            definition:
                "A two-of-two multi-signature wallet that enables two parties to conduct limitless transactions between themselves without broadcasting each one to the Bitcoin network. Only the state differential (i.e., the start state and the end state) need to be posted onchain to close a payment channel and settle the balance.",
        },
        {
            term: "Prover",
            definition:
                "A node actor in validity rollups systems which submits a SNARK proof that attests to the correctness of a rollup state transition. Rollup state transitions are considered final after the proof is accepted onchain, which also enables the corresponding bridge contract to process withdrawals.",
        },
        {
            term: "Proof-of-Stake (PoS)",
            definition:
                "A sybil resistance mechanism in which the right to produce a block is proportional to an actor’s staked assets. PoS systems are designed to be more energy-efficient than PoW systems, as they do not require miners to solve complex mathematical puzzles to produce blocks. Instead, PoS systems rely on validators to propose and validate blocks based on the amount of assets they have staked as collateral. PoS systems typically use endogenous security resources.",
        },
        {
            term: "Proof-of-Work (PoW)",
            definition:
                "A sybil resistance mechanism in which the right to produce a block is awarded to the actor that solves a computationally difficult problem, such as guessing the input to a hash function. PoW systems are designed to be energy-intensive and require miners to invest in specialized hardware to compete for block rewards. PoW systems typically use exogenous security resources. PoW systems are typically distributive for tokens, unlike PoS systems which are accumulative; this difference is due to the overhead costs of exogenous security resources.",
        },
    ],
    // Q: [],
    R: [
        {
            term: "Rollup",
            definition:
                "A modular blockchain that uses a parent blockchain for data availability. The blockchain stores its state root and enough transaction data to reconstruct the state of the blockchain from genesis in the parent blockchain.",
        },
    ],
    S: [
        {
            term: "Sequencer",
            definition:
                "A node actor that includes and orders transactions within rollup, or validia chain, blocks. These systems take transactions from the rollup mempool and construct blocks. These systems can range from being centralized servers or decentralized consensus networks.",
        },
        {
            term: "Sidechain",
            definition:
                "An L1 that exists to add more functionality to BTC the asset. L1s are sovereign in technical architecture but typically exist as subsets of the broader Bitcoin ecosystem. It’s common for sidechains to enshrine a BTC bridge into their consensus mechanisms or involve Bitcoin miners in consensus - through merge mining or fee sharing.",
        },
        //TODO SPV
        {
            term: "Smart contract",
            definition:
                "A self-executing program that automates the actions required in a blockchain transaction. A smart contract is like a digital vending machine: a deterministic, transparent, and automated procedure.",
        },
        {
            term: "Soft fork",
            definition:
                "A backward-compatible upgrade to a network's protocol that introduces new rules, allowing upgraded nodes to recognize and enforce these rules while non-upgraded nodes continue to operate under the old rules.",
        },

        {
            term: "Sovereign rollup",
            definition:
                "A rollup implementation that sovereignly manages its own execution environment, and does not have a canonical bridge with its parent blockchain. Rollups on Bitcoin are technically sovereign rollups, even if they have a socially enshrined two-way peg.",
        },
        {
            term: "Spiderchain",
            definition:
                "A sidechain protocol that leverages a variety of rotating multi-sigs to secure the BTC that is deposited into the sidechain.",
        },
        {
            term: "State channel",
            definition:
                "A type of L2 scaling solution that allows participants to conduct transactions offchain, in a faster and cheaper environment. Only the state differentials (i.e., the start state and the end state) are recorded on the blockchain, reducing the load on the main network and by extension, the fees required. Unlike rollups, state channels do not have a 'global state' and instead exist as a series of bilateral agreements between participants.",
        },
        {
            term: "State validation",
            definition:
                "A mechanism by which a blockchain is able to validate that a state transition (e.g., a transaction) was performed correctly.",
        },
        {
            term: "Statechain",
            definition:
                "A protocol where users enter a 2-2 multisig with a federated entity and transfer ownership of a UTXO to an intended recipient by providing them a statechain private key for that specific UTXO.",
        },
        {
            term: "Subnet",
            definition:
                "A specialized blockchain that operates within a larger network, designed to handle specific tasks or applications independently.",
        },
    ],
    T: [
        {
            term: "Two-way peg",
            definition:
                "A system that facilitates the minting and burning of BTC-backed tokens on a Bitcoin layer or alternative L1. These systems are also known as bridges.",
        },
    ],
    U: [
        {
            term: "Unilateral exit",
            definition:
                "The ability of a single participant to withdraw funds from a bridge without permission from any other network participant. In practice, unilateral exit often describes the ability to exit a bridge using an L1 transaction, providing a safeguard against bridge liveness and security failures.",
        },
        {
            term: "Unspent Transaction Output (UTXO)",
            definition:
                "Bitcoin’s accounting model. A UTXO is an amount of BTC that has never been spent. UTXOs are ephemeral and can only be spent once. By spending a UTXO, it is destroyed and one or more UTXOs of equivalent value must be created in its place. UTXO creation and destruction exists in a many:many model, with multiple inputs and outputs allowed. This is in contrast to the account-based accounting model used by Ethereum, where balances are stored in accounts (i.e., a global state) and can be spent multiple times.",
        },
    ],

    V: [
        {
            term: "Validity rollup",
            definition:
                "A rollup where a prover submits a validity proof to a verifier contract on the L1 proving that the state transition was executed correctly.",
        },
        {
            term: "Validia",
            definition:
                "A modular execution layer that has a canonical bridge contract with its underlying L1, but does not use that L1 for data availability (it instead uses an offchain system for data availability). Validia is a general term for validiums (validia using validity proofs) and optimiums (validia using fraud proofs).",
        },
        {
            term: "Validity proof",
            definition:
                "A cryptographic proof that mathematically verifies the validity of an execution trace up front. Validity proofs ensure that a given state transition or set of transactions is valid according to the rules of the protocol immediately, unlike fraud proofs which optimistically assume correctness and rely on watchtowers to catch malicious actors after the fact.",
        },
        {
            term: "Validium",
            definition:
                "A modular execution layer that has a canonical bridge contract with its underlying L1, but does not use that L1 for data availability. Validity proofs are used to prove the validity of state transitions posted to the L1 contract.",
        },
    ],
    // W: [],
    // X: [],
    // Y: [],
    // Z: [],
    // template: [{ term: "XXX", definition: "YYY" }],
};

const GlossaryPage: React.FC = () => {
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const element = document.getElementById(
                    hash.toLowerCase().replace(/\s+/g, "-"),
                );
                if (element) {
                    const yOffset = -60;
                    const y =
                        element.getBoundingClientRect().top +
                        window.scrollY +
                        yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }
        };

        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const renderGlossarySection = (letter: string) => (
        <div id={letter} className="mb-8 flex flex-col lg:flex-row items-start">
            <div className="font-black text-text_tertiary font-playfair-display text-10xl flex-shrink-0 w-24 leading-none">
                {letter}
            </div>
            <div className="flex-grow bg-white rounded-xl border border-slate-300 p-4">
                {glossaryData[letter].map((item, index) => (
                    <div
                        id={item.term.toLowerCase().replace(/\s+/g, "-")}
                        key={index}
                        className="m-2 gap-4 group"
                    >
                        <div className="flex items-center mb-4">
                            <div className="special_header text-3xl font-light text-brand leading-9">
                                {item.term}
                            </div>
                            <button
                                className="ml-2 text-blue-500 hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => {
                                    const link = `${window.location.origin}${window.location.pathname}#${item.term.toLowerCase().replace(/\s+/g, "-")}`;
                                    navigator.clipboard.writeText(link);
                                    alert("Link copied to clipboard!");
                                }}
                            >
                                🔗
                            </button>
                        </div>
                        <div className="text-base font-normal text-slate-500 leading-normal">
                            {item.definition}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <article className="flex flex-col max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-8 w-full">
                    <div className="flex-grow flex items-center gap-[30px] h-[156px]">
                        <div className="special_header flex-grow h-20 text_table_important">
                            Glossary
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full">
                    <nav className="lg:w-1/8 lg:mb-8 mb-4 mr-12 lg:pr-4">
                        <div className="flex lg:flex-col flex-row lg:gap-4 gap-2 lg:sticky lg:top-20">
                            {Object.keys(glossaryData).map((letter) => (
                                <a
                                    key={letter}
                                    href={`#${letter}`}
                                    onClick={(e) => handleScroll(e, letter)}
                                    className="text-lg font-medium text-text_primary hover:text-brand"
                                >
                                    {letter}
                                </a>
                            ))}
                        </div>
                    </nav>
                    <div className="w-full">
                        {Object.keys(glossaryData).map((letter) =>
                            renderGlossarySection(letter),
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default GlossaryPage;
