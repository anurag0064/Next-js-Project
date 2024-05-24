"use client"

import React, { useEffect } from 'react';
import memoji from "../../../../../assets/images/memoji.jpg";
import memoji1 from "../../../../../assets/images/memoji1.jpeg";
import memoji2 from "../../../../../assets/images/memoji2.jpg";
import { Card, Typography } from "@material-tailwind/react";
// import { TeamImages } from '../../../components/profileImage/TeamImages';
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
  },
  {
    id: 3,
    name: 'A/B Testing',
    assignees: <img src={memoji2.src} alt="" className="w-5 h-5 rounded-full border-2  border-slate-300" />,
    startDate: 'Jan 14, 2024',
    dueDate: 'Feb 14, 2024',
    priority: 'Low',
  },
  {
    id: 4,
    name: 'Meeting with client',
    assignees: <img src={memoji2.src} alt="" className="w-5 h-5 rounded-full border-2  border-slate-300" />,
    startDate: 'Jan 16, 2024',
    dueDate: 'Feb 16, 2024',
    priority: 'High',
  },
];

function TableView() {

  useEffect(() => {
   console.log("called ::::::;")
   console.count("hello")
  }, [])
  
  return (
    <Card className="h-full w-full overflow-scroll mt-5 border-1">
      <table className="w-full min-w-max table-auto text-left border border-blue-gray-100">
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
          {table_row.map(({ id, name, assignees, startDate, dueDate, priority }, index) => (
            <tr key={id} className={`${index % 2 === 0 ? 'even:bg-blue-gray-50/50 rounded-full' : 'odd:bg-white'}`}>
              <td className="p-4 border border-blue-gray-100">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
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
    </Card>
  );
}
export default TableView;
