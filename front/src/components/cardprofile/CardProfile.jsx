import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importa íconos de redes sociales
import './cardprofile.css'

const CardProfile = () => {
    return (
        <div className="card-container">
            <div className="card-header">
                <img src="/foto.jpg" alt="Imagen de perfil" className="profile-image" />
                <h3>Alejo Borracci</h3>
                <h5>Ciudad: Rosario, Santa Fe</h5>
                <h5>Telefono: 3465-656664</h5>
            </div>
            <div className="card-social">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/alejo-borracci-2323a6199/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/alejoborracci21" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
            </div>
        </div>
    )
}

export default CardProfile;
