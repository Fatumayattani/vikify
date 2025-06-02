import { FaLock } from "react-icons/fa";
import { formatDisplayAmount } from "../../pkg/helpers";

interface PlanCardProps {
  title: string;
  description: string;
  price: bigint;
  onSubscribe: () => void;
}

export function PlanCard({ title, description, price, onSubscribe }: PlanCardProps) {
  return (
    <div className="bg-secondary-black p-6 rounded-lg border border-accent-orange/20 hover:border-accent-orange/40 transition-colors">
      <h3 className="text-xl font-semibold text-text-light mb-2">{title}</h3>
      <p className="text-text-dark mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-accent-orange font-mono">
          {formatDisplayAmount(price, 18)} AVAX
        </span>
        <button
          onClick={onSubscribe}
          className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-primary-black rounded-lg hover:bg-light-orange transition-colors duration-200 font-semibold"
        >
          <FaLock className="w-4 h-4" />
          Subscribe Anonymously
        </button>
      </div>
    </div>
  );
}