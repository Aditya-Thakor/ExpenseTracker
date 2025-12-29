import { Check } from "lucide-react";

export default function NormalPricing({
  title,
  subtitle,
  price,
  duration,
  list,
}) {
  const featureList = list;
  return (
    <div className="h-full w-80 flex flex-col items-start gap-6 bg-white border-2 border-gray-300 rounded-2xl p-6">
      <div className="flex flex-col gap-2 text-md">
        <span className="text-gray-800">{title}</span>
        <span className="text-gray-500">{subtitle}</span>
      </div>
      <div>
        <p>
          <span className="text-gray-900 text-5xl">₹{price}</span>
          <span className="text-gray-400 font-light"> /{duration}</span>
        </p>
      </div>
      <div className="w-full">
        <button className="w-full py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-2xl">
          Get Started
        </button>
      </div>
      <div>
        <ul className="flex flex-col gap-3 text-gray-600">
          {featureList.map((li) => (
            <li className="flex items-center gap-2 text-sm">
              <span>
                <Check className="size-5 text-green-500" />
              </span>
              <span>{li}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
