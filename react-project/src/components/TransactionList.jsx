import React from "react";

function TransactionList({ transactions, onDelete }) {
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <li className={transaction.amount < 0 ? "minus" : "plus"} key={transaction.id}>
                        {transaction.text} <span>{transaction.amount < 0 ? "-" : "+"}{Math.abs(transaction.amount)}</span>
                        <button onClick={() => onDelete(transaction.id)} className="delete-btn">x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
