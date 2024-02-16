import React from "react"
import axios from 'axios'
import { useState, useEffect } from "react";
import NavBar from "../../components/navbar/navBar";
import SearchBar from "../../components/searchbar/searchBar";
import DriverList from "../../components/driverlist/driverlist";




const HomePage = () => {
    const [drivers, setDrivers] = useState([])
    const [allDrivers, setAllDrivers] = useState([])


    const onSearch = async(index) => {
        try {
            const {data} = await axios(`http://localhost:3001/drivers/name?name=${index}`)
            if (data.length > 0) {
                setDrivers(data);
              } else {
                window.alert('No se encontraron juegos con ese nombre.');
              }
        } catch (error) {
            console.log(error)
        }
    }


    const fetchAllDrivers = async() => {
        try {
            const {data} = await axios('http://localhost:3001/drivers')
            setAllDrivers(data)
        } catch (error) {
            console.log('error al iniciar los drivers:', error)
        }
    }

    useEffect(() => {
        fetchAllDrivers();
      }, []);

    return(
        <div>
            <NavBar></NavBar>
            <SearchBar onSearch={onSearch}></SearchBar>
            <DriverList drivers={drivers.length > 0 ? drivers : allDrivers}></DriverList>
        </div>
    )
}

export default HomePage;