// DriverCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import './DriverCard.css';

const DriverCard = ({ surname, forename, image, teams, id }) => {
    const imageDefault = image && image.url ? image.url : "https://w.forfun.com/fetch/bf/bfe0e03d92c8f8a7e503163d22b8c0a6.jpeg";
    return (
        <div className="card-div">
            <Link to={`/detail/${id}`}>
                <img src={imageDefault} alt="Not Found" />
            </Link>
                <div className="card-details">
                    <h2>{forename} {surname}</h2>
                    <h3>Teams:</h3>
                    <p>{teams}</p>
                </div>
        </div>
    );
};

export default DriverCard;
