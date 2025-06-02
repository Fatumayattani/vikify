import { FaCalendar } from "react-icons/fa";
import { formatDisplayAmount } from "../../pkg/helpers";

interface Subscription {
  id: number;
  title: string;
  description: string;
  price: bigint;
  subscriptionDate: string;
}

interface SubscriptionCardProps {
  subscription: Subscription;
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const formattedDate = new Date(subscription.subscriptionDate).toLocaleDateString();

  return (
    <div className="bg-secondary-black p-6 rounded-lg border border-accent-orange/20">
      <h3 className="text-xl font-semibold text-text-light mb-2">{subscription.title}</h3>
      <p className="text-text-dark mb-4">{subscription.description}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-accent-orange font-mono">
          {formatDisplayAmount(subscription.price, 18)} AVAX
        </span>
        <div className="flex items-center gap-2 text-text-dark">
          <FaCalendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}