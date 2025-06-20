import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    EntityCategory,
    Notice,
    Site,
    AssessmentCategory,
    OtherRiskSummarySnippet,
} from "../props";

const fedimint: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "fedimint",
    title: "Fedimint",
    entityType: EntityType.ChaumianEcashProtocol,
    entityCategory: EntityCategory.More,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "BTC",
    purpose: Purpose.EcashMint,
    notice: undefined,
    associatedLayers: "lightning",
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
            text: Site.Twitter,
            url: "https://x.com/fedimint",
        },
    ],
    description:
        "Fedimint is a module-based open source framework for building federated applications, which can be collaboratively managed by a group of trusted entities. The main application that is in production today is an open source federated Ecash mint. The construction of a Fedimint sees users lock their BTC into a federation's multi-sig, and receive a bearer Ecash IOU in return. The concept improves on the currently predominant form of third party custody, as the user has a socially known and trusted entity guarding their BTC; a concept that is termed “second party custody”.",
        riskSummary: [
            {
                title: OtherRiskSummarySnippet.EcashCustodyTitle,
                content: OtherRiskSummarySnippet.FedimintCustody,
            },
            {
                title: "Users must select which mint custodies their funds",
                content: OtherRiskSummarySnippet.VariousMints,
            },
            {
                title: "Tokens can be debased",
                content: OtherRiskSummarySnippet.EcashDebasementRisk,
            }
        ],
        sections: [
        {
            id: "coretechnology",
            title: "Core Technology Components",
            content: [
                {
                    title: "Chaumian Ecash",
                    content:
                        "Chaumian Ecash enables a Fedimint to create and redeem IOU notes that represent claims on bitcoin. Ecash uses blinded signatures. This shields users’ balance towards the mint and ensures the privacy of transactions.",
                },
                {
                    title: "Federations",
                    content:
                        "Fedimint categorizes as a “federated Chaumian Mint”, jointly operated by multiple trusted entities(referred to as guardians) via a multisig setup.",
                },
                {
                    title: "Lightning Swaps",
                    content:
                        "Fedimints enable Lightning interoperability through LN gateways. A guardian or even any user of a federation can run a lightning node and pay and accept lightning invoices on behalf of users in the federation. This is particularly useful as Fedimint users don't need to be online to accept lightning payments.",
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
                {
                    title: "Second Party Custody",
                    content:
                        "It is being argued that self-custody, in its current form, is difficult for non-tech-savvy users. Fedimints would enable users to deposit their Bitcoin with a federation of trusted “second” parties” (e.g. family member or community leader). Federated community custody may be preferred by some users over the prevailing third party custodial model.",
                },
                {
                    title: "Cheap and fast transactions",
                    content:
                        "Fedimints provide low transaction fees for users, as a mint is a central entity and transactions do not require Bitcoin blockspace. Fund deposits can either be done via an onchain deposit or via the Lightning Network.",
                },
                {
                    title: "General Purpose Smart Contracts",
                    content:
                        "Fedimints can support any arbitrary computation. Federations supporting application modules like borrowing and lending protocols, and stablecoins, are possible.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content:
                        "[Fedimint documentation site covering technological components and use cases.](https://fedimint.org)\n[Fedi offers a Fedimint wallet and shows how a Fedimint would work in practice.](https://www.fedi.xyz/product)\n[Fedimint's FAQs answer frequently asked questions.](https://fedimint.org/docs/category/frequently-asked-questions)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users funds are managed by a set of guardians",
            content:
                "A Fedimint is operated by a number of guardians that custody users’ funds in return for issuing bearer Ecash tokens. If the mint gets hacked, becomes unresponsive or turns malicious, token redemption is at risk.",
        },
    ],
};

export default fedimint;
