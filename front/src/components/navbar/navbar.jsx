import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Importa el archivo de estilos

const NavBar = () => {
    return (
        <div className="navbar-div">
            <img src="formula1.jpg" className="navbar-img"></img>
            <Link to="/home">Home</Link>
            <Link to="/create">New driver</Link>
            <Link to="/about">About me</Link>
        </div>
    );
}

export default NavBar;
