import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="bg-primary-black border-b border-accent-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <nav className="flex items-center space-x-4">
            <button className="px-4 py-2 text-text-light hover:text-accent-orange transition-colors duration-200">
              Dashboard
            </button>
            <button className="px-4 py-2 bg-accent-orange text-primary-black rounded-lg hover:bg-light-orange transition-colors duration-200 font-semibold">
              Connect Wallet
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}