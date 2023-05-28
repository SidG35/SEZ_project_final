const Tableinput = () => {
  const numberOfRows = 14; // Define the number of rows you want

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < numberOfRows; i++) {
      const serialNumber = i + 1;
      rows.push(
        <tr key={i}>
          <td>{serialNumber}</td>
          <td>
            <input type="text" className="form-control" />
          </td>
          <td>
            <input type="number" className="form-control" step="0.01" min="0" />
          </td>
          <td>
            <input type="number" className="form-control" step="0.01" min="0" />
          </td>
          <td>
            <input type="number" className="form-control" step="0.01" min="0" />
          </td>
          <td>
            <input
              type="number"
              name={`man_power_${i}`}
              placeholder="Man Power"
              className="form-control"
              step="0.01"
              min="0"
            />
            <input
              type="number"
              name={`machines_${i}`}
              placeholder="Machines"
              className="form-control"
              step="0.01"
              min="0"
            />
            <input
              type="number"
              name={`material_${i}`}
              placeholder="Material"
              className="form-control"
              step="0.01"
              min="0"
            />
          </td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Activity</th>
            <th>Duration</th>
            <th>cost</th>
            <th>Predecessor</th>
            <th>Resource</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default Tableinput;
