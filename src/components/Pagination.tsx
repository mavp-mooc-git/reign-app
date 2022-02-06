import React from 'react';

const Pagination = () => {
  return (
    <ul className="pagination-container">
       {/* Left navigation arrow */}
      <li className="pagination-item">
        <div className="arrow left" />&lt;
      </li>
      <li className="pagination-item">1</li>
      <li className="pagination-item">2</li>
      <li className="pagination-item">3</li>
      <li className="pagination-item">4</li>
      <li className="pagination-item">5</li>
      {/*  Right Navigation arrow */}
      <li className="pagination-item">
        <div className="arrow right" />&gt;
      </li>
    </ul>
  );
};

export default Pagination;
