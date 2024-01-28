import React from 'react';

function InputText({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full h-10 px-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
    />
  );
}

export default InputText;
