// HomePage.jsx

import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "../../components/navbar/navBar";
import SearchBar from "../../components/searchbar/searchBar";
import DriverList from "../../components/driverlist/driverlist";
import Filters from "../../components/filters/filters";
import { getAllDrivers } from "../../redux/actions";
import { useDispatch } from "react-redux";
// import { onSourceFilter, onTeamFilter } from "../../controllers/filters/filters";
import "./HomePage.css"; // Importa el archivo de estilos

const HomePage = () => {
  const dispatch = useDispatch();
  const [drivers, setDrivers] = useState([]);
  const [allDrivers, setAllDrivers] = useState([]);

  const onSearch = async (index) => {
    try {
      const { data } = await axios(`http://localhost:3001/drivers/name?name=${index}`);
      if (data.length > 0) {
        setDrivers(data);
      } else {
        window.alert('No se encontraron juegos con ese nombre.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllDrivers = async () => {
    try {
      const { data } = await axios('http://localhost:3001/drivers');
      setAllDrivers(data);
    } catch (error) {
      console.log('error al iniciar los drivers:', error);
    }
  };

  useEffect(() => {
    fetchAllDrivers();
  }, []);

  useEffect(() => {
    // Llamada a la función asincrónica para obtener conductores
    dispatch(getAllDrivers());
  }, [dispatch]);

  return (
    <div className="home-container">
      <NavBar />
      <SearchBar onSearch={onSearch} />
      <div className="filters-and-list">
        <Filters />
        <DriverList drivers={drivers.length > 0 ? drivers : allDrivers} />
      </div>
    </div>
  );
};

export default HomePage;
