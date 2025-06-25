import React from 'react'
import { SET_TODO_INPUT } from '../../Context/Constants';

const initState = {
    todos: [],
    todoInput: '',

}

const ReducerContext = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return{
                ...state,
                todoInput: action.payload,
            }
        default:
            break;
    }
  return (
    <div>
      
    </div>
  )
}

export {initState}
export default ReducerContext
