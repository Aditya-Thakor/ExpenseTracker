export default function Datacard({
  name,
  amount,
  subtag,
  icon,
  arrow,
  bgfrom,
  bgto,
  border,
  shadow,
  ibgfrom,
  ibgto,
  save
}) {
  const styles = {
    bg: {
      background: `linear-gradient(to bottom right, ${bgfrom}, ${bgto})`,
      border: `1px solid ${border}`,
      boxShadow: `0px 4px 10px ${shadow}`,
    },
    icon: {
      background: `linear-gradient(to bottom right, ${ibgfrom}, ${ibgto})`,
    },
  };

  return (
    <div
      className="h-full w-full flex gap-4 p-3 bg-white rounded-xl"
      style={styles.bg}
    >
      <div
        className="h-full w-1/5 rounded-lg flex justify-center items-center bg-green-100"
        style={styles.icon}
      >
        <img src={icon} alt="icon" className="h-3/5" />
      </div>
      <div className="h-full w-3/4 flex flex-col justify-between font-medium ">
        <span className="text-lg text-gray-500">{name}</span>
        <span className="text-3xl text-gray-800"> {amount}</span>
        {arrow? <p className="flex items-center text-xs font-normal text-red-500">
            <span>
                <img src={arrow} alt="arrow icon" />
            </span>
            <span>{subtag}</span>
        </p>
        : <span className="text-xs font-normal flex gap-2 text-gray-600 ">
           <span className="font-medium "> {save}</span>
            {subtag}
        </span> }
        
      </div>
    </div>
  );
}
