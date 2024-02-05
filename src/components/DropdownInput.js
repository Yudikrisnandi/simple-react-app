import React, { useState } from 'react';

const Dropdown = ({ id, label, options, onChange, value }) => {
  const [selectedOption, setSelectedOption] = useState(value || null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="mb-4 w-full">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative inline-block text-left w-full">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300"
            id={`${id}-button`}
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOption ? selectedOption.label : 'Select an option'}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-0.7-1.7L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby={`${id}-button`}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
