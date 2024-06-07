// import React, { useState, useEffect } from 'react';
// import { Card, Typography } from "@material-tailwind/react";
// import { v4 as uuidv4 } from 'uuid';
// import Button from '@/app/components/buttons/Button';

// function TableView({ isPopupOpen, Key = 'tasks' }) {
//   const [localStorageData, setLocalStorageData] = useState([]);

//   const headers = ['Checkbox', 'Id', 'Name', 'Start Date', 'Due Date', 'Priority', 'Actions'];
//   const dataFields = ['id', 'name', 'startDate', 'dueDate', 'priority'];

//   useEffect(() => {
//     const storedData = localStorage.getItem(Key);
//     if (storedData) {
//       let Data = JSON.parse(storedData);

//       Data = Data.map(task => ({
//         ...task,
//         id: task.id || uuidv4(),
//         completed: task.completed || false,
//       }));

//       localStorage.setItem(Key, JSON.stringify(Data));
//       setLocalStorageData(Data);
//     }
//   }, [isPopupOpen, Key]);

//   const handleChange = (id) => {
//     const updatedData = localStorageData.map(task =>
//       task.id === id ? { ...task, completed: !task.completed } : task
//     );

//     setLocalStorageData(updatedData);
//     localStorage.setItem(Key, JSON.stringify(updatedData));
//   };

//   const handleDelete = (id) => {
//     const updatedData = localStorageData.filter(task => task.id !== id);

//     setLocalStorageData(updatedData);
//     localStorage.setItem(Key, JSON.stringify(updatedData));
//   };

//   // const handleEdit = (id) =>{
//   //   const updatedData = localStorageData.filter(task => task.id === id);

//   //   setLocalStorageData(updatedData);
//   //   localStorage.setItem(Key, JSON.stringify(updatedData));
//   // }

//   const renderTable = (tasks, tableTitle) => (
//     <div className="my-5">
//       <Typography variant="h5" color="blue-gray" className="font-normal leading-none opacity-70 mb-4">
//         {tableTitle}
//       </Typography>
//       <Card>
//         <table className="w-full min-w-max table-auto text-left border border-blue-gray-100 mt-5">
//           <thead>
//             <tr>
//               {headers.map((header) => (
//                 <th key={header} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 border">
//                   <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
//                     {header}
//                   </Typography>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((row, index) => (
//               <tr key={row.id} className={`${index % 2 === 0 ? 'even:bg-blue-gray-50/50 rounded-full hover:bg-slate-100' : 'odd:bg-white hover:bg-slate-100'}`}>
//                 <td className="p-4 border border-blue-gray-100">
//                   <input
//                     type="checkbox"
//                     checked={row.completed}
//                     onChange={() => handleChange(row.id)}
//                   />
//                 </td>
//                 {dataFields.map((field) => (
//                   <td key={field} className="p-4 border border-blue-gray-100">
//                     <Typography variant="small" color="blue-gray" className="font-semibold">{row[field]}</Typography>
//                   </td>
//                 ))}
//                 <td className="flex gap-4 p-4 border border-blue-gray-100">
//                   <Button
//                     text={'Delete'}
//                     className={"w-full py-2 px-4 font-semibold border border-gray-300 rounded-lg text-white bg-red-500 text-sm flex items-center justify-center"}
//                     onClick={() => handleDelete(row.id)}
//                   />
//                   <Button
//                     text={'Edit'}
//                     className={"w-full py-2 px-4 font-semibold border border-gray-300 rounded-lg text-white bg-blue-700 text-sm flex items-center justify-center"}
//                      onClick={() => handleEdit(row.id)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Card>
//     </div>
//   );

//   const checked = localStorageData.filter(task => task.completed);
//   const unchecked = localStorageData.filter(task => !task.completed);

//   return (
//     <div className="h-full w-full overflow-scroll mt-5 border-1">
//       {renderTable(unchecked, 'Unchecked Project')}
//       {renderTable(checked, 'Checked Project')}
//     </div>
//   );
// }

