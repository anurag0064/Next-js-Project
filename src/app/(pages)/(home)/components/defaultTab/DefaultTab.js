"use client";

import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import { CiFilter } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import DefaultTodo from "../defaultTodo/DefaultTodo";
import TimelineCalendar from "../timelineCalendar/TimelineCalendar";
import Calendar from "../calendar/Calendar";


export function DefaultTab() {
  const [activeTab, setActiveTab] = React.useState("board");

  const data = [
    {
      label: "Board",
      value: "board",
      content: (
        <p className="text-sm ">
          Hello, Welcome to Our Project Timmy- Saas Website
        </p>
      ),
    },
    {
      label: "Timeline",
      value: "timeline",
      content: (
        <TimelineCalendar/>
      ),
    },
    {
      label: "Calendar",
      value: "calendar",
      content: (
       <Calendar/>
      ),
    },
    {
      label: "List",
      value: "list",
      content: <DefaultTodo />,
    },
    {
      label: "+",
    },
  ];

  return (
      <Tabs value={activeTab} onChange={setActiveTab} className="w-full">
        <TabsHeader className="flex justify-between items-center border-b gap-4 p-0">
          <div className="flex gap-6">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`cursor-pointer px-4 py-2 ${
                  activeTab === value
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-600'
                }`}
              >
                {label}
              </Tab>
            ))}
          </div>
          <div className="flex items-center gap-6 px-4">
            <div className="flex items-center border-">
              <IoIosArrowBack className="cursor-pointer" />
              <h1 className="mx-2 text-sm">January 2024</h1>
              <IoIosArrowForward className="cursor-pointer" />
            </div>
            <div className="flex gap-3">
            <div className="flex items-center gap-2">
            <CiFilter className="text-slate-400"/>
             <h1 className="text-slate-400 text-sm">Sort</h1>
             </div>
              <div className="flex items-center gap-2">
              <IoFilter className="text-slate-400"/>
              <h1 className="text-slate-400 text-sm">Filter</h1>
              </div>
            </div>
          </div>
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, content }) => (
            <TabPanel key={value} value={value} className="p-4">
              {content}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
  );
}
export default DefaultTab;
