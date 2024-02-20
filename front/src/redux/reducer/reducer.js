import { FILTER_PLATFORM, FILTER_TEAM, ORDER_DATE, ORDER_NAME, SET_DRIVERS } from "../actions/types";

const initialstate = {
    drivers: [],
    alldrivers: []
}


export default function reducer (state = initialstate, {type, payload}) {
    switch (type) {

        case SET_DRIVERS:
            return {
                ...state,
                alldrivers: payload
            };
        
            case FILTER_TEAM:
                const teamToFilter = payload.toLowerCase();
                const filteredDrivers = state.alldrivers.filter((driver) => {
                  if (driver.teams && typeof driver.teams === 'string') {
                    // Dividir la cadena de equipos por comas y eliminar espacios en blanco
                    const driverTeams = driver.teams.split(',').map(team => team.trim().toLowerCase());
                    // Verificar si el equipo a filtrar está presente en los equipos del conductor
                    return driverTeams.includes(teamToFilter);
                  }
                  return false; // Si driver.teams no es una cadena, no incluirlo en el filtro
                });
                return {
                  ...state,
                  drivers: filteredDrivers
                };
                break;

        case FILTER_PLATFORM:
                {
                    console.log(`type ${payload}`)
                }
            break;

        case ORDER_DATE:
                {
                    console.log("type order date")
                }
            break;

        case ORDER_NAME:
                {
                    console.log("type order name")
                }
            break;
        default:
            break;
    }
}


