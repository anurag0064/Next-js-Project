import Ellipsis from '@/app/(pages)/(home)/components/ellipsis/ellipsis';
import React from 'react';

function Button({ icon: Icon, text: Text, className, disabled = false, onClick = () => null, dropdown = false }) {
  return (
    dropdown ?
      <Ellipsis />
      :
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
