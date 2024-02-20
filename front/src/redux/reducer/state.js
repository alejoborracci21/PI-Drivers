import React from "react";
import axios from "axios";

const getAllDrivers = async () => {
    try {
        const {data} = await axios('http://localhost:3001/drivers')
        return data
    } catch (error) {
        return []
    }
}

export default getAllDrivers;