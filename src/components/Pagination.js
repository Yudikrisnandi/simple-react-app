import React, { useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    const newTotalPages = Math.ceil(totalItems / newItemsPerPage);

    // Adjust the current page to fit within the new total pages
    setCurrentPage((prevPage) => Math.min(prevPage, newTotalPages));

    onPageChange(1, newItemsPerPage);
  };

  const renderPageNumbers = () => {
    const maxPaginationItems = 5;
    const pageNumbers = [];

    const startPage = Math.max(1, currentPage - Math.floor(maxPaginationItems / 2));
    const endPage = Math.min(totalPages, startPage + maxPaginationItems - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`inline-block px-3 py-2 rounded-md cursor-pointer ${
            currentPage === i ? 'bg-indigo-950 text-white' : 'hover:bg-indigo-800'
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  const itemsPerPageOptions = [10, 25, 50, 100];

  return (
    <div className="flex items-center justify-between mt-5">
      <div className="flex items-center">
        <span className="mr-2 font-semibold">Items per page:</span>
        <select
          className="border rounded-md px-2 py-1 focus:outline-none"
          onChange={handleItemsPerPageChange}
          value={itemsPerPage}
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex">
        <button
            className="mr-2 px-3 py-1 rounded-md cursor-pointer bg-indigo-950 text-white"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </button>
        <ul className="flex space-x-2">
          {renderPageNumbers()}
        </ul>

        <button
          className="ml-2 px-3 py-1 rounded-md cursor-pointer bg-indigo-950 text-white"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
