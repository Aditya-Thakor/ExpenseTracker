import { createContext, useContext, useEffect, useMemo, useState } from "react"; 

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    // const transactions = [

    //     {
    //         id: 1,
    //         type: "income",
    //         name: "Salary January",
    //         amount: 35000,
    //         incomeFrom: "Company",
    //         date: "2026-01-01",
    //     },
    //     {
    //         id: 2,
    //         type: "income",
    //         name: "Freelance Project",
    //         amount: 12000,
    //         incomeFrom: "Client",
    //         date: "2026-01-03",
    //     },
    //     {
    //         id: 3,
    //         type: "income",
    //         name: "YouTube Revenue",
    //         amount: 4000,
    //         incomeFrom: "YouTube",
    //         date: "2026-01-05",
    //     },
    //     {
    //         id: 4,
    //         type: "income",
    //         name: "App Design Work",
    //         amount: 8000,
    //         incomeFrom: "Freelancing",
    //         date: "2026-01-06",
    //     },
    //     {
    //         id: 5,
    //         type: "income",
    //         name: "Bonus",
    //         amount: 6000,
    //         incomeFrom: "Company",
    //         date: "2026-01-08",
    //     },
    //     {
    //         id: 6,
    //         type: "income",
    //         name: "Stock Profit",
    //         amount: 5000,
    //         incomeFrom: "Investments",
    //         date: "2026-01-10",
    //     },
    //     {
    //         id: 7,
    //         type: "income",
    //         name: "Website Project",
    //         amount: 15000,
    //         incomeFrom: "Client",
    //         date: "2026-01-12",
    //     },
    //     {
    //         id: 8,
    //         type: "income",
    //         name: "Salary February",
    //         amount: 35000,
    //         incomeFrom: "Company",
    //         date: "2026-02-01",
    //     },
    //     {
    //         id: 9,
    //         type: "income",
    //         name: "Freelance Project",
    //         amount: 12000,
    //         incomeFrom: "Client",
    //         date: "2026-02-05",
    //     },
    //     {
    //         id: 10,
    //         type: "income",
    //         name: "YouTube Revenue",
    //         amount: 4000,
    //         incomeFrom: "YouTube",
    //         date: "2026-02-10",
    //     },

    //     {
    //         id: 11,
    //         type: "expense",
    //         name: "Groceries",
    //         amount: 2200,
    //         category: "food",
    //         date: "2026-01-02",
    //     },
    //     {
    //         id: 12,
    //         type: "expense",
    //         name: "Bus Pass",
    //         amount: 800,
    //         category: "transportation",
    //         date: "2026-01-03",
    //     },
    //     {
    //         id: 13,
    //         type: "expense",
    //         name: "Mobile Recharge",
    //         amount: 499,
    //         category: "bills&utilities",
    //         date: "2026-01-04",
    //     },
    //     {
    //         id: 14,
    //         type: "expense",
    //         name: "Electricity Bill",
    //         amount: 1800,
    //         category: "bills&utilities",
    //         date: "2026-01-05",
    //     },
    //     {
    //         id: 15,
    //         type: "expense",
    //         name: "Lunch Outside",
    //         amount: 650,
    //         category: "food",
    //         date: "2026-01-06",
    //     },
    //     {
    //         id: 16,
    //         type: "expense",
    //         name: "Netflix Subscription",
    //         amount: 649,
    //         category: "entertainment",
    //         date: "2026-01-07",
    //     },
    //     {
    //         id: 17,
    //         type: "expense",
    //         name: "Medicine",
    //         amount: 900,
    //         category: "healthcare",
    //         date: "2026-01-08",
    //     },
    //     {
    //         id: 18,
    //         type: "expense",
    //         name: "Online Course",
    //         amount: 3000,
    //         category: "education",
    //         date: "2026-01-09",
    //     },
    //     {
    //         id: 19,
    //         type: "expense",
    //         name: "New Headphones",
    //         amount: 2500,
    //         category: "shopping",
    //         date: "2026-01-10",
    //     },
    //     {
    //         id: 20,
    //         type: "expense",
    //         name: "Cab Ride",
    //         amount: 450,
    //         category: "transportation",
    //         date: "2026-01-11",
    //     },
    //     {
    //         id: 21,
    //         type: "expense",
    //         name: "Dinner",
    //         amount: 1200,
    //         category: "food",
    //         date: "2026-01-12",
    //     },
    //     {
    //         id: 22,
    //         type: "expense",
    //         name: "Movie Tickets",
    //         amount: 700,
    //         category: "entertainment",
    //         date: "2026-01-13",
    //     },
    //     {
    //         id: 23,
    //         type: "expense",
    //         name: "Doctor Visit",
    //         amount: 1500,
    //         category: "healthcare",
    //         date: "2026-01-14",
    //     },
    //     {
    //         id: 24,
    //         type: "expense",
    //         name: "Train Tickets",
    //         amount: 2200,
    //         category: "travel",
    //         date: "2026-01-15",
    //     },
    //     {
    //         id: 25,
    //         type: "expense",
    //         name: "Shoes",
    //         amount: 3200,
    //         category: "shopping",
    //         date: "2026-01-16",
    //     },
    //     {
    //         id: 26,
    //         type: "expense",
    //         name: "Internet Bill",
    //         amount: 999,
    //         category: "bills&utilities",
    //         date: "2026-01-17",
    //     },
    //     {
    //         id: 27,
    //         type: "expense",
    //         name: "College Fees",
    //         amount: 5000,
    //         category: "education",
    //         date: "2026-01-18",
    //     },
    //     {
    //         id: 28,
    //         type: "expense",
    //         name: "Snacks",
    //         amount: 300,
    //         category: "food",
    //         date: "2026-01-19",
    //     },
    //     {
    //         id: 29,
    //         type: "expense",
    //         name: "Weekend Trip",
    //         amount: 6500,
    //         category: "travel",
    //         date: "2026-01-20",
    //     },
    //     {
    //         id: 30,
    //         type: "expense",
    //         name: "Clothes Shopping",
    //         amount: 4000,
    //         category: "shopping",
    //         date: "2026-01-21",
    //     },
    //     {
    //         id: 31,
    //         type: "expense",
    //         name: "Groceries",
    //         amount: 2200,
    //         category: "food",
    //         date: "2026-02-02",
    //     },
    //     {
    //         id: 32,
    //         type: "expense",
    //         name: "Bus Pass",
    //         amount: 800,
    //         category: "transportation",
    //         date: "2026-02-03",
    //     },
    //     {
    //         id: 33,
    //         type: "expense",
    //         name: "Mobile Recharge",
    //         amount: 499,
    //         category: "bills&utilities",
    //         date: "2026-02-04",
    //     },
    //     {
    //         id: 34,
    //         type: "expense",
    //         name: "Lunch Outside",
    //         amount: 650,
    //         category: "food",
    //         date: "2026-02-06",
    //     },
    //     {
    //         id: 35,
    //         type: "expense",
    //         name: "Netflix Subscription",
    //         amount: 649,
    //         category: "entertainment",
    //         date: "2026-02-07",
    //     },
    //     {
    //         id: 36,
    //         type: "expense",
    //         name: "Medicine",
    //         amount: 900,
    //         category: "healthcare",
    //         date: "2026-02-08",
    //     },
    //     {
    //         id: 37,
    //         type: "expense",
    //         name: "Online Course",
    //         amount: 3000,
    //         category: "education",
    //         date: "2026-02-09",
    //     },
    // ];

    const localUser = JSON.parse(localStorage.getItem("user"));
    const userId = localUser._id;

    const [user,setUser]=useState([]);
    const [transactions,setTransaction]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/usersdata/")
        .then(res=>res.json())
        .then((data)=>{
            let usr = data.find((i) => i._id === userId);
            setUser(usr);
        })
        .catch(error=>{
            console.log("Error at fetching user data ::");
            console.log(error);            
        })
    },[userId]);

    useMemo(()=>{
        if(user){
            setTransaction(user?.transactions)
        }
    },[user])

    const now = new Date();
    const parseDate = (date) => new Date(date);

    const filterByDuration = (type, value = null) => {
        return transactions?.filter((tx) => {
            const txDate = parseDate(tx.date);

            switch (type) {

                case "today":
                    return txDate.toDateString() === now.toDateString();

                case "yesterday":
                    const y = new Date();
                    y.setDate(now.getDate() - 1);
                    return txDate.toDateString() === y.toDateString();

                case "thisWeek":
                    const start = new Date();
                    start.setDate(now.getDate() - now.getDay())
                    start.setHours(0, 0, 0, 0);
                    return txDate >= start;

                case "last7Days":
                    const last7 = new Date();
                    last7.setDate(now.getDate() - 7);
                    return txDate >= last7;

                case "currentMonth":
                    return (
                        txDate.getMonth() === now.getMonth() && txDate.getFullYear() === now.getFullYear()
                    );

                case "lastMonth":
                    const lm = new Date(now.getFullYear(), now.getMonth() - 1)
                    return (txDate.getMonth() === lm.getMonth() && txDate.getFullYear() === lm.getFullYear());
                
                case "last3":
                    const l3 = new Date(now.getFullYear(), now.getMonth()-3, now.getDate());
                    
                    return (txDate>=l3 && txDate<=now );
                    // return (txDate.getMonth()>=l3.getMonth() && txDate.getMonth() );//&& txDate.getFullYear() === l3.getFullYear()
                
                case "last6":
                    const l6 = new Date(now.getFullYear(), now.getMonth()-6, now.getDate());
                    return (txDate>=l6 && txDate<=now);
                
                case "currentYear":
                    return txDate.getFullYear() === now.getFullYear();

                case "lastYear":
                    return txDate.getFullYear() === now.getFullYear() - 1;

                case "yearly":
                    return txDate.getFullYear() === value;

                default:
                    return true;
            }
        });
    };


    const getSummary = (type, value=null, txType='all')=>{
    
        const filtered = filterByDuration(type,value);

        let filteredTransactions = filtered;

        if(txType!=='all'){
            filteredTransactions = filtered?.filter((tx)=>tx.type===txType);
        }

        const incomes = filtered?.filter((tx)=>tx.type==="income");
        const expense = filtered?.filter((tx)=>tx.type==="expense");

        const totalIncome = incomes?.reduce((sum,am)=>(
            sum + Number(am.amount)
        ),0)

        const totalExpense = expense?.reduce((sum,am)=>(
            sum + Number(am.amount)
        ),0)

        return{
            transactions:filteredTransactions,
            totalExpense,
            totalIncome,
            balance: totalIncome-totalExpense,
        };
    };

    // CATEGORIES:::::

        const getCategories = (type, value = null) => {

        // Step 1: Filter by duration
        const filtered = filterByDuration(type, value) || [];

        // Step 2: Only expenses
        const expenses = filtered?.filter((tx) => tx.type == "expense");

        // Step 3: Group using reduce
        const categoryMap = expenses?.reduce((acc, tx) => {
            const category = tx.category || "Uncategorized";

            acc[category] = (acc[category] || 0) + Number(tx.amount);

            return acc;
        }, {});

        // Step 4: Convert to array
        const categoriesArray = Object.entries(categoryMap)?.map(
            ([category, total]) => ({
                category,
                total,
            })
        );

        // Step 5: Sort highest first
        const sortedCategories = categoriesArray?.sort(
            (a, b) => b.total - a.total
        );

        return {
            allCategories: sortedCategories,
            top5Categories: sortedCategories.slice(0, 5),
        };
    };


    const value = useMemo(()=>(
        {
            transactions,
            getSummary,
            getCategories
        }
    ),[transactions]);


    return (
        <TransactionContext.Provider value={value}>
            {children}
        </TransactionContext.Provider>
    );
};

export const useTransactions = ()=>useContext(TransactionContext);