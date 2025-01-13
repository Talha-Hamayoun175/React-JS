import React, { useState, useEffect } from "react";
import Header from "./components/NewHeader";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

function App() {
    const [transactions, setTransactions] = useState(
        JSON.parse(localStorage.getItem("transactions")) || []
    );

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    const addTransaction = (transaction) => {
        setTransactions([transaction, ...transactions]);
    };

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
    };

    return (
        <div className="container">
            <Header />
            <Balance transactions={transactions} />
            <IncomeExpense transactions={transactions} />
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
            <AddTransaction onAdd={addTransaction} />
        </div>
    );
}

export default App;
