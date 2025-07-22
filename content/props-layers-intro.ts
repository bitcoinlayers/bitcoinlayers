export enum RiskSummarySnippet { //TODO: Janusz to add more here
    RiskSummarySecurityCouncil = "If the security council is compromised, they can immediately upgrade specific contracts and potentially steal user funds. This risk may be relevant to BTC-backed tokens locked in the layer's official bridge contract.",
    RiskSummaryImmediateUpgrade = "A centralized party can immediately upgrade specific system contracts. This risk may be relevant to BTC-backed tokens locked in the layer's official bridge contract.",
    RiskSummaryCentralNotImmediateUpgrade = "A centralized party can upgrade bridge contracts and steal user funds.",
    TitleBridgeUpgrade = "Bridge contracts are upgradeable",
    TitleSystemUpgrade = "Some system contracts are upgradeable",
    TitleUpgrade = "Some contracts are upgradeable. These contracts may be related to BTC-backed tokens locked in the layer's official bridge contract.",
    RiskSummaryCustodianPegs = "All BTC backing wrapped tokens on this network are ultimately secured by custodians. Users trust that these custodians will not misappropriate funds and keep their assets pegged 1:1. Each custodian has their own risks. Learn more in the trust assumptions review section.",
    TitleCustodianPegs = "All BTC pegs have custodian trust assumptions",
    RiskSummaryAltDANetwork = "Data related to the network's state is made available by another consensus network. The network's state cannot make progress if the data availability layer withholds the data. If the network cannot make progress, user funds can be frozen.",
    RiskSummaryAltDACommittee = "Data related to the network's state is made available by an offchain committee. The network's state cannot make progress if this committee withholds the data. If the network cannot make progress, user funds can be frozen.",
    TitleAltDA = "Another data availability layer is used",
    RiskSummaryCentralizedSequencer = "The network is operated by a centralized operator. If this operator goes offline, the network can be halted which can freeze user funds. Please see the trust assumptions to learn if their is a fallback mechanism for liveness failures.",
    TitleCentralizedSequencer = "A centralized entity is the network operator",
    RiskSummaryAlternativeL1 = "The network is an alternative blockchain. Users trust the economic security of the network to deter validators from censorship and creating malicious peg outs.",
    TitleAlternativeL1 = "The network is an alternative blockchain",
    TitleFederation = "The network is managed by a federation.",
    RiskSummaryFederation = "The network is managed by a federation. Users trust the federation to not censor them, halt the network, and freeze user funds.",
    RiskFederationPeg = "The BTC backing the official wrapped bitcoin asset is managed by a federation. Users trust that this federation of custodians will not misappropriate funds and keep their assets pegged 1:1. If the federation becomes compromised, it can unilaterally steal users' funds. The network may support other wrapped BTC assets with different trust assumptions.",
    RiskPOSPeg = "The BTC backing the official wrapped bitcoin asset is managed by a validators participating in the network's proof-of-stake protocol. Users trust that these signers will not misappropriate funds and keep their assets pegged 1:1. If signers with the majority of stake becomes malicious, they can unilaterally steal users' funds. The network may support other wrapped BTC assets with different trust assumptions.",
    RiskStatechainFinality = "If the statechain entity does not delete the keyshare it held with the previous owner, they can collude and immediately spend funds. This effectively results in the current owner's funds being stolen.",
    RiskStatechainPreviousOwner = "If the previous owner broadcasts their unilateral exit transaction, the current owner must respond by broadcasting theirs with a faster expiring timelock. If the current owner does not respond, the previous owner can steal funds.",
    RiskStatechainTimelock = "If a previous owner of the UTXO broadcasts their unilateral exit transaction, and the current owner does not broadcast their own, the previous owner can steal funds.",
    RiskStatechainNoExit = "This implementation does not support unilateral exits. If the statechain entity becomes unresponsive, users funds are frozen.",
    RiskLightningChannel = "If a counterparty maliciously broadcasts a previous state, and it is not contested, they can close the channel with previous balances that favor the malicious actor.",
    NoDALayer = "The network's state is not made available by a data availability layer. Users trust the network operator(s) to maintain a record of the network's state.",
    TitleCentralizedDA = "The network's state is made available by a centralized entity",
    CustodianTitle = "Users do not have unilateral claims on native BTC.",
    OneCustodian = "BTC backing this asset is secured by a centralized custodian. Users trust this single entity with maintaining the peg with BTC.",
    Guardian = "BTC backing this asset is secured by multiple custodians. Users trust this group with maintaining the peg with BTC.",
    Federation = "BTC backing this asset is secured by a federation of signers. Users trust this federation with maintaining the peg with BTC.",
    PoS = "BTC backing this asset is secured by a signers participating in a proof-of-stake network. Users trust these signers with maintaining the peg with BTC.",
    UnkownSignersTitle = "The signers for this two-way peg have not been disclosed",
    UnkownSigners = "The parties responsible for securing the assets backing this wrapper have not been disclosed. There is little-to-no reputational risk for signers securing these funds.",
    Collateralized = "Users are exposed to smart contract risks and potential liquidations when using this asset.",
    MultipleAssets = "This asset is backed by other BTC wrapped assets. If a reserve asset became unbacked, the two-way peg with BTC would break.",
    SlashingRisk = "This asset represents BTC staked in a staking protocol. If the corresponding BTC is slashed, users' balances could be affected.",
    TitleNoProofs = "Bridge program(s) do not have a functional proof system",
    RiskSummaryNoProofs = "The bridge program(s) do not have a functional proof system. A centralized proposer can submit a malicious state transition and steal funds from the bridge.",
    RiskSummary = "",
}

export enum PegRiskSummarySnippet { //TODO: Janusz to add more here
    RiskSummary = "",
}

export enum OtherRiskSummarySnippet { //TODO: Janusz to add more here
    EcashCustodyTitle = "Users funds are managed by the mint operator",
    CashuCustody = "A Cashu mint is operated by a single entity that custodies users’ funds in return for issuing bearer Ecash tokens. If the mint gets hacked, becomes unresponsive or turns malicious, user funds can be stolen.",
    FedimintCustody = "Users deposit BTC into a multisig to interact with a Fedimint. Users explicitly trust the signers, known as guardians, of the federations’ multisig to not steal their funds. If the mint gets hacked, becomes unresponsive or turns malicious, user funds can be stolen.",
    VariousMints = "Users can choose between different mints to interact with. It is avised that users choose a mint that they trust and personally know the identities of the operators.",
    EcashDebasementRisk = "Ecash notes represent a claim on BTC held by the mint operators. As such, there is the risk that the operators issues more Ecash tokens than bitcoin it actually holds. This can lead to Ecash tokens being unbacked.",
    RiskSummary = "",
}

export enum DefinitionSnippet { //TODO: Janusz to add more here
    DefinitionAltRollup = "The network is an alternative rollup. It uses an alternative network for data availability and consensus. It supports a variety of BTC-backed assets.",
}