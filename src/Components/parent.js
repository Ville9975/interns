import React, { useState } from "react";
import TableRow from "./table";

const TableWithUpdate = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: "Chukwu Ville", Gender: "Male", Age: 23, Score: 2800, workRate: "95%" },
  {id: 2, name: "Ebube Nwachukwu", Gender: "Male", Age: 24, Score: 2900, workRate: "90%"},
  {id: 3, name: "Vincent Okafor", Gender: "Male", Age: 22, Score: 2400, workRate: "83%"},
  {id: 4, name: "Donald Ray", Gender: "Male", Age: 23, Score: 2000, workRate: "80%"},
  {id: 5, name: "Patrick Favour", Gender: "Female", Age: 25, Score: 2600, workRate: "83%"},
  {id: 6, name: "Damian Egbo", Gender: "Male", Age: 27, Score: 2600, workRate: "90%"},
  {id: 7, name: "Dimma Charles", Gender: "Female", Age: 22, Score: 2900, workRate: "96%"},
  {id: 8, name: "Brayn Olisa", Gender: "Male", Age: 25, Score: 2600, workRate: "85%"},
  {id: 9, name: "Sanchez Nduka", Gender: "Male", Age: 26, Score: 1800, workRate: "63%"},
  {id: 10, name: "Anita Ugwu", Gender: "Female", Age: 24, Score: 2300, workRate: "82%"},
  {id: 11, name: "Samuel Akinola", Gender: "Male", Age: 22, Score: 2850, workRate: "93%"},
  {id: 12, name: "Bibian Banku", Gender: "Female", Age: 23, Score: 2600, workRate: "83%"},
  {id: 13, name: "Kunle Remi", Gender: "Male", Age: 24, Score: 2500, workRate: "83%"},
  {id: 14, name: "Ahmed Musa", Gender: "Male", Age: 25, Score: 2200, workRate: "78%"},
  {id: 15, name: "Yvonne Rishante", Gender: "Female", Age: 25, Score: 2700, workRate: "88%"},
  {id: 16, name: "Flick James", Gender: "Male", Age: 24, Score: 2750, workRate: "89%"},
  {id: 17, name: "Anna James", Gender: "Female", Age: 24, Score: 2700, workRate: "89%"},
  {id: 18, name: "Peculiar Ozo", Gender: "Female", Age: 23, Score: 2550, workRate: "83%"},
  {id: 19, name: "Andrew Tate", Gender: "Male", Age: 25, Score: 1500, workRate: "54%"},
  {id: 20, name: "Angela Ufom", Gender: "Male", Age: 24, Score: 2750, workRate: "89%"},
  ]);


  const handleUpdate = (id, updatedData) => {
    const updatedTableData = tableData.map((row) =>
      row.id === id ? updatedData : row
    );
    setTableData(updatedTableData);
  };

  return (
    <div className="table">
      <h1>INTERNS @ VILLICT HUB</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Score</th>
            <th>WorkRate</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <TableRow key={row.id} data={row} onUpdate={handleUpdate} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithUpdate;
