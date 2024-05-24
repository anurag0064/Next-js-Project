import React from 'react';

function Button({ icon: Icon, text: Text, className, disabled = false, onClick = () => null }) {
  return (
    <button
      onClick={onClick}
      type={"button"}
      className={`flex items-center rounded-lg px-4 py-2 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {Icon}&nbsp;{Text}
    </button>
  );
}

export default Button;

// "use client"

// import React, { useState } from 'react';

// function Button({ icon: Icon, text: Text, className, disabled = false, onClick = () => null, dropdownItems = [] }) {

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleonClick = (item) => {
//     setIsOpen(false);
//     onClick(item);
//   };

//   return (
//     <div className="dropdown">
//       <button
//         onClick={toggleDropdown}
//         type="button"
//         className={`flex items-center rounded-lg px-4 py-2 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
//         disabled={disabled}
//       >
//         {Icon}&nbsp;{Text}
//       </button>
//       {isOpen && (
//          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
//          {dropdownItems.map((item, index) => (
//            <a
//              key={index}
//              href={item.href}
//              onClick={() => handleonClick(item)}
//              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//            >
//              {item.label}
//            </a>
//          ))}
//        </div>
//       )}
//     </div>
//   );
// }
// export default Button;
