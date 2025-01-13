import React, { useState } from "react";
import "./AddTransaction.css";

function AddTransaction({ onAdd }) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount,
        };
        onAdd(newTransaction);
        setText("");
        setAmount(0);
    };

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="contianer-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-control">
                                <label>Text</label>
                                <input
                                    type="text"
                                    placeholder="Enter text..."
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-control">
                                <label>
                                    Amount <br />
                                    (negative - expense, positive - income)
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter amount..."
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    );
}

export default AddTransaction;
