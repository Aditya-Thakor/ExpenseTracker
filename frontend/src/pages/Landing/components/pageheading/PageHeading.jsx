export default function PageHeading({ title, subtitle }) {
  return (
    <div className="h-48 flex flex-col justify-center items-center gap-3">
      <h2 className="text-4xl text-gray-900">{title}</h2>
      <h5 className="text-lg text-gray-500">{subtitle}</h5>
    </div>
  );
}
