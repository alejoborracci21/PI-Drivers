import { FILTER_PLATFORM, FILTER_TEAM, ORDER_DATE, ORDER_NAME, SET_DRIVERS } from "../actions/types";

const initialstate = {
    drivers: [],
    alldrivers: []
}


export default function rootReducer (state = initialstate, {type, payload}) {
    switch (type) {

        case SET_DRIVERS:
            return {
                ...state,
                drivers: payload,
                alldrivers: payload
            };
        
            case FILTER_TEAM:
                if(payload == 'all'){
                    return{
                        ...state,
                        drivers: state.alldrivers
                    }
                }
  const teamToFilter = payload.toLowerCase();
  const filteredDrivers = state.alldrivers.filter((driver) => {
    if (driver.teams && typeof driver.teams === "string") {
      const driverTeams = driver.teams.split(",").map((team) => team.trim().toLowerCase());
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
            return state;
            break;
    }
}


