import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/navbar/navbar";
import SearchBar from "../../components/searchbar/searchBar";
import DriverList from "../../components/driverlist/driverList";
import Filters from "../../components/filters/filters";
import { getAllDrivers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";

const HomePage = () => {
  const drivers = useSelector((state) => state.drivers);
  const alldrivers = useSelector((state) => state.alldrivers);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllDrivers())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching drivers:", error);
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <div className="home-container">
      <NavBar />
      <img src="/background-homepage.jpg" className="background" />

      <SearchBar />
      <div className="filters-and-list">
        <Filters />
        {loading ? (
          <p>Loading...</p>
        ) : drivers.length ? (
          <DriverList drivers={drivers} />
        ) : (
          <h2>No se encontraron drivers con esas especificaciones</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
