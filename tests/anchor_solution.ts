import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorSolution } from "../target/types/anchor_solution";

describe("anchor_solution", () => {
  // Configure the client to use the local cluster.
  // Define the network to connect to (Devnet in this case)
  const network = "https://api.devnet.solana.com";
  
  // Create a connection to the Devnet cluster
  const connection = new anchor.web3.Connection(network);
  
  // Get a wallet to pay for transactions and to interact with the program
  // This assumes you have a keypair.json file in your project directory
  // or another method of obtaining a wallet keypair
  const wallet = anchor.Wallet.local();

  // Create an Anchor provider for the Devnet cluster
  const provider = new anchor.AnchorProvider(connection, wallet, {
    preflightCommitment: "recent",
  });
  // anchor.setProvider(anchor.AnchorProvider.env());
  anchor.setProvider(provider);

  const program = anchor.workspace.AnchorSolution as Program<AnchorSolution>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
