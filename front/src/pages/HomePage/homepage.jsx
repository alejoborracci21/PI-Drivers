// HomePage.jsx

import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "../../components/navbar/navbar";
import SearchBar from "../../components/searchbar/searchBar";
import DriverList from "../../components/driverlist/driverlist";
import Filters from "../../components/filters/filters";
import { getAllDrivers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";

const HomePage = () => {
  const drivers = useSelector((state) => state.drivers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);

  return (
    <div className="home-container">
      <NavBar />
      <SearchBar />
      <div className="filters-and-list">
        <Filters />
        <DriverList drivers={drivers} />
      </div>
    </div>
  );
};

export default HomePage;
