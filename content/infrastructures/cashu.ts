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

const cashu: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "cashu",
    title: "Cashu",
    entityType: EntityType.ChaumianEcashProtocol,
    entityCategory: EntityCategory.More,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "BTC",
    purpose: Purpose.EcashMint,
    associatedLayers: "lightning",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://cashu.space",
        },
        {
            text: Site.Docs,
            url: "https://docs.cashu.space",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/cashubtc",
        // },
        {
            text: Site.GitHub,
            url: "https://github.com/cashubtc",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/CashuBTC",
        },
    ],
    description:
        "An Ecash system consists of two parts, the mint and the Ecash wallet that stores digital bearer tokens. There are [several libraries](https://docs.cashu.space/libraries) that allow developers to build their respective services. Using blind signatures assures users’ privacy towards the mint when transacting with Ecash tokens.",
        riskSummary: [
            {
                title: OtherRiskSummarySnippet.EcashCustodyTitle,
                content: OtherRiskSummarySnippet.CashuCustody,
            },
            {
                title: "Users must select which mint custodies their funds",
                content: OtherRiskSummarySnippet.VariousMints,
            },
            {
                title: "Tokens can be debased",
                content: OtherRiskSummarySnippet.EcashDebasementRisk,
            },
        ],
        sections: [
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Chaumian blinding",
                    content:
                        "Chaumian blinding works by allowing a message to be signed without revealing its content to the signer itself. The process involves a blinding factor that obscures the message. The signed blinded message is unblinded by the creator of the message using the original blinding factor.",
                },
                {
                    title: "Mint module",
                    content:
                        "In the context of Cashu, a mint is a trusted entity that is responsible for issuing (“minting”) and redeeming (“melting”) Ecash tokens. Those tokens act as IOUs and are backed by BTC. Having mints hold users’ funds, requires the user to trust the mint to redeem their Ecash when they wish to convert back to BTC. Peg-ins and peg-outs to and from a Cashu mint happen through the Lightning Network. The LN infrastructure is run by the mints themselves or by public and untrusted Lightning gateways (Cashu wallets are not LN wallets). The blinding mechanism ensures that the mint operator remains unaware of users’ account balance or transaction data. Every entity running a Lightning node can run a mint using one of the [available implementations](https://docs.cashu.space/mints). The easiest way to do so is via [Nutshell](https://github.com/cashubtc/nutshell).",
                },
                {
                    title: "Token Issuance",
                    content:
                        "While Ecash itself is an IOU from the mint towards the user, Ecash tokens itself are bearer instruments, which means that the holder of the bearer instrument - in this case a [mere data string](https://www.youtube.com/watch?v=xfYmwc-gnK8&t=379s) - is presumed to be the owner of the asset. To receive Cashu tokens, the user has two choices: 1. The user can pay a Lightning invoice issued by its [mint of choice](https://bitcoinmints.com/), which hands out the Ecash tokens in return. 2. The user receives Ecash from another user. Each mint issues their own tokens.",
                },
                {
                    title: "Token Transfer",
                    content:
                        "The mentioned data string (aka Cashu token) can be sent via any Cashu-enabled wallet (even [offline](https://x.com/callebtc/status/1796071406624465113)) or via any messaging-supportive medium (e.g. telegram, nostr protocol, .., even [radio](https://x.com/jurbed/status/1748485334210396506)). To prevent double-spending, the recipient needs to immediately swap its token for a new one with the help of the respective mint. However, if it’s a [P2PK locked token](https://github.com/cashubtc/nuts/blob/main/11.md), the sender can’t double-spend; the receiver can even be offline and swap at a later point in time. Using a Cashu wallet, and the sender and recipient are using the same mint (a user can use as many mints as desired), results in a seamless process where the mint simply melts the senders’ token and mints a new one for the recipient. Inter-mint transfers are facilitated through the “[Multimint Swap functionality](https://docs.cashu.space/faq#mints)”, which operates via Lightning invoices under the hood. A Lightning MPP (Multi-Path Payment) equivalent, called “Multinut Payments” has [recently been implemented](https://x.com/callebtc/status/1793554488806248839) in Cashu via [NUT15](https://github.com/cashubtc/nuts/blob/main/15.md). Cashu also offers [Cashu addresses](https://github.com/cashubtc/npubcash-server), an LNURL service.",
                },
                {
                    title: "Wallets",
                    content:
                        "Cashu wallets manage Ecash transactions. Unlike traditional Lightning wallets, Cashu wallets do not operate a Lightning node. Instead, they leverage the Cashu protocol to interact with Cashu mints, which handle the Lightning infrastructure and custody users’ funds. This setup requires users to trust the mint with the redemption of their Ecash back to Lightning. [Numerous Cashu wallets](https://docs.cashu.space/wallets) are available: native app wallets, web wallets and headless CLI wallets. They all adhere to the mandatory [Cashu NUTs](https://github.com/cashubtc/nuts) to ensure standardization and security. They differ for example in Tor support, nostr integration and add different of the optional NUT specifications. For easy integration of Cashu payments into any application, a [CDK](https://github.com/cashubtc/cdk) is being developed. [Cashu-ts](https://github.com/cashubtc/cashu-ts) is the most popular wallet library to date.",
                },
                {
                    title: "Backups",
                    content:
                        "Cashu tokens are bearer asset tokens, meaning the data stored in the wallet (browser local storage) represents the actual money. Consequently, if this storage gets wiped, funds will be lost. Backups all support the same seed phrase mechanism. [Cashu.me](http://Cashu.me) has the additional option to exported the backup and [Minibits](https://github.com/minibits-cash/minibits_wallet) offers a local append-only backup of all ecash in a database separate from the wallet storage. To move your Cashu tokens to another wallet implementation, you can make a wallet-to-wallet transfer or melt and re-mint via LN.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Enhanced user privacy",
                    content:
                        "Cashu aims at providing a better custodial experience by [enhancing privacy](https://maxmoney.substack.com/p/ecash-for-better-bitcoin-privacy) and therefore protecting users’ data: the custodian would not - in contrast to the current state - learn about users’ account balances, nor about their transaction history or spending habits.",
                },
                {
                    title: "Programmable Ecash",
                    content:
                        "The token can furthermore carry additional spending restrictions ([NUT11](https://github.com/cashubtc/nuts/blob/main/11.md)) by using P2PK. This enables time-locked payments, multi-sig transactions or conditional payments.",
                },
                {
                    title: "Submarine nuts (Submarine Swap equivalent)",
                    content:
                        "Ecash-based HTLCs can be atomically linked to Ecash [HTLCs](https://x.com/callebtc/status/1742948259050500561). This might enable a submarine swap-equivalent (BTC-LN), called “[submarine nuts](https://x.com/callebtc/status/1704915759808303542)” (Cashu <--> LN), meaning LN nodes can assist one another in receiving funds even if they lack any channels or inbound liquidity.",
                },
                {
                    title: "Cashu via nostr",
                    content:
                        "Cashu tokens can be [sent](https://x.com/CashuBTC/status/1616063616150634498) via [nostr](https://nostr.com/), an open protocol that enables a global social network. The message is an encrypted [NIP-04 DM](https://x.com/CashuBTC/status/1607423255681318914). Nostr Wallet Connect (NWC) will further enable users to zap other users with [Cashu tokens](https://x.com/callebtc/status/1787519215051715016).",
                },
                {
                    title: "Stablenuts: USD Ecash, backed by BTC (Stablesats equivalent)",
                    content:
                        "Stablenuts [was tested](https://x.com/CashuBTC/status/1711676159639929135) as a Cashu USD mint supported by a Strike Lightning BTC wallet. It enables the conversion of Lightning BTC to Ecash USD and back to Lightning BTC, potentially running on DLCs, USDT, LNMarkets, Stablesats, or any fiat-stable Bitcoin rails. [Boardwalk introduced](https://x.com/makeprisms/status/1790423585888280756) the first dollar-based Cashu wallet built on Bitcoin and connected to nostr shortly after.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Privacy chokepoints (user-inflicted)",
                    content:
                        "While Cashu token transfers provide the transacting entity with an incomparable degree of privacy, there’s some chokepoints to bear in mind: not using a VPN/Tor/mixnet, etc, when interacting with the mint, may leak network metadata. The mint might collect network data such as access time, IP addresses and or other metadata users might leak information when melting their tokens with the mint and receiving Bitcoin via LN in return. The privacy characteristics of a recipient on LN apply in this case.",
                },
                {
                    title: "KYC/AML integrations possible",
                    content:
                        "While the mint stays unaware of its user base in the current implementation, [an optional authentication protocol can be added](https://x.com/CashuBTC/status/1791001643019809146) to the protocol that allows mints to control access to its services. This authentication protocol could enable KYC/AML integration with Ecash.",
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
                        "[Main Cashu website](https://cashu.space/)\n[Curated resource section](https://docs.cashu.space/resources/learn)\n[David Chaum - Blind signatures for untraceable payments](https://chaum.com/wp-content/uploads/2022/01/Chaum-blind-signatures.pdf)\n[Proof of Liabilities scheme](https://gist.github.com/callebtc/ed5228d1d8cbaade0104db5d1cf63939)\n[Cashu NUTs (Notation, Usage, and Terminology) specification](https://github.com/cashubtc/nuts)\n[Video explainer by Rijndael](https://www.youtube.com/watch?v=xfYmwc-gnK8&t=379s)\n[Cashu FAQ](https://docs.cashu.space/faq#general-safety-and-privacy-questions)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users funds are managed by a single entity",
            content:
                "A Cashu mint is operated by a single entity that custodies users’ funds in return for issuing bearer Ecash tokens. If the mint gets hacked, becomes unresponsive or turns malicious, token redemption is at risk.",
        },
    ],
};

export default cashu;
