import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    addTask(taskInput);
    console.log("task is :",taskInput);
    setTaskInput("");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Simple Task Manager</h1>
      <div
        style={{
          height: "200px",
          backgroundColor: "red",
          margin: "40px",
          padding: "20px",
          paddingBottom: "0px",
          marginBottom: "0px",
          textAlign: "center",
        }}
      >
        <label htmlFor="">Write your Task to add:</label>
        <br />
        <br />
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={{ height: "40px", width: "250px", fontSize: "20px" }}
        />
        <br />
        <br />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskForm;
