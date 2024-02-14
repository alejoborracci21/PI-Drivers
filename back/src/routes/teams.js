// Tu ruta principal

const { Router } = require('express');
const axios = require('axios');
const { addTeamsToDatabase } = require('../controllers/teamsController');
const api = require('../../api/db.json');
const { drivers } = api;
const route = Router();

route.get('/', async (req, res) => {
  try {
    const allTeams = [];

    drivers.forEach((driver) => {
      const driverTeams = driver.teams ? driver.teams.split(",") : [];
      allTeams.push(...driverTeams.map((team) => team.trim()));
    });

    //? Funcion para agregar los teams a la db
    // const teamsAdded = await addTeamsToDatabase(allTeams); 

    res.send(allTeams);
  } catch (error) {
    console.error('Error en la ruta principal:', error);
    res.status(500).send({ error: 'Error interno del servidor', details: error.message });
  }
});

module.exports = route;
