import React from 'react';

const Button = ({type,children}) => {
  return (
      <button type={type} className='border rounded w-1/2 my-2 mx-auto py-2 bg-green-600 hover:bg-green-500 text-white'>
          {children}
      </button>
  )
};

export default Button;

