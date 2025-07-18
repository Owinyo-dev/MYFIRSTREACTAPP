import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleInputTask(event) {
    setNewTask(event.target.value);
  }
  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function handleDelete(index) {
    setTask((t) => t.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h1>To-Do List</h1>
      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
      <input
        type="text"
        value={newTask}
        placeholder="Add a new task"
        onChange={handleInputTask}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
export default ToDoList;
