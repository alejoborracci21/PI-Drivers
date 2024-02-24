// driverList.jsx
import React, { useState } from "react";
import DriverCard from "../drivercard/driverCard";
import './driverList.css';

const DriverList = ({ drivers }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(drivers.length / itemsPerPage);
  const maxVisiblePages = 5; // Cambiar según la cantidad deseada de botones visibles

  const getVisiblePages = () => {
    const halfVisible = Math.floor(maxVisiblePages / 2);
    const startPage = Math.max(currentPage - halfVisible, 1);
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  const visiblePages = getVisiblePages();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDrivers = drivers.slice(startIndex, endIndex);

  return (
    <>
      <div className="list-container">
        <h2 className="title">Drivers F1</h2>
        {currentDrivers.map(({ id, name, image, teams }) => (
          <div key={id} className="card-list">
            <DriverCard
              id={id}
              forename={name.forename}
              surname={name.surname}
              image={image}
              teams={teams}
            />
          </div>
        ))}
      </div>

      <div className="pagination-list">
        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? 'pageButton active' : 'pageButton'}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
};

export default DriverList;
