BOB is an implementation of a rollup to Ethereum.

For BOB to be considered a bitcoin sidesystem, we recommend the following upgrades:

- Create a federated two-way peg for an official BTC derivative asset: The majority of BOB's BTC TVL is managed by centralized custodians or is third-party derivative assets locked in an immediately upgradeable bridge contract. We recommend that the protocol implements a public, federated two way peg. Our requirements see at least 5 individual signers external to the development organization. An example of this can be found [here](https://bitcoinl2labs.com/sbtc-rollout#sbtc-signers).
- Initially enable users to pay gas fees in a BTC-denominated token by June 30th. Then reconfigure the sequencer fees to be denominated in BTC backed by a federated two-way peg.
- If not denominated in BTC, BOB will need to implement mechanisms to inherit security from bitcoin by June 30th. Due to BitVM development arguably being further out, we recommend a federated, BTC denominated set up in the interim.

These are the minimum requirements as BOB works towards adding bitcoin fault proofs.

For more information on how we define sidesystems, and our minimum technical requirements, see [here](https://www.lxresearch.co/starting-to-define-layers-a-year-later/).
