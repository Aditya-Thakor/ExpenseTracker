import { Check } from "lucide-react";

export default function Popular() {
  const featureList = [
    "Unlimited transactions",
    "Advanced analytics",
    "All 9 categories + custom",
    "Weekly & monthly reports",
    "Priority support",
    "Export to CSV/PDF",
  ];
  return (
    <div className="h-auto lg:h-full sm:w-60 lg:w-72 xl:w-80 flex flex-col items-start lg:gap-6 bg-gradient-to-br from-blue-500 to-cyan-500 border border-blue-500 lg:scale-105  shadow-lg rounded-2xl p-px">
      <div className=" h-full w-full flex flex-col gap-4 lg:gap-6 rounded-2xl text-white bg-white/5  backdrop-blur-sm p-6">
        <div>
          <span className="text-xs text-center px-3 py-1 rounded-full text-blue-600 bg-white">
            Most Popular
          </span>
        </div>

        <div className="flex flex-col lg:gap-2 text-md">
          <span className="text-white">Pro</span>
          <span className="text-white/80">For serious budget planners</span>
        </div>

        <div>
          <p>
            <span className="text-4xl lg:text-6xl">₹1999</span>
            <span className="text-white/80 font-light"> /Per month</span>
          </p>
        </div>

        <div className="w-full">
          <button className="w-full py-3 text-lg text-blue-500 bg-white hover:bg-white/90 rounded-2xl">
            Get Started
          </button>
        </div>

        <div>
          <ul className="flex flex-col lg:gap-3">
            {featureList.map((li) => (
              <li className="flex items-center text-white/95 gap-2 text-md">
                <span>
                  <Check className="size-5" />
                </span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
