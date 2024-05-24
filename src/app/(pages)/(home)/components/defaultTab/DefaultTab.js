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
        <p className="text-sm text-black">
          Because it's about motivating the doers. Because I'm here to follow my
          dreams and inspire other people to follow their dreams, too.
        </p>
      ),
    },
    {
      label: "Calendar",
      value: "calendar",
      content: (
        <p className="text-sm text-black">
          You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:drop-shadow-xl to apply the drop-shadow-xl utility at only medium screen sizes and above.
        </p>
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
          <div className="flex items-center gap-5 px-4">
            <div className="flex items-center">
              <IoIosArrowBack className="cursor-pointer" />
              <h1 className="mx-2">January 2024</h1>
              <IoIosArrowForward className="cursor-pointer" />
            </div>
            <div className="flex gap-3">
            <div className="flex items-center gap-2">
            <CiFilter />
             <h1>Sort</h1>
             </div>
              <div className="flex items-center gap-2 ">
              <IoFilter />
              <h1>Filter</h1>
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
