import { CustodyTitle } from "@/content/props";

// Detailed tradeoffs for each custody mechanism
const custodyTradeoffs = {
    [CustodyTitle.BitcoinNative]: {
      title: "Bitcoin Native Custody Mechanisms",
      subtitle: "Learn more about how these designs ensure users retain unilateral exit paths",
      mechanisms: [
        {
          name: "Payment Channels",
          description: "Payment channels using 2-of-2 multisigs",
          pros: [
            "Unilateral exit paths maintained",
            "Mechanism to prevent fraud",
            "Can be leveraged peer-to-peer",
          ],
          cons: [
            "Requires active liquidity management",
            "Channel capacity limitations",
            "Need to monitor for channel closures",
            "Requires an L1 transaction to receive funds"
          ],
          riskLevel: "Low",
          networks: ["lightning"]
        },
        {
          name: "Statechains",
          description: "Statechains using 2-of-2 multisigs (or MPC schemes)",
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
          networks: ["spark", "mercurylayer"]
        },
        {
          name: "Ark (coming soon)",
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
        }
      ]
    }
  };

export default custodyTradeoffs;