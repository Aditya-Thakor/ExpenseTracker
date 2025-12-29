export default function Heading({title,tagline}) {
    return(
        <div className="h-auto">
        <h1 className="text-gray-800 text-2xl font-bold">{title}</h1>
        <span className="text-gray-500 text-xs">
          {tagline}
        </span>
      </div>
    )
}