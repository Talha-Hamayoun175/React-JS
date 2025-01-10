import React, { useState } from "react";
import "./list.css";

function ListApp() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask(""); // Clear the input field
        }
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        );
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <div className="task-input">
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {tasks.map((t, index) => (
                    <li key={index} className={t.completed ? "completed" : ""}>
                        <span onClick={() => toggleTaskCompletion(index)}>{t.text}</span>
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListApp;
