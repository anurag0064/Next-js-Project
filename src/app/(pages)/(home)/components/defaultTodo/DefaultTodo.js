import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Button from '@/app/components/buttons/Button';
import TableView from '../tableView/TableView';
import Popup from './components/popup/Popup';

function DefaultTodo() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleCardClick = () => {
    setPopupOpen(true);
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div className=''>
      <div className='flex px-2 items-center gap-2 h-10'>
        <button onClick={toggleDropdown} className='flex items-center gap-1'>
          {isDropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          <h1 className='font-semibold'>To Do</h1>
        </button>
        <h1 className="border border-slate-200 text-xs rounded-full w-7 h-7 text-[#e90fbf] font-bold bg-[#ffd5f4] flex items-center justify-center p-1">4</h1>
      </div>
      <div className='flex items-center '>
        <Button
          icon={<IoIosAdd />}
          text={'Add New'}
          className={"w-full py-2 px-4 font-semibold border border-gray-300 rounded-lg text-black text-sm flex items-center justify-center"}
          onClick={handleCardClick}
        />
      </div>
      {isDropdownOpen && (
        <TableView isPopupOpen={isPopupOpen} />
      )}
      {isPopupOpen && <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />}
    </div>
  );
}
export default DefaultTodo;

