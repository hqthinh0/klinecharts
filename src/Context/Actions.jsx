import { SET_TODO_INPUT } from "./Constants";

const setToDoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
});

export default {setToDoInput};