import React from 'react';

function Drawer({ isOpen, onClose, children }) {
  return (
    <div className={`fixed inset-0 overflow-hidden transition-opacity ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-xl bg-white shadow-md">
          <div className="h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
