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

  const deleteTask = (taskIndex) => {
    //instead of item we can simply pass the "_"(underscore) cz filter accept 2 arguments
    const updatedTasks = tasks.filter((item, index) => index != taskIndex);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      <TaskForm addTask={addNewTask} />

      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
