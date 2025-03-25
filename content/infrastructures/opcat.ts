import {
    InfrastructureProject,
    Purpose,
    AssessmentCategory,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
} from "../props";

const opcat: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "opcat",
    title: "OP_CAT",
    entityType: EntityType.SingleOp,
    live: LiveStatus.BIP,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "BTC",
    purpose: Purpose.EcashMint,
    associatedLayers: "Rollups, Alt. Rollups, ",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://fedimint.org",
        },
        {
            text: Site.Docs,
            url: "https://fedimint.org/docs/intro",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/fedimint",
        // },
        {
            text: Site.GitHub,
            url: "https://github.com/fedimint",
        },
        {
            text: Site.GitHub,
            url: "https://x.com/fedimint",
        },
    ],
    description:
        "OP_CAT is an opcode that was removed from bitcoin script. It's been proposed to be re-added into script. Its key feature is that it concatenates two data elements.",
    sections: [
        {
            id: "Use cases",
            title: "Use cases",
            content: [
                {
                    title: "Recursive Covenants",
                    content:
                        "OP_CAT is a proposed opcode that could enable two primitives that would support improved bridging protocols for projects like Starknet. The first enables users to predefine spending conditions for individual UTXOs. The second primitive is the verification of merkle tree branches. This would enable you to continuously add hashes of data to a merkle tree that continuously builds upon restrictions placed by previous transactions.\n\nBy building a continuous chain of restrictions over a number of transactions, you enable recursive covenants. Recursive covenants enable users to lock funds into a group UTXO that can continuously add more restrictions based on new user deposits, and additionally enforce changes for partial withdrawals which must go back into the rollup script.",
                 },
                 {
                    title: "STARK Verifier with OP_CAT",
                    content:
                        "An issue that arises from shared UTXOs, specifically for L2s, is that you need a trusted party to verify offchain state transitions to enable users to withdraw funds relative to their updated balance. The StarkWare team (lead developers of Starknet) are working with L2 Iterative Ventures on developing a STARK verifier directly in Bitcoin Script with OP_CAT.\n\nIn rollups, state differences are compressed together and sent to the Bitcoin L1 with a corresponding validity proof proving that the state transition was executed correctly. Starknet are proposing a mechanism that would verify these STARK proofs proving the validity of L2 state transitions. By verifying offchain state transitions directly in Script, shared UTXOs would be able to process user withdrawals based on their updated balances. Recursive covenants and onchain STARK verification would create trust-minimized bridge programs for L2s.",
                 },
            ],
        },
        
        {
            id: "script-functionality",
            title: "Script Functionality",
            content: [
                {
                    title: "Example SNARK verifier",
                    content:
`fn reconstruct() -> Script {
    script! {
        // handle 0x80 specially---it is the "negative zero", but most arithmetic opcodes refuse to work with it.
        OP_DUP OP_PUSHBYTES_1 OP_LEFT OP_EQUAL
        OP_IF
            OP_DROP
            OP_PUSHBYTES_0 OP_TOALTSTACK
            OP_PUSHBYTES_4 OP_PUSHBYTES_0 OP_PUSHBYTES_0 OP_PUSHBYTES_0 OP_LEFT
        OP_ELSE
            OP_DUP OP_ABS
            OP_DUP OP_TOALTSTACK

            OP_SIZE 4 OP_LESSTHAN
            OP_IF
                OP_DUP OP_ROT
                OP_EQUAL OP_TOALTSTACK

                // stack: abs(a)
                // altstack: abs(a), is_positive

                OP_SIZE 2 OP_LESSTHAN OP_IF OP_PUSHBYTES_2 OP_PUSHBYTES_0 OP_PUSHBYTES_0 OP_CAT OP_ENDIF
                OP_SIZE 3 OP_LESSTHAN OP_IF OP_PUSHBYTES_1 OP_PUSHBYTES_0 OP_CAT OP_ENDIF

                OP_FROMALTSTACK
                OP_IF
                    OP_PUSHBYTES_1 OP_PUSHBYTES_0
                OP_ELSE
                    OP_PUSHBYTES_1 OP_LEFT
                OP_ENDIF
                OP_CAT
            OP_ELSE
                OP_DROP
            OP_ENDIF
        OP_ENDIF
    }
}`                    
                 },
            ],
        },
        {
            id: "stakeholderresources",
            title: "Stakeholder Resources",
            content: [
                {
                    title: "Learn how OP_CAT impacts you",
                    content:
                        "Each softfork proposal impacts different stakeholders differently. Check out the resources below to learn this proposal would impact you.",
                },
            ],
        },
    ],
};



export default opcat;