import React from "react";
import NavBar from "../../components/navbar/navbar";
import CardProfile from "../../components/cardprofile/CardProfile";
import './aboutpage.css'

const AboutMe = () => {
    return(
        <div className="about-div">
            <NavBar></NavBar>
            <CardProfile></CardProfile>
            <div className="description">
            <h1>Mi proyecto individual Drivers</h1>
            <p>Este es mi proyecto individual en SoyHenry, pertenezco a la cohorte FS-46B.
                En este proyecto utilice las tecnologias React, Redux, Vite, Sequelize, Postgres
                y los lenguajes de programacion Javascript, CSS y HTML5. El proyecto muestra diferentes tajetas de corredores de formula 1, tambien tiene una barra de busqueda por nombre la cual se actualiza a medida que el usuario vaya ingresando caracteres. Posee una seccion de filtros donde filtra el store de redux por nombre, edad, plataforma y equipos a los que pertenecen. En la barra de navegacion tenemos el boton home que nos direcciona a la lista de corredores, el boton create driver que nos redirecciona a un formulario para ingresar un nuevo corredor a la base de datos y el about me que es la pagina que estamos viendo en este momento
            </p>
            </div>
        </div>
    )
}


export default AboutMe;