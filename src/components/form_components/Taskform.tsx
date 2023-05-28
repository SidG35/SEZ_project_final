import Tableinput from "./Tableinput";

const Taskform = () => {
  return (
    <div>
      <form className="m-5 px-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Project Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
          />
        </div>
        <Tableinput />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Taskform;
