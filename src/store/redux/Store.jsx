import { legacy_createStore as createStore } from "redux";
import ToDoReducer from "./ToDoReducer";

const Store = createStore(ToDoReducer);

export default Store;