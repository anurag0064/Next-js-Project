import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { Select, Option } from "@material-tailwind/react";
import Input from '@/app/components/input/Input';
import Button from '@/app/components/buttons/Button';


function Popup({ isOpen, onClose = () => null }) {
    const cancelButtonRef = useRef(null);
    const [data, setData] = useState([]);

    const [formState, setFormState] = useState({
        name: '',
        startDate: '',
        dueDate: '',
        priority: ''
    });

    useEffect(() => {
        const storedData = localStorage.getItem('tasks');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSelectChange = (value) => {
        setFormState({ ...formState, priority: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = [...data, formState];
        setData(updatedData);
        localStorage.setItem('tasks', JSON.stringify(updatedData));
        setFormState({
            name: '',
            startDate: '',
            dueDate: '',
            priority: ''
        });
        onClose();
    };


    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 w-[100px]" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[600px]">
                                <div className="bg-white p-4 z-30">
                                    <div className="sm:items-start">
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <h1 className="text-lg font-semibold mb-5">Add Project Information</h1>
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder='Enter Your Name'
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                                                <Input
                                                    type="date"
                                                    name="startDate"
                                                    id="startDate"
                                                    value={formState.startDate}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
                                                <Input
                                                    type="date"
                                                    name="dueDate"
                                                    id="dueDate"
                                                    value={formState.dueDate}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                                                <Select
                                                    name="priority"
                                                    id="priority"
                                                    value={formState.priority}
                                                    onChange={handleSelectChange}
                                                    required
                                                    className="mt-1 block w-full p-2"
                                                    placeholder="Enter your Priority"
                                                >
                                                    <Option value="low">Low</Option>
                                                    <Option value="medium">Medium</Option>
                                                    <Option value="high">High</Option>
                                                </Select>
                                            </div>
                            
                                            <div className="mt-4 flex justify-end gap-4">
                                                <Button
                                                    text={'Cancel'}
                                                    className={"border bg-red-500 hover:bg-red-600 text-white text-xs"}
                                                    onClick={onClose}
                                                />
                                                <Button
                                                   text={'Add'}
                                                   className={"border bg-blue-700 hover:bg-blue-800 text-white text-xs"}
                                                   type="submit"
                                                   onClick={handleSubmit}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
export default Popup;
