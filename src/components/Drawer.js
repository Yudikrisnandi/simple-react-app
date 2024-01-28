import React from 'react';

function Drawer({ isOpen, onClose, children }) {
  return (
    <div className={`fixed inset-0 overflow-hidden transition-opacity ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-lg bg-white shadow-md">
          <div className="flex justify-end p-4">
            <button onClick={onClose} className="text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
