import Heading from "../../components/heading/Heading";
import { Plus, Search } from "lucide-react";
import SummaryCardTemp from "../../components/summaryCards/Temp1";
import CategoryCard from "../../components/categoryCard/CTemp2";
import i from "../../assets/icons/index";
import AddCategoryModal from "../../components/addCategory/AddCategoryModal";
import { useContext, useEffect, useState } from "react";
import TransactionContext from "../../context/TransactionContext";
// import { data } from "react-router-dom";
export default function Category() {
  const [modalVisible, setModalVisible] = useState(false);

  // const [user,setUser]=useState(null);
  // const [categories, setCategories] = useState([]);
  // const [expenses, setExpenses] = useState([]);
  // const [totalEx, setTotalEx] = useState(0);
  const [foodEx, setFoodEx] = useState([]);
  const [foodTotal, setFoodTotal] = useState(0);
  const [billEx, setBillEx] = useState([]);
  const [billsTotal, setBillsTotal] = useState(0);
  const [travelEx, setTravelEx] = useState([]);
  const [travelTotal, setTravelTotal] = useState(0);
  const [shoppingEx, setShoppingEx] = useState([]);
  const [shoppingTotal, setShoppingTotal] = useState(0);
  const [transportEx, setTransportEx] = useState([]);
  const [transportTotal, setTransportTotal] = useState(0);
  const [entertainmentEx, setEntertainmentEx] = useState([]);
  const [entertainmentTotal, setEntertainmentTotal] = useState(0);
  const [healthEx, setHealthEx] = useState([]);
  const [healthTotal, setHealthTotal] = useState(0);
  const [educationEx, setEducationEx] = useState([]);
  const [educationTotal, setEducationTotal] = useState(0);

  const [search, setSearch] = useState("");

  // const userData = JSON.parse(localStorage.getItem("user"));
  // console.log("user-",userData.transactions);
  const { totalExpense, expenses } = useContext(TransactionContext);
  useEffect(() => {
    const filterCategories = async () => {
      setFoodEx(expenses?.filter((e) => e.category === "food"));
      setFoodTotal(
        expenses
          .filter((e) => e.category === "food")
          .reduce((sum, e) => sum + Number(e.amount), 0)
      );

      setBillEx(expenses.filter((e) => e.category === "bills&utilities"));
      setBillsTotal(
        expenses
          .filter((e) => e.category === "bills&utilities")
          .reduce((sum, e) => sum + Number(e.amount), 0)
      );

      setTravelEx(expenses.filter((e) => e.category === "travel"));
      setTravelTotal(
        expenses
          .filter((e) => e.category === "travel")
          .reduce((sum, e) => sum + Number(e.amount), 0)
      );

      setShoppingEx(expenses.filter((e) => e.category === "shopping"));
      setShoppingTotal(
        expenses
          .filter((e) => e.category === "shopping")
          .reduce((sum, e) => sum + Number(e.amount), 0)
      );

      setTransportEx(expenses.filter((e) => e.category === "transportation"));
      setTransportTotal(
        expenses
          .filter((e) => e.category === "transportation")
          .reduce((sum, e) => sum + Number(e.amount), 0)
      );

      setEntertainmentEx(
        expenses.filter((e) => e.category === "entertainment")
      );
      setEntertainmentTotal(
        expenses
          .filter((e) => e.category === "entertainment")
          .reduce((sum, e) => sum + Number(e.amount), 0)
      );

      setHealthEx(expenses.filter((e) => e.category === "healthcare"));
      setHealthTotal(
        expenses
          .filter((e) => e.category === "healthcare")
          .reduce((sum, e) => sum + Number(e.amount), 0)
      );

      setEducationEx(expenses.filter((e) => e.category === "education"));
      setEducationTotal(
        expenses
          .filter((e) => e.category === "education")
          .reduce((sum, e) => sum + Number(e.amount), 0)
      );

      // if(search){
      //    let f33 = allData.filter(t=>t.description.toLowerCase().includes(search));
      //  allData=f33
      //   console.log(f33);
      // } // not working bcoz category card wasnt dynamic!!!
    };
    filterCategories();
  }, [expenses]);

  const SummeryCards = [
    {
      title: "Total categories",
      data: "8",
      bgfrom: "#CCE2FF",
      bgto: "#CCFCFF",
      border: "#C3DCFD",
      shadow: "#C3DCFD",
    },
    {
      title: "Total spending",
      data: ` Rs. ${totalExpense}`,
      bgfrom: "#E4D6FF",
      bgto: "#F5CDE2",
      border: "#D7C3F5",
      shadow: "#D7C3F5",
    },
    {
      title: "Total transaction",
      data: expenses.length,
      bgfrom: "#D2F9DE",
      bgto: "#ACF6D3",
      border: "#8EF5B2",
      shadow: "#8EF5B2",
    },
  ];

  const CategoryCards = [
    {
      name: "Food & Dining",
      amount:  foodTotal ,
      icon: i.food,
      transactions: foodEx.length,
      bgfrom: "#FFF7ED",
      bgto: "#FFFBEB",
      border: "#FFEDD5",
      shadow: "#FFEDD5",
      pbgfrom: "#F97316",
      pbgto: "#F59E0B",
      pr: (foodEx.length / expenses.length) * 100,
    },
    {
      name: "Bills & Utilities",
      amount:  billsTotal ,
      icon: i.bill,
      transactions: billEx.length,
      bgfrom: "#FAF5FF",
      bgto: "#FDF2F8",
      border: "#DCFCE7",
      shadow: "#DCFCE7",
      pbgfrom: "#A855F7",
      pbgto: "#EC4899",
      pr: (billEx.length / expenses.length) * 100,
    },
    {
      name: "Travel",
      amount: travelTotal ,
      icon: i.travel,
      transactions: travelEx.length,
      bgfrom: "#F0FDF4",
      bgto: "#ECFDF5",
      border: "#DCFCE7",
      shadow: "#DCFCE7",
      pbgfrom: "#22C55E",
      pbgto: "#10B981",
      pr: (travelEx.length / expenses.length) * 100,
    },
    {
      name: "Transportation",
      amount:  transportTotal ,
      icon: i.transportation,
      transactions: transportEx.length,
      bgfrom: "#EFF6FF",
      bgto: "#ECFEFF",
      border: "#DBEAFE",
      shadow: "#DBEAFE",
      pbgfrom: "#3B82F6",
      pbgto: "#06B6D4",
      pr: (transportEx.length / expenses.length) * 100,
    },
    {
      name: "Shopping",
      amount: shoppingTotal ,
      icon: i.shopping,
      transactions: shoppingEx.length,
      bgfrom: "#FDF2F8",
      bgto: "#FFF1F2",
      border: "#FCE7F3",
      shadow: "#FCE7F3",
      pbgfrom: "#EC4899",
      pbgto: "#F43F5E",
      pr: (shoppingEx.length / expenses.length) * 100,
    },
    {
      name: "Entertainment",
      amount: entertainmentTotal,
      icon: i.entertainment,
      transactions: entertainmentEx.length,
      bgfrom: "#EEF2FF",
      bgto: "#FAF5FF",
      border: "#E0E7FF",
      shadow: "#E0E7FF",
      pbgfrom: "#6366F1",
      pbgto: "#A855F7",
      pr: (entertainmentEx.length / expenses.length) * 100,
    },
    {
      name: "Healthcare",
      amount: healthTotal,
      icon: i.healthcare,
      transactions: healthEx.length,
      bgfrom: "#FEF2F2",
      bgto: "#FFF7ED",
      border: "#FEE2E2",
      shadow: "#FEE2E2",
      pbgfrom: "#EF4444",
      pbgto: "#F97316",
      pr: (healthEx.length / expenses.length) * 100,
    },
    {
      name: "Education",
      amount: educationTotal,
      icon: i.education,
      transactions: educationEx.length,
      bgfrom: "#FEFCE8",
      bgto: "#FFFBEB",
      border: "#FEF9C3",
      shadow: "#FEF9C3",
      pbgfrom: "#F97316",
      pbgto: "#F59E0B",
      pr: (educationEx.length / expenses.length) * 100,
    },
  ];

  return (
    <div className="h-auto w-full flex flex-col gap-5 p-5 ">
      <Heading
        title="Categories"
        tagline="Manage and track your expense categories"
      />
      <div className="h-auto sm:h-40 w-full flex flex-col gap-5 ">
        <div className="h-auto sm:h-3/5 w-full grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-3">
          {SummeryCards.map((c, ind) => (
            <SummaryCardTemp
              key={ind}
              title={c.title}
              data={c.data}
              bgfrom={c.bgfrom}
              bgto={c.bgto}
              border={c.border}
              shadow={c.shadow}
            />
          ))}
          {/* <SummaryCardTemp
            title="Total categories"
            data="8"
            bgfrom="#CCE2FF"
            bgto="#CCFCFF"
            border="#C3DCFD"
            shadow="#C3DCFD"
          />
          <SummaryCardTemp
            title="Total spending"
            data={`Rs. ${totalExpense}`}
            bgfrom="#E4D6FF"
            bgto="#F5CDE2"
            border="#D7C3F5"
            shadow="#D7C3F5"
          />
          <SummaryCardTemp
            title="Total transaction"
            data={expenses.length}
            bgfrom="#D2F9DE"
            bgto="#ACF6D3"
            border="#8EF5B2"
            shadow="#8EF5B2"
          /> */}
        </div>
        <div className="h-auto sm:h-2/5 w-full  relative">
          <label htmlFor="search" className="h-full w-full flex items-center">
            <span className="absolute text-gray-400 pl-3">
              <Search className="size-5" />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                let s = e.target.value.toLocaleLowerCase();
                setSearch(s);
              }}
              placeholder="Search category..."
              className="h-full w-full rounded-2xl border border-slate-200 focus:outline-blue-300 pl-12 py-5 font-normal text-sm"
            />
          </label>
        </div>
      </div>
      <div className="h-auto w-full mb-32 lg:mb-0 ">
        <div className="h-full w-full grid grid-cols-2 sm:grid-cols-3 gap-5">
          {CategoryCards.map((c, ind) =>
            c.transactions ? (
              <CategoryCard
                key={ind}
                name={c.name}
                amount={c.amount}
                icon={c.icon}
                transactions={c.transactions}
                bgfrom={c.bgfrom}
                bgto={c.bgto}
                border={c.border}
                shadow={c.shadow}
                pbgfrom={c.pbgfrom}
                pbgto={c.pbgto}
                pr={c.pr}
              />
            ) : (
              ""
            )
          )}
          {/* <CategoryCard
            name="Food & Dining"
            amount={foodTotal}
            icon={i.food}
            transactions={foodEx.length}
            bgfrom="#FFF7ED"
            bgto="#FFFBEB"
            border="#FFEDD5"
            shadow="#FFEDD5"
            pbgfrom="#F97316"
            pbgto="#F59E0B"
            pr={(foodEx.length / expenses.length) * 100}
          /> */}
          {/* <CategoryCard
            name="Bills & Utilities"
            amount={billsTotal}
            icon={i.bill}
            transactions={billEx.length}
            bgfrom="#FAF5FF"
            bgto="#FDF2F8"
            border="#F3E8FF"
            shadow="#F3E8FF"
            pbgfrom="#A855F7"
            pbgto="#EC4899"
            pr={(billEx.length / expenses.length) * 100}
          />
          <CategoryCard
            name="Travel"
            amount={travelTotal}
            icon={i.travel}
            transactions={travelEx.length}
            bgfrom="#F0FDF4"
            bgto="#ECFDF5"
            border="#DCFCE7"
            shadow="#DCFCE7"
            pbgfrom="#22C55E"
            pbgto="#10B981"
            pr={(travelEx.length / expenses.length) * 100}
          />
          {transportEx ? (
            <CategoryCard
              name="Transportation"
              amount={transportTotal}
              icon={i.transportation}
              transactions={transportEx.length}
              bgfrom="#EFF6FF"
              bgto="#ECFEFF"
              border="#DBEAFE"
              shadow="#DBEAFE"
              pbgfrom="#3B82F6"
              pbgto="#06B6D4"
              pr={(transportEx.length / expenses.length) * 100}
            />
          ) : (
            ""
          )}

          <CategoryCard
            name="Shopping"
            amount={shoppingTotal}
            icon={i.shopping}
            transactions={shoppingEx.length}
            bgfrom="#FDF2F8"
            bgto="#FFF1F2"
            border="#FCE7F3"
            shadow="#FCE7F3"
            pbgfrom="#EC4899"
            pbgto="#F43F5E"
            pr={(shoppingEx.length / expenses.length) * 100}
          />

          {entertainmentEx ? (
            <CategoryCard
              name="Entertainment"
              amount={entertainmentTotal}
              icon={i.entertainment}
              transactions={entertainmentEx.length}
              bgfrom="#EEF2FF"
              bgto="#FAF5FF"
              border="#E0E7FF"
              shadow="#E0E7FF"
              pbgfrom="#6366F1"
              pbgto="#A855F7"
              pr={(entertainmentEx.length / expenses.length) * 100}
            />
          ) : (
            ""
          )}
          {healthEx ? (
            <CategoryCard
              name="Healthcare"
              amount={healthTotal}
              icon={i.healthcare}
              transactions={healthEx.length}
              bgfrom="#FEF2F2"
              bgto="#FFF7ED"
              border="#FEE2E2"
              shadow="#FEE2E2"
              pbgfrom="#EF4444"
              pbgto="#F97316"
              pr={(healthEx.length / expenses.length) * 100}
            />
          ) : (
            ""
          )}
          {educationEx ? (
            <CategoryCard
              name="Education"
              amount={educationTotal}
              icon={i.education}
              transactions={educationEx.length}
              bgfrom="#FEFCE8"
              bgto="#FFFBEB"
              border="#FEF9C3"
              shadow="#FEF9C3"
              pbgfrom="#F97316"
              pbgto="#F59E0B"
              pr={(educationEx.length / expenses.length) * 100}
            />
          ) : (
            ""
          )} */}

          <div className="sm:h-60 lg:h-64 w-full flex flex-col justify-center items-center gap-5  border border-[#BFDBFE] border-dashed bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-xl p-3 shadow-md shadow-[#BFDBFE] text-center">
            <div
              onClick={() => setModalVisible(true)}
              className="size-20 flex justify-center items-center bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-xl "
            >
              <Plus className="size-10 text-white" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-800 font-medium text-xl">
                Add new Category
              </span>
              <span className="text-gray-400 text-xs">
                create a custom category
              </span>
            </div>
          </div>
        </div>
      </div>
      {modalVisible ? (
        <AddCategoryModal onClose={() => setModalVisible(!modalVisible)} />
      ) : (
        ""
      )}
    </div>
  );
}
