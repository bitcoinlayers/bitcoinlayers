import { CustodyTitle } from "@/content/props";

// Detailed tradeoffs for each custody mechanism
const custodyTradeoffs = {
    [CustodyTitle.Centralized]: {
      title: "Centralized Third-Party Custody Mechanisms",
      subtitle: "Learn more about how these designs work with centralized custodians",
      mechanisms: [
        {
          name: "Centralized Institutional Custody",
          description: "Payment channels using 2-of-2 multisigs",
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
          name: "Chaumian Ecash",
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
          networks: ["cashu"]
        },
      ]
    }
  };

export default custodyTradeoffs;