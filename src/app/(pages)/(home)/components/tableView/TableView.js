"use client"

import React, { useState } from 'react';
import memoji from "../../../../../assets/images/memoji.jpg";
import memoji1 from "../../../../../assets/images/memoji1.jpeg";
import memoji2 from "../../../../../assets/images/memoji2.jpg";
import { Card, Typography } from "@material-tailwind/react";
import { TeamImages } from '@/app/(pages)/components/profileImage/TeamImages';

const table_head = ["", "Name", "Assignees", "Start Date", "Due Date", "Priority"];

const table_row = [
  {
    id: 1,
    name: 'Web development',
    assignees: <TeamImages classNames="!w-5 !h-5" users={[
      {
        name: 'Rahul',
        image: memoji.src
      },
      {
        name: 'Vikas',
        image: memoji1.src
      },
    ]} />,
    startDate: 'Jan 10, 2024',
    dueDate: 'Feb 10, 2024',
    priority: 'High',
    checked: false
  },
  {
    id: 2,
    name: 'Landing Page Animation',
    assignees: <TeamImages classNames="w-5 h-5" users={[
      {
        name: 'Rahul',
        image: memoji.src
      },
      {
        name: 'Vikas',
        image: memoji2.src
      },
    ]} />,
    startDate: 'Jan 13, 2024',
    dueDate: 'Feb 12, 2024',
    priority: 'Medium',
    checked: false
  },
  {
    id: 3,
    name: 'A/B Testing',
    assignees: <img src={memoji2.src} alt="" className="w-5 h-5 rounded-full border-2  border-slate-300" />,
    startDate: 'Jan 14, 2024',
    dueDate: 'Feb 14, 2024',
    priority: 'Low',
    checked: false
  },
  {
    id: 4,
    name: 'Meeting with client',
    assignees: <img src={memoji2.src} alt="" className="w-5 h-5 rounded-full border-2  border-slate-300" />,
    startDate: 'Jan 16, 2024',
    dueDate: 'Feb 16, 2024',
    priority: 'High',
    checked: false
  },
];

function TableView() {
  const [tableRows, setTableRows] = useState(table_row);

  const handleCheckboxChange = (id) => {
    setTableRows(prevRows => 
      prevRows.map(row => 
        row.id === id ? { ...row, checked: !row.checked } : row
      )
    );
  };

  const renderTable = (rows) => (
    <table className="w-full min-w-max table-auto text-left border border-blue-gray-100 mt-5">
      <thead>
        <tr>
          {table_head.map((head) => (
            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 border border-blue-gray-100">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ id, name, assignees, startDate, dueDate, priority, checked }, index) => (
          <tr key={id} className={`${index % 2 === 0 ? 'even:bg-blue-gray-50/50 rounded-full hover:bg-slate-200' : 'odd:bg-white hover:bg-slate-200'}`}>
            <td className="p-4 border border-blue-gray-100">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-blue-600" 
                checked={checked}
                onChange={() => handleCheckboxChange(id)}
              />
            </td>
            <td className="p-4 border border-blue-gray-100">
              <Typography variant="small" color="blue-gray" className=" text-black font-semibold">
                {name}
              </Typography>
            </td>
            <td className="p-4 border border-blue-gray-100">
              <Typography variant="small" color="blue-gray" className=" text-black font-semibold">
                {assignees}
              </Typography>
            </td>
            <td className="p-4 border border-blue-gray-100">
              <Typography variant="small" color="blue-gray" className="font-semibold">
                {startDate}
              </Typography>
            </td>
            <td className="p-4 border border-blue-gray-100">
              <Typography variant="small" color="blue-gray" className="font-semibold">
                {dueDate}
              </Typography>
            </td>
            <td className={`p-4 border border-blue-gray-100 ${priority === 'High' ? 'text-red-500' : priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
              <Typography variant="small" color="blue-gray" className="font-normal">
                {priority}
              </Typography>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const uncheckedRows = tableRows.filter(row => !row.checked);
  const checkedRows = tableRows.filter(row => row.checked);

  return (
    <div className="h-full w-full overflow-scroll mt-5 border-1">
      <Card>
        <Typography variant="h6" color="blue-gray" className="p-4 border-b border-blue-gray-100">
           Project List
        </Typography>
        {renderTable(uncheckedRows)}
      </Card>
      <Card className="mt-5">
        <Typography variant="h6" color="blue-gray" className="p-4 border-b border-blue-gray-100">
          Checked List
        </Typography>
        {renderTable(checkedRows)}
      </Card>
    </div>
  );
}

export default TableView;
