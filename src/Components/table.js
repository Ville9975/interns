import { useState } from "react";
import React from 'react';


const TableRow = ({ data, onUpdate, pageNum = 0, pageSize = 10, width = '98%', heigth = '90%', }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState(data);
    
  
    const handleUpdateClick = () => {
      setIsEditing(false);
      onUpdate(data.id, updatedData);
    };
  
    return (
      <tr style = {{width: width, heigth: heigth}}>
        <td>{data.id}</td>
        <td>
          {isEditing ? (
            <input
              type="text"
              value={updatedData.name}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, name: e.target.value })
              }
            />
          ) : (
            data.name
          )}
        </td>
        <td>
        {isEditing ? (
            <input
              type="text"
              value={updatedData.Gender}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, Gender: e.target.value })
              }
            />
          ) : (
            data.Gender
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="number"
              value={updatedData.Age}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, Age: e.target.value })
              }
            />
          ) : (
            data.Age
          )}
        </td>
        <td>
        {isEditing ? (
            <input
              type="number"
              value={updatedData.Score}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, Score: e.target.value })
              }
            />
          ) : (
            data.Score
          )}
        </td>
        <td>
        {isEditing ? (
            <input
              type="text"
              value={updatedData.workRate}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, workRate: e.target.value })
              }
            />
          ) : (
            data.workRate
          )}
        </td>
        <td>
          {isEditing ? (
            <button onClick={handleUpdateClick}>Update</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}
        </td>
      </tr>
    );
  };
  
  
  
  export default TableRow;