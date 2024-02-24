// teamsController.js
const { Team } = require('../db');

const addTeamsToDatabase = async (teams) => {
  try {


    //Array de valores unicos, si se agrega un team que ya esta en el array, no se volvera a agregar
    const uniqueTeams = [...new Set(teams)];

    // Filtrar equipos que ya existen en la base de datos
  
    const teamsToAdd = await Promise.all(
      uniqueTeams.map(async (teamName) => {
        const existingTeam = await Team.findOne({ where: { name: teamName } });
        return !existingTeam ? { name: teamName } : null;
      })
    );

    // Filtrar equipos nulos (que ya existían)
    const filteredTeamsToAdd = teamsToAdd.filter((team) => team !== null);

    // Agregar equipos a la base de datos
    await Team.bulkCreate(filteredTeamsToAdd);

    return filteredTeamsToAdd;
  } catch (error) {
    console.error('Error al agregar equipos a la base de datos:', error);
    throw error;
  }
};

module.exports = { addTeamsToDatabase };
