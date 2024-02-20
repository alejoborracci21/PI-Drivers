import React from "react";
import axios from "axios";


export default async function getDriverById (id) {
    try {
        const {data} = await axios(`http://localhost:3001/drivers/${id}`)
        return data
    } catch (error) {
        return error
    }
}