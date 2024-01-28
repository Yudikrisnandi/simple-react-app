import React, { useState, useEffect } from 'react';

function DateTimeDisplay({ size = 'medium' }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleTimeString(undefined, options);
  };

  const getSizeClass = () => {
    switch (size) {
      case 'large':
        return 'text-2xl';
      case 'small':
        return 'text-sm';
      default:
        return 'text-xl';
    }
  };

  return (
    <div className={`text-white bg-indigo-950 p-2 rounded-md shadow-md ${getSizeClass()}`}>
      <div className="text-lg mb-1">
        <strong>Date:</strong> {formatDate(currentDateTime)}
      </div>
      <div className="text-xl">
        <strong>Time:</strong> {formatTime(currentDateTime)}
      </div>
    </div>
  );
}

export default DateTimeDisplay;

