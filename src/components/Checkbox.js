import React from 'react';

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-indigo-600 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
}

export default Checkbox;
