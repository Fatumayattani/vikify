import { useState, useEffect } from "react";
import { FaLock, FaReceipt, FaHistory, FaShieldAlt } from "react-icons/fa";
import { useAccount, useDisconnect } from "wagmi";
import { PlanCard } from "../components/subscription/PlanCard";
import { SubscriptionCard } from "../components/subscription/SubscriptionCard";
import { toast } from "react-toastify";

const SUBSCRIPTION_PLANS = [
  {
    id: 1,
    title: "Basic Newsletter Access",
    description: "Weekly curated content and market insights delivered to your inbox",
    price: BigInt(5 * 10 ** 18) // 5 AVAX
  },
  {
    id: 2,
    title: "Premium Discord Group",
    description: "Join our private community with real-time updates and analysis",
    price: BigInt(10 * 10 ** 18) // 10 AVAX
  },
  {
    id: 3,
    title: "Expert Research Reports",
    description: "Monthly in-depth research reports on emerging technologies",
    price: BigInt(20 * 10 ** 18) // 20 AVAX
  },
  {
    id: 4,
    title: "Virtual Art Gallery Tours",
    description: "Exclusive access to virtual art exhibitions and curator insights",
    price: BigInt(15 * 10 ** 18) // 15 AVAX
  },
  {
    id: 5,
    title: "Anonymous Meme Club",
    description: "Join the most exclusive meme creation and sharing community",
    price: BigInt(8 * 10 ** 18) // 8 AVAX
  },
  {
    id: 6,
    title: "Anonymous Therapy Sessions",
    description: "Connect with licensed therapists while maintaining complete privacy",
    price: BigInt(25 * 10 ** 18) // 25 AVAX
  }
];

export function Dashboard() {
  const { isConnected, address } = useAccount();
  const [activeSubscriptions, setActiveSubscriptions] = useState<typeof SUBSCRIPTION_PLANS>([]);

  // Load subscriptions from localStorage on component mount
  useEffect(() => {
    if (address) {
      const savedSubscriptions = localStorage.getItem(`subscriptions_${address}`);
      if (savedSubscriptions) {
        setActiveSubscriptions(JSON.parse(savedSubscriptions));
      }
    }
  }, [address]);

  const handleSubscribe = async (planId: number) => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    try {
      // Find the plan
      const plan = SUBSCRIPTION_PLANS.find(p => p.id === planId);
      if (!plan) throw new Error("Plan not found");

      // TODO: Implement private transfer
      
      // For now, just add to active subscriptions
      const newSubscription = {
        ...plan,
        subscriptionDate: new Date().toISOString()
      };
      
      const updatedSubscriptions = [...activeSubscriptions, newSubscription];
      setActiveSubscriptions(updatedSubscriptions);
      
      // Save to localStorage
      if (address) {
        localStorage.setItem(`subscriptions_${address}`, JSON.stringify(updatedSubscriptions));
      }

      toast.success("Subscribed successfully! 🎉");
    } catch (error) {
      console.error(error);
      toast.error("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative bg-secondary-black rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            alt="Privacy"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative px-8 py-16 flex flex-col items-center text-center space-y-6">
          <FaShieldAlt className="w-16 h-16 text-accent-orange mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-text-light">
            Subscribe Anonymously to Premium Content
          </h1>
          <p className="text-xl text-text-light/80 max-w-2xl">
            Your privacy matters. Pay for digital content without revealing your identity.
            No emails, no usernames—just complete anonymity.
          </p>
          <button className="mt-8 px-8 py-3 bg-accent-orange text-primary-black rounded-lg hover:bg-light-orange transition-colors duration-200 font-semibold text-lg flex items-center gap-2">
            <FaLock className="w-5 h-5" />
            Get Started
          </button>
        </div>
      </section>

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
            {activeSubscriptions.map((subscription) => (
              <SubscriptionCard
                key={`${subscription.id}-${subscription.subscriptionDate}`}
                subscription={subscription}
              />
            ))}
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