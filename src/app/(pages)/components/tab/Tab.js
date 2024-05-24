"use client"

import React, { useState } from 'react';
import DefaultInput from '../../../components/defaultInput/DefaultInput';
import { IoMdArrowDropright } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineArchive } from "react-icons/md";


const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const changeTab = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="rounded">
            <div className="flex">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 border-b-2 ${index === activeTab ? ' border-gray-300 text-slate-400' : ' border-gray-200 text-slate-400'}  hover:text-black hover:border-black font-semibold leading-8 focus:outline-none`}
                        style={{ width: `${100 / tabs.length}%` }}
                        onClick={() => changeTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

const Tab = () => {
    const tabs = [
        {
            label: 'Team',
            content: (
                <div>
                    <DefaultInput />
                    <div className='flex items-center gap-2 mt-5'>
                        <div>
                            <IoMdArrowDropright />
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaRegClock className='text-sm' />
                            <h1 className='text-sm text-black '>Recent</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-5'>
                        <div>
                            <IoMdArrowDropright />
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaRegFolderClosed className='text-sm' />
                            <h1 className='text-sm text-black'>Projects</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-5'>
                        <div>
                            <IoMdArrowDropright />
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaRegStar className='text-sm' />
                            <h1 className='text-sm text-black'>Favorite Projects</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-5'>
                        <div>
                            <IoMdArrowDropright />
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineArchive className='text-sm' />
                            <h1 className='text-sm text-black'>Archive Projects</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-5'>
                        <div>
                            <IoMdArrowDropright />
                        </div>
                        <div className='flex items-center gap-2 '>
                            <MdDelete className='text-sm' />
                            <h1 className='text-sm text-black '>Deleted Projects</h1>
                        </div>
                    </div>
                </div>
            ),
            heading: "Recent"
        },
        {
            label: 'Personal',
            content: <p className="text-gray-800">Hello</p>
        }
    ];

    return (
        <div className="">
            <Tabs tabs={tabs} />
        </div>
    );
};
export default Tab;
