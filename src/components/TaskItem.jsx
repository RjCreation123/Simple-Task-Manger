import React from "react";

const TaskItem = ({ task, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task}</td>
      <td>
        <button>Delete</button>
      </td>
      <td>Pending</td>
    </tr>
  );
};

export default TaskItem;
