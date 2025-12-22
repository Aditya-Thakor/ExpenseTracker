import React from "react";
import TransactionContext from "./TransactionContext";

const TransactionContextProvider = ({childern})=>{
    const [transactions,setTransactions]=React.useState(null);

    return (
        <TransactionContext.Provider value={{transactions,setTransactions}}>
            {childern}
        </TransactionContext.Provider>
    )
}
export default TransactionContextProvider;