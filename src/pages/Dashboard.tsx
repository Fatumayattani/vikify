import { useState } from "react";
import { FaLock, FaReceipt, FaHistory } from "react-icons/fa";

export function Dashboard() {
  const [activeSubscriptions] = useState([]);

  return (
    <div className="space-y-8">
      <section className="bg-secondary-black rounded-lg p-6 border border-accent-orange/20">
        <h2 className="text-2xl font-semibold text-text-light mb-4 flex items-center gap-2">
          <FaLock className="text-accent-orange" />
          Private Subscriptions
        </h2>
        {activeSubscriptions.length === 0 ? (
          <p className="text-text-dark">No active subscriptions found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Subscription cards will go here */}
          </div>
        )}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-secondary-black rounded-lg p-6 border border-accent-orange/20">
          <h2 className="text-xl font-semibold text-text-light mb-4 flex items-center gap-2">
            <FaReceipt className="text-accent-orange" />
            Encrypted Receipts
          </h2>
          <p className="text-text-dark">Your transaction receipts are encrypted and stored securely.</p>
        </section>

        <section className="bg-secondary-black rounded-lg p-6 border border-accent-orange/20">
          <h2 className="text-xl font-semibold text-text-light mb-4 flex items-center gap-2">
            <FaHistory className="text-accent-orange" />
            Transaction History
          </h2>
          <p className="text-text-dark">View your private transaction history.</p>
        </section>
      </div>
    </div>
  );
}