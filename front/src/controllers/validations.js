import React from "react";


const validation = (newDriver) => {
    if(newDriver.name.forename && newDriver.name.surname){
        if(newDriver.nation){
            if(newDriver.dob){
                if(newDriver.description.length > 10){
                    if(newDriver.teams.length >= 1){
                        return true
                    }else{
                        return window.alert("enter at least one team - Ingrese al menos un equipo")
                    }
                }else{
                    return window.alert("Description very small - La descripcion es muy corta")
                }
            }else{
                return window.alert("Enter a date - Ingrese una fecha de nacimiento")
            }
        }else{
            return window.alert("Enter a nation - Ingrese una nacion")
        }
    }else{
        return window.alert("Enter a name - Ingrese un nombre")
    }
}   

export default validation;