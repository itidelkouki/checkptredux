import {
    ADD,
    DELETE,
    COMPLETE_TO_DO,
    EDITABLE,
    EDIT_TODO,
    EDIT_DONE
  } from "../constants/actionsTypes";
  
  const initialState = {
    todos: [
      { id: 1, text: "Item 1", isCompleted: false, selected: false },
      { id: 2, text: "Item 2", isCompleted: false, selected: false },
      { id: 3, text: "Item 3", isCompleted: false, selected: false },
      { id: 4, text: "Item 4", isCompleted: false, selected: false }
    ]
  };
  
  const Todo = (state = initialState, action) => {
    switch (action.type) {
      case ADD:
        return { ...state, todos: [...state.todos, action.payload] };
      case DELETE:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload)
        };
      case COMPLETE_TO_DO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, isCompleted: !todo.isCompleted }
              : todo
          )
        };
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.index
              ? {
                  ...todo,
                  text: action.payload.selected,
                  editable: !todo.editable
                }
              : todo
          )
        };
      case EDITABLE:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, editable: !todo.editable }
              : todo
          )
        };
    
  
      default:
        return state;
    }
  };
  
  export default Todo;
  