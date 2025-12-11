import Heading from "../../components/heading/Heading";
import { Plus, Search } from "lucide-react";
import i from "../../assets/icons/index";
import TransactionCard from "../../components/Income-expense-Card/TransactionCard";

export default function Transaction() {
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
          className=" h-min flex items-center gap-2 px-3 py-2 text-white rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#2563EB]  "
          style={styles}
        >
          <Plus className="size-5" />
          <span>Add new transaction</span>
        </button>
      </div>
      {/* data cards */}
      <div className="h-24 w-full grid grid-cols-3 gap-4 ">
        {/* <div className="h-full w-full bg-white rounded-xl"></div> */}
        <Datacard
          name="Total Income"
          amount="87,000"
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
          amount="1,88,000"
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
          amount="34,000"
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
      <div className="h-20 w-full p-4 grid grid-cols-4 gap-4 bg-white rounded-xl">
        <div className="h-full relative flex items-center border rounded-lg">
          <Search className="absolute left-2 size-5  text-gray-400" />
          <input
            type="text"
            placeholder="Search transaction"
            className="h-full w-full rounded-lg bg-gray-50 pl-10 focus:outline-[#C3DCFD] text-blue-500"
          />
        </div>
        <div>
          <select className="h-full w-full px-3 border rounded-lg focus:outline-[#C3DCFD]">
            <option value="all">All type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <select className="h-full w-full px-3 border rounded-lg focus:outline-[#C3DCFD]">
            <option value="all">All categories</option>
            <option value="income">Bills & Utilities</option>
            <option value="expense">Food </option>
            <option value="expense">Transportation </option>
            <option value="expense">Travel </option>
            <option value="expense">Education </option>
            <option value="expense">Healthcare</option>
            <option value="expense">Entertainment</option>
          </select>
        </div>
        <div>
          <select className="h-full w-full px-3 border rounded-lg focus:outline-[#C3DCFD]">
            <option value="all">Short by date</option>
            <option value="income">Today</option>
            <option value="expense">Yesterday</option>
            <option value="expense"> 1 month</option>
            <option value="expense"> 3 months</option>
            <option value="expense"> 6 months</option>
            <option value="expense"> 1 year</option>
          </select>
        </div>
      </div>

      {/* transactions */}
      <div className="h-screen overflow-y-scroll grid grid-cols-1 gap-3 p-4">
        
          <TransactionCard
            icon={i.code}
            tag="Freelance work"
            date="16 Nov 2025"
            amount="12,000"
            type="income"
            category="Income"
          />
          <TransactionCard
            icon={i.code}
            tag="Freelance work"
            date="16 Nov 2025"
            amount="12,000"
            type="income"
            category="Income"
          />
          <TransactionCard
            icon={i.code}
            tag="Freelance work"
            date="16 Nov 2025"
            amount="12,000"
            type="income"
            category="Income"
          />
          <TransactionCard
            icon={i.code}
            tag="Freelance work"
            date="16 Nov 2025"
            amount="12,000"
            type="income"
            category="Income"
          />
          <TransactionCard
            icon={i.code}
            tag="Freelance work"
            date="16 Nov 2025"
            amount="12,000"
            type="income"
            category="Income"
          />
          <TransactionCard
            icon={i.code}
            tag="Freelance work"
            date="16 Nov 2025"
            amount="12,000"
            type="income"
            category="Income"
          />
          <TransactionCard
            icon={i.code}
            tag="Freelance work"
            date="16 Nov 2025"
            amount="12,000"
            type="income"
            category="Income"
          />
          <TransactionCard
            icon={i.code}
            tag="Freelance work"
            date="16 Nov 2025"
            amount="12,000"
            type="income"
            category="Income"
          />
      </div>
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
