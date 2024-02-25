// Tu ruta principal

const { Router } = require('express');
const axios = require('axios');
const { addTeamsToDatabase } = require('../controllers/teamsController');
const api = require('../../api/db.json');
const { Team } = require('../db');
const { drivers } = api;
const route = Router();

route.get('/', async (req, res) => {

  //!Funcion para mapear los teams y agregarlos a la base de datos
  // const allteams = drivers.map((driver) => driver.teams)
  // addTeamsToDatabase(allteams);


  //tiene que devolver los teams de la tabla teams
  const teamsdb = await Team.findAll()
  try {
    res.send(teamsdb)
  } catch (error) {
    console.error('Error en la ruta principal:', error);
    res.status(500).send({ error: 'Error interno del servidor', details: error.message });
  }
});

module.exports = route;
