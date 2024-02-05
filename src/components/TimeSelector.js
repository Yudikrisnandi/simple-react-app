// TimePicker.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TimePicker = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    const { value } = event.target;
    setSelectedTime(value);
    onChange(value);
  };

  return (
    <div className="relative inline-block text-left">
      <input
        type="text"
        value={selectedTime}
        onChange={handleTimeChange}
        placeholder="Select a time"
        className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
      />
      <svg
        className="absolute right-0 top-0 m-4 pointer-events-none"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 10L4 6M8 10L12 6"
          stroke="#4A5568"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

TimePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TimePicker;
