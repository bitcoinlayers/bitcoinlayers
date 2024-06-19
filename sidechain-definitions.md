The debate on what is, and what isn't, a Bitcoin Layer 2 will continue to be a topic on social media. In this document, we are outlining proposed definitions for 1) what we do consider a Bitcoin Layer 2 2) Some other defintions that people have presented (and we think are reasonable) and 3) defintiions for various implementations of Bitcoin Layer 2s, sidechains, and other scaling protcols.

**Layer 2 defintions**

- Layer 2 (a): A protocol that supports unilateral and ensures network operators cannot commit fraud
- Layer 2 (b): Any protocol that supports unilateral exit
- Layer 2 (c): A protocol where anyone can ensure the honesty of a two-way peg and corresponding withdrawals

**L2 & sidechain definitions**

In the list below, we attempt to define the various types of scaling solutions that have been presented to the Bitcoin community. We have also coined a few terms that better describe the solutions we are reviewing for Bitcoin Layers.

- Sidechain: An alternative consensus protocol that is built to scale Bitcoin and/or add functionality to BTC the asset
- Stakechain: A sidechain protocol that uses a Proof-of-Stake consensus mechanism, leveraging BTC the asset, to secure the chain
- Merge-mined Sidechain: A sidechain protocol that has a separate security budget, but sees Bitcoin miners opt-in to participate in securing the sidechain. Merged mining enables Bitcoin miners to secure sidechains, and earn additional revenue, via the same mining infrastructure.
- Anchored Sidechain: A sidechain that inherits Bitcoin finality and does not reorg unless the Bitcoin mainchain reorgs.
- Spiderchain: A sidechain protocol that leverages a variety of rotating multi-sigs to secure the BTC that is deposited into the sidechain. 
- Appchain: A sidechain protocol that inherits no security from Bitcoin, but is purpose-built to support applications that add functionality to BTC and Bitcoin assets.
- Rollup: A blockchain that posts its latest state root, and enough transaction data to reconstruct its state from genesis, to Bitcoin
- Sovereign rollup: A rollup that does not have a validating bridge (a.k.a enshrined two-way peg) with Bitcoin
- Validity rollup: A rollup where a prover submits a validity proof to a verifier contract on the L1 proving that the state transition was executed correctly
- Optimistic rollup: A rollup where challengers can submit a fault proof to challenge malicious state transitions
- Bitvium Rollup: A rollup with where the sequencer executes state transitions and sees a prover submit a validity proof, for an associated state transition, to Bitcoin. A group of verifiers on optimistically prove the state transition was executed correctly
- Validium: A blockchain that uses an offchain system for data availability and has a prover submits a validity proof to a verifier contract on the L1 proving that the state transition was executed correctly
- Optimium: A blockchain that uses an offchain system for data availability and has challengers can submit a fault proof to challenge malicious state transitions
- Bitvimium: A blockchain that uses an offchain system for data availability and has a prover submit a validity proof to the Bitcoin L1 and group of verifiers optimistically prove the state transition was executed correctly
- Ark: (to be added)
- Covenantless Ark: (to be added)
- Client-side validation: A system where the validation of a specific state transition is only performed by the parties involved in that state transition
- zkCSV: A CSV protocol that compresses the history associated with a specific token into a validity proof. Senders update a token's history by geneterating a state trasition within the associated validity proof and see the recepient verify the validity proof
- Statechain: A protocol where users enter a 2-2 multisig with a federated entity and transfer ownership of a UTXO to an intended recipient by providing them a statechain private key for that specific UTXO
- Spacechain: A sidechain design where users can burn their BTC to redeem tokenized assets on the sidechain
- Ecash: Ecash are digital bearer tokens, representing satoshis, that can be used in a variety of financial applications. Custodians are responsible for minting and burning Ecash tokens.
- Fedimint: Fedimints support the minting of Satoshi-backed Ecash tokens through a federated multi-sig. Fedimints can also be used to support various federated financial application modules
- State channel: A system where part of the blockchain's state is locked into a multi-signature contract between a number of counterparties. These counterparties engage in transactions, related to this state, amongst themselves and keep a record of state transitions locally
- Payment channel: A state channel implementation where two counterparties create a multi-signature contract that allows to open an offchain payment channel, between themselves, to facilitate offchain payments. These channels can support an (near) unlimited amount of transactions between the two parties
