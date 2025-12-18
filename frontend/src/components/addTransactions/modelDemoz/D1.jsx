import { IndianRupee } from "lucide-react";
import React, { useState } from "react";

export default function AddTransactionModal({ open, onClose }) {
  // const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user._id);

  const [step, setStep] = useState(1);
  const [type, setType] = useState("income");

  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [incomeFrom, setIncomeFrom] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleTransaction = async () => {
    const formData = new FormData();

    formData.append("userId", user._id);
    formData.append("type", type);
    formData.append("amount", amount);
    formData.append("description", description);
    formData.append("incomeFrom", incomeFrom);
    formData.append("category", category);
    formData.append("date", date);

    for (const [key, value] of formData) {
      console.log(key, value);
    }

    const addTransaction = await fetch(
      "http://localhost:5000/usersdata/transactions",
      {
        method: "post",
        body: formData,
      }
    );
    // console.log(await addTransaction.text());
    const transaction = await addTransaction.json();
    console.log("trs-", transaction.transaction);
    

    if (addTransaction.ok) {
      const tr = { transactions: [transaction.transaction] };
      localStorage.setItem("user", JSON.stringify(...user,tr));
    }
  };

  const closeModal = () => {
    onClose();
    // setOpen(false);
    setStep(1);
    setType("income");
  };
  if (!open) return null;

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        {step === 1 && (
          <div className="h-3/4 w-full max-w-sm flex flex-col justify-between rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 flex flex-col gap-5 w-full items-start justify-between">
              <div className="w-full flex">
                <div className="w-full">
                  <h2 className="text-lg font-semibold">Add Transaction</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6 w-full flex justify-between gap-3">
                <button
                  onClick={() => setType("income")}
                  className={`flex-1 rounded-lg border px-4 py-2 font-medium transition ${
                    type === "income"
                      ? "border-green-500 bg-green-600 text-white"
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Income
                </button>
                <button
                  onClick={() => setType("expense")}
                  className={`flex-1 rounded-lg border px-4 py-2 font-medium transition ${
                    type === "expense"
                      ? "border-red-500 bg-red-600 text-white"
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Expense
                </button>
              </div>
            </div>

            {/* add amount */}
            <div className="mb-6 flex items-center justify-center relative">
              <IndianRupee className="size-9 text-gray-700 absolute left-1/4 pl-2" />
              <input
                type="number"
                placeholder="0.00"
                className="w-40 h-9 pl-10  border rounded-lg  pr-0 py-7 text-start tracking-wide text-3xl text-blue-600 focus:border-blue-600 focus:outline-none"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            {/* next btn */}
            <button
              onClick={() => setStep(2)}
              className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}

        {/* details model */}
        {step === 2 && (
          <div className="h-3/4 w-full max-w-sm flex flex-col justify-between rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-start justify-between">
              <h2 className="text-lg font-semibold">
                {type === "expense" ? "Add Expense" : "Add Income"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Description"
                className="w-full rounded-lg border px-4 py-2 focus:border-blue-600 focus:outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              {type === "expense" ? (
                <select
                  className="w-full overflow-hidden overflow-y-scroll rounded-lg border px-4 py-2 focus:border-blue-600 focus:outline-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="not selected">Select Category</option>
                  <option value="food">Food</option>
                  <option value="bills&utilities">Bills & utilities</option>
                  <option value="travel">travel</option>
                  <option value="transportation">Transport</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="shopping">Shopping</option>
                  <option value="education">Education</option>
                  <option value="entertainment">Entertainment</option>
                </select>
              ) : (
                <input
                  type="text"
                  placeholder="Income From"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-600 focus:outline-none"
                  value={incomeFrom}
                  onChange={(e) => setIncomeFrom(e.target.value)}
                />
              )}

              <input
                type="date"
                className="w-full rounded-lg border px-4 py-2 focus:border-blue-600 focus:outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* btns */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 rounded-lg border py-2 text-gray-600 hover:bg-gray-100"
              >
                Back
              </button>
              <button
                className={`flex-1 rounded-lg py-2 text-white ${
                  type === "expense"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
                onClick={handleTransaction}
              >
                Add Transaction
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
