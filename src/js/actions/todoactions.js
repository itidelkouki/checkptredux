import {
    ADD,
    DELETE,
    COMPLETE_TO_DO,
    EDITABLE,
    EDIT_TODO,
    EDIT_DONE
  } from "../constants/actionsTypes";
  
  export const addtodo = (newtodo) => {
    return { type: ADD, payload: newtodo };
  };
  export const deleteToDo = (idTodo) => {
    return { type: DELETE, payload: idTodo };
  };
  export const completeToDo = (idTodo) => {
    return { type: COMPLETE_TO_DO, payload: idTodo };
  };
  
  export const editTodo = (payload) => {
    return { type: EDIT_TODO, payload };
  };
  export const editableTodo = (idTodo) => {
    return {
      type: EDITABLE,
      payload: idTodo
    };
  };
  
 