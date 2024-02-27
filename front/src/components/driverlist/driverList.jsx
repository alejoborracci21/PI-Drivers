// driverList.jsx
import React, { useState } from "react";
import DriverCard from "../drivercard/driverCard";
import './driverList.css';

const DriverList = ({ drivers }) => {


  //!-----------PAGINATION--------------

  //Defino la cantidad de cards por pagina
  const itemsPerPage = 12;

  //Estado que mantiene el numero de la pagina actual y la funcion que lo modifica
  const [currentPage, setCurrentPage] = useState(1);

  //Manejador del cambio de pagina
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Dividiendo la cantidad total de drivers por la cantidad de elementos por página y redondeando hacia arriba.
  const totalPages = Math.ceil(drivers.length / itemsPerPage);


  //Cantidad de botones visibles
  const maxVisiblePages = 5; 


  //Función que calcula y devuelve un array con las páginas visibles en función a la página actual, la cantidad máxima de páginas visibles y la cantidad total de páginas.
  const getVisiblePages = () => {


    // halfvisible representa la cantidad de paginas que se van a ver de cada lado de la pagina actual
    const halfVisible = Math.floor(maxVisiblePages / 2);

    // calculo el inicio del rango de páginas visibles
    const startPage = Math.max(currentPage - halfVisible, 1);

    // calcula el extremo del rango de páginas visibles
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    //creamos un nuevo array con la longitud igual al número de páginas visibles
    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  const visiblePages = getVisiblePages();

  //Calcula el índice de inicio de los drivers a mostrar en la página actual.
  const startIndex = (currentPage - 1) * itemsPerPage;

  //Calcula el índice de fin de los drivers a mostrar en la página actual.
  const endIndex = startIndex + itemsPerPage;

  // Extrae un subconjunto de drivers a mostrar en la página actual, utilizando los índices de inicio y fin.
  const currentDrivers = drivers.slice(startIndex, endIndex);

  //!--------------------------------



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
