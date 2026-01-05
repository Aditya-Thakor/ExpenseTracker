export default function SummaryCardTemp({
  title,
  data,
  bgfrom = "#ffffff",
  bgto = "#bfbfbf",
  border = "#fafafa",
  shadow = "#D1D5DB",
}) {
  const Bg = {
    background: `linear-gradient(to right bottom, ${bgfrom}, ${bgto})`,
    border: `1px solid ${border}`,
    boxShadow: `0px 4px 10px ${shadow}`,
  };
  return (
    <div
      className={`h-full w-full rounded-xl sm:rounded-2xl flex flex-col justify-around pl-3 `}
      style={Bg}
    >
      <span className="text-xs sm:text-sm font-regular text-slate-500">{title}</span>
      <h3 className="text-lg sm:text-2xl text-slate-900">{data}</h3>
    </div>
  );
}

/* code:
    <div 
        className="h-full w-full rounded-2xl flex flex-col justify-around pl-3 bg-white"
    >
        <span className="text-sm text-slate-500">Total categories</span>
        <h3 className="text-2xl text-slate-900">9</h3>
    </div>
*/

/*
    GRADIENT COLORS
    BLUE:
    from:#CCE2FF  | to: #CCFCFF | border: #C3DCFD | shadow: C3DCFD

    PINK:
    from:E4D6FF   | to: F5CDE2  | border: #D7C3F5 | shadow: D7C3F5

    GREEN :
    from: D2F9DE  | to:ACF6D3   | border: #8EF5B2 | shadow: 8EF5B2

    
*/
