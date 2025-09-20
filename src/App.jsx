import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const addNewTask = () => {
    console.log("New Task Added Successfully.");
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      <TaskForm addTask={addNewTask} />

      <TaskList />
    </div>
  );
};

export default App;
