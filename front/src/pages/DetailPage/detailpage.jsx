// DetailPage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../components/navbar/navBar";
import "./DetailPage.css"; // Importa el archivo de estilos

const DetailPage =  () => {
    
        const { id } = useParams();
        const [driver, setDriver] = useState(null);

        const getDriverById = async () => {
            try {
                const { data } = await axios(`http://localhost:3001/drivers/${id}`);
                console.log(data)
                const { image, name, dob, teams, nationality, description, driverRef } = data;
                const formattedDriver = {
                    name: name.forename,
                    surname: name.surname,
                    image: image.url,
                    dob: dob,
                    teams: teams,
                    nationality: nationality,
                    description: description,
                    driverRef: driverRef
                };
                setDriver(formattedDriver);
            } catch (error) {
                console.error("Error al obtener detalles del conductor:", error);
            }
        };
    

        useEffect(() => {
            getDriverById()
        }, [id])

        if (!driver) {
            return <div>Cargando...</div>;
        }

    return (
        <div>
            <NavBar></NavBar>
            <div className="driver-details">
                <img src={driver.image} alt={`${driver.name} ${driver.surname}`} />
                <h1>{`${driver.name} ${driver.surname}`}</h1>
                <p>Fecha de Nacimiento: {driver.dob}</p>
                <p>Equipos: {driver.teams}</p>
                <p>Nacionalidad: {driver.nationality}</p>
                <p>Descripción: {driver.description}</p>
                <p>Apodo: {driver.driverRef}</p>
            </div>
        </div>
    );
};

export default DetailPage;
