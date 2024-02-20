// HomePage.jsx

import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "../../components/navbar/navBar";
import SearchBar from "../../components/searchbar/searchBar";
import DriverList from "../../components/driverlist/driverlist";
import Filters from "../../components/filters/filters";
import { getAllDrivers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";

const HomePage = () => {
  // const {drivers} = useSelector((state) => state);
  const dispatch = useDispatch();
  const [viewDrivers, setViewDrivers] = useState([]);
  const [viewAllDrivers, setViewAllDrivers] = useState([]);

  const onSearch = async (index) => {
    try {
      const { data } = await axios(`http://localhost:3001/drivers/name?name=${index}`);
      if (data.length > 0) {
        setViewDrivers(data);
      } else {
        window.alert('No se encontraron conductores con ese nombre.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllDrivers = async () => {
    try {
      const { data } = await axios('http://localhost:3001/drivers');
      setViewAllDrivers(data);
    } catch (error) {
      console.log('Error al obtener todos los conductores:', error);
    }
  };

  useEffect(() => {
    fetchAllDrivers();
  }, []);

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(drivers);
  // }, [drivers]);

  return (
    <div className="home-container">
      <NavBar />
      <SearchBar onSearch={onSearch} />
      <div className="filters-and-list">
        <Filters />
        <DriverList drivers={viewDrivers.length > 0 ? viewDrivers : viewAllDrivers} />
      </div>
    </div>
  );
};

export default HomePage;
