import React from "react";
import { useState } from "react";
import DriverCard from "../drivercard/driverCard";
import './driverList.css'

const DriverList = ({drivers}) => {
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const totalPages = Math.ceil(drivers.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentDrivers = drivers.slice(startIndex, endIndex);



    return(
        <div>
            <div className="container">
            {currentDrivers.map(({id, name, image, teams}) => (
                <div  key={id} className="card">
                    <DriverCard
                    key={id}
                    id={id}
                    forename={name.forename}
                    surname = {name.surname}
                    image={image}
                    teams={teams}
                    />
                </div>
            ))}
            </div>

            <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={
              index + 1 === currentPage ? 'pageButton active' : 'pageButton'
            }
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
            </div>
        </div>
    )
}


export default DriverList;