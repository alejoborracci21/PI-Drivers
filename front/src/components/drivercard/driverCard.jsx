// DriverCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import './DriverCard.css'
const DriverCard = ({ surname, forename, image, teams, id }) => {
    console.log(teams)
  const imageDefault = image && image.url ? image.url : "https://cdn.forbes.com.mx/2023/09/GettyImages-1652902375.webp";
  return (
    <div id={id} className="card">
      <Link to={`/detail/${id}`}>
        <img src={imageDefault} alt="Not Found" />
        <div>
          <h2 className="forename">{forename} {surname}</h2>
          <h3>Teams:</h3>
          <p className="teams">{teams}</p>
        </div>
      </Link>
    </div>
  );
};

export default DriverCard;
