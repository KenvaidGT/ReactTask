import React, { useState } from "react";
import "./Todo.css";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const text = input.trim();
    if (!text) return;
    setTasks([...tasks, { text, done: false }]);
    setInput("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, done: !t.done } : t
      )
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <main className="container">
      <h1>To-Do List</h1>
      <div className="controls">
        <input
          id="taskInput"
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button id="addBtn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul id="taskList">
        {tasks.map((task, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(i)}
            />
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                color: task.done ? "gray" : "black",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(i)}>×</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
