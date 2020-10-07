import { act } from "react-dom/test-utils";
import { ADD_TODOS, DELETE_TODOS, EDIT_TODOS,SELECTED_TODOS } from "../actions/types";

const INITIAL_STATE = {
    todos_list: [

    ],
    selected_todo:undefined
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODOS:
            return { ...state, todos_list: [...state.todos_list, action.payload] }
        case EDIT_TODOS:
            let todosOtherThanEdited= state.todos_list.filter((todo) => todo.key !== action.payload.key);
            todosOtherThanEdited.push(action.payload)
            return { ...state, todos_list: todosOtherThanEdited }
        case DELETE_TODOS:
            let new_todo_list = state.todos_list.filter((todo) => todo.key !== action.payload.key);
            return { ...state, todos_list: new_todo_list }
        case SELECTED_TODOS:
             return{...state,selected_todo:action.payload}
        default:
            return state
    }
}