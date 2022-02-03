import React from 'react';

const Field = ({label, children}) => {
  return (
    <label className='block my-4 mx-auto'>
        <span className='block text-sm text-gray-600'>
         {label}
        </span>
        {children}
    </label>
  );
};

export default Field;
