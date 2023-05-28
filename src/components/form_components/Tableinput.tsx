import React, { useState } from "react";

interface TableinputProps {
  onUpdateTableData: (data: any[]) => void;
}

const Tableinput = ({ onUpdateTableData }: TableinputProps) => {
  const numberOfRows = 14; // Define the number of rows you want
  const [tableData, setTableData] = useState<any[]>([]);

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < numberOfRows; i++) {
      const serialNumber = i + 1;
      rows.push(
        <tr key={i}>
          <td>{serialNumber}</td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                handleTableDataChange(i, "activity", e.target.value)
              }
            />
          </td>
          <td>
            <input
              type="number"
              className="form-control"
              step="0.01"
              min="0"
              onChange={(e) =>
                handleTableDataChange(i, "duration", e.target.value)
              }
            />
          </td>
          <td>
            <input
              type="number"
              className="form-control"
              step="0.01"
              min="0"
              onChange={(e) => handleTableDataChange(i, "cost", e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              className="form-control"
              step="0.01"
              min="0"
              onChange={(e) =>
                handleTableDataChange(i, "predecessors", e.target.value)
              }
            />
          </td>
          <td>
            <input
              type="number"
              name={`man_power_${i}`}
              placeholder="Man Power"
              className="form-control"
              step="0.01"
              min="0"
              onChange={(e) =>
                handleTableDataChange(i, "man_power", e.target.value)
              }
            />
            <input
              type="number"
              name={`machines_${i}`}
              placeholder="Machines"
              className="form-control"
              step="0.01"
              min="0"
              onChange={(e) =>
                handleTableDataChange(i, "machines", e.target.value)
              }
            />
            <input
              type="number"
              name={`material_${i}`}
              placeholder="Material"
              className="form-control"
              step="0.01"
              min="0"
              onChange={(e) =>
                handleTableDataChange(i, "material", e.target.value)
              }
            />
          </td>
        </tr>
      );
    }
    return rows;
  };
  const handleTableDataChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedData = [...tableData];
    if (!updatedData[index]) {
      updatedData[index] = {}; // Create a new object for the row if it doesn't exist
    }
    updatedData[index][field] = value;
    setTableData(updatedData);
    onUpdateTableData(updatedData);
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
