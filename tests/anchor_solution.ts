import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { expect } from "chai";
import { AnchorSolution } from "../target/types/anchor_solution";

describe("anchor_solution", () => {
  anchor.setProvider(anchor.AnchorProvider.env());
  
  const program = anchor.workspace.AnchorSolution as Program<AnchorSolution>;
  const counter = anchor.web3.Keypair.generate();

  it("Is initialized!", async () => {
    const tx = await program.methods
    .initialize()
    .accounts({ counter: counter.publicKey })
    .signers([counter])
    .rpc();

    const account = await program.account.counter.fetch(counter.publicKey);
    expect(account.count.toNumber() === 0);
  });
});