export default function Heading({title,tagline}) {

  const clr = import.meta.env.VITE_TEXT_COLOR
  //process.env.TEXT_COLOR;
  console.log(import.meta.env.REACT_APP_SOME_KEY)
    return(
        <div className="hidden lg:block lg:h-auto ">
        <h1 className="text-gray-800  text-2xl font-bold">{title}</h1>
        <span className="text-gray-500 text-xs">
          {tagline}
        </span>
        <h2 style={{color:clr}}>Demo Text</h2>
      </div>
    )
}