import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div
      style={{
        height: "200px",
        backgroundColor: "red",
        margin: "40px",
        padding: "20px",
        paddingTop: "0px",
        marginTop: "0px",
        textAlign: "center",
      }}
    >
      <table cellPadding="20" cellSpacing="0">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Tasks</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
