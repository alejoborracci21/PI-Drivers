import {
  SEARCH,
  FILTER_PLATFORM,
  FILTER_TEAM,
  ORDER_DATE,
  ORDER_NAME,
  SET_DRIVERS,
} from "../actions/types";

const initialstate = {
  drivers: [],
  alldrivers: [],
};

export default function rootReducer(state = initialstate, { type, payload }) {
  switch (type) {
    case SET_DRIVERS:
      return {
        ...state,
        drivers: payload,
        alldrivers: payload,
      };

    case FILTER_TEAM:
      if (payload == "all") {
        return {
          ...state,
          drivers: state.alldrivers,
        };
      }
      const teamToFilter = payload.toLowerCase();
      const filteredDrivers = state.alldrivers.filter((driver) => {
        if (driver.teams && typeof driver.teams === "string") {
          const driverTeams = driver.teams
            .split(",")
            .map((team) => team.trim().toLowerCase());
          return driverTeams.includes(teamToFilter);
        }
        return false;
      });
      return {
        ...state,
        drivers: filteredDrivers,
      };

    case FILTER_PLATFORM:
      {
        if (payload.toLowerCase() == "api") {
          const filtered = state.alldrivers.filter((driver) => {
            if (typeof driver.id == "number") {
              return driver;
            }
          });

          return {
            ...state,
            drivers: filtered,
          };
        } else if (payload.toLowerCase() == "db") {
          const filtered = state.alldrivers.filter((driver) => {
            if (typeof driver.id == "string") {
              return driver;
            }
          });

          return {
            ...state,
            drivers: filtered,
          };
        } else if (payload.toLowerCase() == "all") {
          return {
            ...state,
            drivers: state.alldrivers,
          };
        }
      }
      break;

      case ORDER_DATE: {
        const sortedDrivers = state.alldrivers.slice(); // Crear una copia de la matriz para evitar mutar el estado directamente
      
        if (payload === "asc") {
          sortedDrivers.sort((a, b) => {
            const ageA = new Date().getFullYear() - new Date(a.dob).getFullYear();
            const ageB = new Date().getFullYear() - new Date(b.dob).getFullYear();
            return ageA - ageB;
          });
        } else if (payload === "des") {
          sortedDrivers.sort((a, b) => {
            const ageA = new Date().getFullYear() - new Date(a.dob).getFullYear();
            const ageB = new Date().getFullYear() - new Date(b.dob).getFullYear();
            return ageB - ageA;
          });
        }
      
        return {
          ...state,
          drivers: sortedDrivers,
        };
      }
      break;

    case ORDER_NAME:
      {
        console.log("type order name");
      }
      break;
    case SEARCH: {
      const filtered = state.alldrivers.filter((driver) => {
        const name = driver.name.forename;
        const subname = driver.name.surname;
        if (
          name.toLowerCase().includes(payload.toLowerCase()) ||
          subname.toLowerCase().includes(payload.toLowerCase())
        ) {
          return driver;
        }
      });

      return {
        ...state,
        drivers: filtered,
      };
    }

    default:
      return state;
  }
}
