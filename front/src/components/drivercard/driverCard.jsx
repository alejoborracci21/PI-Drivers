// DriverCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import './DriverCard.css';

const DriverCard = ({ surname, forename, image, teams, id }) => {
    const imageDefault = image && image.url ? image.url : "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg";

    return (
        <div className="card-div">
            <Link to={`/detail/${id}`}>
                <div className="card-image">
                    <img src={imageDefault} alt="Not Found" />
                </div>
                <div className="card-details">
                    <h2>{forename} {surname}</h2>
                    <h3>Teams:</h3>
                    <p>{teams}</p>
                </div>
            </Link>
        </div>
    );
};

export default DriverCard;
