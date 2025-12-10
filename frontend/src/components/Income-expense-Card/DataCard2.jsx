import i from "../../assets/icons/index";

export default function DataCard2({
  name="Data card",
  amount="00,000",
  icon=`${i.plus}`,
  bgfrom = "#EFF6FF",
  bgto = "#ECFEFF",
  border = "#DBEAFE",
  shadow = "#DBEAFE",
  ibgfrom = "#3B82F6",
  ibgto = "#06B6D4",
  pr="0",
  prcolor="#16A34A"
}) {
  const styles = {
    bg: {
      background: `linear-gradient(to bottom right , ${bgfrom}, ${bgto})`,
      border: `1px solid ${border} `,
      boxShadow: `0px 4px 10px ${shadow}`,
    },
    icon: {
      background: `linear-gradient(to bottom right , ${ibgfrom}, ${ibgto})`,
    },
    ptxt:{
        color: `${prcolor}`
    }
  };
  return (
    <div className="h-full w-full  rounded-xl p-3" style={styles.bg}>
      {/* icon & percentage */}
      <div className="h-2/5 w-full flex justify-between ">
        <span
          className="h-full w-12 flex justify-between items-center  rounded-lg"
          style={styles.icon}
        >
          <img src={icon} alt="datacard-icon" className="size-7 m-auto" />
        </span>
        <span 
            className="text-sm "
            style={styles.ptxt}
        >+ {pr} %</span>
      </div>
      {/* data */}
      <div className="h-3/5 w-full flex flex-col mt-1">
            <span className="text-md font-normal text-slate-700">{name}</span>
            <span className="text-3xl font-medium text-gray-800">
                Rs. {amount}
            </span>
      </div>
    </div>
  );
}
