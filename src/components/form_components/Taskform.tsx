import React, { useState } from "react";
import Tableinput from "./Tableinput";

const Taskform = () => {
  const [projectname, setProjectName] = useState("");
  const [planduration, setPlanDuration] = useState("");
  const [actualduration, setActualDuration] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("The project name is ", projectname);
    console.log("The plan duration is ", planduration);
    console.log("The actual duration is ", actualduration);
    console.log("The table data is ", tableData);

    // Create a new task object with the form field values
    // const newTask = {
    //   name: taskName,
    //   startDate,
    //   endDate,
    //   predecessor,
    //   resources: {
    //     manpower,
    //     machine,
    //     material,
    //   },
    // };
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
