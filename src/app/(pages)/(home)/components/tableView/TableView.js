import React, { useState, useEffect } from 'react';
import { Card, Typography } from "@material-tailwind/react";

function TableView() {
  const [table, setTable] = useState([]);
  const [localStorageData, setLocalStorageData] = useState([]); 

  useEffect(() => {
    const storedData = localStorage.getItem('tasks');
    if (storedData) {
      setLocalStorageData(JSON.parse(storedData));
    }
  }, []);


  return (
    <div className="h-full w-full overflow-scroll mt-5 border-1">
      <Card>
        <table className="w-full min-w-max table-auto text-left border border-blue-gray-100 mt-5">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 border ">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Id</Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 border ">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Name</Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 border ">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Start Date</Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 border ">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Due Date</Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 border ">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Priority</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {localStorageData.map((row, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'even:bg-blue-gray-50/50 rounded-full hover:bg-slate-100' : 'odd:bg-white hover:bg-slate-100'}`}>
                <td className="p-4 border border-blue-gray-100">
                  <Typography variant="small" color="blue-gray" className="font-semibold">{row.id}</Typography>
                </td>
                <td className="p-4 border border-blue-gray-100">
                  <Typography variant="small" color="blue-gray" className="font-semibold">{row.name}</Typography>
                </td>
                <td className="p-4 border border-blue-gray-100">
                  <Typography variant="small" color="blue-gray" className="font-semibold">{row.startDate}</Typography>
                </td>
                <td className="p-4 border border-blue-gray-100">
                  <Typography variant="small" color="blue-gray" className="font-semibold">{row.dueDate}</Typography>
                </td>
                <td className="p-4 border border-blue-gray-100">
                  <Typography variant="small" color="blue-gray" className="font-semibold">{row.priority}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
export default TableView;

