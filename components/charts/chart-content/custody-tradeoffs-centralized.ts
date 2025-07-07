import { CustodyTitle } from "@/content/props";

// Detailed tradeoffs for each custody mechanism
const custodyTradeoffs = {
    [CustodyTitle.Centralized]: {
      title: "Centralized Third-Party Custody Mechanisms",
      subtitle: "Learn more about how these designs work with centralized custodians",
      mechanisms: [
        {
          name: "Centralized Institutional Custody",
          description: "Bitcoin backing wrapped tokens are secured by a single, institutional custodian",
          pros: [
            "Reputation damage incurred in case of fraud",
            "Institutional custodians have refined key management processes",
          ],
          cons: [
            "A centralized party can steal the funds backing wrapped tokens",
            "Tokens typically come with censorship controls, meaning users can be barred from using them",
            "No recourse mechanism for users if funds are stolen or censored",
          ],
          riskLevel: "Low",
          networks: ["corn-btcn", "bitgo-wbtc", "coinbase-cbbtc", "kraken-kbtc", "binance-btcb", "solv-solvbtc",]
        },
        {
          name: "Chaumian Ecash",
          description: "Chaumian ecash mints where bearer tokens are backed by BTC secured by a centralized custodian",
          pros: [
            "Multi-mint payments enable users to split their funds across multiple mints",
            "Blinded signatures enable intra-mint user privacy"
          ],
          cons: [
            "Trust centralized custodian(s) to be honest",
            "Users must select their own mint. Individual mints all come with their own trust assumptions",
            "No penalty enforced in case of mint operator's being dishonest"
          ],
          riskLevel: "Medium",
          networks: ["cashu"]
        },
      ]
    }
  };

export default custodyTradeoffs;