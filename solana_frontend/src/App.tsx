import { Calculator } from "./components/Calculator";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { WalletProvider } from "./providers/WalletProvider";

function App() {
  return (
    <WalletProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <header className="flex justify-between items-center mb-8 p-4 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold text-gray-800">
              Solana Calculator
            </h1>
            <WalletMultiButton className="!bg-blue-500 !text-white hover:!bg-blue-600" />
          </header>

          <main>
            <Calculator />
          </main>
        </div>
      </div>
    </WalletProvider>
  );
}

export default App;
