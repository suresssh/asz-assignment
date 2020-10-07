import { combineReducers } from "redux";
import TodosReducer from "./TodosReducer";
import UserReducer from "./UserReducer";


export const RootReducer = combineReducers({
    todos:TodosReducer,
    users:UserReducer
})