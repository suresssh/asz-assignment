import {  CREATE_USER, DELETE_USER, EDIT_USER, SELECTED_USER } from "../actions/types";


const INITIAL_STATE={
    users_list:[],
    selected_user:undefined
}

!localStorage.user&&(localStorage.users=JSON.stringify(INITIAL_STATE))

export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case CREATE_USER:
            return{...state,users_list:[...state.users_list,action.payload]}
        case EDIT_USER:
                let usersOtherThanEdited= state.users_list.filter((user)=>user.key!==action.payload.key)
                usersOtherThanEdited.push(action.payload)
                return{...state,users_list:usersOtherThanEdited}
        case DELETE_USER:
           let filteretdUsers= state.users_list.filter((user)=>user.key!==action.payload.key)
           return {...state,users_list:filteretdUsers}
        case SELECTED_USER:
            return{...state,selected_user:action.payload}
        default:
             return state
    }
}