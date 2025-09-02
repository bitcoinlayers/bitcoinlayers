import { CustodyTitle } from "@/content/props";

// Detailed tradeoffs for each custody mechanism
const custodyTradeoffs = {
    [CustodyTitle.BitcoinNative]: {
      title: "Bitcoin Native Custody Mechanisms",
      subtitle: "Learn more about how these designs ensure users retain unilateral exit paths:",
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
            "Requires an L1 transaction to open a channel and receive funds"
          ],
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
          networks: ["spark", "mercurylayer"]
        },
        {
          name: "Ark (coming soon)",
          description: "UTXO sharing through VTXO trees",
          pros: [
            "Unilateral exit paths maintained",
            "No channel management overhead"
          ],
          cons: [
            "Interactivity: users must coordinate with ASP periodically",
            "ASPs have liquidity requirements",
            "Operator, and previous owner, can double-spend out-of-round transactions"
          ],
        }
      ]
    },
    "EthereumNetworkOperators": {
      title: "Ethereum Network Operators",
      subtitle: "How Ethereum's proof-of-stake validators operate the network",
      mechanisms: [
        {
          name: "Proof-of-Stake Validators",
          description: "Ethereum validators stake 32 ETH and participate in block production and validation",
          pros: [
            "Over 900,000 validators securing the network",
            "Permissionless - anyone can become a validator",
            "Economic incentives align validators with network security"
          ],
          cons: [
            "Requires 32 ETH stake (~$100k+ at current prices)",
            "Validators can be slashed for malicious behavior",
            "Not secured by Bitcoin's energy-intensive mining"
          ],
          networks: ["ethereum"]
        }
      ]
    }
  };

export default custodyTradeoffs;