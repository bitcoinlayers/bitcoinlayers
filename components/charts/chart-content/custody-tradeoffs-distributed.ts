import { CustodyTitle } from "@/content/props";

// Detailed tradeoffs for each custody mechanism
const custodyTradeoffs = {
    [CustodyTitle.Distributed]: {
      title: "Distributed Third-Party Custody Mechanisms",
      subtitle: "Learn how different protocols secure bitcoin backing wrapped tokens on corresponding networks:",
      mechanisms: [
        {
            name: "PoS Validator Custody",
            description: "Official bridge programs managed by an alternative PoS network",
          pros: [
            "Trust distributed across multiple parties",
            "Stake can be socially slashed in case of fraud"
          ],
          cons: [
            "Trust the validator set to be honest",
            "Reliance on another token to coordinate social slashing",
            "Stake must be greater than value locked in bridge. Can be capital inefficient"
          ],
          riskLevel: "Medium",
          networks: ["nomic", "side", "internetcomputer"]
        },
        {
          name: "Federations",
          description: "Official bridge programs where wrapped tokens are backed by BTC secured in a multisig (or MPC scheme)",
          pros: [
            "Trust distributed across multiple parties",
            "If public federation, reputation damage incurred in case of fraud"
          ],
          cons: [
            "Trust the signer set to be honest",
            "No financial punishment in case of fraud",
            "If federation is not public, reputation damage cannot be incurred in case of fraud"
          ],
          riskLevel: "Medium",
          networks: ["botanix", "liquid", "stacks", "rootstock",]
        },
        {
            name: "Federated Chaumian Ecash",
            description: "Chaumian ecash mints where bearer tokens are backed by BTC secured in a multisig",
            pros: [
              "Trust distributed across multiple parties",
            ],
            cons: [
              "Users must select which mint to use",
              "Trust assumptions change depending on which mint is used",
              "Operator can double-spend out-of-round transactions"
            ],
            riskLevel: "Medium",
            networks: ["fedimint"]
          },
          {
            name: "BitVM (coming soon)",
            description: "Bridges leveraging SNARK offchain verification and onchain dispute resolution",
            pros: [
              "Only one watchtower required to prevent fraud",
              "Only one honest operator needed to process withdrawals",
            ],
            cons: [
              "Fixed deposit amounts",
              "Watchtower set may be permissioned",
              "Bridges can be instantly upgraded by a security council",
            ],
          },
      ]
    }
  };

export default custodyTradeoffs;
