import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  //state for storing the tasks and also send these tasks to TaskList component.
  const [tasks, setTasks] = useState([]);
  const addNewTask = (task) => {
    console.log("New Task Added Successfully.");
    setTasks([...tasks, task]);
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      <TaskForm addTask={addNewTask} />

      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
