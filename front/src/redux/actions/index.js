import { FILTER_TEAM, FILTER_PLATFORM , ORDER_DATE, ORDER_NAME } from "./types";


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