import { configureStore } from "@reduxjs/toolkit";

const initialUser = {
  username: ""
}

const initialState = {
  users : [],
  user : initialUser

}



const reducer = (state = initialState, action) => {
  switch(action.type){
    case "REGISTER":
      return {
        ...state,
        users :[...state.users, action.payload]
      };
    case "SET_USER":
      return {...state, user: action.payload};
    default:
      return state;
  }
}

export default configureStore({reducer})