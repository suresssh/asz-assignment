import { ADD_TODOS, CREATE_USER, DELETE_TODOS, DELETE_USER, EDIT_TODOS, EDIT_USER, SELECTED_TODOS, SELECTED_USER } from "./types"

export const addTodos=(payload)=>dispatch=>{
    payload.key=Math.random()
    dispatch({type:ADD_TODOS,payload})
}

export const deleteTodo=(payload)=>dispatch=>{
    dispatch({type:DELETE_TODOS,payload})
}

export const selectTodo=(payload)=>dispatch=>{
    dispatch({type:SELECTED_TODOS,payload})
}

export const editTodo=(payload)=>dispatch=>{
    dispatch({type:EDIT_TODOS,payload})
}

export const deleteUser=(payload)=>dispatch=>{
    dispatch({type:DELETE_USER,payload})
}

export const createUser=(payload)=>dispatch=>{
    payload.key=Math.random()
    dispatch({type:CREATE_USER,payload})
}


export const selectUser=(payload)=>dispatch=>{
    dispatch({type:SELECTED_USER,payload})
}

export const editUser=(payload)=>dispatch=>{
    console.log(payload,'userp');
    dispatch({type:EDIT_USER,payload})
}


