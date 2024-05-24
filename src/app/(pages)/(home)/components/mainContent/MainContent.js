"use client"

import React, { useState } from 'react';
import Button from '@/app/components/buttons/Button';
import { LuPencilLine } from 'react-icons/lu';
import { FaPlus, FaRegClock } from 'react-icons/fa';
import { IoIosStarOutline, IoMdLock } from 'react-icons/io';
import { IoShareSocialOutline } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import DefaultTab from '../defaultTab/DefaultTab';
import { TeamImages } from '@/app/(pages)/components/profileImage/TeamImages';
import memoji from '../../../../../assets/images/memoji.jpg';
import memoji1 from '../../../../../assets/images/memoji1.jpeg';
import memoji2 from '../../../../../assets/images/memoji2.jpg';
import ToggleSwitch from '../../../components/toggle/toggleSwitch';

function MainContent() {
    const [selectedItem, setSelectedItem] = useState();

    const handleOnClick = (item) => {
        setSelectedItem(item);
    };

    const dropdownItems = [
        { label: 'Edit', href: '/' },
        { label: 'Duplicate', href: '/' },
        { label: 'Archive', href: '/' },
        { label: 'Move', href: '/' },
        { label: 'Add to favorites', href: '/' },
        { label: 'Delete', href: '/' },
    ]

    const buttonData = [
        { 
            text: "", 
            icon: <FaRegClock />, 
            className: "border border-slate-200 hover:bg-slate-100",
            
    
        },
        { 
            text: "", 
            icon: <IoIosStarOutline />, 
            className: "border border-slate-200 hover:bg-slate-100",
         
        },
        {
            text: "Share", 
            icon: <IoShareSocialOutline />, 
            className: "bg-[#185de9] border-none gap-3 text-white hover:bg-indigo-600",
          
        },
        { 
            text: "", 
            icon: <BsThreeDots />, 
            className: "border border-slate-200 hover:bg-slate-100",
            dropdownItems: dropdownItems,
            onClick: handleOnClick
        }
    ];

    return (
        <div className="w-full h-[calc(100vh-5rem)] overflow-y-auto">
            <div className='flex items-center px-4 h-20 w-full'>
                <h1 className='text-sm text-slate-400'>Project/</h1>
                <h1 className='text-sm'>Timmy - SaaS Website</h1>
            </div>
            <div className='flex justify-between px-4 w-full h-12'>
                <div className='flex items-center gap-2'>
                    <h1 className="text-3xl font-bold">Timmy - SaaS Website</h1>
                    <LuPencilLine className='text-3xl' />
                </div>
                <div className='flex items-center gap-5'>
                    <div className="flex gap-3">
                        {buttonData.map((button, index) => (
                            <Button
                                key={index}
                                {...button}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex px-4 items-center gap-5 border-b h-20'>
                <div className='flex gap-2 border-r items-center'>
                    <h1 className='text-slate-400 text-xs'>Created on:</h1>
                    <h1 className='text-xs'>Jan 8, 2024</h1>
                </div>
                <TeamImages users={[
                    { name: 'Rahul', image: memoji.src },
                    { name: 'Vikas', image: memoji1.src },
                    { name: 'Sandeep', image: memoji2.src },
                    { name: 'Karan', image: memoji.src }
                ]} />
                <Button
                    icon={<FaPlus/>}
                    text={'Add Member'}
                    className={"border border-slate-200 hover:bg-slate-100 text-xs"}
                    onClick={() => alert('Adding member button')}
                />
                <div className='flex items-center gap-2'>
                    <IoMdLock />
                    <h1 className='text-xs'>Private</h1>
                    <ToggleSwitch className='text-xs'/>
                </div>
            </div>
            <DefaultTab/>
        </div>
    );
}

export default MainContent;