// export default TableView;

import React, { useState, useEffect } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { v4 as uuidv4 } from 'uuid';
import Button from '@/app/components/buttons/Button';

function TableView({ isPopupOpen, Key = 'tasks' }) {
  const [localStorageData, setLocalStorageData] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskData, setEditTaskData] = useState({});

  const headers = ['Checkbox', 'Id', 'Name', 'Start Date', 'Due Date', 'Priority', 'Actions'];
  const dataFields = ['id', 'name', 'startDate', 'dueDate', 'priority'];

  useEffect(() => {
    const storedData = localStorage.getItem(Key);
    if (storedData) {
      let Data = JSON.parse(storedData);

      Data = Data.map(task => ({
        ...task,
        id: task.id || uuidv4(),
        completed: task.completed || false,
      }));

      localStorage.setItem(Key, JSON.stringify(Data));
      setLocalStorageData(Data);
    }
  }, [isPopupOpen, Key]);

  const handleChange = (id) => {
    const updatedData = localStorageData.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setLocalStorageData(updatedData);
    localStorage.setItem(Key, JSON.stringify(updatedData));
  };

  const handleDelete = (id) => {
    const userConfirmed = window.confirm('Are you sure you want to delete this list');

    if (userConfirmed) {
      const updatedData = localStorageData.filter(task => task.id !== id);

      setLocalStorageData(updatedData);
      localStorage.setItem(Key, JSON.stringify(updatedData));
    }
  };

  const handleEdit = (id) => {
    const taskToEdit = localStorageData.find(task => task.id === id);
    setEditTaskId(id);
    setEditTaskData(taskToEdit);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTaskData({
      ...editTaskData,
      [name]: value,
    });
  };

  const renderTable = (tasks, tableTitle) => (
    <div className="my-5">
      <Typography variant="h5" color="blue-gray" className="font-normal leading-none opacity-70 mb-4">
        {tableTitle}
      </Typography>
      <Card>
        <table className="w-full min-w-max table-auto text-left border border-blue-gray-100 mt-5">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 border">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    {header}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((row, index) => (
              <tr key={row.id} className={`${index % 2 === 0 ? 'even:bg-blue-gray-50/50 rounded-full hover:bg-slate-100' : 'odd:bg-white hover:bg-slate-100'}`}>
                <td className="p-4 border border-blue-gray-100">
                  <input
                    type="checkbox"
                    checked={row.completed}
                    onChange={() => handleChange(row.id)}
                  />
                </td>
                    {dataFields.map((field) => (
                  <td key={field} className="p-4 border border-blue-gray-100">
                    {editTaskId === row.id ? (
                      <input
                        type="text"
                        name={field}
                        value={editTaskData[field] || ''}
                        onChange={handleEditChange}
                        className="border border-gray-300 rounded-md p-2"
                      />
                    ) : (
                      <Typography variant="small" color="blue-gray" className="font-semibold">{row[field]}</Typography>
                    )}
                  </td>
                ))}
                <td className="flex gap-4 p-4 border border-blue-gray-100">
                  <Button
                    text={'Delete'}
                    className={"w-full py-2 px-4 font-semibold border border-gray-300 rounded-lg text-white bg-red-500 text-sm flex items-center justify-center"}
                    onClick={() => handleDelete(row.id)}
                  />
                  <Button
                    text={'Edit'}
                    className={"w-full py-2 px-4 font-semibold border border-gray-300 rounded-lg text-white bg-blue-700 text-sm flex items-center justify-center"}
                     onClick={() => handleEdit(row.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );

  const checked = localStorageData.filter(task => task.completed);
  const unchecked = localStorageData.filter(task => !task.completed);

  return (
    <div className="h-full w-full overflow-scroll mt-5 border-1">
      {renderTable(unchecked, 'Unchecked Project')}
      {renderTable(checked, 'Checked Project')}
    </div>
  );
}

export default TableView;
