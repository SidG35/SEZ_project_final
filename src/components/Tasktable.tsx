import React, { useEffect, useState } from "react";
import { getTaskData } from "./localStorage/localStorageUtils";

const Tasktable = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve tasks from local storage
    const taskData = getTaskData();
    setTasks(taskData);
  }, []);

  return (
    <div>
      {tasks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Predecessors</th>
              <th>Activity</th>
              <th>Duration</th>
              <th>Cost</th>
              <th>Man Power</th>
              <th>Machine</th>
              <th>Material</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.name}</td>
                <td>
                  {task.predecessors && task.predecessors.length > 0 ? (
                    task.predecessors.map((predecessor: string, i: number) => (
                      <span key={i}>
                        {predecessor}
                        {i !== task.predecessors.length - 1 ? ", " : ""}
                      </span>
                    ))
                  ) : (
                    <span>No Predecessor</span>
                  )}
                </td>
                <td>{task.tableData[0].activity}</td>
                <td>{task.tableData[0].duration}</td>
                <td>{task.tableData[0].cost}</td>
                <td>{task.tableData[0].man_power}</td>
                <td>{task.tableData[0].machine}</td>
                <td>{task.tableData[0].material}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Tasktable;
