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
                {
                    console.log(state)
                    // const filtered = state.alldrivers.filter((driver) => driver.teams == payload)
                    // console.log(filtered)
                }
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


