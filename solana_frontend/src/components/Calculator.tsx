import React, { useState } from "react";
import { useCalculatorProgram, CALCULATOR_SEEDS } from "../utils/anchor";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";

export const Calculator: React.FC = () => {
  const { program } = useCalculatorProgram();
  const { publicKey } = useWallet();
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const fetchCalculatorState = async () => {
    if (!program || !publicKey) return;

    try {
      const [calculatorPda] = PublicKey.findProgramAddressSync(
        CALCULATOR_SEEDS,
        program.programId
      );

      const account = (await (program.account as any).DataShape.fetch(
        calculatorPda
      )) as { num: number; bump: number };

      setCurrentValue(account.num);
      setIsInitialized(true);
    } catch (error) {
      console.log("Calculator not initialized yet", error);
      setIsInitialized(false);
    }
  };

  const initializeCalculator = async () => {
    if (!program || !publicKey) return;

    setLoading(true);
    try {
      const [calculatorPda] = PublicKey.findProgramAddressSync(
        CALCULATOR_SEEDS,
        program.programId
      );

      const initValue = parseInt(inputValue) || 0;
      await program.methods
        .initialize(initValue)
        .accounts({
          account: calculatorPda,
          signer: publicKey,
        })
        .rpc();

      await fetchCalculatorState();
      setInputValue("");
    } catch (error) {
      console.error("Error initializing calculator:", error);
    } finally {
      setLoading(false);
    }
  };

  const executeOperation = async (operation: string, value?: number) => {
    if (!program || !publicKey || !isInitialized) return;

    setLoading(true);
    try {
      const [calculatorPda] = PublicKey.findProgramAddressSync(
        CALCULATOR_SEEDS,
        program.programId
      );

      switch (operation) {
        case "add":
          await program.methods
            .add(value!)
            .accounts({ account: calculatorPda })
            .rpc();
          break;
        case "subtract":
          await program.methods
            .subtract(value!)
            .accounts({ account: calculatorPda })
            .rpc();
          break;
        case "multiply":
          await program.methods
            .multiply(value!)
            .accounts({ account: calculatorPda })
            .rpc();
          break;
        case "divide":
          await program.methods
            .divide(value!)
            .accounts({ account: calculatorPda })
            .rpc();
          break;
        case "double":
          await program.methods
            .double()
            .accounts({ account: calculatorPda })
            .rpc();
          break;
        case "half":
          await program.methods
            .half()
            .accounts({ account: calculatorPda })
            .rpc();
          break;
      }

      await fetchCalculatorState();
      setInputValue("");
    } catch (error) {
      console.error(`Error executing ${operation}:`, error);
    } finally {
      setLoading(false);
    }
  };

  if (!publicKey) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Connect your wallet to start
        </h2>
        <p className="text-gray-600">
          Please connect your Solana wallet to use the calculator
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Calculator Program
      </h1>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Current Value
        </h2>
        <div className="text-4xl font-bold text-center text-blue-600">
          {currentValue}
        </div>
        <p className="text-sm text-gray-500 text-center mt-2">
          {isInitialized ? "Calculator initialized" : "Not initialized"}
        </p>
      </div>

      {!isInitialized ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Value
            </label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter initial value"
            />
          </div>
          <button
            onClick={initializeCalculator}
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Initializing..." : "Initialize Calculator"}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Value
            </label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter value for operation"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => executeOperation("add", parseInt(inputValue) || 0)}
              disabled={loading || !inputValue}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:opacity-50"
            >
              Add
            </button>
            <button
              onClick={() =>
                executeOperation("subtract", parseInt(inputValue) || 0)
              }
              disabled={loading || !inputValue}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 disabled:opacity-50"
            >
              Subtract
            </button>
            <button
              onClick={
                () => executeOperation("multiply", parseInt(inputValue) || 0) // Fixed typo
              }
              disabled={loading || !inputValue}
              className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 disabled:opacity-50"
            >
              Multiply
            </button>
            <button
              onClick={() =>
                executeOperation("divide", parseInt(inputValue) || 0)
              }
              disabled={loading || !inputValue}
              className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 disabled:opacity-50"
            >
              Divide
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => executeOperation("double")}
              disabled={loading}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              Double
            </button>
            <button
              onClick={() => executeOperation("half")}
              disabled={loading}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:opacity-50"
            >
              Half
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="mt-4 text-center">
          <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          <p className="text-sm text-gray-600 mt-2">
            Processing transaction...
          </p>
        </div>
      )}
    </div>
  );
};
