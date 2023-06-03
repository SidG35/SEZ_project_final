import React, { useState } from "react";
import Tableinput from "./Tableinput";
import { storeTaskData, getTaskData } from "../localStorage/localStorageUtils";

const Taskform = () => {
  const [projectname, setProjectName] = useState("");
  const [planduration, setPlanDuration] = useState("");
  const [actualduration, setActualDuration] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/sez", {
      method: "POST",
      body: JSON.stringify({
        userId: Math.random().toString(36).slice(2),
      }),
    });

    console.log("The project name is ", projectname);
    console.log("The plan duration is ", planduration);
    console.log("The actual duration is ", actualduration);
    console.log("The table data is ", tableData);

    // Create a new task object with the form field values
    const newTask = {
      name: projectname,
      planDuration: planduration,
      actualDuration: actualduration,
      tableData: tableData,
    };

    //Retrieve existing tasks from local storaga
    const existingTasks = getTaskData();

    //Add the new task to the existing tasks array
    const updateTasks = [...existingTasks, newTask];

    //Store the updated tasks data in local storage
    storeTaskData(updateTasks);

    // Reset form fields
    setProjectName("");
    setPlanDuration("");
    setActualDuration("");
    setTableData([]);
  };

  return (
    <div>
      <form className="m-5 px-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Project Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Project Plan Duration
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            min="0"
            placeholder="Please enter the plan duration(in days)"
            onChange={(e) => setPlanDuration(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Project Actual Duration
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            min="0"
            placeholder="Please enter the actual duration(in days)"
            onChange={(e) => setActualDuration(e.target.value)}
            required
          />
        </div>
        <Tableinput onUpdateTableData={setTableData} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Taskform;
