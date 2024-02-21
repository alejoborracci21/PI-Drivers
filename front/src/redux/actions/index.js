import axios from "axios";
import { SEARCH, FILTER_TEAM, FILTER_PLATFORM , ORDER_DATE, ORDER_NAME, SET_DRIVERS } from "./types";

export const getAllDrivers = () => async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:3001/drivers');
      // Despachar la acción SET_DRIVERS después de obtener los datos
      dispatch({
        type: SET_DRIVERS,
        payload: data,
      });
    } catch (error) {
      console.error('Error al obtener conductores:', error);
    }
  };


export function FilterTeam (team) {
    return {
        type: FILTER_TEAM,
        payload: team
    }
}

export function FilterPlatform (platform) {
    return {
        type: FILTER_PLATFORM,
        payload: platform
    }
}

export function orderByName (order) {
    return {
        type: ORDER_NAME,
        payload: order
    }
}

export function orderByDate (order) {
    return {
        type: ORDER_DATE,
        payload: order
    }
}

export function search (value) {
    return {
        type: SEARCH,
        payload: value
    }
}