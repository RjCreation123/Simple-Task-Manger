import React from "react";

const TaskItem = ({ task, index }) => {
  return <div>
    <tr>
        <td>{index+1}</td>
        <td>{task}</td>
        <td><button>Edit</button><button>Delete</button></td>
        <td>Pending</td>
    </tr>
  </div>;
};

export default TaskItem;
