import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((el) => (
        <Task key={el.id} todo={el} />
      ))}
      ;
    </div>
  );
};

export default TodoList;
