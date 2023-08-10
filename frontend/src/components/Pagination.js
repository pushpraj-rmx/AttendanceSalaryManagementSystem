import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <ul className="page-numbers">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
