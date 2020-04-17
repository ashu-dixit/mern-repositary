import { CHANGE_COUNTRY } from "./countryType";

const initialState = {
    country: 'India'
}

const countryReducer = (state = initialState,action) => {
    switch (action.type) {
        case CHANGE_COUNTRY:return{
            ...state,
            country:action.countryName
        }
        default: return state
    }
}

export default countryReducer 