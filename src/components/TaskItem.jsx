import React from "react";

const TaskItem = ({ task, index, deleteTask }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task}</td>
      <td>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </td>
      <td>Pending</td>
    </tr>
  );
};

export default TaskItem;
