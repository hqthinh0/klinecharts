import React from 'react'
import { ADD_TO_DO_LIST, DELETE_TO_DO_LIST } from './Constant'


const initToDoList = [];

const ToDoReducer = (state = initToDoList , action) => {
  switch (action.type) {
    case ADD_TO_DO_LIST:
       return [...state, action.payload];
    case DELETE_TO_DO_LIST:
        console.log(" state.filter(todo => todo.id !== action.payload)", state.filter(todo => todo.id !== action.payload));
        
        return state.filter((_, index) => index !== action.payload);
  
    default:
       return state;
  }
}


export default ToDoReducer
