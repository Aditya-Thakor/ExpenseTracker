import { Star } from "lucide-react";

export default function ReviewCard({review,icon,name,role}) {
  return (
    <div className="h-3/4 w-72 flex flex-col gap-3  bg-neutral-50 border border-gray-300 rounded-3xl p-5">
      <div className="flex gap-1 text-amber-300 ">
        <span>
          <Star className="size-5 fill-amber-300 " />{" "}
        </span>
        <span>
          <Star className="size-5 fill-amber-300 " />{" "}
        </span>
        <span>
          <Star className="size-5 fill-amber-300 " />{" "}
        </span>
        <span>
          <Star className="size-5 fill-amber-300 " />{" "}
        </span>
        <span>
          <Star className="size-5 fill-amber-300 " />{" "}
        </span>
      </div>
      <p className="text-md text-gray-700 text-start leading-7">
        "{review}"
      </p>
      <div className=" w-full flex items-center gap-3">
        <div className="size-12 flex justify-center items-center text-2xl rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
          <span>{icon}</span>
        </div>
        <div className="text-sm text-neutral-900">
          <h5>{name}</h5>
          <span className="text-xs text-gray-500">{role}</span>
        </div>
      </div>
    </div>
  );
}
