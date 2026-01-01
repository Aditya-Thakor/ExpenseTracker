import { ArrowRight } from "lucide-react";

export default function WorkflowCard({step,icon,title,p}) {
  return (
    <div className="h-auto w-full lg:min-h-64 lg:max-w-72 relative flex flex-col  items-center gap-3 bg-white p-7 rounded-3xl shadow-lg border border-blue-200/70">
      <div className="size-16 flex justify-center items-center text-white text-3xl rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
        <span>{step}</span>
      </div>

      <div className="size-12 flex justify-center items-center text-blue-600   bg-blue-100 rounded-xl">
        <span>
          {icon}
        </span>
      </div>

      <h3 className="text-md text-gray-800  ">{title}</h3>
      <p className="text-sm text-gray-500 text-center">
        {p}
      </p>

      <span className="absolute -bottom-3 rotate-90 lg:rotate-0 lg:-right-4 lg:top-1/2 text-blue-400 text-shadow-xl">
        <ArrowRight />
      </span>
    </div>
  );
}
