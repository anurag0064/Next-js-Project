"use client"

import React, { useState } from 'react';
import DefaultInput from '../../../components/defaultInput/DefaultInput';
import { IoMdArrowDropright } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineArchive } from "react-icons/md";
import {IoMdArrowDropdown} from "react-icons/io"
import { Button } from '@material-tailwind/react';


const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const changeTab = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="rounded">
            <div className="flex">
                {tabs.map((tab, index) => (
                    <Button
                        key={index}
                        variant="text"
                        className={`py-2 px-4 border-b-2 rounded-none text-sm ${index === activeTab ? 'border-gray-300 text-gray-900' : 'border-gray-200 text-gray-500'} hover:text-black hover:border-black`}
                        style={{ width: `${100 / tabs.length}%` }}
                        onClick={() => changeTab(index)}
                    >
                        {tab.label}
                    </Button>
                ))}
            </div>
            <div className="p-4">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

const sections = [
    {
        icon: FaRegClock,
        label: 'Recent',
        content: (
            <div>
                <ul className="flex flex-col gap-3">
                <li>Saas Website  </li>
                    <li>Fintech Landing Page</li>
                    <li>Banking Mobile App</li>
                </ul>
            </div>
        ),
    },
    {
        icon: FaRegFolderClosed,
        label: 'Projects',
        content: (
            <div>
                <ul className="flex flex-col gap-3">
                    <li>Timmy-Saas Website</li>
                    <li>Metrica-CRM Web App </li>
                    <li>Style-Fashion Landing Page</li>
                    <li>Finsy-Banking Mobile App</li>
                    <li>Lala-Fintech Landing Page</li>
                    <li>Makarons-Rebranding Video</li>
                    <li>Pipel-Social Media Page</li>
                    <li>Solutions-Company Profile</li>
                </ul>
            </div>
        ),
    },
    {
        icon: FaRegStar,
        label: 'Favorite Projects',
        content: (
            <div>
                <ul className="flex flex-col gap-3">
                    <li>Saas Website  </li>
                    <li>Fintech Landing Page</li>
                    <li>Banking Mobile App</li>
                </ul>
            </div>
        ),
    },
    {
        icon: MdOutlineArchive,
        label: 'Archive Projects',
        content: (
            <div>
               <ul className="flex flex-col gap-3">
               <li>Timmy-Saas Website</li>
                    <li>Metrica-CRM Web App </li>
                    <li>Style-Fashion Landing Page</li>
                    <li>Finsy-Banking Mobile App</li>
                    <li>Lala-Fintech Landing Page</li>
                    <li>Makarons-Rebranding Video</li>
                    <li>Pipel-Social Media Page</li>
                    <li>Solutions-Company Profile</li>
                </ul>
            </div>
        ),
    },
    {
        icon: MdDelete,
        label: 'Deleted Projects',
        content: (
            <div>
               <ul className="flex flex-col gap-3">
                    <li>Saas Website  </li>
                    <li>Fintech Landing Page</li>
                    <li>Banking Mobile App</li>
                </ul>
            </div>
        ),
    },
];

const Tab = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const tabs = [
        {
            label: 'Team',
            content: (
                <div>
                    {sections.map((section, index) => (
                        <div key={index}>
                            <div
                                className="flex items-center gap-2 mt-5 cursor-pointer"
                                onClick={() => handleDropdown(index)}
                            >
                                <div>
                                    {openDropdown === index ? (
                                        <IoMdArrowDropdown />
                                    ) : (
                                        <IoMdArrowDropright />
                                    )}
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <section.icon className="text-sm group-hover:text-slate-500" />
                                    <h1 className="text-sm text-black group-hover:text-slate-500 ">{section.label}</h1>
                                </div>
                            </div>
                            {openDropdown === index && (
                                <div className="text-sm rounded flex flex-col p-5">
                                    {section.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ),
            heading: 'Recent',
        },
        {
            label: 'Personal',
            content: <p className="text-gray-800">Hello</p>,
        },
    ];

    return (
        <div className="">
            <Tabs tabs={tabs} />
        </div>
    );
};

export default Tab;
