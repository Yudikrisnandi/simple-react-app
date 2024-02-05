import React from 'react';

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        checked={checked}
        onChange={onChange}
      />
      <label className="ml-2 text-sm text-gray-700 font-semibold">{label}</label>
    </div>
  );
};

export default Checkbox;
