import Heading from "../../components/heading/Heading";
import { Plus, Search } from "lucide-react";
import SummaryCardTemp from "../../components/summaryCards/Temp1";
import CategoryCard from "../../components/categoryCard/CTemp2";
import i from "../../assets/icons/index";
import AddCategoryModal from "../../components/addCategory/AddCategoryModal";
import { useEffect, useState } from "react";
// import { data } from "react-router-dom";
export default function Category() {
  const [modalVisible, setModalVisible] = useState(false);

  // const [user,setUser]=useState(null);
  // const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totalEx, setTotalEx] = useState(0);
  const [foodEx, setFoodEx] = useState([]);
  const [foodTotal, setFoodTotal] = useState(0);
  const [billEx, setBillEx] = useState([]);
  const [billsTotal, setBillsTotal] = useState(0);
  const [travelEx, setTravelEx] = useState([]);
  const [travelTotal, setTravelTotal] = useState(0);
  const [shoppingEx, setShoppingEx] = useState([]);
  const [shoppingTotal, setShoppingTotal] = useState(0);

  const userData = JSON.parse(localStorage.getItem("user"));
  // console.log("user-",userData.transactions);

  useEffect(() => {
    if (!userData.transactions) return;
    // fetch("http://localhost:5000/usersdata/")
    // .then((res)=>res.json())
    // .then((data)=>{
    //   const ex = data[0].transactions.filter((e)=>e.type==="expense")
    //   setExpenses(ex)
    // })
    // .catch((err)=>{
    //   console.log(err);
      
    // })

    const ex = userData.transactions.filter((e) => e.type === "expense");
    setExpenses(ex);
    setTotalEx(ex.reduce((sum,e)=>sum+Number(e.amount),0));

     setFoodEx(ex.filter((e)=>e.category==="food"));
     setFoodTotal(
      ex
        .filter((e) => e.category === "food")
        .reduce((sum, e) => sum + Number(e.amount), 0)
     )

     setBillEx(ex.filter((e)=>e.category==="bills&utilities"));
     setBillsTotal(
      ex.filter((e)=>e.category==="bills&utilities").reduce((sum,e)=>sum+Number(e.amount),0)
     )

    setTravelEx(ex.filter((e) => e.category === "travel"));
    setTravelTotal(
      ex
        .filter((e) => e.category === "travel")
        .reduce((sum, e) => sum + Number(e.amount), 0)
    );

    setShoppingEx(ex.filter((e) => e.category === "shopping"));
    setShoppingTotal(
      ex
        .filter((e) => e.category === "shopping")
        .reduce((sum, e) => sum + Number(e.amount), 0)
    );
  }, []);
  // console.log(expenses);
  // console.log(travelTotal);

  // console.log(totalEx);
  // console.log(foodEx);
  // console.log(foodTotal);
  // console.log(billEx);

  // console.log(billsTotal);

  // useEffect(() => {
  //   // fetch("http://localhost:5000/categories")
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     setCategories(data);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log("error at fetching category data", err);
  //   //   });

  //   fetch(`http://localhost:5000/usersdata/`)
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     let ex = data[0].transactions.filter(e=>e.type==="expense") //done!!!

  //     setExpenses(ex)
  //   })
  //   .catch((err)=>{
  //     console.log("error at geting user data", err);

  //   })

  // }, []);
  // console.log("ur-",expenses);

  // let foodTotal=0;
  // for(let i=0; i<expenses.length; i++){
  //   foodTotal = expenses[i].amount + foodTotal
  // }
  // console.log(foodTotal);

  // const getTotalEx = ()=>{
  //     let transaction= userData.transactions;
  //     setExpenses(transaction.filter(e=>e.type==="expense"))
  //   for(let i=0; i<expenses.length;i++){
  //     setTotalEx(expenses[i].amount + totalEx)
  //   }
  // }

  // console.log("total-", totalEx );

  // const transaction =user?.transactions;
  // // console.log("tr",transaction);

  //   // console.log("et",Expense);

  //   let exByCate = {};
  //   for(let i=0; i<Expense.length; i++){
  //     const data = Expense[i];
  //     const category = data.category;
  //     console.log(category);

  //   }

  // const food = Expense?.filter(f=>f.category==="food")
  // console.log(food);
  // let foodTotal = 0;
  // for (let i = 0; i < food.length; i++) {
  //    foodTotal = food[i].amount + foodTotal;
  // }
  // console.log(foodTotal);

  //   const getBrdColor = (categories)=>{
  //     const c1= categories.color1;
  //     const c2= categories.color2;

  //     const removehex1 = c1.replace("#","");
  //     const removehex2 = c2.replace("#","");

  //     const r = parseInt(removehex1.slice(0,2),16);
  //     const g = parseInt(removehex1.slice(2,4),16);
  //     const b = parseInt(removehex1.slice(4,6),16);

  //     const rgb1= {r,g,b};
  //     console.log("rgb-",rgb1);
  //   }

  return (
    <div className="h-auto w-full flex flex-col gap-5 p-5 ">
      <Heading
        title="Categories"
        tagline="Manage and track your expense categories"
      />
      <div className="h-40 w-full flex flex-col gap-5">
        <div className="h-3/5 w-full grid grid-cols-3 gap-3">
          <SummaryCardTemp
            title="Total categories"
            data="8"
            bgfrom="#CCE2FF"
            bgto="#CCFCFF"
            border="#C3DCFD"
            shadow="#C3DCFD"
          />
          <SummaryCardTemp
            title="Total spending"
            data={`Rs. ${totalEx}`}
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
          />
        </div>
        <div className="h-2/5 w-full  relative">
          <label htmlFor="search" className="h-full w-full flex items-center">
            <span className="absolute text-gray-400 pl-3">
              <Search className="size-5" />{" "}
            </span>
            <input
              type="text"
              placeholder="Search category..."
              className="h-full w-full rounded-2xl border border-slate-200 focus:outline-blue-300 pl-12 py-5 font-normal text-sm"
            />
          </label>
        </div>
      </div>
      <div className="h-auto w-full ">
        <div className="h-full w-full grid grid-cols-3 gap-5">
          <CategoryCard
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
          />
          <CategoryCard
            name="Transportation"
            amount="38,000"
            icon={i.transportation}
            transactions="21"
            bgfrom="#EFF6FF"
            bgto="#ECFEFF"
            border="#DBEAFE"
            shadow="#DBEAFE"
            pbgfrom="#3B82F6"
            pbgto="#06B6D4"
          />
          <CategoryCard
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
          <CategoryCard
            name="Entertainment"
            amount="28,000"
            icon={i.entertainment}
            transactions="11"
            bgfrom="#EEF2FF"
            bgto="#FAF5FF"
            border="#E0E7FF"
            shadow="#E0E7FF"
            pbgfrom="#6366F1"
            pbgto="#A855F7"
          />
          <CategoryCard
            name="Healthcare"
            amount="15,000"
            icon={i.health}
            transactions="12"
            bgfrom="#FEF2F2"
            bgto="#FFF7ED"
            border="#FEE2E2"
            shadow="#FEE2E2"
            pbgfrom="#EF4444"
            pbgto="#F97316"
          />
          <CategoryCard
            name="Education"
            amount="18,000"
            icon={i.education}
            transactions="28"
            bgfrom="#FEFCE8"
            bgto="#FFFBEB"
            border="#FEF9C3"
            shadow="#FEF9C3"
            pbgfrom="#F97316"
            pbgto="#F59E0B"
          />
          {/* <CategoryCard
            name={categories[0].name}
            amount="18,000"
            icon={i.categoryIcon}
            transactions="28"
            bgfrom={categories[0].color1}
            bgto={categories[0].color2}
            border="#FEF9C3"
            shadow="#FEF9C3"
            pbgfrom="#F97316"
            pbgto="#F59E0B"
          /> */}

          <div className="h-64 w-full flex flex-col justify-center items-center gap-5  border border-[#BFDBFE] border-dashed bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-xl p-3 shadow-md shadow-[#BFDBFE]">
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
