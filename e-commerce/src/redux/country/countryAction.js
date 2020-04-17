import { CHANGE_COUNTRY } from "./countryType";

//Action Creater
export const changeCountry = (countryname) => {
    return {
        type:CHANGE_COUNTRY,
        countryName:countryname
    }
}