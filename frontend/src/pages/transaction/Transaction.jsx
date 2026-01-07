import Heading from "../../components/heading/Heading";
import { NutIcon, Plus, Search, UserStar } from "lucide-react";
import i from "../../assets/icons/index";
import TransactionCard from "../../components/Income-expense-Card/TransactionCard";
import { useEffect, useState } from "react";
import AddTransactionModal from "../../components/addTransactions/modelDemoz/D1";

export default function Transaction() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const userId = localUser._id;

  const [user, setUser] = useState(null);
  const [trans, setTransactions] = useState([]);
  const [recentTransactions, setRecentTrans] = useState([]);

  const [expenses, setExpenses] = useState([]);
  const [totalEx, setTotalEx] = useState(0);
  const [incomes, setIncomes] = useState([]);
  const [totalIn, setTotalIn] = useState(0);

  const [filteredTr, setFilterdTr] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterDate, setFilterDate] = useState("all");

  const [showCateFilter, setShowCateFilter] = useState(false);
  const [search, setSearch] = useState("");

  const [showmodal, setShowmodal] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      await fetch("http://localhost:5000/usersdata/")
        .then((res) => res.json())
        .then((data) => {
          let usr = data.find((i) => i._id === userId);
          // console.log(user);
          setUser(usr);
        })
        .catch((error) => {
          console.log("error at fetching userdata at dashboard", error);
        });
    }
    fetchUser();
  }, [userId]);

  useEffect(() => {
    console.log("user updated!!!", user);
    if (user === null) return;

    const getTransactions = () => {
      const tr = user?.transactions;
      setTransactions(tr);
      if (!tr) return;

      const recentT = [...trans].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setRecentTrans(recentT);

      const ex = recentT.filter((e) => e.type === "expense");
      // console.log("ex-",ex);
      setExpenses(ex);
      // console.log(expenses);
      const inc = recentT.filter((i) => i.type === "income");
      // console.log(inc);
      setIncomes(inc);

      const tl = ex.reduce((sum, num) => {
        return sum + Number(num.amount);
      }, 0);
      // console.log('total-',tl);
      setTotalEx(tl);

      const tIn = inc.reduce((sum, num) => {
        return sum + Number(num.amount);
      }, 0);
      // console.log(tIn);
      setTotalIn(tIn);

      // show filter category
      if (filterType === "expense") {
        setShowCateFilter(true);
      } else {
        setShowCateFilter(false);
      }

      var allData = recentT;

      // Search fn
      if (search) {
        let f33 = allData.filter((t) =>
          t.description.toLowerCase().includes(search)
        );
        allData = f33;
        console.log(f33);

        setFilterdTr(allData);
      }

      if (filterType !== "all") {
        var f1 = allData.filter((t) => t.type === filterType);
        allData = f1;
      }
      if (filterType !== "income") {
        if (filterCategory !== "all") {
          var f2 = allData.filter((t) => t.category === filterCategory);
          allData = f2;
        }
      }
      return setFilterdTr(allData);
    };
    getTransactions();
  }, [user, filterType, filterCategory, search]);

  const netBalance = () => {
    if (!totalIn && !totalEx) return;

    return totalIn - totalEx;
  };
  // console.log("filterBy-",filterType);

  const handleTransactions = (tr) => {
    if (!tr) return;
    return (
      <TransactionCard
        icon={i[tr.type]}
        tag={tr.description}
        date={tr.date.replace("T00:00:00.000Z", "")}
        amount={tr.amount}
        type={tr.type}
        bg="whitebg"
        category={tr.type === "expense" ? tr.category : tr.incomeFrom}
      />
    );
  };

  const styles = {
    boxShadow: `0px 3px 10px rgba(59, 130, 246, 0.7)`,
  };

  return (
    <div className="h-auto w-full flex flex-col gap-5 p-5 ">
      {/* heading */}
      <div className="flex justify-between">
        <Heading
          title="Expenses & Income"
          tagline="Track and manage all your transactions"
        />
        <button
          className=" h-min hidden lg:flex items-center gap-2 px-3 py-2 text-white rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#2563EB]  "
          style={styles}
          onClick={() => setShowmodal(true)}
        >
          <Plus className="size-5" />
          <span>Add new transaction</span>
        </button>
      </div>
      {/* data cards */}
      <div className="h-auto lg:h-24 w-full grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {/* <div className="h-full w-full bg-white rounded-xl"></div> */}
        <Datacard
          name="Total Expense"
          amount={totalEx}
          icon={i.expense}
          bgfrom="#F6D1D1"
          bgto="#F9DEC6"
          border="#F3BFBF"
          shadow="#F3BFBF"
          ibgfrom="#EF4444"
          ibgto="#F97316"
        />
        <Datacard
          name="Total Income"
          amount={totalIn}
          icon={i.income}
          bgfrom="#D2F9DE"
          bgto="#ACF6D3"
          border="#8EF5B2"
          shadow="#8EF5B2"
          ibgfrom="#22C55E"
          ibgto="#10B981"
        />
        <Datacard
          name="Net Balance"
          amount={netBalance()}
          icon={i.transaction}
          bgfrom="#CCE2FF"
          bgto="#CCFCFF"
          border="#C3DCFD"
          shadow="#C3DCFD"
          ibgfrom="#3B82F6"
          ibgto="#06B6D4"
        />
      </div>

      {/* data filtering  */}
      <div className="h-auto lg:h-20 w-full p-4 flex flex-col lg:flex-row justify-between gap-4 bg-white rounded-xl">
        <div className="h-10 lg:h-full w-full relative flex items-center border rounded-lg">
          <Search
            onClick={() => console.log(search)}
            className="absolute left-2 size-5  text-gray-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              let s = e.target.value.toLowerCase();
              //  console.log(s);
              setSearch(s);
            }}
            placeholder="Search transaction"
            className="h-full w-full rounded-lg bg-gray-50 pl-10 focus:outline-[#C3DCFD] text-blue-500"
          />
        </div>
        <div className="h-auto w-full">
          <select
            className="h-10 lg:h-full w-full px-3 border rounded-lg focus:outline-[#C3DCFD]"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        {showCateFilter ? (
          <div className="h-auto w-full">
            <select
              className="h-10 lg:h-full w-full px-3 border rounded-lg focus:outline-[#C3DCFD]"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">All categories</option>
              <option value="bills&utilities">Bills & Utilities</option>
              <option value="food">Food </option>
              <option value="transportation">Transportation </option>
              <option value="travel">Travel </option>
              <option value="education">Education </option>
              <option value="health">Healthcare</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
        ) : (
          ""
        )}

        <div className="h-auto w-full">
          <select
            className="h-10 lg:h-full w-full px-3 border rounded-lg focus:outline-[#C3DCFD]"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          >
            <option value="all">Sort by Duration</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="1m"> 1 month</option>
            <option value="3m"> 3 months</option>
            <option value="6m"> 6 months</option>
            <option value="1y"> 1 year</option>
          </select>
        </div>
      </div>

      {/* transactions */}
      <div className="h-auto grid grid-cols-1 gap-3 p-4">
        {!filteredTr
          ? recentTransactions.map((tr) => (
              <TransactionCard
                icon={i[tr.type]}
                tag={tr.description}
                date={tr.date.replace("T00:00:00.000Z", "")}
                amount={tr.amount}
                type={tr.type}
                key={tr._id}
                bg="whitebg"
                category={tr.type === "expense" ? tr.category : tr.incomeFrom}
              />
            ))
          : filteredTr.map((tr) => handleTransactions(tr))}
      </div>
      <AddTransactionModal
        open={showmodal}
        onClose={() => setShowmodal(false)}
      />
    </div>
  );
}

// data card;;
const Datacard = ({
  name,
  amount,
  icon,
  bgfrom,
  bgto,
  border,
  shadow,
  ibgfrom,
  ibgto,
}) => {
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
        <span className="text-3xl text-gray-800">Rs. {amount}</span>
      </div>
    </div>
  );
};

// transaction card
