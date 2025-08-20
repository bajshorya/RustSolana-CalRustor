import {
  Program,
  AnchorProvider,
  type Idl,
  type AccountNamespace,
} from "@coral-xyz/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { CalculatorIdl } from "./idl";

// const PROGRAM_ID = new PublicKey("s8Ey1q88pvKmSUjU4Z1dRUmJp1HS9jHaZvGnLPhVecx");

interface CalculatorProgram extends Program {
  account: {
    DataShape: AccountNamespace;
  };
}

export const useCalculatorProgram = () => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  if (!wallet) {
    return { program: null, provider: null };
  }

  const provider = new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });

  try {
    const program = new Program( 
      CalculatorIdl as unknown as Idl,
      provider
    ) as unknown as CalculatorProgram;

    return { program, provider };
  } catch (error) {
    console.error("Error creating program:", error);
    return { program: null, provider };
  }
};

export const CALCULATOR_SEEDS = [
  new Uint8Array([99, 97, 108, 99, 117, 108, 97, 116, 111, 114]), // "calculator"
];
