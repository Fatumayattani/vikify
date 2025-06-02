import { useAccount, useDisconnect } from "wagmi";
import { Logo } from "./Logo";
import { useAppKit } from "@reown/appkit/react";
import { FaSignOutAlt } from "react-icons/fa";

export function Header() {
  const { address, isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const { open } = useAppKit();

  const handleDisconnect = async () => {
    try {
      await disconnectAsync();
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };

  return (
    <header className="bg-primary-black border-b border-accent-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <nav className="flex items-center space-x-4">
            <button className="px-4 py-2 text-text-light hover:text-accent-orange transition-colors duration-200">
              Dashboard
            </button>
            {isConnected ? (
              <div className="flex items-center space-x-2">
                <span className="px-4 py-2 bg-secondary-black text-text-light rounded-lg border border-accent-orange/20 font-mono">
                  {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
                </span>
                <button
                  onClick={handleDisconnect}
                  className="p-2 text-text-light hover:text-accent-orange transition-colors duration-200"
                  title="Disconnect Wallet"
                >
                  <FaSignOutAlt className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => open()}
                className="px-4 py-2 bg-accent-orange text-primary-black rounded-lg hover:bg-light-orange transition-colors duration-200 font-semibold"
              >
                Connect Wallet
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}