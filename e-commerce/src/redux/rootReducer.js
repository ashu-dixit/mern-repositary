import { combineReducers } from "redux";
import countryReducer from "./country/countryReducer";
import userReducer from "./user/userReducer";



const rootReducer = combineReducers({
    country:countryReducer,
    user:userReducer
})

export default rootReducer