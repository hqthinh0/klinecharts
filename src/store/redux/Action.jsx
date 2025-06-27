import { ADD_TO_DO_LIST, DELETE_TO_DO_LIST, EDIT_TO_DO_LIST } from "./Constant";

const AddTodo = (payload) =>{
    return{
        type: ADD_TO_DO_LIST,
        payload,
    }
}

const DeleteTodo = (payload) =>{
    return{
        type: DELETE_TO_DO_LIST,
        payload,
    }
}

const EditToDo = (payload) =>{
    return{
        type: EDIT_TO_DO_LIST,
        payload,
    }
}

export {AddTodo , DeleteTodo}