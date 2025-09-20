import React from "react";

const TaskList = () => {
  return (
    <div style={{
          height: "200px",
          backgroundColor: "red",
          margin: "40px",
          padding: "20px",
          paddingTop: "0px",
          marginTop: "0px",
          textAlign: "center",
        }}>
      <table cellPadding="20" cellSpacing="0">
        <tr>
          <th>Sr.No.</th>
          <th>Tasks</th>
          <th>Action</th>
          <th>Status</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default TaskList;
