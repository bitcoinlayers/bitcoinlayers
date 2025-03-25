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
                    title: "Users do not have custody of their BTC and trust guardians to process withdrawals",
                    content:
                        "Users deposit BTC into a multisig to interact with a Fedimint. Fedimints do not enable unilateral exits. Users explicitly trust the signers, known as guardians, of the federations’ multisig to not steal their funds. Stealing users’ funds needs a majority (e.g. 3/5 or 7/13) of guardians to collude. This is why “knowing your federation” is a key requirement when choosing second party custody.",
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
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Private Payments",
                    content:
                        "Fedimints enable anonymous payments through the use of blinded signatures. The mint is unaware of transactions made by the users or their respective account balance. The mint can only establish a link to a users’ onchain address when pegging in and out of the mint.",
                },
            ],
        },
        {
            id: "stakeholderresources",
            title: "Stakeholder Resources",
            content: [
                {
                    title: "Private Payments",
                    content:
                        "Fedimints enable anonymous payments through the use of blinded signatures. The mint is unaware of transactions made by the users or their respective account balance. The mint can only establish a link to a users’ onchain address when pegging in and out of the mint.",
                },
            ],
        },
        {
            id: "sources",
            title: "Sources",
            content: [
                {
                    title: "Code is open source",
                    content:
                        "All code related to the Fedimint project is free and open source.",
                },
            ],
        },
    ],
};



export default opcat;