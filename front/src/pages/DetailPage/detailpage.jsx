// DetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../components/navbar/navbar";
import "./DetailPage.css"; // Importa el archivo de estilos

const DetailPage = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState({});

  const getDriverById = async () => {
    try {
      const { data } = await axios(`http://localhost:3001/drivers/${id}`);
      const { image, name, dob, teams, nationality, description, driverRef } =
        data;
      const formattedDriver = {
        name: name.forename,
        id: id,
        surname: name.surname,
        image: image.url,
        dob: dob,
        teams: teams,
        nationality: nationality,
        description: description,
        driverRef: driverRef,
      };
      setDriver(formattedDriver);
    } catch (error) {
      console.error("Error al obtener detalles del conductor:", error);
    }
  };

  useEffect(() => {
    getDriverById();
  }, [id]);

 

  return (
    <div>
      <NavBar/>
      <div className="driver-details">
        <div className="background">
        <img src="/f1-detail.jpg"></img>
        </div>
        <img
          src={
            driver.image
              ? driver.image
              : "https://www.formula1.com/etc/designs/fom-website/social/f1-default-share.jpg"
          }
          alt={`Not found`}
          className="image-detail"
        />
        <div className="data">
        <h1>{`${driver.name} ${driver.surname}`}</h1>
        <p>ID: {id}</p>
        <p>Date of birthdate: {driver.dob}</p>
        <p>Teams: {driver.teams}</p>
        <p>Nation: {driver.nationality}</p>
        <p>Description: {driver.description}</p>
        <p>Reference: {driver.driverRef ? driver.driverRef : "Ninguno"}</p>
        </div>
       
        
      </div>
    </div>
  );
};

export default DetailPage;
