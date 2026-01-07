export default function PageHeading({ title, subtitle }) {
  return (
    <div className="h-32 lg:h-48 w-full flex flex-col justify-center items-center gap-3">
      <h2 className="text-lg lg:text-4xl text-gray-900">{title}</h2>
      <h5 className="text-xs lg:text-lg text-gray-500">{subtitle}</h5>
    </div>
  );
}
