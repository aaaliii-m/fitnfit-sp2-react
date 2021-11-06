import { combineReducers } from "redux";
import  LoginReducer  from "./login"
import AddTaskReducer from "./addTaskReducer"


const rootReducer = combineReducers({
    LoginReducer,
    AddTaskReducer
})

export default rootReducer;