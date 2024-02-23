const { Router } = require("express");
const axios = require("axios");
const { Driver } = require("../db");
const { Op } = require("sequelize");
const { drivers } = require("../../api/db.json");
const router = Router();

//! get all
router.get("/", async (req, res) => {
  const driversdb = await Driver.findAll();
  try {
    res.send([...driversdb, ...drivers]);
  } catch (error) {
    res.send(error);
  }
});

//! get name
router.get("/name", async (req, res) => {
  const { name } = req.query;
  console.log(`Entré a /name, ${name}`);

  try {
    // Buscar en la base de datos
    const driverdb = await Driver.findAll({
      where: {
        [Op.or]: [
          // Buscar en la propiedad forename del objeto name
          {
            "name.forename": {
              [Op.iLike]: `%${name.toLowerCase()}%`,
            },
          },
          // Buscar en la propiedad surname del objeto name
          {
            "name.surname": {
              [Op.iLike]: `%${name.toLowerCase()}%`,
            },
          },
        ],
      },
    });

    // Filtrar en el array local
    const driverapi = drivers.filter((driver) => {
      const forenameLower = driver.name.forename.toLowerCase();
      const surnameLower = driver.name.surname.toLowerCase();
      return (
        forenameLower.includes(name.toLowerCase()) ||
        surnameLower.includes(name.toLowerCase())
      );
    });

    console.log("Driver DB:", driverdb);
    console.log("Driver API:", driverapi);

    // Enviar la combinación de resultados de la base de datos y del array local
    res.send([...driverdb, ...driverapi]);
  } catch (error) {
    console.error("Error al buscar conductores por nombre:", error);
    res.status(500).send({ error: "Error interno del servidor" });
  }
});

//! get id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (id.length > 10) {
      const driverdb = await Driver.findOne({
        where: {
          id: id,
        },
      });

      if(driverdb){
        res.send(driverdb);
      }
      
    } else {
      for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].id.toString() === id) {
          res.send(drivers[i]);
          return;
        }
      }
      // Si no se encuentra en el array local, significa que no existe
      res.status(404).send({ error: "Conductor no encontrado" });
    }
  } catch (error) {
    console.error("Error al buscar el conductor:", error);
    res.status(500).send({ error: "Error interno del servidor" });
  }
});

//! post drivers
router.post("/", async (req, res) => {
  const { name, description, image, nation, teams, dob } = req.body;

  try {
    const newdriver = await Driver.create({
      name: name,
      description: description,
      image: image,
      teams: teams,
      nationality: nation,
      dob: dob,
    });
    res.send(`Nuevo driver creado: ${newdriver.name.forename}`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
