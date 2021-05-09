import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteToDo,
  completeToDo,
  editTodo,
  editableTodo
} from "../js/actions/todoactions";

const Task = ({ todo }) => {
  const [input, setInput] = useState(todo.text);
  const dispatch = useDispatch();
  const ediatbl = () => {
    dispatch(editableTodo(todo.id));
  };
  const editt = () => {
    dispatch(editTodo({ index: todo.id, selected: input }));
  };
  return (
    <div>
      {todo.editable ? (
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className=" save" onClick={editt}>
            save
          </button>
          <button className=" dontsave" onClick={ediatbl}>
            cancel
          </button>
        </>
      ) : (
        <>
          {" "}
          <ul className="todo-list">
            <li>
              <input
                type="checkbox"
                onChange={() => dispatch(completeToDo(todo.id))}
              />
              <span
                //suppressContentEditableWarning="true"
                //contentEditable="true"
                className="editable"
                style={{ textDecoration: todo.isCompleted && "line-through" }}
              >
                {todo.text}
              </span>
              <button className="edit-Button" onClick={ediatbl}>
                Edit
              </button>
              <button
                className="delete"
                onClick={() => dispatch(deleteToDo(todo.id))}
              >
                Delete
              </button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Task;
