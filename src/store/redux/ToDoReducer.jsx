import React from 'react'
import { ADD_TO_DO_LIST, DELETE_TO_DO_LIST, EDIT_TO_DO_LIST } from './Constant'


const initToDoList = [];

const ToDoReducer = (state = initToDoList , action) => {
  switch (action.type) {
    case ADD_TO_DO_LIST:
       return [...state, action.payload];
    case DELETE_TO_DO_LIST:
      return state.filter((_, index) => index !== action.payload);
    case EDIT_TO_DO_LIST: 
     
     return state.map((item, i) =>
        i === action.payload.index ? action.payload.newText : item
      );
    default:
       return state;
  }
}


export default ToDoReducer
