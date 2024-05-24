
import React from 'react'
import Tab from '../tab/Tab'


export default function Sidebar() {
  return (
    <div>
      <div className="block h-screen w-72 md:w-64  shadow-xl shadow-blue-gray-900/5 bg-white">
        <div className="p-4 mb-2">
          <h5 className="block font-sans text-3xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
            All Projects
          </h5>
        </div>
        <div className=''>
         <Tab/>
        </div>
      </div>
    </div>
  )
}