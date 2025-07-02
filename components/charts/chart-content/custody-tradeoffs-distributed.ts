import { CustodyTitle } from "@/content/props";

// Detailed tradeoffs for each custody mechanism
const custodyTradeoffs = {
    [CustodyTitle.Distributed]: {
      title: "Distributed Third-Party Custody Mechanisms",
      subtitle: "Learn more about how these designs ensure users retain unilateral exit paths",
      mechanisms: [
        {
          name: "BitVM",
          description: "Official bridge programs managed by an alternative PoS network",
          pros: [
            "Unilateral exit paths maintained",
            "Mechanism to prevent fraud",
            "Can be leveraged peer-to-peer",
          ],
          cons: [
            "Requires active liquidity management",
            "Channel capacity limitations",
            "Need to monitor for force closures",
            "Inbound liquidity bootstrapping challenges"
          ],
          riskLevel: "Low",
          networks: ["lightning"]
        },
        {
            name: "PoS Validator Custody",
            description: "Official bridge programs managed by an alternative PoS network",
          pros: [
            "Unilateral exit paths maintained",
            "No channel management overhead"
          ],
          cons: [
            "Trust operators to delete keyshares held with previous owners",
            "Key deletion not cryptographically verifiable",
            "Previous owners can force current owners onchain"
          ],
          riskLevel: "Medium",
          networks: ["spark"]
        },
        {
          name: "Federations",
          description: "Shared UTXO pools with virtual transaction trees",
          pros: [
            "Unilateral exit paths maintained",
            "No channel management overhead"
          ],
          cons: [
            "Interactivity: users must coordinate with ASP",
            "ASP liquidity requirements",
            "Operator can double-spend out-of-round transactions"
          ],
          riskLevel: "Medium",
          networks: ["mercurylayer"]
        },
        {
            name: "Federated Chaumian Ecash",
            description: "Shared UTXO pools with virtual transaction trees",
            pros: [
              "Unilateral exit paths maintained",
              "No channel management overhead"
            ],
            cons: [
              "Interactivity: users must coordinate with ASP",
              "ASP liquidity requirements",
              "Operator can double-spend out-of-round transactions"
            ],
            riskLevel: "Medium",
            networks: ["fedimint"]
          },
      ]
    }
  };

export default custodyTradeoffs;