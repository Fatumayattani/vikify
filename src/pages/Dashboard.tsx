import { useState } from "react";
import { FaLock, FaReceipt, FaHistory } from "react-icons/fa";
import { useAccount } from "wagmi";
import { PlanCard } from "../components/subscription/PlanCard";
import { toast } from "react-toastify";

const SUBSCRIPTION_PLANS = [
  {
    id: 1,
    title: "Basic Newsletter Access",
    description: "Weekly curated content and market insights delivered to your inbox",
    price: BigInt(500) // $5.00
  },
  {
    id: 2,
    title: "Premium Discord Group",
    description: "Join our private community with real-time updates and analysis",
    price: BigInt(2000) // $20.00
  },
  {
    id: 3,
    title: "Expert Research Reports",
    description: "Monthly in-depth research reports on emerging technologies",
    price: BigInt(5000) // $50.00
  }
];

export function Dashboard() {
  const { isConnected } = useAccount();
  const [activeSubscriptions] = useState([]);

  const handleSubscribe = async (planId: number) => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    try {
      // TODO: Implement private transfer
      toast.success("Subscribed successfully! 🎉");
    } catch (error) {
      console.error(error);
      toast.error("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="space-y-8">
      <section className="bg-secondary-black rounded-lg p-6 border border-accent-orange/20">
        <h2 className="text-2xl font-semibold text-text-light mb-4 flex items-center gap-2">
          <FaLock className="text-accent-orange" />
          Available Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              onSubscribe={() => handleSubscribe(plan.id)}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary-black rounded-lg p-6 border border-accent-orange/20">
        <h2 className="text-2xl font-semibold text-text-light mb-4 flex items-center gap-2">
          <FaLock className="text-accent-orange" />
          My Subscriptions
        </h2>
        {activeSubscriptions.length === 0 ? (
          <p className="text-text-dark">No active subscriptions found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Active subscription cards will go here */}
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