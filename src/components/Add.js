import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../js/actions/todoactions";

const AddTODO = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const dispatch = useDispatch();
  const Add = (e) => {
    e.preventDefault();
    text &&
      dispatch(
        addtodo({
          id: Math.random(),
          text: text,
          isCompleted: false
        })
      );
    setText("");
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <form>
        <input
          type="text"
          placeholder="Add todo ..."
          name="todo"
          value={text}
          onChange={handleChange}
        />

        <button onClick={Add}>Submit</button>
      </form>
    </div>
  );
};

export default AddTODO;
