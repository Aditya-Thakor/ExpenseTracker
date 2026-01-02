export default function Userdata({ title, data }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-400  font-medium ">
        {title}
      </span>
      <span className="text-sm lg:text-lg font-medium text-gray-800">{data}</span>
    </div>
  );
}
